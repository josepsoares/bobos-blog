import React from 'react'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const Post = ({ data, content, excertp }) => {
  const { title, date } = data
  return (
    <div>
      <Head>
        <title>first post test</title>
      </Head>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('src/posts', 'utf-8')
  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace(/\.md$/, '')
    }
  }))

  return {
    paths: [...paths],
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const postsDirectory = path.join('src/posts', `${slug}.md`)
  const contents = fs.readFileSync(postsDirectory, 'utf8')
  const parsedContents = matter(contents)
  delete parsedContents.orig

  return {
    props: {
      ...parsedContents
    }
  }
}

export default Post
