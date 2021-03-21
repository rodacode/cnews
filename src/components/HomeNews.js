import React, { useState, useEffect } from 'react';
import { Box, Text, Heading, Image } from '@chakra-ui/react';
import useFetch from '../hooks/useFetch';

const HomeNews = () => {
  const [news, setNews] = useState()
  const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=62eee749360372fab862d03840783d318375637c3a8a02fd6b8d529cb94a008a'

  useEffect(() => {
    try {
      fetch(url).then((res)=>res.json()).then((response)=>{
        setNews(response.Data);
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <Box d="flex" flexWrap="wrap" justifyContent="center" m="4">
      {news &&
        news.slice(0,6).map(news => {
          return (
            <Box
              key={news.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="#fff"
              m="3">
              <Box borderWidth="1px"
                overflow="hidden"
                bgGradient="linear(to-t, blue.200, green.500)">
                <Heading m="5" mb="0" as="h4" size="md">
                  <strong>{news.title}</strong>
                </Heading>
              </Box>
              <Box d="flex" flexDirection="column">
                <Box>
                  <Image boxSize="100%" src={news.imageurl} alt="uni news" />
                </Box>
                <Box>
                  <Text m="5" mt="0" color="#000">
                    {news.body}
                  </Text>
                </Box>
              </Box>
              <Box m="5" as="a" href={news.url}>
                Leer más...
              </Box>
            </Box>
          );
        })}
    </Box >
  );
};

export default HomeNews;
