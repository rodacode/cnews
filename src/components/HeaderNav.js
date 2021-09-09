import { Box, HStack, Link, useColorModeValue } from '@chakra-ui/react'

const Links = [
    { title: 'HOME', link: '/' },
    { title: 'BITCOIN', link: '/bitcoin' },
    { title: 'CRYPTO WIKI', link: '/cryptoWiki' },
    { title: 'DEFI', link: '/defi' },
    { title: 'DOT', link: '/polkadot' },
    { title: 'ALTCOINS', link: '/altcoins' },
    { title: 'CARDANO', link: '/cardano' },
    { title: 'ON TWITTER', link: '/twitter' }
];

const NavLink = ({ title, link }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={link}>
        {title}
    </Link>
);

const HeaderNav = () => (
    <Box>
        <HStack spacing={8} alignItems={'center'}>
            <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((item) => (
                    <NavLink key={item.title} title={item.title} link={item.link} />
                ))}
            </HStack>
        </HStack>
    </Box >
)


export default HeaderNav

