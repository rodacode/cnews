import Link from 'next/link'
import HeaderHero from '../components/Header'
import {
    Box
} from '@chakra-ui/react';
export default function FourOhFour() {
    return <>
        <Box textAlign="center">
            <HeaderHero />
            <h1>404 - Page Not Found</h1>
            <Link href="/">
                <a>
                    Go back home
      </a>
            </Link>
        </Box>
    </>
}