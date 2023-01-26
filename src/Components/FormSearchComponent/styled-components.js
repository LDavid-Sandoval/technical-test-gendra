import styled from "styled-components";

export const ContainerFormSearch = styled.div`
    background-color: #2b2e60;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ParagraphTitleFormSearch = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: white;
`
export const ParagraphTitleInputForm= styled.p`
    font-size: 14px;
    font-weight: 100;
    color: white;
    margin: 0 0 4px 0;
`

export const ContainerTypesSelect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 24px 0;
    label {
        color: white;
        margin: 0 32px 0 4px;
    }
`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    input[type=text], select {
        width: 100%;
        padding: 8px 8px;
        margin: 0 0 16px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    @media (max-width: 768px) {
        width: 350px;
    }
`



export const ButtonSubmit = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
`