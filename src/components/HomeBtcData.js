import { Box, Heading } from '@chakra-ui/react';

const HomeBtcData = () => {
    return (
        <Box p="4">
            <Heading textAlign="center" mt="12" mb="12">BITCOIN PRICE</Heading>
            <iframe src="https://lunarcrush.com/widgets/candlestick?symbol=BTC&interval=1 Week&animation=false&theme=dark" id="candlestick" frameBorder="0" border="0" cellSpacing="0" scrolling="no" Style="width: 100%; height: 450px;"></iframe>
        </Box>
    )
}

export default HomeBtcData