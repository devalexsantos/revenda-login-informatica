import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { PriceRequestContext } from '../../contexts/PricesRequestContext'
import { Content, Overlay } from './style'
import emailjs from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'

export function PriceRequestModal() {
  const { openDialog, setOpenDialog } = useContext(PriceRequestContext)

  const [sendedRequest, SetSendedRequest] = useState(false)

  const [reCaptchaSolved, setReCaptchaSolved] = useState(false)

  const { register, handleSubmit } = useForm()

  const onSubmitInfo = async (data: any) => {
    if (!reCaptchaSolved) {
      alert('Por favor marque o reCaptcha do Google')
      return
    }

    const newData = {
      cnpj: data.cnpj,
      email: data.email,
      phone: data.phone,
      all: data.all ? 'X' : '',
      desktops: data.desktops ? 'X' : '',
      gamer: data.gamer ? 'X' : '',
      miniPCs: data.miniPCs ? 'X' : '',
      monitors: data.monitors ? 'X' : '',
    }

    await emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID_EMAILJS,
        import.meta.env.VITE_TEMPLATE_REQUEST_PRICE,
        newData,
        import.meta.env.VITE_PUBLIC_KEY_EMAILJS,
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error)
          alert('Houve um erro. Por favor tente novamente mais tarde.')
        },
      )
  }

  return (
    <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
      <Dialog.Portal>
        <Overlay />
        {sendedRequest ? (
          <Content>
            <header>
              <h1>SOLICITAR PREÇOS</h1>
              <button onClick={() => setOpenDialog(false)}>
                <X size={24} />
              </button>
            </header>
            <p>Dados enviados com sucesso</p>
            <button onClick={() => SetSendedRequest(false)}>
              Solicitar novamente
            </button>
          </Content>
        ) : (
          <Content>
            <header>
              <h1>SOLICITAR PREÇOS</h1>
              <button onClick={() => setOpenDialog(false)}>
                <X size={24} />
              </button>
            </header>
            <p>
              Por favor preencha os dados abaixo para receber uma lista de
              preços:
            </p>

            <form onSubmit={handleSubmit(onSubmitInfo)}>
              <div className="form--group">
                <span>
                  <strong>Quais categorias você deseja receber:</strong>
                </span>
                <div className="input--select">
                  <label>
                    <input type="checkbox" {...register('all')} />
                    <span>Todas</span>
                  </label>
                </div>

                <div className="input--select">
                  <label>
                    <input type="checkbox" {...register('desktops')} />
                    <span>Computadores</span>
                  </label>
                </div>
                <div className="input--select">
                  <label>
                    <input type="checkbox" {...register('gamer')} />
                    <span>Linha Gamer</span>
                  </label>
                </div>
                <div className="input--select">
                  <label>
                    <input type="checkbox" {...register('miniPCs')} />
                    <span>Mini PCs</span>
                  </label>
                </div>
                <div className="input--select">
                  <label>
                    <input type="checkbox" {...register('monitors')} />
                    <span>Monitores</span>
                  </label>
                </div>

                <div className="form--group">
                  <span>
                    <strong>Dados para contato:</strong>
                  </span>
                  <div className="contact--inputs">
                    <label>
                      <span>Telefone:</span>
                      <input type="text" {...register('phone')} />
                    </label>
                  </div>

                  <div className="contact--inputs">
                    <label>
                      <span>CNPJ:</span>
                      <input type="text" {...register('cnpj')} />
                    </label>
                  </div>

                  <div className="contact--inputs">
                    <label>
                      <span>E-mail:</span>
                      <input type="text" {...register('email')} />
                    </label>
                  </div>
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA}
                    onChange={() => setReCaptchaSolved(true)}
                  />
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  )
}
