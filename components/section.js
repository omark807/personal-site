import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    shouldForwardProp(prop) || prop === 'transition'
});

const Section = ({ children, delay = 0, inView = false }) => (
  <StyledDiv
    initial={{ opacity: 0, y: 10 }}
    {...(inView
      ? {
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
        }
      : { animate: { opacity: 1, y: 0 } })}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;