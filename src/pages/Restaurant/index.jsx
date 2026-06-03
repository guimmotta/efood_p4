import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import ProductModal from '../../components/ProductModal'
import { addItem, openCart } from '../../store/cartSlice'
import { HeroBanner, HeroInfo, MenuSection, MenuGrid } from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const [restaurant, setRestaurant] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => {
        const foundRestaurant = data.find((item) => item.id === Number(id))
        setRestaurant(foundRestaurant)
      })
  }, [id])

  const handleAddToCart = (product) => {
    dispatch(
      addItem({
        ...product,
        cartId: `${product.id}-${Date.now()}`
      })
    )
    setSelectedProduct(null)
  }

  if (!restaurant) return <p>Restaurante não encontrado</p>

  return (
    <>
      <Header
        isRestaurantPage={true}
        cartCount={cartItems.length}
        onCartClick={() => dispatch(openCart())}
      />

      <HeroBanner>
        <img src={restaurant.capa} alt={restaurant.titulo} />
        <HeroInfo>
          <span>{restaurant.tipo}</span>
          <h2>{restaurant.titulo}</h2>
        </HeroInfo>
      </HeroBanner>

      <MenuSection>
        <MenuGrid>
          {restaurant.cardapio.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={setSelectedProduct}
            />
          ))}
        </MenuGrid>
      </MenuSection>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </>
  )
}

export default Restaurant
