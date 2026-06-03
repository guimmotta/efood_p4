import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NavLink,
  CartButton,
  HeroSection
} from './styles'

const Header = ({
  showHero = false,
  isRestaurantPage = false,
  cartCount = 0,
  onCartClick
}) => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          {isRestaurantPage && <NavLink href="/">Restaurantes</NavLink>}

          <Logo src="/logo.svg" alt="efood" />

          {isRestaurantPage && (
            <CartButton onClick={onCartClick}>
              {cartCount} produto(s) no carrinho
            </CartButton>
          )}
        </HeaderContent>
      </HeaderContainer>

      {showHero && (
        <HeroSection>
          <h2>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </h2>
        </HeroSection>
      )}
    </>
  )
}

export default Header