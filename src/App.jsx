import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FooterComponent from "./Components/FooterComponent";
import { ContainerSite } from './styled-components'
import HeaderComponent from "./Components/HeaderComponent";
import CharacterListPage from './Pages/CharacterList'
import EpisodeListPage from './Pages/EpisodesList'
import LocationListPage from './Pages/LocationList'
import CharacterDetailPage from "./Pages/Character";
import EpisodeDetailPage from "./Pages/Episodes";
import LocationDetailPage from "./Pages/Location";

const App = () => {
  return (
    <ContainerSite>
      <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character' element={<CharacterListPage />} />
          <Route path='/character/:id' element={<CharacterDetailPage />} />
          <Route path='/episode' element={<EpisodeListPage />} />
          <Route path='/episode/:id' element={<EpisodeDetailPage />} />
          <Route path='/location' element={<LocationListPage />} />
          <Route path='/location/:id' element={<LocationDetailPage />} />
        </Routes>
      <FooterComponent />
      </BrowserRouter>
    </ContainerSite>
  );
};

export default App;
