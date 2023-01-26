import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import CardDeatailComponent from "../../Components/CardDetailComponent";
import useFetch from "../../Hooks/useFetch";
import { baseUrlApi } from "../../Constants";
import {
  ContainerCardDetailCharacterComponent,
  ContainerLoadingDetailCharacterComponent,
} from "./styled-components";

const CharacterDetailPage = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const { response } = useFetch(url);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!url) {
      setUrl(`${baseUrlApi}${location.pathname}`);
    }
  }, [url, location]);

  return (
    <ContainerCardDetailCharacterComponent>
      {!response ? (
        <ContainerLoadingDetailCharacterComponent>
          <Player
            src='https://assets7.lottiefiles.com/packages/lf20_dkz94xcg.json'
            className='player'
            autoplay
            loop={true}
            ref={playerRef}
            style={{ height: "150px", width: "150px" }}
          />
        </ContainerLoadingDetailCharacterComponent>
      ) : (
        <CardDeatailComponent
          urlImg={response.image}
          title={response.name}
          firstDataInfoTitle='Estado'
          firstDataInfo={response.status}
          secondDataInfoTitle='Especie'
          secondDataInfo={response.species}
          thirdDataInfoTitle='Tipo'
          thirdDataInfo={response.type}
          fourthDataInfoTitle='Genero'
          fourthDataInfo={response.gender}
          fifthDataInfoTitle='Origen'
          fifthDataInfo={response.origin.name}
          sixthDataInfoTitle='Numero de episodios'
          sixthDataInfo={response.episode.length}
          seventhDataInfoTitle={null}
          seventhDataInfo={null}
        />
      )}
    </ContainerCardDetailCharacterComponent>
  );
};

export default CharacterDetailPage;
