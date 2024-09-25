import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  HStack,
  Text,
  Button,
  Switch,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, SettingsIcon } from "@chakra-ui/icons"
import { useState } from 'react'

const ThemeToggleButton = ({ toggleSnow, isSnowEnabled }) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [fontSize, setFontSize] = useState('md')

    const changeFontSize = (size) => {
        setFontSize(size)
        // You would need to implement a way to apply this font size globally
        // This could be done through a context or by updating a global CSS variable
    }

    return (
        <Popover placement="bottom-end">
            <PopoverTrigger>
                <IconButton
                    aria-label="Customize Theme"
                    isRound="true"
                    colorScheme={useColorModeValue('blackAlpha', 'orange')}
                    icon={<SettingsIcon />}
                >
                </IconButton>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverBody>
                    <VStack align="stretch" spacing={4}>
                        <HStack justify="space-between">
                            <Text>Theme:</Text>
                            <IconButton
                                aria-label="Toggle Light/Dark Theme"
                                icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                                onClick={toggleColorMode}
                                size="sm"
                            />
                        </HStack>
                        <HStack justify="space-between">
                            <Text>Text Size:</Text>
                            <HStack>
                                {['sm', 'md', 'lg'].map((size) => (
                                    <Button
                                        key={size}
                                        size="sm"
                                        onClick={() => changeFontSize(size)}
                                        variant={fontSize === size ? 'solid' : 'outline'}
                                    >
                                        {size.toUpperCase()}
                                    </Button>
                                ))}
                            </HStack>
                        </HStack>
                        <HStack justify="space-between">
                            <Text>Snow:</Text>
                            <Switch isChecked={isSnowEnabled} onChange={toggleSnow} />
                        </HStack>
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default ThemeToggleButton