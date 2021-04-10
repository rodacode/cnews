import React, { useState, useEffect } from 'react'
import { Box, Heading, Input, InputLeftElement, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import HomeTweets from './HomeTweets'

const TwitterTronTweetsContainer = () => {
  const [inputValue1, setInputValue1] = useState('DiarioOle')
  const [inputValue2, setInputValue2] = useState('marca')
  const [inputValue3, setInputValue3] = useState('AS_NBA')
  const [inputValue4, setInputValue4] = useState('LaLiga')
  const [inputValue5, setInputValue5] = useState('chamath')
  const [inputValue6, setInputValue6] = useState('elonmusk')
  const [inputValue7, setInputValue7] = useState('whale_alert')
  const [inputValue8, setInputValue8] = useState('DocumentingBTC')
  
  const handleOnChange1 = (e) => {
    setInputValue1(e.target.value)
  }

  const handleOnChange2 = (e) => {
    setInputValue2(e.target.value)
  }
  const handleOnChange3 = (e) => {
    setInputValue3(e.target.value)
  }
  const handleOnChange4 = (e) => {
    setInputValue4(e.target.value)
  }

  const handleOnChange5 = (e) => {
    setInputValue5(e.target.value)
  }

  const handleOnChange6 = (e) => {
    setInputValue6(e.target.value)
  }
  const handleOnChange7 = (e) => {
    setInputValue7(e.target.value)
  }
  const handleOnChange8 = (e) => {
    setInputValue8(e.target.value)
  }

  const Twitters1 = () => (
    <HomeTweets
      user={inputValue1}
    />);
  const Twitters2 = () => (
    <HomeTweets
      user={inputValue2}
    />);
  const Twitters3 = () => (
    <HomeTweets
      user={inputValue3}
    />);
  const Twitters4 = () => (
    <HomeTweets
      user={inputValue4}
    />); 
    const Twitters5 = () => (
      <HomeTweets
        user={inputValue5}
      />);
  const Twitters6 = () => (
    <HomeTweets
      user={inputValue6}
    />);
  const Twitters7 = () => (
    <HomeTweets
      user={inputValue7}
    />);
  const Twitters8 = () => (
    <HomeTweets
      user={inputValue8}
    />);

  return (
    <>
      <Box boxShadow="dark-lg" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <InputGroup mb="6" mt="6">
              <InputLeftElement
                pointerEvents="none"

              >@</InputLeftElement>
              <Input variant="outline" value={inputValue1} onChange={(e) => handleOnChange1(e)} />
            </InputGroup>
            <Twitters1 />
          </Box>
          <Box m="4">
            <InputGroup mb="6" mt="6">
              <InputLeftElement
                pointerEvents="none"

              >@</InputLeftElement>
              <Input variant="outline" value={inputValue2} onChange={(e) => handleOnChange2(e)} />
            </InputGroup>
            <Twitters2 />
          </Box>
          <Box m="4">
            <InputGroup mb="6" mt="6">
              <InputLeftElement
                pointerEvents="none"

              >@</InputLeftElement>
              <Input variant="outline" value={inputValue3} onChange={(e) => handleOnChange3(e)} />
            </InputGroup>
            <Twitters3 />
          </Box>
          <Box m="4">
            <InputGroup mb="6" mt="6">
              <InputLeftElement
                pointerEvents="none"

              >@</InputLeftElement>
              <Input variant="outline" value={inputValue4} onChange={(e) => handleOnChange4(e)} />
            </InputGroup>
            <Twitters4 />
          </Box>
        </Box>
      </Box>
      <Box boxShadow="dark-lg" bgGradient="linear(to-l, #2AFA85,#FF0080)" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <InputGroup mb="6" mt="6">
              <InputLeftElement
                pointerEvents="none"

              >@</InputLeftElement>
              <Input variant="outline" value={inputValue5} onChange={(e) => handleOnChange5(e)} />
            </InputGroup>
            <Twitters5 />
          </Box>
          <Box m="4">
            <InputGroup mb="6" mt="6">
              <InputLeftElement
                pointerEvents="none"

              >@</InputLeftElement>
              <Input variant="outline" value={inputValue6} onChange={(e) => handleOnChange6(e)} />
            </InputGroup>
            <Twitters6 />
          </Box>
          <Box m="4">
            <InputGroup mb="6" mt="6">
              <InputLeftElement
                pointerEvents="none"

              >@</InputLeftElement>
              <Input variant="outline" value={inputValue7} onChange={(e) => handleOnChange7(e)} />
            </InputGroup>
            <Twitters7 />
          </Box>
          <Box m="4">
            <InputGroup mb="6" mt="6">
              <InputLeftElement
                pointerEvents="none"
              >@</InputLeftElement>
              <Input variant="outline" value={inputValue8} onChange={(e) => handleOnChange8(e)} />
            </InputGroup>
            <Twitters8 />
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default TwitterTronTweetsContainer;
