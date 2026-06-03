import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'
import { RestaurantsGrid } from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
  }, [])

  return (
    <>
      <Header showHero={true} />
      <RestaurantsGrid>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </RestaurantsGrid>
      <Footer />
    </>
  )
}

export default Home
