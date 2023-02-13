import { Button, HeaderContainer, HeaderContent } from './style'
import sellerVector from '../../assets/revenda-login-header.svg'
import { WhatsappLogo } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="info-header">
          <h1>SEJA UM REVENDEDOR LOGIN</h1>
          <div className="btns-container">
            <Button onClick={() => navigate('/cadastro')} variant="primary">
              CADASTRE-SE
            </Button>
            <a
              href="https://wa.me/5571987252721"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="whats">
                <WhatsappLogo size={24} weight="regular" /> CHAMAR NO WHATS
              </Button>
            </a>
          </div>
        </div>
        <img src={sellerVector} alt="Seja um revendedor" />
      </HeaderContent>
    </HeaderContainer>
  )
}
