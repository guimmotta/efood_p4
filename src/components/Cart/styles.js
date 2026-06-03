import styled from 'styled-components'
import { cores } from '../../styles/theme'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  width: 360px;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background-color: ${cores.rosa};
  padding: 32px 8px;
  color: ${cores.rosaClaro};
`

export const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`

export const CartItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr 24px;
  gap: 8px;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  padding: 8px;
  min-height: 100px;
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  display: block;
`

export const CartItemContent = styled.div`
  padding-right: 4px;
`

export const CartItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const CartItemPrice = styled.span`
  font-size: 14px;
  display: block;
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const CheckoutButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const EmptyText = styled.p`
  font-size: 14px;
  font-weight: 700;
`

export const StepTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FormGroup = styled.div`
  flex: ${(props) => (props.$small ? '0 0 88px' : '1')};
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FormRow = styled.div`
  display: flex;
  gap: 34px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: ${cores.rosaClaro};
  color: ${cores.cinza};
  font-size: 14px;
  font-weight: 700;
  padding: 8px;
  height: 32px;

  &:focus {
    outline: 2px solid ${cores.branco};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`

export const ErrorText = styled.p`
  color: ${cores.rosaClaro};
  font-size: 12px;
  font-weight: 700;
  margin-top: 8px;
`

export const ConfirmationText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
`
