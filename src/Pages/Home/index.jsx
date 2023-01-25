import React from "react";
import { ContainerHome } from './styled-components'
import HomeSection from "../../Components/HomeSection";


const Home = () => {
    return(
        <ContainerHome>
            <HomeSection type="character" />
            <HomeSection type="episode" />
            <HomeSection type="location" />
        </ContainerHome>
    )

}

export default Home