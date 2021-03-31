import { useColorMode, Switch } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      position="relative"
      top="3rem"
      right="2rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
