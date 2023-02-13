import styled from 'styled-components';

export const WhatsAppBoxContainer = styled.div`
  position: fixed;
  top: 70vh;
  right: 10px;
  padding: 0.3rem 1rem;
  background-color: #00AD00;
  border-radius: 999px 0px 999px 999px;
  color: white;

  display: flex;
  align-items: center;

  font-weight: 400;

  img {
    width: 60px;
    height: 60px;
  }

  .whatsApp-name {
    font-size: 1.3rem;
  }

  @media(max-width: 475px){
    top: 80vh;

    img {
    width: 40px;
    height: 40px;
    }

    .whatsApp-name {
    font-size: 1rem;
    }
    
  }
`