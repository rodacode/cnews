import React, { useState, useEffect } from 'react';
import {
    Box, Text, Image, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react';
import TopTenCoinsSkeleton from '../components/TopTenCoinsSkeleton'


const OraclesWikiContent = ({ element }) => {
    const [coins, setCoins] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false'

    useEffect(() => {
        try {
            setIsLoading(true)
            fetch(url).then((res) => res.json()).then((response) => {
                console.log('coins', response)
                setCoins(response);
                setIsLoading(false)
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    const filterCoin = (coinId) => {
        if (!coins) return null
        const filteredCoin = coins.filter(coin => coin.id === coinId)
        return filteredCoin[0]
    }
    return (
        <Box p="2" mt="8" ref={element}>
            <Text fontSize="24px" textAlign="center">
                ORACLES
            </Text>
            <Box p="4" d="flex" justifyContent="center" flexDirection="row" flexWrap="wrap">
                <Box d="flex" justifyContent="center" width={["100%", "50%"]}>
                    <Text fontSize="14px" >
                        Oracles provide external data to smart contracts that operate on blockchain technology. Since blockchains and smart contracts are closed systems (where there are rigid processes for connecting to external data sources), oracles present a way of securely providing off-chain data to a blockchain network’s on-chain environment. They are essentially a form of communication between the outside world and the world of blockchain. There are a few different types of oracles that we’ll discuss, and we’ll cover the potential challenges that oracles face within their role of executing smart contracts.
                        Blockchains and smart contracts cannot access data from outside of their network. In order to know what to do, a smart contract often needs access to in- formation from the outside world that is relevant to the contractual agreement, in the form of electronic data, also referred to as oracles. These oracles are services that send and verify real world occurrences and submit this information to smart contracts, triggering state changes on the blockchain.                  </Text>
                </Box>
                <Box p="4" d="flex" justifyContent="center" flexDirection="column" width={["100%", "50%"]}>
                    {!isLoading ? (
                        <Table variant="simple" size={["sm", "md"]}>
                            <Tbody>
                                <Tr>
                                    <Td><Image src={filterCoin('chainlink')?.image} boxSize="20px"
                                    /></Td>
                                    <Td>{filterCoin('chainlink')?.symbol.toUpperCase()}</Td>
                                    <Td>{filterCoin('chainlink')?.name.toUpperCase()}</Td>
                                    <Td isNumeric>{filterCoin('chainlink')?.current_price} US$</Td>
                                </Tr>
                                <Tr>
                                    <Td><Image src={filterCoin('band-protocol')?.image} boxSize="20px"
                                    /></Td>
                                    <Td>{filterCoin('band-protocol')?.symbol.toUpperCase()}</Td>
                                    <Td>{filterCoin('band-protocol')?.name.toUpperCase()}</Td>
                                    <Td isNumeric>{filterCoin('band-protocol')?.current_price} US$</Td>
                                </Tr>
                                <Tr>
                                    <Td><Image src={filterCoin('uma')?.image} boxSize="20px"
                                    /></Td>
                                    <Td>{filterCoin('uma')?.symbol.toUpperCase()}</Td>
                                    <Td>{filterCoin('uma')?.name.toUpperCase()}</Td>
                                    <Td isNumeric>{filterCoin('uma')?.current_price} US$</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    ) :
                        <TopTenCoinsSkeleton />
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default OraclesWikiContent
