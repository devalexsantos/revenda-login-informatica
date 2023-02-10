import styled from "styled-components";

export const ProductBoxContainer = styled.div`
    width: 100%;
    margin-right: 1rem;
    padding: 1rem;
`

export const ProductBoxHeader = styled.div`
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

export const ProductBoxContent = styled.div`
  margin-top: 1px;
  background-color: #FAFAFB;
  padding: 1rem;
`

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  gap: 1rem;
  background-color: white;
  border: 1px solid #ECECEC;
  border-radius: 6px;
  padding: 0.8rem;

  img {
    max-width: 180px;
  }
`

export const ButtonProduct = styled.button`
  padding: 0.75rem 2.87rem;
  background-color: #004563;
  color: white;
  font-size: 900;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: auto;
`