import React, { useState } from 'react';
import {
    Box,
    Text,
    Collapse
} from '@chakra-ui/react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const CryptoDictionaryWord = ({ word }) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <>
            <Box d="flex" flexDirection="row" alignItems="center" flexWrap="wrap" justifyContent="flex-start">
                <Text fontWeight="bold" fontSize={["14px", "16px"]}>{word.title}</Text>
                <Box pl="6" onClick={handleToggle}>
                    {show ? <BiChevronUp /> : <BiChevronDown />}
                </Box>

            </Box>
            <Collapse in={show} animateOpacity>
                <Box p="4" maxW={["320px", "640px"]}>
                    <Text fontSize={["12px", "12px"]}>{word.text}</Text>
                </Box>
            </Collapse>
        </>
    )
};

export default CryptoDictionaryWord;
