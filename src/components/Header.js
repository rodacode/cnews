import { Box, Text } from '@chakra-ui/react'
import SocialIcons from './SocialIcons'
import HeaderHero from './HeaderHero'
import HeaderNav from './HeaderNav'
import AdBanner from './AdBanner'

import { DarkModeSwitch } from './DarkModeSwitch'


const Header = () => (
  <>
    <Box mb="10" mt="6" d="flex" flexDirection="row" flexWrap="wrap">
      <Box width={["100%", "100%", 1 / 3]} p="8">
        <Box display={["none", "block"]}>
          <AdBanner imageUrl='./images/celsius_network.jpg' />
        </Box>
      </Box>
      <Box width={["100%", "100%", 1 / 3]}>
        <Box mb="16">
          <HeaderHero />
        </Box>
      </Box>
      <Box width={["100%", "100%", 1 / 3]}>
        <Box d="flex" alignItems="center" mt={["2", "14"]} justifyContent="center" flexDirection="column">
          <Text textAlign="center">Follow us on:</Text>
          <SocialIcons />
          <DarkModeSwitch />

        </Box>
      </Box>
    </Box>
    <Box d="flex" mb="10" justifyContent="center">
      <HeaderNav />
    </Box>
  </>

)

export default Header

