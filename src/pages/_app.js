import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import React from 'react';
import {wrapper} from '../state/reducers/index';

import theme from '../theme'

const WrappedApp = ({Component, pageProps}) => {
  return (
    <>
        <ChakraProvider resetCSS theme={theme}>
          <ColorModeProvider
            options={{
              useSystemColorMode: true,
            }}
          >
            <Component {...pageProps} />
          </ColorModeProvider>
        </ChakraProvider>
    </>
  )
}

export default wrapper.withRedux(WrappedApp);


