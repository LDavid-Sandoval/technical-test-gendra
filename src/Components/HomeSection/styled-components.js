import styled from "styled-components";

export const ContainerFirstFech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const ContainerParagraphFirstFech = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
    p {
        color: white;
        font-size: 24px;
        font-weight: bold;
    }
`

export const ParagraphFirstFechTitle = styled.p`
    @media (max-width: 768px) {
        margin: 0 8px 0 0;
    }
`

export const ParagraphFirstFechDetail = styled.p`
    cursor: pointer;
        margin: 0;
`

export const ContainerCardsFirstFech = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`