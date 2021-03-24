import React, { useState, useEffect } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react"
import TopTenCoinsSkeleton from './TopTenCoinsSkeleton'

const TopTenCoins = () => {
    const [coins, setCoins] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

    useEffect(() => {
        try {
            setIsLoading(true)
            fetch(url).then((res) => res.json()).then((response) => {
                console.log('REsponse', response)
                setCoins(response);
                setIsLoading(false)
            })
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <Flex flexDirection='column'>
            {!isLoading ? (
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Coin</Th>
                            <Th textAlign="center">Price</Th>
                            <Th >Last 24 hs.</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {coins && coins.map((coin) => {
                            return (
                                <Tr>
                                    <Td><Image src={coin.image} boxSize="20px"
                                    /></Td>
                                    <Td>{coin.symbol.toUpperCase()}</Td>
                                    <Td isNumeric>{coin.current_price} US$</Td>
                                    { Math.sign(coin.price_change_percentage_24h) === -1 ?
                                        <Td color="red">{coin.price_change_percentage_24h.toFixed(2)} %</Td> :
                                        <Td color="green">{coin.price_change_percentage_24h.toFixed(2)} %</Td>
                                    }
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            ) :
                <TopTenCoinsSkeleton />
            }
        </Flex>
    );
};

export default TopTenCoins;
