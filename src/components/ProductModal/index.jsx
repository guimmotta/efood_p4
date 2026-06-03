import {
  Overlay,
  ModalContent,
  CloseButton,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPortion,
  AddButton
} from './styles'

const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" onClick={onClose}>
          ×
        </CloseButton>

        <ProductImage src={product.foto} alt={product.nome} />

        <ProductInfo>
          <ProductTitle>{product.nome}</ProductTitle>
          <ProductDescription>{product.descricao}</ProductDescription>
          <ProductPortion>Serve: {product.porcao}</ProductPortion>

          <AddButton type="button" onClick={() => onAddToCart(product)}>
            Adicionar ao carrinho - {formatPrice(product.preco)}
          </AddButton>
        </ProductInfo>
      </ModalContent>
    </Overlay>
  )
}

export default ProductModal
