import {
  BoxInfoContainer,
  BoxInfoContent,
  BoxInfoHeader,
  SuccessContainer,
} from './style'

import logoLogin from '../../assets/logo-login.svg'
import { ArrowLeft, WarningCircle } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
export function Documents() {
  const navigate = useNavigate()

  return (
    <SuccessContainer>
      <button onClick={() => navigate('/')} className="back--btn">
        <ArrowLeft size={16} />
        Voltar
      </button>
      <img
        className="logo--brand"
        src={logoLogin}
        alt="Logo da Login Informática"
      />
      <h1>CADASTRO PENDENTE</h1>

      <BoxInfoContainer>
        <BoxInfoHeader>
          <h3>ENVIO DE DOCUMENTOS</h3>
        </BoxInfoHeader>

        <BoxInfoContent>
          <WarningCircle size={80} color="#FF8A00" />
          <p>
            - Para finalizar o seu cadastro por favor envie os documentos
            listados abaixo para o e-mail: <br />
            <strong>revenda@login.com.br</strong>
          </p>
          <p>
            - Coloque o <strong>NOME DA EMPRESA - DOCUMENTOS</strong> no assunto
            do e-mail.
          </p>

          <span>Documentos:</span>
          <ul>
            <li>
              <strong>Contrato social</strong> ou última alteração contratual
            </li>
            <li>
              <strong>Comprovante de endereço</strong> em nome da empresa
            </li>
            <li>
              <strong>Cópia de RG</strong> dos sócios
            </li>
          </ul>

          <p>Retornaremos o mais breve possível.</p>
          <p>
            <strong>Obrigado por escolher a Login!</strong>
          </p>
        </BoxInfoContent>
      </BoxInfoContainer>
    </SuccessContainer>
  )
}
