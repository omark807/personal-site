import Logo from './logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub, IoLogoLinkedin, IoSchoolSharp } from "react-icons/io5";
import ThemeToggleButton from './theme-toggle-button';
import { ChevronDownIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'pinkyPink' : undefined}
      color={active ? '#232323' : inactiveColor}
      _target={_target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#fffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/about" path={path}>
            about
          </LinkItem>
          <LinkItem href="/news" path={path}>
            news
          </LinkItem>
          <LinkItem href="/research" path={path}>
            research
          </LinkItem>
          {/* <LinkItem href="/projects" path={path}>
            projects
          </LinkItem> */}
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" p={2}>
              resumé(s)
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href="https://drive.google.com/file/d/1cAUcYLSET9oTVi57cWeootpquQ7zJqYj/view?usp=sharing" target="_blank">
                CV (Long-form)
              </MenuItem>
              <MenuItem as={Link} href="https://drive.google.com/file/d/1SLNPY8m6YRH22bDSagzfqtUcuEt29Mim/view?usp=sharing" target="_blank">
                Resume (One-page)
              </MenuItem>
            </MenuList>
          </Menu>
          <LinkItem href="/life" path={path}>
            life
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/omark807"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://www.linkedin.com/in/omark807/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoLinkedin />
          </LinkItem>
          
          <LinkItem
            target="_blank"
            href="https://scholar.google.com/citations?user=T6f-cucAAAAJ&hl=en"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoSchoolSharp />
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/about">about</MenuItem>
                <MenuItem as={NextLink} href="/news">news</MenuItem>
                <MenuItem as={NextLink} href="/research">research</MenuItem>
                {/* <MenuItem as={NextLink} href="/projects">projects</MenuItem> */}
                <Menu placement="right-start">
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" p={2}>
                    resumé(s)
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} href="https://drive.google.com/file/d/1cAUcYLSET9oTVi57cWeootpquQ7zJqYj/view?usp=sharing" target="_blank">
                      CV (Long-form)
                    </MenuItem>
                    <MenuItem as={Link} href="https://drive.google.com/file/d/1SLNPY8m6YRH22bDSagzfqtUcuEt29Mim/view?usp=sharing" target="_blank">
                      Resume (One-page)
                    </MenuItem>
                  </MenuList>
                </Menu>
                <MenuItem as={Link} href="https://github.com/omark807" target="_blank">
                  github
                </MenuItem>
                <MenuItem as={Link} href="https://www.linkedin.com/in/omark807" target="_blank">
                  linkedIn
                </MenuItem>
                <MenuItem as={Link} href="https://scholar.google.com/citations?user=T6f-cucAAAAJ&hl=en" target="_blank">
                  google scholar
                </MenuItem>
                <MenuItem as={NextLink} href="/life">life</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;