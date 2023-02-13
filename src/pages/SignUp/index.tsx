import { Separator } from '../../components/Separator';
import { BoxInfoContainer, BoxInfoContent, BoxInfoHeader, ButtonsContainer, SignUpContainer } from './style';

export function SignUp(){
  return (
    <SignUpContainer>
      <h1>CADASTRE-SE</h1>
      <p>Faça a solicitação do seu cadastro para conferir os preços e solicitar um orçamento personalizado.</p>
      
      <form action=''>
      <BoxInfoContainer>
        <BoxInfoHeader>
          <h3>DADOS DA EMPRESA</h3>
        </BoxInfoHeader>

        <BoxInfoContent>
            <div className="form--group">
              <label>
                <span>* Razão Social:</span>
                <input name="corporate-name" required/>
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* CNPJ:</span>
                <input name="cnpj" required/>
              </label>

              <label>
                <span>Inscrição Estadual:</span>
                <input name="state-registration" />
              </label>

              <label>
                <span>Inscrição Municipal:</span>
                <input name="municipal-registration" />
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* Endereço:</span>
                <input name="address" required/>
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* Contato (Nome):</span>
                <input name="contact-name" required/>
              </label>

              <label>
                <span>* Área / Setor:</span>
                <input name="contact-area" required/>
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* Telefone:</span>
                <input name="contact-number-phone" required/>
              </label>

              <label>
                <span>Fax:</span>
                <input name="contact-number-fax" />
              </label>

              <label>
                <span>* Email:</span>
                <input name="contact-email" required/>
              </label>
            </div>

            <div className="form--group">
              <label>
                <span>* Ramo de Atividade:</span>
                <input name="line-of-business" required/>
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
                <input name="supplier-01" placeholder="Contato / Telefone" />
              </label>
          </div>

          <div className="form--group">
              <label>
                <span>Fornecedor 02:</span>
                <input name="supplier-02" placeholder="Contato / Telefone" />
              </label>
          </div>

          <div className="form--group">
              <label>
                <span>Fornecedor 03:</span>
                <input name="supplier-03" placeholder="Contato / Telefone" />
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
                <input name="bank-01" required/>
              </label>
              <label>
                <span>* Nome do Gerente:</span>
                <input name="bank-manager-01" required/>
              </label>
              <label>
                <span>* Telefone de Contato:</span>
                <input name="bank-manager-contact-number-01" required/>
              </label>
          </div>

          <div className="form--group">
              <label>
                <span>Banco 02:</span>
                <input name="bank-02" />
              </label>
              <label>
                <span>Nome do Gerente:</span>
                <input name="bank-manager-02" />
              </label>
              <label>
                <span>Telefone de Contato:</span>
                <input name="bank-manager-contact-number-02" />
              </label>
          </div>
        </BoxInfoContent>
      </BoxInfoContainer>

      <BoxInfoContainer>
        <BoxInfoHeader>
            <h3>DOCUMENTOS</h3>
        </BoxInfoHeader>

        <BoxInfoContent>
          <div className="form--group--documents">
              <label>
                <span>* Contrato Social ou última alteração contratual:</span>
                <input accept=".jpg,.jpeg,.doc,.docx, .pdf" size={512000} type="file" name="contract" required/>
              </label>
          </div>

          <div className="form--group--documents">
              <label>
                <span>* Comprovante de endereço em nome da empresa:</span>
                <input accept=".jpg,.jpeg,.doc,.docx,.pdf" size={512000} type="file" name="proof-of-residence" required/>
              </label>
          </div>

          <div className="form--group--documents">
              <label>
                <span>* Cópia de RG dos sócios:</span>
                <input accept=".jpg,.jpeg,.doc,.docx,.pdf" size={512000} type="file" name="documents-of-partners" required/>
              </label>
          </div>
        </BoxInfoContent>
      </BoxInfoContainer>

      <ButtonsContainer>
        <button type="submit">CADASTRAR-SE</button>
      </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
}