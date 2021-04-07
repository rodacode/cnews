import { useColorMode, Switch } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      position="relative"
      top={"5%"}
      right={"5%"}
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
