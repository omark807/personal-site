import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import { SITE_NAME, DEFAULT_DESCRIPTION, absoluteUrl } from '../../lib/site'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

const Layout = ({
  children,
  title,
  description = DEFAULT_DESCRIPTION,
  image = '/profpic.JPG',
  canonicalPath,
}) => {
  const pageTitle =
    title && typeof title === 'string'
      ? `${title} - ${SITE_NAME}`
      : `${SITE_NAME} - Homepage`
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image)
  const canonicalUrl = canonicalPath ? absoluteUrl(canonicalPath) : absoluteUrl('/')

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:url" content={canonicalUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={ogImage} />
        </Head>
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
