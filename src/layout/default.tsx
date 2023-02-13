import { ArrowRight, EnvelopeOpen, Globe, WhatsappLogo } from 'phosphor-react'
import { AboutContainer, Button, Footer, FooterContainer } from './style'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <Outlet />
      <Footer>
        <FooterContainer>
          <AboutContainer>
            <h3>SOBRE A LOGIN</h3>
            <p>
              Com mais de 25 anos de mercado, a Login Informática é uma das
              empresas pioneiras na fabricação de computadores e notebooks.
              Situada no Pólo Industrial de Ilhéus, nossa fábrica ocupa uma área
              de 7500m², a estrutura logística de produção é informatizada e
              altamente moderna, assim como a estrutura de armazenagem.
            </p>
            <a
              className="read-more"
              href="https://www.login.com.br/nossa-historia"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowRight size={20} weight="bold" /> LEIA MAIS SOBRE A LOGIN
            </a>
            <div className="btn--container">
              <Button variant="primary"> CADASTRE-SE</Button>
              <a
                href="https://wa.me/5571987252721"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="whats">
                  <WhatsappLogo size={32} weight="regular" /> CHAMAR NO WHATS
                </Button>
              </a>
            </div>
            <div className="icons--container">
              <span>
                <WhatsappLogo size={32} weight="regular" color="#0088C2" />
                <strong> (71) 98725-2721</strong>
              </span>
              <span>
                <EnvelopeOpen size={32} weight="regular" color="#0088C2" />
                <strong> revenda@login.com.br</strong>
              </span>
              <span>
                <Globe size={32} weight="regular" color="#0088C2" />
                <strong>www.login.com.br</strong>
              </span>
            </div>
            <span className="copy">
              Copyright &copy; 2023 - Login Informática - Todos os direitos
              reservados.
            </span>
          </AboutContainer>
        </FooterContainer>
      </Footer>
    </>
  )
}
