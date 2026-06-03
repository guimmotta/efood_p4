import styled from 'styled-components'
import { cores } from '../../styles/theme'

export const HeroBanner = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }
`

export const HeroInfo = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1024px;
  width: 100%;
  padding: 0 40px;

  span {
    color: ${cores.branco};
    font-size: 14px;
    font-weight: 700;
    display: block;
    margin-bottom: 8px;
  }

  h2 {
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 700;
  }
`

export const MenuSection = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 56px 40px;
`

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
