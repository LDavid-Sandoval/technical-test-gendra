import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import CardDeatailComponent from "../../Components/CardDetailComponent";
import useFetch from "../../Hooks/useFetch";
import { baseUrlApi } from "../../Constants";
import { randomNumbers } from "../../Utils"
import {
  ContainerCardDetailLocationComponent,
  ContainerLoadingDetailLocationComponent,
} from "./styled-components";

import L1 from '../../assets/locations/L1.jpg'
import L2 from '../../assets/locations/L2.jpg'
import L3 from '../../assets/locations/L3.jpg'
import L4 from '../../assets/locations/L4.jpg'
import L5 from '../../assets/locations/L5.jpg'
import L6 from '../../assets/locations/L6.jpg'
import L7 from '../../assets/locations/L7.jpg'
import L8 from '../../assets/locations/L8.jpg'
import L9 from '../../assets/locations/L9.png'

const locations = [
    L1, L2, L3, L4, L5, L6, L7, L8, L9
  ]


const LocationDetailPage = () => {
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
    <ContainerCardDetailLocationComponent>
      {!response ? (
        <ContainerLoadingDetailLocationComponent>
          <Player
            src='https://assets7.lottiefiles.com/packages/lf20_dkz94xcg.json'
            className='player'
            autoplay
            loop={true}
            ref={playerRef}
            style={{ height: "150px", width: "150px" }}
          />
        </ContainerLoadingDetailLocationComponent>
      ) : (
        <CardDeatailComponent
          urlImg={locations[randomNumbers(0, 8, 1)[0]]}
          title={response.name}
          firstDataInfoTitle='Dimension'
          firstDataInfo={response.dimension}
          secondDataInfoTitle='Tipo'
          secondDataInfo={response.type}
          thirdDataInfoTitle={null}
          thirdDataInfo={null}
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
    </ContainerCardDetailLocationComponent>
  );
};

export default LocationDetailPage;
