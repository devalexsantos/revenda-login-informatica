import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 1124px;

  margin: 2rem auto;

  padding: 1rem;

  color: white;

  h1 {
    font-weight: 900;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    color: #525252;

    .form--group {
      margin-top: 10px;
      display: flex;
      gap: 1rem;

      label {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 0.3rem;

        span {
          font-size: 1rem;
        }

        input {
          width: 100%;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          border: 1px solid #525252;
          font-size: 1.2rem;
        }
      }
    }

    .form--group--documents {
      margin-top: 10px;
      display: flex;
      gap: 1rem;

      label {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 0.3rem;

        span {
          font-size: 1.1rem;
          font-weight: bold;
        }

        input {
          width: 100%;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          border: 1px solid #525252;
          font-size: 1rem;
        }
      }
    }
  }
`

export const BoxInfoContainer = styled.div`
    width: 100%;
    padding: 1rem;
`

export const BoxInfoHeader = styled.div`
    display: flex;
    background-color: #004563;
    padding: 0.8rem;
    color: white;
    gap: 0.8rem;
    align-items: center;

    h3 {
      font-size: 1.2rem;
      font-weight: 900;
    }
`

export const BoxInfoContent = styled.div`
  margin-top: 1px;
  background-color: #FAFAFB;
  padding: 1rem;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
   
  button {
    width: 100%;
    margin: 1rem;
    padding: 0.8rem 1rem;
    border-radius: 6px;
    border: none;
    font-size: 1.2rem;
    font-weight: 900;
    color: white;
    background-color: #61C102;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #FF8A00;
    }
  }
`