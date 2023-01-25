import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FooterComponent from "./Components/FooterComponent";
import { ContainerSite } from './styled-components'
import HeaderComponent from "./Components/HeaderComponent";
import CharacterListPage from './Pages/CharacterList'

const App = () => {
  return (
    <ContainerSite>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character' element={<CharacterListPage />} />
          <Route path='/character/:id' element={<p>Personaje</p>} />
          <Route path='/episode' element={<p>Episodios</p>} />
          <Route path='/episode/:id' element={<p>Episodio</p>} />
          <Route path='/location' element={<p>Locaciones</p>} />
          <Route path='/location/:id' element={<p>Locacion</p>} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </ContainerSite>
  );
};

export default App;
