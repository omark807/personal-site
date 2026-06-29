import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin, IoSchoolSharp } from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'
import { CV_LONG_URL, CV_SHORT_URL } from '../lib/site'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:')
  return (
    <Link
      as={isExternal ? 'a' : NextLink}
      href={href}
      p={2}
      bg={active ? 'pinkyPink' : undefined}
      color={active ? '#232323' : inactiveColor}
      target={_target}
      {...(isExternal && href?.startsWith('http') && { rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </Link>
  )
}

const primaryNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/life', label: 'Life' },
]

const contactNavLink = {
  href: 'mailto:omark807@gmail.com',
  label: 'Get in touch',
}

const Navbar = (props) => {
  const { path } = props
  const navTextColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Box
      position="sticky"
      top={0}
      as="nav"
      w="100%"
      bg={useColorModeValue('whiteAlpha.800', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={10}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        flexWrap={{ base: 'wrap', xl: 'nowrap' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Box as="div" letterSpacing="tighter">
            <Logo />
          </Box>
        </Flex>

        <Stack
          direction={{ base: 'column', xl: 'row' }}
          display={{ base: 'none', xl: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          minW={0}
          mt={{ base: 4, xl: 0 }}
          spacing={1}
        >
          {primaryNavLinks.map(({ href, label }) => (
            <LinkItem key={href} href={href} path={path}>
              {label}
            </LinkItem>
          ))}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
              p={2}
              color={navTextColor}
              aria-label="Open resume menu"
              aria-haspopup="menu"
            >
              Résumé(s)
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href={CV_LONG_URL} target="_blank" aria-label="Open CV (Long-form) (opens in new tab)">
                CV (Long-form)
              </MenuItem>
              <MenuItem as={Link} href={CV_SHORT_URL} target="_blank" aria-label="Open Resume (One-page) (opens in new tab)">
                Resume (One-page)
              </MenuItem>
            </MenuList>
          </Menu>
          <LinkItem href={contactNavLink.href} path={path}>
            {contactNavLink.label}
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/omark807"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            aria-label="Visit Omar Khan's GitHub profile (opens in new tab)"
          >
            <IoLogoGithub />
            <span className="sr-only">GitHub</span>
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://www.linkedin.com/in/omark807/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            aria-label="Visit Omar Khan's LinkedIn profile (opens in new tab)"
          >
            <IoLogoLinkedin />
            <span className="sr-only">LinkedIn</span>
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://scholar.google.com/citations?user=T6f-cucAAAAJ&hl=en"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            aria-label="Visit Omar Khan's Google Scholar profile (opens in new tab)"
          >
            <IoSchoolSharp />
            <span className="sr-only">Google Scholar</span>
          </LinkItem>
        </Stack>

        <Box flexShrink={0} ml={2} display="flex" alignItems="center" justifyContent="flex-end">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', xl: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                color={navTextColor}
                aria-label="Open navigation menu"
                aria-haspopup="menu"
              />
              <MenuList>
                {primaryNavLinks.map(({ href, label }) => (
                  <MenuItem key={href} as={NextLink} href={href}>
                    {label}
                  </MenuItem>
                ))}
                <Menu placement="right-start">
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    variant="ghost"
                    p={2}
                    color={navTextColor}
                    aria-label="Open resume menu"
                    aria-haspopup="menu"
                  >
                    Résumé(s)
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} href={CV_LONG_URL} target="_blank" aria-label="Open CV (Long-form) (opens in new tab)">
                      CV (Long-form)
                    </MenuItem>
                    <MenuItem as={Link} href={CV_SHORT_URL} target="_blank" aria-label="Open Resume (One-page) (opens in new tab)">
                      Resume (One-page)
                    </MenuItem>
                  </MenuList>
                </Menu>
                <MenuItem as={Link} href={contactNavLink.href}>
                  {contactNavLink.label}
                </MenuItem>
                <MenuItem as={Link} href="https://github.com/omark807" target="_blank" aria-label="Visit Omar Khan's GitHub profile (opens in new tab)">
                  GitHub
                </MenuItem>
                <MenuItem as={Link} href="https://www.linkedin.com/in/omark807" target="_blank" aria-label="Visit Omar Khan's LinkedIn profile (opens in new tab)">
                  LinkedIn
                </MenuItem>
                <MenuItem as={Link} href="https://scholar.google.com/citations?user=T6f-cucAAAAJ&hl=en" target="_blank" aria-label="Visit Omar Khan's Google Scholar profile (opens in new tab)">
                  Google Scholar
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
