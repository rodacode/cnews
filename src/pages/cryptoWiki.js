import React, { useState, useEffect } from 'react';
import { Container } from '../components/Container'
import Navbar from "../components/NavBar"
import Head from 'next/head'
import {
  Box, Text, Image, Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react';
import useSticky from "../hooks/useSticky.js"
import Footer from '../components/Footer'
import Header from '../components/Header'
import OraclesWikiContent from '../components/OraclesWikiContent';

const CryptoWiki = () => {
  const { isSticky, element } = useSticky()


  return (
    <>
      <Head>
        <title>The Crypto Road</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="✅ News about Bitcoin. Bitcoin price.Tutorials about blockchain and crypto" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G2G7GEHKSN"></script>
      </Head>
      <Container width="100vw" minH="100vh">
        <Header />
        <Navbar sticky={isSticky} />
        <Box minW="100vw" element={element}>
          <Box width={"100%"} mr="auto" ml="auto" d="flex" flexDirection="column" flexWrap="wrap" justifyContent="center">
            <Box p="2" mt="8">
              <Text fontSize="24px" textAlign="center">
                TOKEN TYPES
              </Text>
            </Box>
            <Box p="2" d="flex" ml="auto" mr="auto" justifyContent="center" width={["320px", "90%"]} >
              <Image boxSize="100%" borderRadius="5px" src={'./images/token_types.png'} alt="token types" />
            </Box>
            <OraclesWikiContent element={element} />
          </Box>
        </Box>

        <Footer />

      </Container>
    </>
  )
}

export default CryptoWiki
