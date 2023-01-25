import React from "react";
import logoIcon from "../../assets/img/logo-img.png";
import { ContainerHeaderImg } from "./styled-components";

const HeaderComponent = () => {
  return (
    <ContainerHeaderImg>
      <img alt='logo/test/rick' src={logoIcon} />
    </ContainerHeaderImg>
  );
};

export default HeaderComponent;
