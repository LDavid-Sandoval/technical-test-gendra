import React, { useState, useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useFetch from "../../Hooks/useFetch";
import {
  ContainerHome,
  ContainerCardCharacter,
  ContainerImgCharacter,
  ContainerInfoCharacter,
  ImgCharacter,
  ParagraphTitleInfo,
  ContainerParagraphInfo,
  ParagraphInfo,
  ParagraphInfoData,
} from "./styled-components";
import { baseUrlApi } from "../../Constants";
import {
  addPageListCharacter,
  addListCharacter,
} from "../../Features/Character/characterSlice";

const CharacterListPage = () => {
  const listCharacter = useSelector((state) => state.listCharacter);
  const [pagination, setPagination] = useState(listCharacter.page);
  const [countPagination, setcountPagination] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      dispatch(addListCharacter(response.results));
      setcountPagination(response.info.pages);
    }
  }, [dispatch, response]);

  const handlePagination = (event, pageNumber) => {
    event.preventDefault();
    dispatch(addPageListCharacter(pageNumber));
    setPagination(pageNumber);
  };

  const getCharacter = (id) => {
    navigate(`${location.pathname}/${id}`);
  };

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
            {listCharacter.data.length > 0 &&
              listCharacter.data.map((item) => {
                return (
                  <ContainerCardCharacter key={item.id}>
                    <ContainerImgCharacter
                      onClick={() => getCharacter(item.id)}>
                      <ImgCharacter
                        src={item.image}
                        alt={`character-list-${item.id}`}
                      />
                    </ContainerImgCharacter>
                    <ContainerInfoCharacter>
                      <ParagraphTitleInfo onClick={() => getCharacter(item.id)}>
                        {item.name}
                      </ParagraphTitleInfo>
                      <ContainerParagraphInfo>
                        <ParagraphInfo>Especie:</ParagraphInfo>
                        <ParagraphInfoData>{item.species}</ParagraphInfoData>
                      </ContainerParagraphInfo>
                      <ContainerParagraphInfo>
                        <ParagraphInfo>Estatus:</ParagraphInfo>
                        <ParagraphInfoData>{item.status}</ParagraphInfoData>
                      </ContainerParagraphInfo>
                      <ContainerParagraphInfo>
                        <ParagraphInfo>Origen:</ParagraphInfo>
                        <ParagraphInfoData>
                          {item.origin.name}
                        </ParagraphInfoData>
                      </ContainerParagraphInfo>
                      <ContainerParagraphInfo>
                        <ParagraphInfo>Genero:</ParagraphInfo>
                        <ParagraphInfoData>{item.gender}</ParagraphInfoData>
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

export default CharacterListPage;
