import { Content, MainContainer, Overlay } from './style'
import { Header } from '../../components/Header'
import { ProductBox } from '../../components/ProductsBox'
import { Separator } from '../../components/Separator'
import { WhatsAppBox } from '../../components/WhatsAppBox'

import { DesktopList } from '../../dataProducts/desktops/DesktopsList'
import { PCGamerList } from '../../dataProducts/gamer/PCGamerList'
import { MiniPCList } from '../../dataProducts/miniPCs/MiniPCList'
import { Monitores } from '../../dataProducts/monitores/Monitores'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

export function Home() {
  const [openDialog, setOpenDialog] = useState(false)

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

      <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
        <Dialog.Portal>
          <Overlay />
          <Content>
            asdasdasd -{' '}
            <button onClick={() => setOpenDialog(false)}>Fechar</button>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>

      <WhatsAppBox />
    </>
  )
}
