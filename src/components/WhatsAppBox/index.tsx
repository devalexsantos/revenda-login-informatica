import { WhatsAppBoxContainer } from './style';
import WhatsLogo from '../../assets/whatsapp-logo.svg'

export function WhatsAppBox(){
  return(
    <a href="https://wa.me/5571987252721" target="_blank" rel="noreferrer">
    <WhatsAppBoxContainer>
      <img src={WhatsLogo} alt="WhatsApp Logo" />
      <p>Chame a gente no <br /> <strong className="whatsApp-name">WhatsApp!</strong></p>
    </WhatsAppBoxContainer>
    </a>
  )
}