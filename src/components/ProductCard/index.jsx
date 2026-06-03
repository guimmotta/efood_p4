import { Card, CardImage, CardBody, CardTitle, CardDescription, CardButton } from './styles'

const ProductCard = ({ product, onOpenModal }) => (
  <Card>
    <CardImage src={product.foto} alt={product.nome} />
    <CardBody>
      <CardTitle>{product.nome}</CardTitle>
      <CardDescription>{product.descricao}</CardDescription>
      <CardButton type="button" onClick={() => onOpenModal(product)}>
        Mais detalhes
      </CardButton>
    </CardBody>
  </Card>
)

export default ProductCard
