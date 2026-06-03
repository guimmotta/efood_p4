import { FooterContainer, FooterContent, FooterLogo, SocialIcons, SocialIcon, FooterText } from './styles'

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterLogo src="/logo.svg" alt="efood" />
      <SocialIcons>
        <SocialIcon src="/instagram.svg" alt="Instagram" />
        <SocialIcon src="/twitter.svg" alt="Twitter" />
        <SocialIcon src="/facebook.svg" alt="Facebook" />
      </SocialIcons>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos alimentícios.
        A responsabilidade pela entrega, qualidade dos produtos, tempo e atendimento
        é exclusivamente dos estabelecimentos contratados.
      </FooterText>
    </FooterContent>
  </FooterContainer>
)

export default Footer
