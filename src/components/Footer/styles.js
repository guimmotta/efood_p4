import styled from 'styled-components'
import { cores } from '../../styles/theme'

export const FooterContainer = styled.footer`
  background-color: ${cores.rosaClaro};
  padding: 40px 0;
  margin-top: 80px;
  text-align: center;
`

export const FooterContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const FooterLogo = styled.img`
  height: 58px;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  font-size: 20px;
`

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const FooterText = styled.p`
  font-size: 10px;
  color: ${cores.rosa};
  max-width: 480px;
  line-height: 1.6;
`
