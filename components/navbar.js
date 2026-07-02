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
  MenuDivider,
  IconButton,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { CV_LONG_URL, CV_SHORT_URL, SOCIAL_LINKS } from '../lib/site'

const primaryNavLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/research', label: 'Research' },
]

const moreNavLinks = [
  { href: '/news', label: 'News' },
  { href: '/life', label: 'Life' },
]

const contactNavLink = {
  href: SOCIAL_LINKS.email,
  label: 'Get in touch',
}

const socialNavLinks = [
  { href: SOCIAL_LINKS.github, label: 'GitHub' },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { href: SOCIAL_LINKS.scholar, label: 'Google Scholar' },
]

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('text.nav', 'text.nav')
  const activeBg = useColorModeValue('interactive.activeBg', 'interactive.activeBg')
  const activeColor = useColorModeValue('brand.DEFAULT', 'brand.muted')
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:')
  return (
    <Link
      as={isExternal ? 'a' : NextLink}
      href={href}
      p={2}
      borderRadius="md"
      bg={active ? activeBg : undefined}
      color={active ? activeColor : inactiveColor}
      fontWeight={active ? 'semibold' : 'normal'}
      textDecoration={active ? 'underline' : 'none'}
      textUnderlineOffset={3}
      target={_target}
      {...(isExternal && href?.startsWith('http') && { rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </Link>
  )
}

const MoreMenu = ({ path, navTextColor, placement = 'bottom-end' }) => {
  const moreIsActive = moreNavLinks.some(({ href }) => path === href)
  const activeColor = useColorModeValue('brand.DEFAULT', 'brand.muted')

  return (
    <Menu placement={placement}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
        p={2}
        color={moreIsActive ? activeColor : navTextColor}
        fontWeight={moreIsActive ? 'semibold' : 'normal'}
        aria-label="Open more navigation links"
        aria-haspopup="menu"
      >
        More
      </MenuButton>
      <MenuList>
        {moreNavLinks.map(({ href, label }) => (
          <MenuItem key={href} as={NextLink} href={href} fontWeight={path === href ? 'semibold' : 'normal'}>
            {label}
          </MenuItem>
        ))}
        <MenuDivider />
        <MenuItem as={Link} href={CV_LONG_URL} target="_blank" rel="noopener noreferrer">
          CV (Long-form)
        </MenuItem>
        <MenuItem as={Link} href={CV_SHORT_URL} target="_blank" rel="noopener noreferrer">
          Resume (One-page)
        </MenuItem>
        <MenuDivider />
        <MenuItem as={Link} href={contactNavLink.href}>
          {contactNavLink.label}
        </MenuItem>
        {socialNavLinks.map(({ href, label }) => (
          <MenuItem key={href} as={Link} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

const Navbar = (props) => {
  const { path } = props
  const navTextColor = useColorModeValue('text.nav', 'text.nav')
  const borderColor = useColorModeValue('border.default', 'border.default')
  const navBg = useColorModeValue('bg.nav', 'bg.nav')
  const nameColor = useColorModeValue('text.nav', 'text.nav')
  const homeActiveColor = useColorModeValue('brand.DEFAULT', 'brand.muted')

  const mobileNavItems = [
    { href: '/', label: 'Home' },
    ...primaryNavLinks,
    ...moreNavLinks,
    { href: CV_LONG_URL, label: 'CV (Long-form)', external: true },
    { href: CV_SHORT_URL, label: 'Resume (One-page)', external: true },
    { href: contactNavLink.href, label: contactNavLink.label, external: contactNavLink.href.startsWith('mailto:') },
    ...socialNavLinks.map(({ href, label }) => ({ href, label, external: true })),
  ]

  return (
    <Box
      position="sticky"
      top={0}
      as="nav"
      w="100%"
      bg={navBg}
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={10}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" gap={2} mr={4} flexShrink={0}>
          <Logo />
          <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }} aria-label="Home">
            <Text
              fontWeight="bold"
              fontSize="sm"
              letterSpacing="tight"
              color={path === '/' ? homeActiveColor : nameColor}
              display={{ base: 'none', sm: 'block' }}
            >
              Omar Khan
            </Text>
          </Link>
        </Flex>

        <Stack
          direction="row"
          display={{ base: 'none', lg: 'flex' }}
          alignItems="center"
          flexGrow={1}
          minW={0}
          spacing={1}
          justifyContent="flex-end"
        >
          {primaryNavLinks.map(({ href, label }) => (
            <LinkItem key={href} href={href} path={path}>
              {label}
            </LinkItem>
          ))}
          <MoreMenu path={path} navTextColor={navTextColor} />
        </Stack>

        <Box flexShrink={0} ml={2} display="flex" alignItems="center" justifyContent="flex-end">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', lg: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                color={navTextColor}
                aria-label="Open navigation menu"
                aria-haspopup="menu"
              />
              <MenuList maxH="70vh" overflowY="auto">
                {mobileNavItems.map(({ href, label, external }) => (
                  <MenuItem
                    key={`${href}-${label}`}
                    as={external ? Link : NextLink}
                    href={href}
                    {...(external &&
                      (href.startsWith('http') || href.endsWith('.pdf')) && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    fontWeight={path === href ? 'semibold' : 'normal'}
                  >
                    {label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
