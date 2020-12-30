import React from 'react'
import Head from 'next/head'
import useDarkMode from 'use-dark-mode'
import { Twitter, Moon, Sun } from '@styled-icons/evaicons-solid'

import NavLink from './navigation/navLink'
import IconButton from './buttons/iconButton'
import Grid from './grid'
import Box from './box'
import Link from 'next/link'

// const name = 'josepsoares'
export const siteTitle = "bobo's blog"

const Header = () => {
  const darkMode = useDarkMode()

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Box py={6}>
        <Grid
          gridGap={4}
          gridAutoFlow="column dense"
          justifyContent="flex-end"
          pb={5}
          pt={2}
        >
          <Link href="/posts" passHref>
            <NavLink>posts</NavLink>
          </Link>
          <Box display="flex" flexDirection="row" alignItems="flex-end">
            <IconButton mr={4}>
              <Twitter size="18" />
            </IconButton>

            <IconButton onClick={() => darkMode.toggle()}>
              {darkMode.value ? <Sun size="18" /> : <Moon size="18" />}
            </IconButton>
          </Box>
        </Grid>
        <div>
          <Link href="/">
            <a>
              <p>imagem</p>
            </a>
          </Link>
        </div>
      </Box>
    </>
  )
}

export default Header
