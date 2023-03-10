import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Text } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import Head from "next/head";
import useSticky from "../hooks/useSticky.js";
import Header from "../components/Header";
import DefiContent from "../components/DefiContent";

const Defi = () => {
  const { isSticky, element } = useSticky();

  return (
    <>
      <Head>
        <title> The Crypto Road </title>{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="All about defi and cryptocurrencies"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G2G7GEHKSN"
        ></script>{" "}
      </Head>{" "}
      <Container width="100vw" minH="100vh">
        <Navbar sticky={isSticky} /> <Header />
        <DefiContent element={element} />{" "}
      </Container>{" "}
    </>
  );
};

export default Defi;
