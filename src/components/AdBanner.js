import { Box, Image } from '@chakra-ui/react';

const AdBanner = ({imageUrl}) => {
    return (
        <Box p="8">
            <Image src={imageUrl} />
        </Box>
    )
}

export default AdBanner
