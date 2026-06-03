import styled from 'styled-components'
import { cores } from '../../styles/theme'

export const Card = styled.div`
  background-color: ${cores.rosa};
  display: flex;
  flex-direction: column;
`

export const CardImage = styled.img`
  width: 95%;
  height: 167px;
  display: block;
  margin: 8px
`

export const CardBody = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${cores.rosaClaro};
  margin-bottom: 8px;
`

export const CardDescription = styled.p`
  font-size: 12px;
  color: ${cores.rosaClaro};
  line-height: 1.5;
  margin-bottom: 8px;
  flex: 1;
`

export const CardButton = styled.button`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  border: none;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #c94f4f;
  }
`
