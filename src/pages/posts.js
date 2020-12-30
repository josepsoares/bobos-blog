import React, { useState, useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import InfiniteScroll from 'react-infinite-scroll-component'
import Link from 'next/link'
import Box from '../components/box'
import Grid from '../components/grid'
import PostItem from '../components/postItem'
import Image from 'next/image'

const AllPosts = ({ allPosts, maxPage }) => {
  const [state, setState] = useState({
    page: 1,
    perPage: 10,
    allPosts: allPosts,
    posts: []
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
    let { page, allPosts } = state
    setState({
      ...state,
      posts: posts.concat(calculatePage(allPosts, page)),
      page: page++
    })
  }

  useEffect(() => {
    const { allPosts } = state
    setState({ ...state, posts: calculatePage(allPosts, 1) })
  }, [])

  const { page, posts } = state

  return (
    <div>
      <p>
        ficam aqui umas opções para filtrar os textos irrelevantes, boas
        pequisas.
      </p>
      <Box>
        <select>
          <option>filtrar por:</option>
          <option>nome</option>
          <option>data</option>
          <option>tema</option>
        </select>
        <select>
          <option>ordem da filtragem:</option>
          <option>ascendente</option>
          <option>descendente</option>
        </select>
        <input value="pesquisar nome" />
      </Box>
      <Box pt={8} className="posts-list">
        <InfiniteScroll
          style={{ width: '100%' }}
          dataLength={posts.length}
          next={getMorePosts}
          hasMore={page !== maxPage}
        >
          <Grid gridTemplateColumns={'1fr'} gridGap={['2rem', '2.5rem']}>
            {posts.map((post, index) => {
              index++
              const imageOrder = index % 2 === 0 ? 2 : 1
              const contentOrder = imageOrder === 2 ? 1 : 2

              return (
                <PostItem key={index}>
                  <Link href="/posts/[slug]" as={'/posts/' + post.id}>
                    <a>
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
                            src={`/images/posts/${post.thumbnail}.png`}
                            alt={post.thumbnail}
                          />
                        </Box>
                        <Box order={contentOrder}>
                          <h4 style={{ marginBottom: '0' }}>{post.title}</h4>
                          <p style={{ paddingBottom: 0 }}>{post.date}</p>
                        </Box>
                      </Box>
                    </a>
                  </Link>
                </PostItem>
              )
            })}
          </Grid>
        </InfiniteScroll>
      </Box>
    </div>
  )
}

export const getStaticProps = async () => {
  const perPage = 10
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const totalPosts = fileNames.length

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

  const sortedPosts = allPostsData.sort((a, b) => a.date < b.date)

  return {
    props: {
      allPosts: sortedPosts,
      maxPage: Math.ceil(totalPosts / perPage)
    }
  }
}

export default AllPosts
