import React, { useState } from 'react';
import {
    Box,
    Text,
    Collapse
} from '@chakra-ui/react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import CryptoDictionaryWord from "./CryptoDictionaryWord"

const CryptoDictionaryLetterSection = ({ letter, words }) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <>
            <Box d="block" m="4" minW="100%" p="4" borderBottom="1px solid" borderStartWidth="5px">
                <Box d="flex" flexWrap="wrap" justifyContent="flex-start" flexDirection="row" alignItems="center">
                    <Box width={["100%", "30%"]}>
                        <Text fontSize={["12vw", "6vw"]}>{letter}</Text>
                    </Box>
                    <Box>
                        {words && words.map((word) => {
                            return (
                                <CryptoDictionaryWord word={word} />
                            )
                        })}
                    </Box>
                </Box >
            </Box >

        </>
    );
};

export default CryptoDictionaryLetterSection;
