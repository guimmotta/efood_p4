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

const onlyNumbers = (value) => value.replace(/\D/g, '')

const formatZipCode = (value) => {
  const numbers = onlyNumbers(value).slice(0, 8)

  if (numbers.length > 5) {
    return `${numbers.slice(0, 5)}-${numbers.slice(5)}`
  }

  return numbers
}

const formatPhone = (value) => {
  const numbers = onlyNumbers(value).slice(0, 11)

  if (numbers.length > 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  }

  if (numbers.length > 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
  }

  if (numbers.length > 2) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  }

  if (numbers.length > 0) {
    return `(${numbers}`
  }

  return numbers
}

const numericFields = {
  zipCode: 8,
  phone: 11,
  cardNumber: 16,
  code: 3,
  month: 2,
  year: 4
}

const initialDelivery = {
  receiver: '',
  address: '',
  city: '',
  zipCode: '',
  phone: '',
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

    let nextValue = value

    if (name === 'zipCode') {
      nextValue = formatZipCode(value)
    }

    if (name === 'phone') {
      nextValue = formatPhone(value)
    }

    setDelivery((currentState) => ({
      ...currentState,
      [name]: nextValue
    }))
  }

  const handlePaymentChange = (event) => {
    const { name, value } = event.target

    let nextValue = value

    if (name === 'number') {
      nextValue = onlyNumbers(value).slice(0, numericFields.cardNumber)
    }

    if (['code', 'month', 'year'].includes(name)) {
      nextValue = onlyNumbers(value).slice(0, numericFields[name])
    }

    setPayment((currentState) => ({
      ...currentState,
      [name]: nextValue
    }))
  }

  const handleDeliverySubmit = (event) => {
    event.preventDefault()
    setError('')

    const zipCodeNumbers = onlyNumbers(delivery.zipCode)

    if (zipCodeNumbers.length !== numericFields.zipCode) {
      setError('Informe um CEP válido com 8 números.')
      return
    }

    const phoneNumbers = onlyNumbers(delivery.phone)

    if (![10, numericFields.phone].includes(phoneNumbers.length)) {
      setError('Informe um telefone válido com DDD.')
      return
    }

    setStep('payment')
  }

  const handleCheckout = async (event) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    const cardNumber = onlyNumbers(payment.number)
    const cardCode = onlyNumbers(payment.code)
    const expirationMonth = Number(payment.month)
    const expirationYear = onlyNumbers(payment.year)

    if (cardNumber.length !== numericFields.cardNumber) {
      setError('Informe o número do cartão com 16 números.')
      setIsSubmitting(false)
      return
    }

    if (cardCode.length !== numericFields.code) {
      setError('Informe o CVV com 3 números.')
      setIsSubmitting(false)
      return
    }

    if (expirationMonth < 1 || expirationMonth > 12 || payment.month.length !== numericFields.month) {
      setError('Informe um mês de vencimento válido com 2 números.')
      setIsSubmitting(false)
      return
    }

    if (expirationYear.length !== numericFields.year) {
      setError('Informe o ano de vencimento com 4 números.')
      setIsSubmitting(false)
      return
    }

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
          zipCode: onlyNumbers(delivery.zipCode),
          number: Number(onlyNumbers(delivery.phone)),
          complement: delivery.complement,
          phone: onlyNumbers(delivery.phone)
        }
      },
      payment: {
        card: {
          name: payment.name,
          number: cardNumber,
          code: Number(cardCode),
          expires: {
            month: expirationMonth,
            year: Number(expirationYear)
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
                    inputMode="numeric"
                    maxLength="9"
                    pattern="\d{5}-?\d{3}"
                    placeholder="00000-000"
                    title="Digite um CEP válido com 8 números"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={delivery.phone}
                    onChange={handleDeliveryChange}
                    inputMode="numeric"
                    maxLength="15"
                    pattern="\(\d{2}\) \d{4,5}-\d{4}"
                    placeholder="(00) 00000-0000"
                    title="Digite um telefone válido com DDD"
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

              {error && <ErrorText>{error}</ErrorText>}

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
                  <Label htmlFor="cardNumber">Número do cartão</Label>
                  <Input
                    id="cardNumber"
                    name="number"
                    value={payment.number}
                    onChange={handlePaymentChange}
                    inputMode="numeric"
                    maxLength="16"
                    pattern="\d{16}"
                    placeholder="0000000000000000"
                    title="Digite os 16 números do cartão"
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
                    inputMode="numeric"
                    maxLength="3"
                    pattern="\d{3}"
                    title="Digite os 3 números do CVV"
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
                    value={payment.month}
                    onChange={handlePaymentChange}
                    inputMode="numeric"
                    maxLength="2"
                    pattern="0[1-9]|1[0-2]"
                    placeholder="MM"
                    title="Digite um mês válido entre 01 e 12"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="year">Ano de vencimento</Label>
                  <Input
                    id="year"
                    name="year"
                    value={payment.year}
                    onChange={handlePaymentChange}
                    inputMode="numeric"
                    maxLength="4"
                    pattern="\d{4}"
                    placeholder="AAAA"
                    title="Digite o ano com 4 números"
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
