import React, { useState, useEffect } from 'react'
import { ArrowUpward } from '@styled-icons/evaicons-solid'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ScrollButton = styled(motion.button)`
  right: 5%;
  top: 85%;
  position: fixed;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.md};
  padding: ${props => props.theme.space[2]};
  transition: all 0.5s ease-in-out;
  color: ${props => props.theme.colors.background};
  background: #e68345;
  z-index: 1;
  border-radius: 5px;

  &::before {
    position: absolute;
    content: ' ';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(208, 86, 59);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
    border-radius: 5px;
  }

  &:hover::before,
  &:active::before {
    opacity: 1;
  }

  &:hover {
    top: 84%;
  }
`

const ScrollToTopButton = () => {
  const [threshold, setThreshold] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onScroll = () => {
    setThreshold(() => {
      if (window.scrollY >= 450) {
        return true
      } else {
        return false
      }
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, display: 'none' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      animate={
        threshold
          ? { display: 'flex', opacity: 1 }
          : { opacity: 0, transitionEnd: { display: 'none' } }
      }
    >
      <ScrollButton onClick={() => scrollToTop()}>
        <ArrowUpward size={25} />
      </ScrollButton>
    </motion.div>
  )
}

export default ScrollToTopButton
