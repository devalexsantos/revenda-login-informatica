import { MainContainer } from ".";
import { Header } from "./components/Header";
import { ProductBox } from "./components/ProductsBox";
import { Separator } from "./components/Separator";

import { DesktopList } from './dataProducts/desktops/DesktopsList';
import { PCGamerList } from './dataProducts/gamer/PCGamerList';

export function App(){

  return (
    <>
      <Header />
      <Separator title="CATÁLOGO"/>
      <MainContainer>
        <ProductBox title="COMPUTADORES" icon="desktops" data={DesktopList} />
        <ProductBox title="LINHA GAMER" icon="gamer" data={PCGamerList} />
      </MainContainer>
    </>
  )
}