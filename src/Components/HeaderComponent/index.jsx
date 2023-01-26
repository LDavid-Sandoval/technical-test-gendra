import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import SearchIcon from "@mui/icons-material/Search";
import logoIcon from "../../assets/img/logo-img.png";
import { ContainerHeaderImg } from "./styled-components";
import FormsSearchComponent from "../FormSearchComponent";

Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.7)";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#2b2e60",
    border: 'none',
  },
};

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);

  const openModalSearch = () => {
    setOpenModal(!openModal);
  };

  return (
    <ContainerHeaderImg>
      <img
        alt='logo/test/rick'
        src={logoIcon}
        onClick={() => {
          navigate("/");
        }}
      />
      <SearchIcon
        color='secondary'
        sx={{
          fontSize: 40,
          color: "#b2df28",
          backgroundColor: "#00b5cc",
          borderRadius: "50%",
          padding: "8px",
          cursor: "pointer",
        }}
        onClick={openModalSearch}
      />
      <Modal
        isOpen={openModal}
        onRequestClose={openModalSearch}
        ariaHideApp={false}
        contentLabel="Selected Option"
        style={customStyles}>
        <FormsSearchComponent closeModal={() => setOpenModal()}/>
      </Modal>
    </ContainerHeaderImg>
  );
};

export default HeaderComponent;
