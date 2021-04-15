import React from 'react';
import { Box, Text, Heading, Image } from '@chakra-ui/react';

const NewsCard = ({ title, description, imageUrl, url }) => {
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="#fff"
            m="3">
            <Box borderWidth="1px"
                overflow="hidden"
                bgGradient="linear(to-t, blue.200, green.500)"
                minH="120px">
                <Heading m="4" mb="4" as="h4" size="md">
                    <strong>{title}</strong>
                </Heading>
            </Box>
            <Box d="flex" flexDirection="column">
                <Box maxH="380px">
                    <Image boxSize="100%" src={imageUrl} alt="uni news" />
                </Box>
                <Box>
                    <Text m="5" mt="4" color="#000">
                        {description}
                    </Text>
                </Box>
            </Box>
            <Box m="5" as="a" href={url}>
                Read more...
              </Box>
        </Box>
    )
};

export default NewsCard;
