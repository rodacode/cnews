import Link from 'next/link'
import { Flex, Box } from '@chakra-ui/react'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcons = () => {
    return (
        <>
            <Flex justifyContent="center" flexDirection="row" maxW={'15vv'}>
            </Flex>
            <Flex justifyContent="center">
                <Link href="https://www.instagram.com/the_crypto_road/"><a target="_blank">
                    <Box m="4"><FontAwesomeIcon icon={faInstagram} /></Box>
                </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UCG2SZYXxL-jErJ9lW0fO89w"><a target="_blank">
                    <Box m="4"><FontAwesomeIcon icon={faYoutube} /></Box>
                </a>
                </Link>
                <Link href="https://twitter.com/thecryptoroad?s=09"><a target="_blank">
                    <Box m="4"><FontAwesomeIcon icon={faTwitter} /></Box>
                </a>
                </Link>
            </Flex>
        </>
    )
}

export default SocialIcons

