import { useSelector } from 'react-redux';
import { Box, Text, Heading, Image } from '@chakra-ui/react';

const HomeNFT = () => {
    const nftNews = useSelector(state => state.news);

    return (
        <Box pt="12" pb="20" m="4" mt="20">
            <Box  d="flex" justifyContent="center" textAlign="center">
                <Heading mt="6" mb="6" textAlign="center">NFT ZONE</Heading>
            </Box>
            <Box d="flex" flexWrap="wrap" justifyContent="space-around" m="4">

                {nftNews &&
                    nftNews.map(tutorial => {
                        return (
                            <Box
                                key={tutorial.id}
                                maxW="xs"
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                m="2"
                                bgGradient="linear(to-t, green.200, pink.500)"
                                boxShadow="dark-lg"
                            >
                                <Heading m="5" mb="0" as="h4" size="md">
                                    <strong>{tutorial.title}</strong>
                                </Heading>
                                <Box d="flex" p="6">
                                    <Box w={1 / 3}>
                                        <Image src={tutorial.img} alt="uni news" />
                                    </Box>
                                    <Box w={2 / 3}>
                                        <Text m="5" mt="0">
                                            {tutorial.text}
                                        </Text>
                                    </Box>
                                </Box>
                                <Box m="5" as="a" href={tutorial.url}>
                                    Leer más...
              </Box>
                            </Box>
                        );
                    })}
            </Box>
        </Box>

    );
};

export default HomeNFT;
