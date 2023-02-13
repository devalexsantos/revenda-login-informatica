import { MainContainer } from "./style";
import { Header } from "../../components/Header";
import { ProductBox } from "../../components/ProductsBox";
import { Separator } from "../../components/Separator";
import { WhatsAppBox } from '../../components/WhatsAppBox';

import { DesktopList } from '../../dataProducts/desktops/DesktopsList';
import { PCGamerList } from '../../dataProducts/gamer/PCGamerList';
import { MiniPCList } from "../../dataProducts/miniPCs/MiniPCList";
import { Monitores } from "../../dataProducts/monitores/Monitores";

export function Home(){

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
      
      <WhatsAppBox />
    </>
  )
}