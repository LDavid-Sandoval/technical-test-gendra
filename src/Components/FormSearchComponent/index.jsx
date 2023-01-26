import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';
import {
  ContainerFormSearch,
  ParagraphTitleFormSearch,
  ContainerTypesSelect,
  ContainerInputs,
  ParagraphTitleInputForm,
  ButtonSubmit,
} from "./styled-components.js";

const seasonSelect = [
    {value: 'S01', display: 1 },
    {value: 'S02', display: 2 },
    {value: 'S03', display: 3 },
    {value: 'S04', display: 4 },
    {value: 'S05', display: 5 },
    {value: 'S06', display: 6 },
]


const FormsSearchComponent = ({closeModal}) => {
    const navigate = useNavigate()
  const [typeCharacter, setTypeCharacter] = useState(true);
  const [typeEpisode, setTypeEpisode] = useState(false);
  const [ episodesNumber, setEpisodesNumber] = useState([])
  const [characterFilters, setCharacterFilters] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });
  const [episodeFilters, setEpisodeFilters] = useState({
    name: "",
    season: "",
    episode: "",
  });

  useEffect(()=> {
    const itemsArray = []
    if(episodeFilters.season === 'S01'){
        for (let index = 0; index < 11; index++) {
            let item={};
            if( index < 10 ) {
                item =  {value: `E0${index + 1}`, display: index + 1 };
            } else {
                item =  {value: `E${index + 1}`, display: index + 1 };
            }
            itemsArray.push(item)
        }
    } else {
        for (let index = 0; index < 10; index++) {
            let item={};
            if( index < 10 ) {
                item =  {value: `E0${index + 1}`, display: index + 1 };
            } else {
                item =  {value: `E${index + 1}`, display: index + 1 };
            }
            itemsArray.push(item)
        }
    }
    setEpisodesNumber(itemsArray)
  }, [episodeFilters.season])

  const handleChangeFormType = (e) => {
    setTypeCharacter(!typeCharacter);
    setTypeEpisode(!typeEpisode);
  };
  const handleFormCharacter = (e) => {
    setCharacterFilters({
      ...characterFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormEpisode = (e) => {
    setEpisodeFilters({
      ...episodeFilters,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(typeCharacter){
        closeModal(false)
        navigate(`/character/?name=${characterFilters.name}&status=${characterFilters.status}&species=${characterFilters.species}&type=${characterFilters.type}&gender=${characterFilters.gender}`)
    } else {
        closeModal(false)
        navigate(`/episode/?name=${episodeFilters.name}&episode=${episodeFilters.season}${episodeFilters.episode}`)
    }
  };

  return (
    <ContainerFormSearch>
      <ParagraphTitleFormSearch>Busqueda</ParagraphTitleFormSearch>
      <form onSubmit={onSubmitForm}>
        <ContainerTypesSelect>
          <input
            type='checkbox'
            id='characterType'
            name='characterType'
            onChange={handleChangeFormType}
            checked={typeCharacter}
          />
          <label htmlFor='characterType'>Personajes</label>
          <input
            type='checkbox'
            id='episodeType'
            name='episodeType'
            onChange={handleChangeFormType}
            checked={typeEpisode}
          />
          <label htmlFor='episodeType'>Episodios</label>
        </ContainerTypesSelect>
        {typeCharacter && (
          <ContainerInputs>
            <ParagraphTitleInputForm>Nombre:</ParagraphTitleInputForm>
            <input
              placeholder='Nombre'
              type='text'
              name='name'
              value={characterFilters.name}
              onChange={handleFormCharacter}
            />
            <ParagraphTitleInputForm>Estado:</ParagraphTitleInputForm>
            <select
              id='status'
              name='status'
              placeholder="Estatus"
              value={characterFilters.status}
              onChange={handleFormCharacter}
              defaultValue={''}
              >
              <option hidden selected value=""> -- selecciona un estatus -- </option>
              <option value='alive'>Vivo</option>
              <option value='dead'>Muerto</option>
              <option value='unknown'>Desconocido</option>
            </select>
            <ParagraphTitleInputForm>Especie:</ParagraphTitleInputForm>
            <input
              placeholder='Especie'
              type='text'
              name='species'
              value={characterFilters.species}
              onChange={handleFormCharacter}
            />
            <ParagraphTitleInputForm>Tipo:</ParagraphTitleInputForm>
            <input
              placeholder='Tipo'
              type='text'
              name='type'
              value={characterFilters.type}
              onChange={handleFormCharacter}
            />
            <ParagraphTitleInputForm>Género:</ParagraphTitleInputForm>
            <select
              id='gender'
              name='gender'
              value={characterFilters.gender}
              onChange={handleFormCharacter}
              defaultValue=''>
              <option hidden selected value=""> -- selecciona un Género -- </option>
              <option value='female'>Femenino</option>
              <option value='male'>Masculino</option>
              <option value='genderless'>Sin género</option>
              <option value='unknown'>Desconocido</option>
            </select>
          </ContainerInputs>
        )}
        {typeEpisode && (
          <ContainerInputs>
            <ParagraphTitleInputForm>Nombre:</ParagraphTitleInputForm>
            <input
              placeholder='Nombre'
              type='text'
              name='name'
              value={episodeFilters.name}
              onChange={handleFormEpisode}
            />
            <ParagraphTitleInputForm>Temporada:</ParagraphTitleInputForm>
            <select
              id='season'
              name='season'
              value={episodeFilters.season}
              onChange={handleFormEpisode}
              defaultValue=""
              >
              <option hidden selected value=""> -- selecciona una temporada -- </option>
              {
                seasonSelect.map((item) => {
                    return <option key={uuid()} value={item.value}>{item.display}</option>
                })
              }
            </select>
            <ParagraphTitleInputForm>Episodio:</ParagraphTitleInputForm>
            <select
              id='episode'
              name='episode'
              value={episodeFilters.episode}
              onChange={handleFormEpisode}
              defaultValue=""
              >
              <option hidden selected value=""> -- selecciona una episodio -- </option>
              {
                episodesNumber.map((item)=> {
                    return <option key={uuid()} value={item.value}>{item.display}</option>
                })
              }
            </select>
          </ContainerInputs>
        )}
        <ButtonSubmit>Buscar</ButtonSubmit>
      </form>
    </ContainerFormSearch>
  );
};

export default FormsSearchComponent;
