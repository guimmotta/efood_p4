import styled from 'styled-components'
import { cores } from '../../styles/theme'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const ModalContent = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 344px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 32px;
  position: relative;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background: transparent;
  color: ${cores.branco};
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
`

export const ProductPortion = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  width: fit-content;
  border: none;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
  cursor: pointer;
  margin-top: auto;
`
