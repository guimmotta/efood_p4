import styled from 'styled-components'
import { cores } from '../../styles/theme'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.cinzaClaro};
  position: relative;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const CardTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const CardTag = styled.span`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 6px;
`

export const CardBody = styled.div`
  padding: 8px 8px 16px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${cores.rosa};
`

export const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 700;
  color: ${cores.rosa};
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
  line-height: 1.5;
  margin-bottom: 16px;
`

export const CardButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #c94f4f;
  }
`
