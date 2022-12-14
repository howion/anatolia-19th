import type { NextSeoProps } from 'next-seo'

import React from 'react'
import { DefaultSeo } from 'next-seo'
import { App } from '/constants/app'
import Head from 'next/head'
import _ from 'lodash'

export interface MetaProps extends Omit<NextSeoProps, 'titleTemplate' | 'defaultTitle'> {
    keywords?: text[]
    author?: text
    themeColor?: text
    _viewport?: boolean
}

export function Meta(props: MetaProps): FCReturn<MetaProps> {
    const _keywords = props.keywords ?? App.defaults.keywords
    const _seoProps = _.omit(props, 'title', 'keywords', 'description', 'author', 'themeColor', '_viewport')

    return (
        <>
            <Head>
                <title>{props.title ? `${props.title} | ${App.name}` : App.name}</title>
                <meta name="keywords" content={_keywords.join(', ')} />
                <meta name="author" content={props.author || App.defaults.author} />
                <meta name="theme-color" content={props.themeColor || App.defaults.themeColor} />
                {props._viewport ? (
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                    />
                ) : undefined}
            </Head>
            <DefaultSeo description={props.description || App.defaults.description} {..._seoProps} />
        </>
    )
}
