import type { NextSeoProps } from 'next-seo'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { omit } from 'es-toolkit'

import { App } from '/constants/app'

export interface MetaProps extends Omit<NextSeoProps, 'titleTemplate' | 'defaultTitle'> {
    keywords?: text[]
    author?: text
    themeColor?: text
    _viewport?: boolean
}

export function Meta(props: MetaProps): FCReturn<MetaProps> {
    const _keywords = props.keywords ?? App.defaults.keywords
    const _seoProps = omit(props, ['title', 'keywords', 'description', 'author', 'themeColor', '_viewport'])

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
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=1, viewport-fit=cover"
                    />
                ) : undefined}
            </Head>
            <DefaultSeo description={props.description || App.defaults.description} {..._seoProps} />
        </>
    )
}
