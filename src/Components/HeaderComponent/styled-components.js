import styled from "styled-components";

export const ContainerHeaderImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    img {
        width: 30%;
        height: auto;
    }
    @media (max-width: 768px) {
        img {
            width: 60%;
            height: auto;
        }
    }
`