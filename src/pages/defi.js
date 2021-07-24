import React, { useState, useEffect } from 'react'
import { Container } from '../components/Container'
import { Text } from '@chakra-ui/react'
import Navbar from "../components/NavBar"
import Head from 'next/head'
import useSticky from "../hooks/useSticky.js"
import Header from '../components/Header'
import DefiContent from '../components/DefiContent'

const Defi = () => {
  const { isSticky, element } = useSticky()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const url = 'https://data-api.defipulse.com/api/v1/defipulse/api/MarketData?api-key=15b2eea05f29a1e28633f7d5d30cf2905b0cc47ed7d002c73233ac2a3bf0'

  useEffect(() => {
    try {
      setIsLoading(true)
      fetch(url).then((res) => res.json()).then((response) => {
        setData(response);
        setIsLoading(false)
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <>
      <Head>
        <title>The Crypto Road</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="All about defi and cryptocurrencies" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G2G7GEHKSN"></script>
      </Head>
      <Container width="100vw" minH="100vh">
        <Navbar sticky={isSticky} />
        <Header />
        <DefiContent element={element} />
        {data ?
          <>
            <Text>Total: {data.All?.total} </Text>
            <Text>Dominance: {data.All.dominance_name} </Text>

            <Text>Dominance value: {data.All.dominance_value} </Text>
            <Text>Value: {data.All.value.total.USD.value} </Text>
          </> :
          null}
      </Container>
    </>
  )
}

export default Defi
