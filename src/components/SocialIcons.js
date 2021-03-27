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
                <Box m="4">
                    <FontAwesomeIcon icon={faInstagram} />

                </Box>

                <Box m="4"><FontAwesomeIcon icon={faYoutube} /></Box>
                <Link href="https://twitter.com/thecryptoroad?s=09"><a target="_blank">
                    <Box m="4"><FontAwesomeIcon icon={faTwitter} /></Box>
                </a>
                </Link>
            </Flex>
        </>
    )
}

export default SocialIcons

