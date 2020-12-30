import React from 'react'
import Head from 'next/head'

const Seo = ({ pageTitle, description }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
    </>
  )
}

export default Seo
