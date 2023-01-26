import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerCardFirstFech,
  ContainerParagraphCardFirstFech,
  ParagraphCardFirstFechTitle,
  ParagraphCardFirstFechInfo,
  ContainerCircleStatusAlive,
  ContainerParagraphStatus
} from "./styled-components";
import { typesFirstFetch, colorsCircleStatus } from "../../Constants";
import { randomNumbers, substractTempEpi } from '../../utils'
import S1 from '../../assets/seasons/S1.jpg'
import S2 from '../../assets/seasons/S2.jpg'
import S3 from '../../assets/seasons/S3.png'
import S4 from '../../assets/seasons/S4.jpg'
import S5 from '../../assets/seasons/S5.jpg'
import S6 from '../../assets/seasons/S6.jpg'
import L1 from '../../assets/locations/L1.jpg'
import L2 from '../../assets/locations/L2.jpg'
import L3 from '../../assets/locations/L3.jpg'
import L4 from '../../assets/locations/L4.jpg'
import L5 from '../../assets/locations/L5.jpg'
import L6 from '../../assets/locations/L6.jpg'
import L7 from '../../assets/locations/L7.jpg'
import L8 from '../../assets/locations/L8.jpg'
import L9 from '../../assets/locations/L9.png'

const episodes = [
  S1, S2, S3, S4, S5, S6
]

const locations = [
  L1, L2, L3, L4, L5, L6, L7, L8, L9
]

const CardHomeSectionComponent = ({ item, type }) => {
  const navigate =  useNavigate()

  const getDetailItem = (id, type) => {
    navigate(`/${type}/${id}`)
  }


  return (
    <>
      {
        type === typesFirstFetch.character.fetch && 
        <ContainerCardFirstFech onClick={() => getDetailItem(item.id, type)}>
          <img src={item.image} alt={`img-${item.id}`} />
          <ContainerParagraphCardFirstFech>
            <ParagraphCardFirstFechTitle>{item.name}</ParagraphCardFirstFechTitle>
            <ContainerParagraphStatus>
              <ContainerCircleStatusAlive color={colorsCircleStatus[item.status]} />
              <ParagraphCardFirstFechInfo>
                {item.status}
              </ParagraphCardFirstFechInfo>
            </ContainerParagraphStatus>
          </ContainerParagraphCardFirstFech>
        </ContainerCardFirstFech>
      }
      {
        type === typesFirstFetch.episode.fetch && 
        <ContainerCardFirstFech onClick={() => getDetailItem(item.id, type)}>
          <img src={episodes[parseInt(substractTempEpi(item.episode)[0])-1]} alt={`img-${item.id}`} />
          <ContainerParagraphCardFirstFech>
            <ParagraphCardFirstFechTitle>{item.name}</ParagraphCardFirstFechTitle>
            <ContainerParagraphStatus>
              <ParagraphCardFirstFechInfo>
                Temp.{substractTempEpi(item.episode)[0]}-Ep. {substractTempEpi(item.episode)[1]}
              </ParagraphCardFirstFechInfo>
            </ContainerParagraphStatus>
          </ContainerParagraphCardFirstFech>
        </ContainerCardFirstFech>
      }
      {
        type === typesFirstFetch.location.fetch && 
        <ContainerCardFirstFech onClick={() => getDetailItem(item.id, type)}>
          <img src={locations[randomNumbers(0, 8, 1)[0]]} alt={`img-${item.id}`} />
          <ContainerParagraphCardFirstFech>
            <ParagraphCardFirstFechTitle>{item.name}</ParagraphCardFirstFechTitle>
            <ContainerParagraphStatus>
              <ParagraphCardFirstFechInfo>
                {item.dimension}
              </ParagraphCardFirstFechInfo>
            </ContainerParagraphStatus>
          </ContainerParagraphCardFirstFech>
        </ContainerCardFirstFech>
      }
    </>
    
  );
};

export default CardHomeSectionComponent;
