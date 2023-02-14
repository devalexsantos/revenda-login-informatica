import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  color: #525252;
  width: 100%;
  max-width: 400px;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    h1 {
      white-space: nowrap;
      font-size: 1.6rem;
    }
  }

  form {
    font-size: 1.1rem;
    color: #525252;

    .form--group {
      margin-top: 20px;

      button {
        margin-top: 20px;
        width: 100%;

        background-color: #ff8a00;
        padding: 0.5rem 1rem;
        cursor: pointer;
        color: white;
        border: none;
        border-radius: 6px;
      }

      .input--select {
        label {
          margin-top: 10px;
          display: flex;
          gap: 5px;
          align-items: center;

          input {
            font-size: 2rem;
          }
        }
      }

      .contact--inputs {
        margin-top: 10px;
        label {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;

          input {
            border-radius: 6px;
            border: 1px solid #525252;
            padding: 0.5rem;
          }
        }
      }
    }
  }
`
