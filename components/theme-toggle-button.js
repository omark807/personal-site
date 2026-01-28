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
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, SettingsIcon } from "@chakra-ui/icons"
import { useState, createContext, useContext } from 'react'

const FontSizeContext = createContext({
        fontSize: 'md',
        setFontSize: () => {}
});

export const FontSizeProvider = ({ children }) => {
        const [fontSize, setFontSize] = useState('md');

        return (
                <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
                        {children}
                </FontSizeContext.Provider>
        );
};

export const useFontSize = () => useContext(FontSizeContext);

const ThemeToggleButton = () => {
        const { colorMode, toggleColorMode } = useColorMode()
        const { fontSize, setFontSize } = useFontSize();

        const changeFontSize = (size) => {
                setFontSize(size)
        }

        return (
                <Popover placement="bottom-end">
                        <PopoverTrigger>
                                <IconButton
                                        aria-label="Open theme and accessibility settings"
                                        aria-haspopup="dialog"
                                        isRound
                                        colorScheme={useColorModeValue('blackAlpha', 'orange')}
                                        icon={<SettingsIcon aria-hidden="true" />}
                                />
                        </PopoverTrigger>
                        <PopoverContent>
                                <PopoverBody>
                                        <VStack align="stretch" spacing={4}>
                                                <HStack justify="space-between">
                                                        <Text>Theme:</Text>
                                                        <IconButton
                                                                aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} theme`}
                                                                icon={colorMode === 'light' ? <MoonIcon aria-hidden="true"/> : <SunIcon aria-hidden="true"/>}
                                                                onClick={toggleColorMode}
                                                                size="sm"
                                                        />
                                                </HStack>
                                                <HStack justify="space-between">
                                                        <Text>Text Size:</Text>
                                                        <HStack role="group" aria-label="Text size options">
                                                                {['sm', 'md', 'lg'].map((size) => (
                                                                        <Button
                                                                                key={size}
                                                                                size="sm"
                                                                                onClick={() => changeFontSize(size)}
                                                                                variant={fontSize === size ? 'solid' : 'outline'}
                                                                                aria-label={`Set text size to ${size}`}
                                                                                aria-pressed={fontSize === size}
                                                                        >
                                                                                {size.toUpperCase()}
                                                                        </Button>
                                                                ))}
                                                        </HStack>
                                                </HStack>
                                        </VStack>
                                </PopoverBody>
                        </PopoverContent>
                </Popover>
        )
}

export default ThemeToggleButton