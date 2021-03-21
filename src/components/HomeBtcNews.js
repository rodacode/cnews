import { Box, Heading } from '@chakra-ui/react';

const HomeBtcNews = () => {
    return (
        <Box p="12" rounded="md">
            <Heading textAlign="center" mt="12" mb="12">BITCOIN NEWS</Heading>
            <iframe src="https://lunarcrush.com/widgets/news?symbol=BTC&interval=1 Week&animation=false&theme=dark" id="news-articles" frameBorder="0" border="0" cellspacing="0" scrolling="yes" Style="width: 100%; height: 500px;"></iframe>
        </Box>
    )
}

export default HomeBtcNews
