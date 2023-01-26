/* eslint-disable array-callback-return */
import React, { useEffect, useState, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  ContainerFirstFech,
  ParagraphFirstFechTitle,
  ParagraphFirstFechDetail,
  ContainerParagraphFirstFech,
  ContainerCardsFirstFech,
} from "./styled-components";
import { useNavigate } from "react-router-dom";
import { randomNumbers } from "../../Utils";
import { typesFirstFetch, baseUrlApi } from "../../Constants";
import CardHomeSectionComponent from '../CardHomeSectionComponent'
import useFetch from "../../Hooks/useFetch";

const HomeSection = ({ type }) => {
  const playerRef = useRef(null);
  const navigate =  useNavigate()
  const [infoSectionHome, setInfoSectionHome] = useState(null);
  const [url, setUrl] = useState(null);
  const { response,  isLoading } = useFetch(url);
  
  useEffect(() => {
    if (type) {
      setInfoSectionHome(typesFirstFetch[type]);
    }
  }, [type]);

  useEffect(() => {
    if (!url && infoSectionHome) {
      const numberRandom = randomNumbers(1, infoSectionHome.max, 3)
      setUrl(`${baseUrlApi}/${infoSectionHome.fetch}/${numberRandom}`);
    }
  }, [infoSectionHome, url]);

  const getCharacters = (type) => {
    navigate(`/${type}`)
  }

  return (
    <ContainerFirstFech>
      <ContainerParagraphFirstFech>
        <ParagraphFirstFechTitle>
          {infoSectionHome ? infoSectionHome.title : "Sin info"}
        </ParagraphFirstFechTitle>
        <ParagraphFirstFechDetail onClick={()=> getCharacters(infoSectionHome.fetch)} >. . .</ParagraphFirstFechDetail>
      </ContainerParagraphFirstFech>
      {
        isLoading &&
          <div>
            <Player
              src='https://assets7.lottiefiles.com/packages/lf20_dkz94xcg.json'
              className='player'
              autoplay
              loop={true}
              ref={playerRef}
              style={{ height: "150px", width: "150px" }}
            />
          </div>            
      }
      {
        <ContainerCardsFirstFech>
          {
            response && response.map((item) => {
                return (
                  <CardHomeSectionComponent item={item} key={`${type}-${item.id}`} type={type} />
                )
            })
          }
          </ContainerCardsFirstFech>
      }
    </ContainerFirstFech>
  );
};

export default HomeSection;
