import styled from "styled-components";

export const ContainerHeaderImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 64px;
    img {
        width: 30%;
        height: auto;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        padding: 12px 24px;
        img {
            width: 60%;
            height: auto;
        }
    }
`

export const ContainerHeaderbuttonSearch = styled.div`
    border-radius: 50%;
    background-color: ;
`