import React, { useState, useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useFetch from "../../Hooks/useFetch";
import { ContainerHome, ContainerCardCharacter,
    ContainerImgCharacter, ContainerInfoCharacter, ImgCharacter,
    ParagraphTitleInfo, ContainerParagraphInfo, ParagraphInfo, ParagraphInfoData } from "./styled-components";
import { baseUrlApi } from "../../Constants";
import { substractTempEpi } from "../../Utils"
import {
    addPageListEpisode,
  addListEpisode,
} from "../../Features/Episode/episodeSlice";
import S1 from '../../assets/seasons/S1.jpg'
import S2 from '../../assets/seasons/S2.jpg'
import S3 from '../../assets/seasons/S3.png'
import S4 from '../../assets/seasons/S4.jpg'
import S5 from '../../assets/seasons/S5.jpg'
import S6 from '../../assets/seasons/S6.jpg'
moment.locale('es');
const episodes = [
    S1, S2, S3, S4, S5, S6
  ]

const EpisodeListPage = () => {
  const listEpisode = useSelector((state) => state.listEpisode);
  const [pagination, setPagination] = useState(listEpisode.page);
  const [countPagination, setcountPagination] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate =  useNavigate()
  const [url, setUrl] = useState(null);
  const { response, isLoading } = useFetch(url);
  const playerRef = useRef(null);

  useEffect(() => {
    if(location.search !== ""){
      const search = location.search.replace('?', '')
      setUrl(`${baseUrlApi}${location.pathname}/?page=${pagination}&${search}`);
    } else {
      setUrl(`${baseUrlApi}${location.pathname}/?page=${pagination}`);
    }
  }, [url, pagination, location.pathname, location.search]);

  useEffect(() => {
    if (response) {
      dispatch(addListEpisode(response.results));
      setcountPagination(response.info.pages);
    }
  }, [dispatch, response]);

  const handlePagination = (event, pageNumber) => {
    event.preventDefault()
    dispatch(addPageListEpisode(pageNumber));
    setPagination(pageNumber);
  };

  const getEpisode = (id) => {
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
            {listEpisode.data.length > 0 &&
              listEpisode.data.map((item) => {
                return (
                  <ContainerCardCharacter key={item.id} >
                    <ContainerImgCharacter onClick={() => getEpisode(item.id)} >
                        <ImgCharacter src={episodes[parseInt(substractTempEpi(item.episode)[0])-1]} alt={`character-list-${item.id}`} />
                    </ContainerImgCharacter>
                    <ContainerInfoCharacter>
                        <ParagraphTitleInfo  onClick={() => getEpisode(item.id)}>
                            {item.name}
                        </ParagraphTitleInfo>
                        <ContainerParagraphInfo>
                            <ParagraphInfo>Emision:</ParagraphInfo>
                            <ParagraphInfoData>{moment(item.air_date).format('L')}</ParagraphInfoData>
                        </ContainerParagraphInfo>
                        <ContainerParagraphInfo>
                            <ParagraphInfo>Episodio:</ParagraphInfo>
                            <ParagraphInfoData>{substractTempEpi(item.episode)[1]}</ParagraphInfoData>
                        </ContainerParagraphInfo>
                        <ContainerParagraphInfo>
                            <ParagraphInfo>Temporada:</ParagraphInfo>
                            <ParagraphInfoData>{substractTempEpi(item.episode)[0]}</ParagraphInfoData>
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

export default EpisodeListPage;
