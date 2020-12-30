import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Box from '../components/box'
import Grid from '../components/grid'
import PostItem from '../components/postItem'
import Image from 'next/image'
import { Plus } from '@styled-icons/evaicons-solid'
import InfiniteScroll from 'react-infinite-scroll-component'

const Home = ({ posts, maxPage }) => {
  const [state, setState] = useState({
    page: 1,
    perPage: 9,
    postsPortion: posts,
    printPosts: []
  })

  const calculatePage = (caculateResults, index) => {
    const { perPage } = state
    const indexOfLastResults = index * perPage
    const indexOfFirstResults = indexOfLastResults - perPage
    const currentResults = caculateResults.slice(
      indexOfFirstResults,
      indexOfLastResults
    )
    return currentResults
  }

  const getMorePosts = () => {
    const { printPosts, postsPortion } = state
    setState({
      ...state,
      printPosts: printPosts.concat(calculatePage(postsPortion, page)),
      page: state.page++
    })
  }

  useEffect(() => {
    const { postsPortion } = state
    setState({ ...state, printPosts: calculatePage(postsPortion, 1) })
  }, [])

  const { page, printPosts } = state

  console.log(page, printPosts)

  return (
    <>
      <Head>
        <title>bobo&apos;s blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        py={7}
        gridTemplateColumns={['1fr', null, '1.2fr 0.8fr']}
        gridGap={['2rem', '2.5rem']}
      >
        <div>
          <h1 style={{ padding: 0 }}>olá, eu sou o bobo</h1>
          <h3>uma entidade imaginária criada por um cérebro de um ser vivo</h3>
          <p>estás com vontade de ler coisas irrelevantes?</p>
          <p>
            bem, se sim, estás no lugar certo, só precisas de fazer scroll para
            baixo ou carregar no botão de posts lá em cima.
          </p>
          <p>pronto, é isso, lê lá e sê feliz.</p>
        </div>
        <p>test image</p>
      </Grid>

      <InfiniteScroll
        loader={<p>Loading...</p>}
        dataLength={printPosts.length}
        next={getMorePosts}
        hasMore={page !== maxPage}
        endMessage={
          <Box
            pt={8}
            w="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <p>
              <Link href="/posts">
                <a>
                  <Plus size="20px" /> ver todos os posts
                </a>
              </Link>
            </p>
          </Box>
        }
      >
        <Grid gridTemplateColumns={'1fr'} gridGap={['2rem', '2.5rem']}>
          {printPosts.map((item, index) => {
            index++
            const imageOrder = index % 2 === 0 ? 2 : 1
            const contentOrder = imageOrder === 2 ? 1 : 2

            return (
              <Link key={index} href="/posts/[slug]" as={'/posts/' + item.id}>
                <a>
                  <PostItem>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent={
                        imageOrder === 1 ? 'flex-start' : 'flex-end'
                      }
                      textAlign={imageOrder === 1 ? 'left' : 'right'}
                      alignItems="center"
                    >
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mr={imageOrder === 1 ? 4 : 0}
                        ml={imageOrder === 2 ? 4 : 0}
                        order={imageOrder}
                      >
                        <Image
                          width="50"
                          height="50"
                          src={`/images/posts/${item.thumbnail}.png`}
                          alt={item.thumbnail}
                        />
                      </Box>
                      <Box order={contentOrder}>
                        <h4 style={{ marginBottom: '0' }}>{item.title}</h4>
                        <p
                          style={{
                            fontStyle: 'italic',
                            fontSize: '14px',
                            paddingBottom: 0
                          }}
                        >
                          {item.themes}
                        </p>
                        <p style={{ fontSize: '12px', paddingBottom: 0 }}>
                          {item.date}
                        </p>
                      </Box>
                    </Box>
                  </PostItem>
                </a>
              </Link>
            )
          })}
        </Grid>
      </InfiniteScroll>
    </>
  )
}

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), '/src/posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  const perPage = 9
  const sortedPosts = allPostsData.sort((a, b) => a.date < b.date)
  const totalPosts = fileNames.length

  return {
    props: {
      posts: sortedPosts,
      maxPage: Math.ceil(totalPosts / perPage)
    }
  }
}

export default Home
