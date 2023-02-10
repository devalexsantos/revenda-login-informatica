import { EnvelopeOpen, Globe, WhatsappLogo } from "phosphor-react";
import { AboutContainer, Button, Footer, FooterContainer, MainContainer } from ".";
import { Header } from "./components/Header";
import { ProductBox } from "./components/ProductsBox";
import { Separator } from "./components/Separator";

import { DesktopList } from './dataProducts/desktops/DesktopsList';
import { PCGamerList } from './dataProducts/gamer/PCGamerList';
import { MiniPCList } from "./dataProducts/miniPCs/MiniPCList";
import { Monitores } from "./dataProducts/monitores/Monitores";

export function App(){

  return (
    <>
      <Header />
      <Separator title="CATÁLOGO"/>
      <MainContainer>
        <ProductBox title="COMPUTADORES" icon="desktops" data={DesktopList} />
        <ProductBox title="LINHA GAMER" icon="gamer" data={PCGamerList} />
        <ProductBox title="MINI PCS" icon="desktops" data={MiniPCList} />
        <ProductBox title="MONITORES" icon="desktops" data={Monitores} />
      </MainContainer>
      <Footer>
        <FooterContainer>
          <AboutContainer>
            <h3>SOBRE A LOGIN</h3>
            <p>
                Com mais de 25 anos de mercado, a Login Informática é uma
                das empresas pioneiras na fabricação de computadores e notebooks.
                Situada no Pólo Industrial de Ilhéus, nossa fábrica ocupa uma área de
                7500m², a estrutura logística de produção é informatizada e altamente
                moderna, assim como a estrutura de armazenagem.
            </p>
            <div className="btn--container">
              <Button variant="primary"> CADASTRE-SE</Button>
              <Button variant="whats"><WhatsappLogo size={32} weight="regular" /> CHAMAR NO WHATS</Button>
            </div>
            <div className="icons--container">
              <span><WhatsappLogo size={32} weight="regular" color="#0088C2" /><strong> (71) 98725-2721</strong></span>
              <span><EnvelopeOpen size={32} weight="regular" color="#0088C2" /><strong> revenda@login.com.br</strong></span>
              <span><Globe size={32} weight="regular" color="#0088C2" /><strong>www.login.com.br</strong></span>
            </div>
            <span className="copy">Copyright &copy; 2023 - Login Informática - Todos os direitos reservados.</span>
          </AboutContainer>
        </FooterContainer>
      </Footer>
    </>
  )
}