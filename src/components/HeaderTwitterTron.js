import { Box, Text } from '@chakra-ui/react'
import SocialIcons from './SocialIcons'
import HeaderHeroTwitterTron from './HeaderHeroTwitterTron'
import HeaderNav from './HeaderNav'

import { DarkModeSwitch } from './DarkModeSwitch'


const HeaderTwitterTron = () => (
  <>
    <Box d="flex" flexDirection="row" flexWrap="wrap" bgGradient="linear(to-l, #2AFA85,#FF0080)">
      <Box width={["100%", "100%", 1 / 3]} p="8">
        <Box display={["none", "block"]}>
        </Box>
      </Box>
      <Box width={["100%", "100%", 1 / 3]}>
        <Box mb="16">
          <HeaderHeroTwitterTron />
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
  </>

)

export default HeaderTwitterTron

