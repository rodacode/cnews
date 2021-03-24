import Link from 'next/link'
import Header from '../components/Header'

export default function FourOhFour() {
  return <>
    <Header />
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}