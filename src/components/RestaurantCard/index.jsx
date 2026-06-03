import { useNavigate } from 'react-router-dom'
import { Card, CardImage, CardTags, CardTag, CardBody, CardHeader, CardTitle, CardRating, CardDescription, CardButton } from './styles'

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate()

  return (
    <Card>
      <CardImage src={restaurant.capa} alt={restaurant.titulo} />
    <CardTags>
      {restaurant.destacado && <CardTag>Destaque da semana</CardTag>}  
      <CardTag>{restaurant.tipo}</CardTag>
    </CardTags>
      <CardBody>
        <CardHeader>
          <CardTitle>{restaurant.titulo}</CardTitle>
          <CardRating>{restaurant.avaliacao} ⭐</CardRating>
        </CardHeader>
        <CardDescription>{restaurant.descricao}</CardDescription>
        <CardButton onClick={() => navigate(`/restaurante/${restaurant.id}`)}>
          Saiba mais
        </CardButton>
      </CardBody>
    </Card>
  )
}

export default RestaurantCard
