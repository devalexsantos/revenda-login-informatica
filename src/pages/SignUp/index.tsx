import {
  BoxInfoContainer,
  BoxInfoContent,
  BoxInfoHeader,
  ButtonsContainer,
  SignUpContainer,
} from './style'
import { useNavigate } from 'react-router-dom'

import logoLogin from '../../assets/logo-login.svg'
import { ArrowLeft } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    await emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID_EMAILJS,
        import.meta.env.VITE_TEMPLATE_SIGNUP,
        data,
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
    <SignUpContainer>
      <button onClick={() => navigate('/')} className="back--btn">
        <ArrowLeft size={16} />
        Voltar
      </button>
      <img
        className="logo--brand"
        src={logoLogin}
        alt="Logo da Login Informática"
      />
      <h1>CADASTRE-SE</h1>
      <p>
        Faça a solicitação do seu cadastro para conferir os preços e solicitar
        um orçamento personalizado.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <BoxInfoContainer>
          <BoxInfoHeader>
            <h3>DADOS DA EMPRESA</h3>
          </BoxInfoHeader>

          <BoxInfoContent>
            <div className="form--group">
              <label>
                <span>* Razão Social:</span>
                <input {...register('corporateName', { required: true })} />
                {errors?.corporateName?.type === 'required' && (
                  <h3 className="errors--message">Este campo é obrigatório</h3>
                )}
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* CNPJ:</span>
                <input {...register('cnpj', { required: true })} />
                {errors?.cnpj?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>

              <label>
                <span>Inscrição Estadual:</span>
                <input {...register('stateRegistration')} />
              </label>

              <label>
                <span>Inscrição Municipal:</span>
                <input {...register('municipalRegistration')} />
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* Endereço:</span>
                <input {...register('address', { required: true })} />
                {errors?.address?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* Contato (Nome):</span>
                <input {...register('contactName', { required: true })} />
                {errors?.contactName?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>

              <label>
                <span>* Área / Setor:</span>
                <input {...register('contactArea', { required: true })} />
                {errors?.contactArea?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* Telefone:</span>
                <input
                  {...register('contactNumberPhone', { required: true })}
                />
                {errors?.contactNumberPhone?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>

              <label>
                <span>Fax:</span>
                <input {...register('contactNumberFax')} />
              </label>

              <label>
                <span>* Email:</span>
                <input {...register('contactEmail', { required: true })} />
                {errors?.contactEmail?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* Ramo de Atividade:</span>
                <input {...register('lineOfBusiness', { required: true })} />
                {errors?.lineOfBusiness?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>
            </div>
          </BoxInfoContent>
        </BoxInfoContainer>

        <BoxInfoContainer>
          <BoxInfoHeader>
            <h3>REFERÊNCIAS COMERCIAIS</h3>
          </BoxInfoHeader>

          <BoxInfoContent>
            <div className="form--group">
              <label>
                <span>Fornecedor 01:</span>
                <input
                  {...register('supplier01')}
                  placeholder="Contato / Telefone"
                />
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>Fornecedor 02:</span>
                <input
                  {...register('supplier02')}
                  placeholder="Contato / Telefone"
                />
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>Fornecedor 03:</span>
                <input
                  {...register('supplier03')}
                  placeholder="Contato / Telefone"
                />
              </label>
            </div>
          </BoxInfoContent>
        </BoxInfoContainer>

        <BoxInfoContainer>
          <BoxInfoHeader>
            <h3>REFERÊNCIAS BANCÁRIAS</h3>
          </BoxInfoHeader>

          <BoxInfoContent>
            <div className="form--group">
              <label>
                <span>* Banco 01:</span>
                <input {...register('bank01', { required: true })} />
                {errors?.bank01?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>
              <label>
                <span>* Nome do Gerente:</span>
                <input {...register('bankManager01', { required: true })} />
                {errors?.bankManager01?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>
              <label>
                <span>* Telefone de Contato:</span>
                <input
                  {...register('bankManagerContactNumber01', {
                    required: true,
                  })}
                />
                {errors?.bankManagerContactNumber01?.type === 'required' && (
                  <p className="errors--message">Este campo é obrigatório</p>
                )}
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>Banco 02:</span>
                <input {...register('bank02')} />
              </label>
              <label>
                <span>Nome do Gerente:</span>
                <input {...register('bankManager02')} />
              </label>
              <label>
                <span>Telefone de Contato:</span>
                <input {...register('bankManagerContactNumber02')} />
              </label>
            </div>
          </BoxInfoContent>
        </BoxInfoContainer>

        <ButtonsContainer>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'CADASTRAR-SE'}
          </button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
}
