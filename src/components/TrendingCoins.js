import React, { useState, useEffect } from 'react';
import { Flex, Box, Heading, Image } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react"

const TrendingCoins = () => {
    const [coins, setCoins] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://api.coingecko.com/api/v3/search/trending'

    useEffect(() => {
        try {
            setIsLoading(true)
            fetch(url).then((res) => res.json()).then((response) => {
                setCoins(response.coins);
                setIsLoading(false)
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <Box boxShadow="dark-lg" color="#000" bg="#f6f6f6" p="10" m="4" borderRadius="50">
            <Flex flexDirection='column' flexWrap="wrap">

                <Heading textAlign="center">Trending coins on Coingecko</Heading>
                { !isLoading ?
                    <>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Token</Th>
                                    <Th>Name</Th>
                                    <Th>Ranking</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {coins && coins.map((coin) => {
                                    return (
                                        <React.Fragment key={coin.id}>
                                            <Tr>
                                                <Td d="flex" flexDirection="row">
                                                    <Image mr="2" src={coin.item.thumb} boxSize="20px"
                                                    />{coin.item.symbol.toUpperCase()}</Td>
                                                <Td>{coin.item.name.toUpperCase()}</Td>
                                                <Td>#{coin.item.market_cap_rank}</Td>
                                            </Tr>
                                        </React.Fragment>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    </> : <Image src="./images/trending_coins_fallback.png" />
                }
            </Flex>
        </Box>
    );
};

export default TrendingCoins;
