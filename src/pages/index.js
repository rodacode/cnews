import { Container } from '../components/Container'
import Navbar from "../components/NavBar"
import HomeContent from '../components/HomeContent'
import useSticky from "../hooks/useSticky.js"
import Head from 'next/head'

const Index = () => {
  const { isSticky, element } = useSticky()

  return (
    <>
      <Head>
        <title>The Crypto Road</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Crypto and Bitcoin news, price and traders tricks. Enjoy the crypto road to the descentralize land" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G2G7GEHKSN"></script>
        <script dangerouslySetInnerHTML={
          {
            __html: `
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-G2G7GEHKSN');
  `}
        }>
        </script>
      </Head>
      <Container width="100vw" minH="100vh">
        <Navbar sticky={isSticky} />
        <HomeContent element={element} />
      </Container>
    </>
  )
}

export default Index
