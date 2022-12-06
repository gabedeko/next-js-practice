import React from 'react'
import Head from 'next/head'

const Meta = ({title, keywords, description}: {title: any, keywords: any, description: any}) => {
  return (
    <Head>
        <meta name="viewport" content="width=device-width, intial-scale=1"></meta>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={description}></meta>
        <meta charSet="utf-8"></meta>
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: 'WebDev Gabe',
    keywords: 'web development, programming',
    description: 'Not sure what to put here'
}

export default Meta