import React, { useState, useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useFetch from "../../Hooks/useFetch";
import { ContainerHome, ContainerCardCharacter,
    ContainerImgCharacter, ContainerInfoCharacter, ImgCharacter,
    ParagraphTitleInfo, ContainerParagraphInfo, ParagraphInfo, ParagraphInfoData } from "./styled-components";
import { baseUrlApi } from "../../Constants";
import { randomNumbers } from "../../utils"
import {
    addListLocation,
    addPageListLocation,
} from "../../Features/Location/locationSlice";
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

const LocationListPage = () => {
  const listLocation = useSelector((state) => state.listLocation);
  const [pagination, setPagination] = useState(listLocation.page);
  const [countPagination, setcountPagination] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate =  useNavigate()
  const [url, setUrl] = useState(null);
  const { response, isLoading } = useFetch(url);
  const playerRef = useRef(null);

  useEffect(() => {
    setUrl(`${baseUrlApi}${location.pathname}/?page=${pagination}`);
  }, [url, pagination, location.pathname]);

  useEffect(() => {
    if (response) {
      dispatch(addListLocation(response.results));
      setcountPagination(response.info.pages);
    }
  }, [dispatch, response]);

  const handlePagination = (event, pageNumber) => {
    event.preventDefault()
    dispatch(addPageListLocation(pageNumber));
    setPagination(pageNumber);
  };

  const getLocation = (id) => {
    navigate(`${location.pathname}/${id}`)
  }

  return (
    <>
      {isLoading && (
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
      )}
      {!isLoading && (
        <>
          <ContainerHome>
            {listLocation.data.length > 0 &&
              listLocation.data.map((item) => {
                return (
                  <ContainerCardCharacter key={item.id} >
                    <ContainerImgCharacter onClick={() => getLocation(item.id)} >
                        <ImgCharacter src={locations[randomNumbers(0, 8, 1)[0]]} alt={`character-list-${item.id}`} />
                    </ContainerImgCharacter>
                    <ContainerInfoCharacter>
                        <ParagraphTitleInfo  onClick={() => getLocation(item.id)}>
                            {item.name}
                        </ParagraphTitleInfo>
                        <ContainerParagraphInfo>
                            <ParagraphInfo>Tipo:</ParagraphInfo>
                            <ParagraphInfoData>{item.type}</ParagraphInfoData>
                        </ContainerParagraphInfo>
                        <ContainerParagraphInfo>
                            <ParagraphInfo>Dimesion:</ParagraphInfo>
                            <ParagraphInfoData>{item.dimension}</ParagraphInfoData>
                        </ContainerParagraphInfo>
                    </ContainerInfoCharacter>
                  </ContainerCardCharacter>
                );
              })}
          </ContainerHome>
          <Stack>
            <Pagination
                page={pagination}
              count={countPagination}
              color='secondary'
              onChange={handlePagination}
            />
          </Stack>
        </>
      )}
    </>
  );
};

export default LocationListPage;
