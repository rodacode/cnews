import { useSelector } from 'react-redux';
import { Box, Text, Heading, Image } from '@chakra-ui/react';

const HomeTutorials = () => {
    const tutorials = useSelector(state => state.news);

    return (
        <Box pt="12" pb="20" m="4" mt="20">
            <Box d="flex" justifyContent="center" textAlign="center">
                <Heading mt="6" mb="6" textAlign="center">TUTORIALS</Heading>
            </Box>
            <Box d="flex" flexWrap="wrap" justifyContent="space-around" m="4">

                {tutorials &&
                    tutorials.map(tutorial => {
                        return (
                            <Box
                                key={tutorial.id}
                                maxW="xs"
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                m="2"
                                boxShadow="dark-lg"
                            >
                                <Box
                                    bgGradient="linear(to-t, green.200, pink.500)">
                                    <Heading p="2" mb="0" as="h4" size="md">
                                        <strong>{tutorial.title}</strong>
                                    </Heading>
                                </Box>
                                <Box d="flex" p="6" bg="#fff">
                                    <Box>
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

export default HomeTutorials;