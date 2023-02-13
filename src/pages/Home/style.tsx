import styled from 'styled-components'
import footerBg from '../../assets/footer-login-revenda.jpg'

export const MainContainer = styled.main`
  margin: auto;
  max-width: 1124px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`

export const Footer = styled.footer`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  background-color: #004563;
  background-image: url(${footerBg});
  background-size: cover;
  padding: 6rem 2rem;
`

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1124px;
`

export const AboutContainer = styled.div`
  max-width: 555px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-bottom: 7rem;

  color: white;

  h3 {
    font-size: 2.8rem;
  }

  .btn--container {
    display: flex;
    gap: 1.5rem;

    a {
      text-decoration: none;
    }
  }

  .icons--container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .copy {
    font-size: 0.8rem;
  }

  .read-more {
    display: flex;
    align-items: center;
    gap: 5px;
    line-height: 0;
    font-weight: 700;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 465px) {
    .btn--container {
      flex-direction: column;
      align-items: center;
    }
  }
`

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'whats'
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  padding: 0.4rem 2rem;
  color: white;
  border: none;
  font-weight: 900;
  cursor: pointer;

  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary': {
        return '#FF8A00'
      }
      case 'secondary': {
        return '#004563'
      }
      case 'whats': {
        return '#56AB00'
      }
      default: {
        return props.variant
      }
    }
  }};
`
