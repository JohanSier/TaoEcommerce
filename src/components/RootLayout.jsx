import React from "react";
import TopBarInfo from "./TopBarInfo";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cookies from "./Cookies";
import { Outlet } from "react-router";
import styled from "styled-components";

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
      <Cookies />
    </>
  );
};

export default RootLayout;
