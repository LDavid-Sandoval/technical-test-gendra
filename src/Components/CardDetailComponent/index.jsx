import React from "react";
import {
  ContainerCardDetail,
  ContainerCardDetailImg,
  ContainerCardDetailInfo,
  ContainerCardDetailInfoTitle,
  ParagraphCardDetailInfoTitleAndStatus,
  ContainerCardDetailInfoDetails,
  ContainerCardDetailInfoDetailsTitleAndInfo,
  ParagraphCardDetailDataInfoTitle,
  ParagraphCardDetailDataInfo,
} from "./styled-component";

const CardDeatailComponent = ({
  urlImg,
  title,
  firstDataInfoTitle,
  firstDataInfo,
  secondDataInfoTitle,
  secondDataInfo,
  thirdDataInfoTitle,
  thirdDataInfo,
  fourthDataInfoTitle,
  fourthDataInfo,
  fifthDataInfoTitle,
  fifthDataInfo,
  sixthDataInfoTitle,
  sixthDataInfo,
  seventhDataInfoTitle,
  seventhDataInfo,
  eighthDataInfoTitle,
  eighthDataInfo,
  ninthDataInfoTitle,
  ninthDataInfo,
}) => {
  return (
    <ContainerCardDetail>
      <ContainerCardDetailImg>
        <img src={urlImg} alt='test' />
      </ContainerCardDetailImg>
      <ContainerCardDetailInfo>
        <ContainerCardDetailInfoTitle>
          <ParagraphCardDetailInfoTitleAndStatus>
            {title}
          </ParagraphCardDetailInfoTitleAndStatus>
        </ContainerCardDetailInfoTitle>
        <ContainerCardDetailInfoDetails>
          {firstDataInfoTitle && (
            <ContainerCardDetailInfoDetailsTitleAndInfo>
              <ParagraphCardDetailDataInfoTitle>
                {firstDataInfoTitle}:
              </ParagraphCardDetailDataInfoTitle>
              <ParagraphCardDetailDataInfo>
                {firstDataInfo}
              </ParagraphCardDetailDataInfo>
            </ContainerCardDetailInfoDetailsTitleAndInfo>
          )}
          {secondDataInfoTitle && (
            <ContainerCardDetailInfoDetailsTitleAndInfo>
              <ParagraphCardDetailDataInfoTitle>
                {secondDataInfoTitle}:
              </ParagraphCardDetailDataInfoTitle>
              <ParagraphCardDetailDataInfo>
                {secondDataInfo}
              </ParagraphCardDetailDataInfo>
            </ContainerCardDetailInfoDetailsTitleAndInfo>
          )}
          {thirdDataInfoTitle && (
            <ContainerCardDetailInfoDetailsTitleAndInfo>
              <ParagraphCardDetailDataInfoTitle>
                {thirdDataInfoTitle}:
              </ParagraphCardDetailDataInfoTitle>
              <ParagraphCardDetailDataInfo>
                {thirdDataInfo}
              </ParagraphCardDetailDataInfo>
            </ContainerCardDetailInfoDetailsTitleAndInfo>
          )}
          {fourthDataInfoTitle && (
            <ContainerCardDetailInfoDetailsTitleAndInfo>
              <ParagraphCardDetailDataInfoTitle>
                {fourthDataInfoTitle}:
              </ParagraphCardDetailDataInfoTitle>
              <ParagraphCardDetailDataInfo>
                {fourthDataInfo}
              </ParagraphCardDetailDataInfo>
            </ContainerCardDetailInfoDetailsTitleAndInfo>
          )}
          {fifthDataInfoTitle && (
            <ContainerCardDetailInfoDetailsTitleAndInfo>
              <ParagraphCardDetailDataInfoTitle>
                {fifthDataInfoTitle}:
              </ParagraphCardDetailDataInfoTitle>
              <ParagraphCardDetailDataInfo>
                {fifthDataInfo}
              </ParagraphCardDetailDataInfo>
            </ContainerCardDetailInfoDetailsTitleAndInfo>
          )}
          {sixthDataInfoTitle && (
            <ContainerCardDetailInfoDetailsTitleAndInfo>
              <ParagraphCardDetailDataInfoTitle>
                {sixthDataInfoTitle}:
              </ParagraphCardDetailDataInfoTitle>
              <ParagraphCardDetailDataInfo>
                {sixthDataInfo}
              </ParagraphCardDetailDataInfo>
            </ContainerCardDetailInfoDetailsTitleAndInfo>
          )}
          {seventhDataInfoTitle && (
            <ContainerCardDetailInfoDetailsTitleAndInfo>
              <ParagraphCardDetailDataInfoTitle>
                {seventhDataInfoTitle}:
              </ParagraphCardDetailDataInfoTitle>
              <ParagraphCardDetailDataInfo>
                {seventhDataInfo}
              </ParagraphCardDetailDataInfo>
            </ContainerCardDetailInfoDetailsTitleAndInfo>
          )}
        </ContainerCardDetailInfoDetails>
      </ContainerCardDetailInfo>
    </ContainerCardDetail>
  );
};

export default CardDeatailComponent;
