import * as Dialog from '@radix-ui/react-dialog'
import { CheckCircle, X } from 'phosphor-react'
import { useContext, useState, useRef } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { PriceRequestContext } from '../../contexts/PricesRequestContext'
import { Content, Overlay } from './style'
import emailjs from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'

export function PriceRequestModal() {
  const refCaptcha = useRef<ReCAPTCHA>(null)

  const { openDialog, setOpenDialog } = useContext(PriceRequestContext)

  const [sendedRequest, SetSendedRequest] = useState(false)

  const [phoneFormated, setPhoneFormated] = useState('')
  const [cnpjFormated, setCnpjFormated] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const handleChangePhone = (phone: string) => {
    const formatingValuePhone = phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')

    setPhoneFormated(formatingValuePhone)
  }

  const handleChangeCnpj = (cnpj: string) => {
    const formatingCnpj = cnpj
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')

    setCnpjFormated(formatingCnpj)
  }

  const onSubmitInfo = (data: FieldValues) => {
    const token = refCaptcha.current?.getValue()
    const toSend = {
      cnpj: data.cnpj,
      email: data.email,
      phone: data.phone,
      all: data.all ? 'X' : '',
      desktops: data.desktops ? 'X' : '',
      gamer: data.gamer ? 'X' : '',
      miniPCs: data.miniPCs ? 'X' : '',
      monitors: data.monitors ? 'X' : '',
    }

    if (token) {
      const params = {
        ...toSend,
        'g-recaptcha-response': token,
      }
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID_EMAILJS,
          import.meta.env.VITE_TEMPLATE_REQUEST_PRICE,
          params,
          import.meta.env.VITE_PUBLIC_KEY_EMAILJS,
        )
        .then(
          (result) => {
            SetSendedRequest(true)
          },
          (error) => {
            console.log(error)
            alert('Houve um erro. Por favor tente novamente mais tarde.')
          },
        )
    } else {
      alert('Por favor marque o reCaptcha do Google')
    }
  }

  return (
    <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
      <Dialog.Portal>
        <Overlay>
          {sendedRequest ? (
            <Content>
              <header>
                <h1>SOLICITAR PREÇOS</h1>
                <button onClick={() => setOpenDialog(false)}>
                  <X size={24} />
                </button>
              </header>
              <div className="sended--form">
                <CheckCircle size={100} color="#61c102" />
                <p>
                  Dados enviados com sucesso, retornaremos o mais breve
                  possível.
                </p>
                <button onClick={() => SetSendedRequest(false)}>
                  Solicitar novamente
                </button>
              </div>
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
                        <span>Nome Empresarial:</span>
                        <input
                          type="text"
                          {...register('company', { required: true })}
                        />
                        {errors?.company?.type === 'required' && (
                          <p className="errors--message">
                            Este campo é obrigatório
                          </p>
                        )}
                      </label>
                    </div>
                    <div className="contact--inputs">
                      <label>
                        <span>Telefone:</span>
                        <input
                          type="text"
                          {...register('phone', {
                            required: true,
                            minLength: 15,
                          })}
                          onChange={(e) => handleChangePhone(e.target.value)}
                          value={phoneFormated}
                        />
                        {errors?.phone?.type === 'required' && (
                          <p className="errors--message">
                            Este campo é obrigatório
                          </p>
                        )}
                        {errors?.phone?.type === 'minLength' && (
                          <p className="errors--message">
                            Digite um número válido
                          </p>
                        )}
                      </label>
                    </div>

                    <div className="contact--inputs">
                      <label>
                        <span>CNPJ (apenas números):</span>
                        <input
                          type="text"
                          {...register('cnpj', {
                            required: true,
                            minLength: 18,
                          })}
                          onChange={(e) => handleChangeCnpj(e.target.value)}
                          value={cnpjFormated}
                        />
                        {errors?.cnpj?.type === 'required' && (
                          <p className="errors--message">
                            Este campo é obrigatório
                          </p>
                        )}
                        {errors?.cnpj?.type === 'minLength' && (
                          <p className="errors--message">
                            Digite um CNPJ válido
                          </p>
                        )}
                      </label>
                    </div>

                    <div className="contact--inputs">
                      <label>
                        <span>E-mail:</span>
                        <input
                          type="email"
                          {...register('email', { required: true })}
                        />
                        {errors?.email?.type === 'required' && (
                          <p className="errors--message">
                            Este campo é obrigatório
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="recaptcha--area">
                    <ReCAPTCHA
                      ref={refCaptcha}
                      sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA}
                    />
                  </div>
                  {isSubmitting ? (
                    <p>Enviando...</p>
                  ) : (
                    <button type="submit">Enviar</button>
                  )}
                </div>
              </form>
            </Content>
          )}
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
