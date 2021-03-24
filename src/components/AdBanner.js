import Link from 'next/link'
import { Box, Image } from '@chakra-ui/react';

const AdBanner = ({ imageUrl, link="#" }) => {
    return (
        <Box p="8">
            <Link href={link}>
                <a>
                    <Image src={imageUrl} />
                </a>
            </Link>
        </Box>
    )
}

export default AdBanner
