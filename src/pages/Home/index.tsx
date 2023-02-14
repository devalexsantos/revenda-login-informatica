import { MainContainer } from './style'
import { Header } from '../../components/Header'
import { ProductBox } from '../../components/ProductsBox'
import { Separator } from '../../components/Separator'
import { WhatsAppBox } from '../../components/WhatsAppBox'

import { DesktopList } from '../../dataProducts/desktops/DesktopsList'
import { PCGamerList } from '../../dataProducts/gamer/PCGamerList'
import { MiniPCList } from '../../dataProducts/miniPCs/MiniPCList'
import { Monitores } from '../../dataProducts/monitores/Monitores'
import { useContext } from 'react'
import { PriceRequestContext } from '../../contexts/PricesRequestContext'

export function Home() {
  const { setOpenDialog } = useContext(PriceRequestContext)
  return (
    <>
      <Header />
      <Separator title="CATÁLOGO" />
      <MainContainer>
        <ProductBox
          title="COMPUTADORES"
          icon="desktops"
          data={DesktopList}
          openDialog={setOpenDialog}
        />
        <ProductBox
          title="LINHA GAMER"
          icon="gamer"
          data={PCGamerList}
          openDialog={setOpenDialog}
        />
        <ProductBox
          title="MINI PCS"
          icon="desktops"
          data={MiniPCList}
          openDialog={setOpenDialog}
        />
        <ProductBox
          title="MONITORES"
          icon="desktops"
          data={Monitores}
          openDialog={setOpenDialog}
        />
      </MainContainer>
      <WhatsAppBox />
    </>
  )
}
