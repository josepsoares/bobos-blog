import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import ThemeContext from '../styles/ThemeContext'
import GlobalStyles from '../styles/GlobalStyles'

import Header from '../components/header'
import Footer from '../components/footer'
import PageWrapper from '../components/pageWrapper'
import ScrollToTopButton from '../components/buttons/scrollToTopButton'

const MyApp = ({ Component, pageProps, router }) => {
  const [displayFooter, setDisplayFooter] = useState(true)

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })
  }, [router])

  return (
    <ThemeContext>
      <GlobalStyles />
      <PageWrapper>
        <Header />
        <AnimatePresence
          onExitComplete={() => setDisplayFooter(false)}
          exitBeforeEnter
        >
          <motion.main
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
            initial={{
              opacity: 0,
              y: -25
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -25
            }}
            onAnimationComplete={() => setDisplayFooter(true)}
            key={router.route}
          >
            <Component {...pageProps} />
            <ScrollToTopButton />
          </motion.main>
        </AnimatePresence>
        <Footer display={displayFooter} />
      </PageWrapper>
    </ThemeContext>
  )
}

export default MyApp
