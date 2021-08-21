import { Box, Text } from '@chakra-ui/react'
import SocialIcons from './SocialIcons'
import HeaderHero from './HeaderHero'
import HeaderNav from './HeaderNav'

import { DarkModeSwitch } from './DarkModeSwitch'
import Link from "next/link";
import { useRouter } from "next/router";


const Header = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    <>
      <Box mb="2" mt={["2", "2"]} d="flex" flexDirection="row" flexWrap="wrap">
        <Box width={["100%", "100%", 1 / 3]} p="8" display={["none", "block"]}>
          <Box>
          </Box>
        </Box>
        <Box width={["100%", "100%", 1 / 3]}>
          <Box mb={["2", "6"]}>
            <HeaderHero />
          </Box>
        </Box>
        <Box width={["100%", "100%", 1 / 3]} display={["none", "block"]} >
          <Box d="flex" alignItems="center" mt={["2", "14"]} justifyContent="center" flexDirection="column">
            <Text>Current Language: {locale} </Text>

            <Link
              activeClassName={locale === "es-ES"}
              href={asPath}
              locale="es-ES"
            >
              es-ES
            </Link>

            <Link
              activeClassName={locale === "en-US"}
              href={asPath}
              locale="en-US"
            >
              en-US
            </Link>
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

}

export default Header

