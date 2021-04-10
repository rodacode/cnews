import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import NewsCard from './NewsCard';
import HomeNewsHighlights from './HomeNewsHighlights';
import HomeNewsSkeleton from './HomeNewsSkeleton';

const HomeNews = () => {
  const [news, setNews] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=62eee749360372fab862d03840783d318375637c3a8a02fd6b8d529cb94a008a'

  useEffect(() => {
    try {
      setIsLoading(true)
      fetch(url).then((res) => res.json()).then((response) => {
        setNews(response.Data);
        setIsLoading(false)
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <>
      { !isLoading ? (
        <Box d="flex" flexDirection="row" justifyContent="space-around" flexWrap="wrap">
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
        </Box>
      ) : <HomeNewsSkeleton />
      }
    </>
  );
};

export default HomeNews;
