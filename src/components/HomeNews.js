import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import NewsCard from './NewsCard';
import HomeNewsHighlights from './HomeNewsHighlights';

const HomeNews = () => {
  const [news, setNews] = useState()
  const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=62eee749360372fab862d03840783d318375637c3a8a02fd6b8d529cb94a008a'

  useEffect(() => {
    try {
      fetch(url).then((res) => res.json()).then((response) => {
        setNews(response.Data);
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <Box d="flex" flexWrap="wrap" justifyContent="center" m="4">
      <HomeNewsHighlights />
      {news &&
        news.slice(0, 4).map(news => {
          return (
            <NewsCard 
              title={news.title}
              description={news.body}
              url={news.url}
              imageUrl={news.imageurl} />
          );
        })}
    </Box >
  );
};

export default HomeNews;
