import { Container } from '../components/Container'
import Navbar from "../components/NavBar"
import Head from 'next/head'
import CardanoPageContent from  "../components/CardanoPageContent"
import useSticky from "../hooks/useSticky.js"

const Cardano = () => {
    const { isSticky, element } = useSticky()

  return (
    <>
      <Head>
        <title>The Crypto Road</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="News about Bitcoin. Bitcoin price" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G2G7GEHKSN"></script>
      </Head>
      <Container width="100vw" minH="100vh">
        <Navbar sticky={isSticky} />
        <CardanoPageContent element={element}/>
      </Container>
    </>
  )
}

export default Cardano
