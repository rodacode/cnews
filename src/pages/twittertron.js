import { Container } from '../components/Container'
import Navbar from "../components/NavBar"
import Head from 'next/head'
import TwitterTronContent from  "../components/TwitterTronContent"
import useSticky from "../hooks/useSticky.js"

const Twittertron = () => {
    const { isSticky, element } = useSticky()

  return (
    <>
      <Head>
        <title>The Crypto Road - TwitterTron</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="✅ Check many twitter accounts at the same time. Customize your followers" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G2G7GEHKSN"></script>
      </Head>
      <Container width="100vw" minH="100vh">
        <Navbar sticky={isSticky} />
        <TwitterTronContent element={element}/>
      </Container>
    </>
  )
}

export default Twittertron
