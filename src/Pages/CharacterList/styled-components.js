import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const ContainerCardCharacter = styled.div`
  width: 23%;
  height: 120px;
  margin: 8px 0;
  display: flex;
  border-radius: 15px;
  background-color: #283059;
  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;
export const ContainerImgCharacter = styled.div`
  width: 50%;
  height: auto;
  @media (max-width: 768px) {
  }
`;

export const ImgCharacter = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 15px 0 0 15px;
  @media (max-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`;
export const ContainerInfoCharacter = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
  }
`;
export const ParagraphTitleInfo = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 4px 4px 4px 16px;
  color: #f2f2f2;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 4px;
  }
  cursor: pointer;
  :hover {
    color: #f263da;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const ContainerParagraphInfo = styled.div`
  display: flex;
`;

export const ParagraphInfo = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0px 4px 0 16px;
  color: #f2f2f2;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 10px;
    margin: 0 4px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const ParagraphInfoData = styled.p`
  font-size: 12px;
  font-weight: 100;
  margin: 0 4px;
  color: #f2f2f2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 10px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
