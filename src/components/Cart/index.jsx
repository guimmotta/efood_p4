import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeCart, removeItem, clearCart } from '../../store/cartSlice'
import {
  Overlay,
  Sidebar,
  CartList,
  CartItem,
  CartItemImage,
  CartItemContent,
  CartItemTitle,
  CartItemPrice,
  RemoveButton,
  TotalRow,
  CheckoutButton,
  EmptyText,
  StepTitle,
  Form,
  FormGroup,
  FormRow,
  Label,
  Input,
  ButtonGroup,
  ErrorText,
  ConfirmationText
} from './styles'

const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const initialDelivery = {
  receiver: '',
  address: '',
  city: '',
  zipCode: '',
  number: '',
  complement: ''
}

const initialPayment = {
  name: '',
  number: '',
  code: '',
  month: '',
  year: ''
}

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state) => state.cart)

  const [step, setStep] = useState('cart')
  const [delivery, setDelivery] = useState(initialDelivery)
  const [payment, setPayment] = useState(initialPayment)
  const [orderId, setOrderId] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const total = items.reduce((sum, item) => sum + item.preco, 0)

  const handleClose = () => {
    dispatch(closeCart())
  }

  const handleDeliveryChange = (event) => {
    const { name, value } = event.target
    setDelivery((currentState) => ({
      ...currentState,
      [name]: value
    }))
  }

  const handlePaymentChange = (event) => {
    const { name, value } = event.target
    setPayment((currentState) => ({
      ...currentState,
      [name]: value
    }))
  }

  const handleDeliverySubmit = (event) => {
    event.preventDefault()
    setError('')
    setStep('payment')
  }

  const handleCheckout = async (event) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    const payload = {
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: delivery.receiver,
        address: {
          description: delivery.address,
          city: delivery.city,
          zipCode: delivery.zipCode,
          number: Number(delivery.number),
          complement: delivery.complement
        }
      },
      payment: {
        card: {
          name: payment.name,
          number: payment.number,
          code: Number(payment.code),
          expires: {
            month: Number(payment.month),
            year: Number(payment.year)
          }
        }
      }
    }

    try {
      const response = await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('Não foi possível concluir o pedido.')
      }

      const data = await response.json()
      setOrderId(data.orderId)
      dispatch(clearCart())
      setStep('confirmation')
    } catch (checkoutError) {
      setError('Erro ao finalizar o pedido. Confira os dados e tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFinish = () => {
    setStep('cart')
    setDelivery(initialDelivery)
    setPayment(initialPayment)
    setOrderId('')
    setError('')
    dispatch(closeCart())
  }

  if (!isOpen) return null

  return (
    <Overlay onClick={handleClose}>
      <Sidebar onClick={(event) => event.stopPropagation()}>
        {step === 'cart' && (
          <>
            {items.length > 0 ? (
              <>
                <CartList>
                  {items.map((item) => (
                    <CartItem key={item.cartId}>
                      <CartItemImage src={item.foto} alt={item.nome} />

                      <CartItemContent>
                        <CartItemTitle>{item.nome}</CartItemTitle>
                        <CartItemPrice>{formatPrice(item.preco)}</CartItemPrice>
                      </CartItemContent>

                      <RemoveButton
                        type="button"
                        aria-label={`Remover ${item.nome} do carrinho`}
                        onClick={() => dispatch(removeItem(item.cartId))}
                      >
                        <img src="/trashbin.svg" alt="" />
                      </RemoveButton>
                    </CartItem>
                  ))}
                </CartList>

                <TotalRow>
                  <span>Valor total</span>
                  <strong>{formatPrice(total)}</strong>
                </TotalRow>

                <CheckoutButton type="button" onClick={() => setStep('delivery')}>
                  Continuar com a entrega
                </CheckoutButton>
              </>
            ) : (
              <EmptyText>O carrinho está vazio.</EmptyText>
            )}
          </>
        )}

        {step === 'delivery' && (
          <>
            <StepTitle>Entrega</StepTitle>

            <Form onSubmit={handleDeliverySubmit}>
              <FormGroup>
                <Label htmlFor="receiver">Quem irá receber</Label>
                <Input
                  id="receiver"
                  name="receiver"
                  value={delivery.receiver}
                  onChange={handleDeliveryChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  name="address"
                  value={delivery.address}
                  onChange={handleDeliveryChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  name="city"
                  value={delivery.city}
                  onChange={handleDeliveryChange}
                  required
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="zipCode">CEP</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={delivery.zipCode}
                    onChange={handleDeliveryChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="number">Número</Label>
                  <Input
                    id="number"
                    name="number"
                    type="number"
                    value={delivery.number}
                    onChange={handleDeliveryChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="complement">Complemento (opcional)</Label>
                <Input
                  id="complement"
                  name="complement"
                  value={delivery.complement}
                  onChange={handleDeliveryChange}
                />
              </FormGroup>

              <ButtonGroup>
                <CheckoutButton type="submit">Continuar com o pagamento</CheckoutButton>
                <CheckoutButton type="button" onClick={() => setStep('cart')}>
                  Voltar para o carrinho
                </CheckoutButton>
              </ButtonGroup>
            </Form>
          </>
        )}

        {step === 'payment' && (
          <>
            <StepTitle>Pagamento - Valor a pagar {formatPrice(total)}</StepTitle>

            <Form onSubmit={handleCheckout}>
              <FormGroup>
                <Label htmlFor="name">Nome no cartão</Label>
                <Input
                  id="name"
                  name="name"
                  value={payment.name}
                  onChange={handlePaymentChange}
                  required
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="number">Número do cartão</Label>
                  <Input
                    id="number"
                    name="number"
                    value={payment.number}
                    onChange={handlePaymentChange}
                    required
                  />
                </FormGroup>

                <FormGroup $small>
                  <Label htmlFor="code">CVV</Label>
                  <Input
                    id="code"
                    name="code"
                    value={payment.code}
                    onChange={handlePaymentChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="month">Mês de vencimento</Label>
                  <Input
                    id="month"
                    name="month"
                    type="number"
                    min="1"
                    max="12"
                    value={payment.month}
                    onChange={handlePaymentChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="year">Ano de vencimento</Label>
                  <Input
                    id="year"
                    name="year"
                    type="number"
                    value={payment.year}
                    onChange={handlePaymentChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              {error && <ErrorText>{error}</ErrorText>}

              <ButtonGroup>
                <CheckoutButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Finalizando...' : 'Finalizar pagamento'}
                </CheckoutButton>
                <CheckoutButton type="button" onClick={() => setStep('delivery')}>
                  Voltar para a edição de endereço
                </CheckoutButton>
              </ButtonGroup>
            </Form>
          </>
        )}

        {step === 'confirmation' && (
          <>
            <StepTitle>Pedido realizado - {orderId}</StepTitle>

            <ConfirmationText>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </ConfirmationText>

            <ConfirmationText>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </ConfirmationText>

            <ConfirmationText>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </ConfirmationText>

            <ConfirmationText>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </ConfirmationText>

            <CheckoutButton type="button" onClick={handleFinish}>
              Concluir
            </CheckoutButton>
          </>
        )}
      </Sidebar>
    </Overlay>
  )
}

export default Cart
