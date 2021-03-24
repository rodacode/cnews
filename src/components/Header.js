import { Box, Text } from '@chakra-ui/react'
import SocialIcons from './SocialIcons'
import HeaderHero from './HeaderHero'
import AdBanner from './AdBanner'

import { DarkModeSwitch } from './DarkModeSwitch'


const Header = () => (
  <Box mb="20" mt="6" d="flex" flexDirection="row" flexWrap="wrap">
    <Box width={["100%","100%",1 / 3]} p="8">
      <AdBanner imageUrl='./images/celsius_network.jpg' />
    </Box>
    <Box width={["100%","100%",1 / 3]}>
      <Box mb="16">
        <HeaderHero />
      </Box>
    </Box>
    <Box width={["100%","100%",1 / 3]}>
      <DarkModeSwitch />
      <Box d="flex" justifyContent="center" flexDirection="column">
        <Text textAlign="center">Follow us on:</Text>
        <SocialIcons />
      </Box>
    </Box>

  </Box>
)

export default Header

