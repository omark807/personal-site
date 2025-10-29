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
                                        aria-label="Customize Theme"
                                        isRound
                                        colorScheme={useColorModeValue('blackAlpha', 'orange')}
                                        icon={<SettingsIcon />}
                                />
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
                                        </VStack>
                                </PopoverBody>
                        </PopoverContent>
                </Popover>
        )
}

export default ThemeToggleButton