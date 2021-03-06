import React from 'react'
import Head from 'next/head';
import { PAGE_URL } from '../config/index';
import { MetaProps } from '../interfaces';

const Meta = ({
    title = '',
    description = '',
    url = '',
    image = '',
    keywords = ''
}: MetaProps) => {
    return (
        <Head>
            <title>
                {title}
                {title && ' / '} EG-GJ
            </title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="title" content={`${title}${title && ' / '} EG-GJ`} />
            <meta name="robots" content="index, follow" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${PAGE_URL}${url}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={`${PAGE_URL}${url}`} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            <link rel="icon" href="/favicon.ico" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />

            <title>{title}</title>
        </Head>
    )
}

export default Meta;