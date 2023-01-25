import styled from "styled-components";

export const ContainerCardFirstFech = styled.div`
  display: flex;
  cursor: pointer;
  img {
    width: 150px;
    height: 150px;
    border-radius: 12px;
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    height: 100%;
    img {
      width: 80px;
      height: 80px;
      border-radius: 12px;
    }
  }
`;

export const ContainerParagraphCardFirstFech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 0 0 0 16px;
  @media (max-width: 768px) {
    margin: 8px 0;
  }
`;

export const ParagraphCardFirstFechTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  color: white;
  width: 100px;
  @media (max-width: 768px) {
    font-size: 10px;
    width: 80px;
    text-align: center;
  }
`;

export const ParagraphCardFirstFechInfo = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 100;
  color: white;
  width: 100px;
  @media (max-width: 768px) {
    font-size: 10px;
    text-align: center;
    width: auto;
  }
`;
export const ContainerParagraphStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 80px;
  }
`;

export const ContainerCircleStatusAlive = styled.div`
  border-radius: 50%;
  background-color: ${props => props.color};
  width: 12px;
  height: 12px;
    margin: 1px 8px 0 0;
  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
    margin: 1px 4px 0 0;
  }
`;
