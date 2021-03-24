import React, {useState, useEffect} from 'react';
import { Flex, Image } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"

const TopTenCoins = () => {
    const [coins, setCoins] = useState()
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      
    useEffect(() => {
        try {
          fetch(url).then((res)=>res.json()).then((response)=>{
              console.log('REsponse', response)
            setCoins(response);
          })
        } catch (error) {
          console.log(error);
        }
      }, [])
    return (
        <Flex flexDirection='column'>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Coin</Th>
                        <Th >Price</Th>
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
        </Flex>
    );
};

export default TopTenCoins;
