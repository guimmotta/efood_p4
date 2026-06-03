import styled from 'styled-components'
import { cores } from '../../styles/theme'

export const HeaderContainer = styled.header`
  background-color: ${cores.rosaClaro};
  padding: 24px 0;
  background-image: url('/Vector.svg');
  background-repeat: repeat;
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Logo = styled.img`
  height: 40px;
  display: block;
`

export const NavLink = styled.a`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  position: absolute;
  left: 40px;
`

export const CartButton = styled.button`
  background: none;
  border: none;
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  position: absolute;
  right: 40px;
`

export const HeroSection = styled.div`
  background-color: ${cores.rosaClaro};
  padding: 40px 0 80px;
  text-align: center;
  background-image: url('/Vector.svg');
  background-repeat: repeat;

  h2 {
    font-size: 36px;
    font-weight: 900;
    color: ${cores.rosa};
    line-height: 1.2;
  }
`