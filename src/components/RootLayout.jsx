import React from "react";
import styled from "styled-components";
import TopBarInfo from "./TopBarInfo";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cookies from "./Cookies";
import { Outlet} from "react-router-dom";
import TawkToChat from "./TawkToChat"; // ✅ Import the chat component
import SizeGuide from "./SizeGuide"; // Importar el componente SizeGuide
import { useSizeGuide } from "../context/SizeGuideContext"; // Importar el contexto de SizeGuide


const StyledOutlet = styled(Outlet)`
    margin-top: 0;
    padding-top: 1rem;
`

const RootLayout = () => {
  const { isSizeGuideVisible } = useSizeGuide(); // Obtener el estado de visibilidad del SizeGuide

  return (
    <>
      <TopBarInfo />
      <NavBar />

      <StyledOutlet />

      {/* Renderizar el SizeGuide a nivel superior */}
      {isSizeGuideVisible && <SizeGuide />}

      <Footer />
      <TawkToChat />
      <Cookies />
    </>
  );
};

export default RootLayout;