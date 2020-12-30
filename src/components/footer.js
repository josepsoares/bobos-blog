import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import styled from 'styled-components'
import { space } from 'styled-system'

const Footer = styled(motion.footer)`
  display: flex;
  justify-content: flex-end;
  font-size: 0.5em;
  width: 100%;
  ${space}

  p {
    margin: 0;
  }
`

const FooterEl = ({ display }) => {
  const footerAnimation = useAnimation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (display) {
        footerAnimation.start({
          display: 'flex',
          transition: {
            type: 'tween',
            duration: 0.5
          },
          transitionEnd: { opacity: 1 }
        })
      }
    }
  }, [])

  return (
    <Footer
      py={8}
      animate={footerAnimation}
      initial={{ display: 'none', opacity: 0 }}
    >
      <p>
        <a href="//josepsoares.now.sh/">josepsoares</a> -{' '}
        {new Date().getFullYear()}
      </p>
    </Footer>
  )
}

export default FooterEl
