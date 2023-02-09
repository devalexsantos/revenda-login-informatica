import { MainContainer } from ".";
import { Header } from "./components/Header";
import { ProductBox } from "./components/ProductsBox";
import { Separator } from "./components/Separator";

export function App(){
  return (
    <>
      <Header />
      <Separator title="CATÁLOGO"/>
      <MainContainer>
        <ProductBox title="COMPUTADORES" icon="desktops" />
      </MainContainer>
    </>
  )
}