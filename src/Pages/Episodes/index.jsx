import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import moment from "moment/moment";
import CardDeatailComponent from "../../Components/CardDetailComponent";
import useFetch from "../../Hooks/useFetch";
import { baseUrlApi } from "../../Constants";
import { substractTempEpi } from "../../utils"
import {
  ContainerCardDetailEpisodeComponent,
  ContainerLoadingDetailEpisodeComponent,
} from "./styled-components";

import S1 from '../../assets/seasons/S1.jpg'
import S2 from '../../assets/seasons/S2.jpg'
import S3 from '../../assets/seasons/S3.png'
import S4 from '../../assets/seasons/S4.jpg'
import S5 from '../../assets/seasons/S5.jpg'
import S6 from '../../assets/seasons/S6.jpg'
const episodes = [
    S1, S2, S3, S4, S5, S6
  ]


const EpisodeDetailPage = () => {
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
    <ContainerCardDetailEpisodeComponent>
      {!response ? (
        <ContainerLoadingDetailEpisodeComponent>
          <Player
            src='https://assets7.lottiefiles.com/packages/lf20_dkz94xcg.json'
            className='player'
            autoplay
            loop={true}
            ref={playerRef}
            style={{ height: "150px", width: "150px" }}
          />
        </ContainerLoadingDetailEpisodeComponent>
      ) : (
        <CardDeatailComponent
          urlImg={episodes[parseInt(substractTempEpi(response.episode)[0])-1]}
          title={response.name}
          firstDataInfoTitle='Emision'
          firstDataInfo={moment(response.air_date).format('DD/MM/YYYY')}
          secondDataInfoTitle='Episodio'
          secondDataInfo={substractTempEpi(response.episode)[1]}
          thirdDataInfoTitle='Temporada'
          thirdDataInfo={substractTempEpi(response.episode)[0]}
          fourthDataInfoTitle={null}
          fourthDataInfo={null}
          fifthDataInfoTitle={null}
          fifthDataInfo={null}
          sixthDataInfoTitle={null}
          sixthDataInfo={null}
          seventhDataInfoTitle={null}
          seventhDataInfo={null}
        />
      )}
    </ContainerCardDetailEpisodeComponent>
  );
};

export default EpisodeDetailPage;
