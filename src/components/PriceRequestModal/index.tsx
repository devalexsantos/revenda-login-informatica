import * as Dialog from '@radix-ui/react-dialog'
import { useContext } from 'react'
import { PriceRequestContext } from '../../contexts/PricesRequestContext'
import { Content, Overlay } from './style'

export function PriceRequestModal() {
  const { openDialog, setOpenDialog } = useContext(PriceRequestContext)

  return (
    <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          asdasdasd -{' '}
          <button onClick={() => setOpenDialog(false)}>Fechar</button>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
