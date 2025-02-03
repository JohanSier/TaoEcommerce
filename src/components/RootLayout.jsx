import React from "react";
import styled from "styled-components";
import TopBarInfo from "./TopBarInfo";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cookies from "./Cookies";
import { Outlet} from "react-router";
import TawkToChat from "./TawkToChat"; // ✅ Import the chat component


const StyledOutlet = styled(Outlet)`
    margin-top: 0;
    padding-top: 1rem;
`

const RootLayout = () => {
  return (
    <>
      <TopBarInfo />
      <NavBar />

      <StyledOutlet />

      <Footer />
      <TawkToChat />
      <Cookies />
    </>
  );
};

export default RootLayout;