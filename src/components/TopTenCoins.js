import { useSelector } from 'react-redux';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"

const TopTenCoins = () => {
    const coins = useSelector(state => state.coins);

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
                                <Td isNumeric>{coin.current_price} u$s</Td>
                                <Td isNumeric>{coin.price_change_percentage_24h}%</Td>

                            </Tr>
                        )


                    })}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default TopTenCoins;
