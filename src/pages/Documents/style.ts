import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 1124px;

  margin: 2rem auto;

  padding: 1rem;

  color: white;

  .errors--message {
    font-size: 0.8rem;
    color: red;
  }

  .back--btn {
    width: 200px;
    padding: 0.5rem 2rem;
    border: 1px solid white;
    color: white;
    background: none;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;

    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #004563;
      border: 1px solid #004563;
    }
  }

  .logo--brand {
    width: 250px;
  }

  h1 {
    font-weight: 900;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: #fafafb;
  padding: 1rem;
  color: #585858;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  p {
    text-align: center;
    margin-top: 1rem;
  }

  ul {
    margin-top: 1rem;
  }

  span {
    margin-top: 2.5rem;
  }
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
    background-color: #61c102;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #ff8a00;
    }
  }
`
