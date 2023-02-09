import styled from "styled-components";
import bgHead from '../../assets/header-background.jpg';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 65vh;
    color: white;
    background-image: url(${bgHead});
    background-size: cover;
`

export const HeaderContent = styled.div`
    margin-top: 6rem;
    width: 100%;
    max-width: 1124px;
    padding: 0rem 2rem;
    display: flex;
    align-items: center;
    gap: 3rem;

    .info-header {
        display: flex;
        flex-direction: column;

        h1 {
        font-size: 4.8rem;
        font-weight: 900;
        }

        .btns-container {
            margin-top: 2rem;
            display: flex;
            gap: 2rem;
        }

    }

    

    img {
        width: 100%;
        max-width: 392px;
        max-height: 392px;
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
    padding: 0.8rem 2rem;
    color: white;
    border: none;
    font-weight: 900;
    cursor: pointer;

    background-color: ${(props) => {
        switch(props.variant) {
            case 'primary': {
                return "#FF8A00"
            }
            case 'secondary': {
                return "#004563"
            }
            case 'whats': {
                return "#56AB00"
            }
            default: {
                return;
            }
        }
    }}
`