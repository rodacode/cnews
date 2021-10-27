import React from 'react';
import { useSelector } from "react-redux";
import { Box, Image } from '@chakra-ui/react';
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
    const topTenCoins = useSelector((state) => state.topTenCoins)
    const isLoading = useSelector((state) => state.isLoading)

    return (
        <Box d="flex" p="4" m="4" flexDirection='column' boxShadow="dark-lg"
            borderWidth="1px"
            borderRadius="lg">
            {!isLoading ? (
                <Table variant="simple" size={["sm", "md"]}>
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Coin</Th>
                            <Th isNumeric>Price</Th>
                            <Th isNumeric>Last 24 hs.</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {topTenCoins && topTenCoins.map((coin) => {
                            return (
                                <Tr key={coin.id}>
                                    <Td><Image src={coin.image} boxSize="20px"
                                    /></Td>
                                    <Td>{coin.symbol.toUpperCase()}</Td>
                                    <Td isNumeric>{coin.current_price} US$</Td>
                                    {Math.sign(coin.price_change_percentage_24h) === -1 ?
                                        <Td isNumeric color="red">{coin.price_change_percentage_24h.toFixed(2)} %</Td> :
                                        <Td isNumeric color="green">{coin.price_change_percentage_24h.toFixed(2)} %</Td>
                                    }
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            ) :
                <TopTenCoinsSkeleton />
            }
        </Box>
    );
};

export default TopTenCoins;
