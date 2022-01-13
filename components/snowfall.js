import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
// import { useSnowMode } from "@chakra-ui/color-mode";
import { IoSnowOutline, IoSnowSharp } from "react-icons/io5";

const SnowToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    // const { toggleSnowMode } = useSnowMode()

    return(
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                // key={ useSnowModeValue('snow', 'nosnow') }
                // initial={{ y: -20, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // exit={{ y: 20, opacity: 0 }}
                // transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="Toggle Snow"
                    colorScheme={useColorModeValue('red', 'green')}
                    icon={useColorModeValue(<IoSnowOutline />, <IoSnowSharp />)}
                    onClick={toggleColorMode}
                >
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default SnowToggleButton