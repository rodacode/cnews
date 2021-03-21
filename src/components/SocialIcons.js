import { Flex, Box } from '@chakra-ui/react'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcons = () => (
    <>
        <Flex justifyContent="center" flexDirection="row" maxW={'15vv'}>
        </Flex>
        <Flex justifyContent="center">
            <Box m="4"><FontAwesomeIcon icon={faInstagram} /></Box>
            <Box m="4"><FontAwesomeIcon icon={faYoutube} /></Box>
            <Box m="4"><FontAwesomeIcon icon={faTwitter} /></Box>
            
        </Flex>
    </>

)


export default SocialIcons

