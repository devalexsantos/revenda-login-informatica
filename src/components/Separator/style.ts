import styled from "styled-components";

export const SeparatorContainer = styled.div`
    margin-top: -25px;
    display: flex;
    gap: 2rem;
    align-items: center;

    h2 {
        font-size: 2.5rem;
        text-transform: uppercase;
        font-weight: 900;
        color: white;
        white-space: nowrap;
    }

    div {
        width: 100%;
        border: 0.5px solid rgb(242, 242, 242, 0.4);
    }
`