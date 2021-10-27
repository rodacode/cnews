import React from 'react';
import { useSelector } from "react-redux";
import { Box } from '@chakra-ui/react';
import NewsCard from './NewsCard';
import HomeNewsHighlights from './HomeNewsHighlights';
import HomeNewsSkeleton from './HomeNewsSkeleton';

const HomeNews = () => {
  const news = useSelector(state => state.news);
  const isLoading = useSelector((state) => state.isLoading)

  return (
    <>
      {!isLoading ? (
        <Box d="flex" flexDirection="row" justifyContent="space-around" flexWrap="wrap">
          <HomeNewsHighlights />
          {news &&
            news.slice(0, 4).map(news => {
              return (
                <NewsCard
                  key={news.id}
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
