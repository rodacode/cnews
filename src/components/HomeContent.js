import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header'
import { Container } from './Container'
import { Sidebar } from './Sidebar'
import {
    Box,
    Grid,
    GridItem,
    Heading
} from '@chakra-ui/react';
import HomeNews from './HomeNews'
import TweetsContainer from './TweetsContainer'
import TrendingCoins from './TrendingCoins'
import Footer from './Footer'
import {
    loadTopTenCoinsPending,
    loadTopTenCoinsSuccess,
    loadTopTenCoinsFailed,
    loadNewsPending,
    loadNewsSuccess,
    loadNewsFailed
} from '../store/actions'

const HomeContent = ({ element }) => {
    const dispatch = useDispatch();
    const urlTopTenCoins = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    const urlNews = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=62eee749360372fab862d03840783d318375637c3a8a02fd6b8d529cb94a008a'

    useEffect(() => {
        try {
            dispatch(loadTopTenCoinsPending())
            fetch(urlTopTenCoins).then((res) => res.json()).then((response) => {
                dispatch(loadTopTenCoinsSuccess(response))
            })
        } catch (error) {
            dispatch(loadTopTenCoinsFailed(error))
        }
    }, [])

    useEffect(() => {
        try {
            dispatch(loadNewsPending())
            fetch(urlNews).then((res) => res.json()).then((response) => {
                dispatch(loadNewsSuccess(response.Data))
            })
        } catch (error) {
            dispatch(loadNewsFailed(error))
        }
    }, [])

    return (
        <Container width="100vw" minH="100vh" >
            <Box>
                <Header />
                <Box minW="100vw" pb="12">
                    <Grid
                        templateColumns="repeat(5, 1fr)"
                        gap={2}>
                        <GridItem colSpan={[5, 5, 3]}>
                            <Box>
                                <div ref={element}>
                                    <Heading textAlign="center" >NEWS</Heading>
                                    <HomeNews/>
                                </div>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={[5, 5, 2]}>
                            <Box>
                                <Sidebar />
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
                <Box minW="100vw">
                    <TrendingCoins />
                    <TweetsContainer title="BTC" account1="DocumentingBTC" account2="BTC_Archive" account3="BitcoinFear" account4="whale_alert" />
                    <Footer />
                </Box>
            </Box>
        </Container>
    )
}

export default HomeContent
