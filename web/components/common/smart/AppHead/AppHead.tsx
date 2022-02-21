import { META_DEFAULTS } from '@configs/misc';
import Head from 'next/head';
import { FC, useMemo } from 'react';

export interface IAppHeadProps {
    title?: string;
    description?: string;
}

const AppHead: FC<IAppHeadProps> = ({ title, description }: IAppHeadProps) => {
    const pageTitle = useMemo(
        () =>
            title
                ? `${title} | ${META_DEFAULTS.title}`
                : `${META_DEFAULTS.title} | ${META_DEFAULTS.description}`,
        [title]
    );

    const pageDescription = useMemo(() => description ?? META_DEFAULTS.description, [description]);

    return (
        <Head>
            <title>{pageTitle}</title>

            <meta name="description" content={pageDescription} />

            <meta name="application-name" content={META_DEFAULTS.title} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content={META_DEFAULTS.title} />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />

            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#dadada" />

            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#83ac9f" />
        </Head>
    );
};

AppHead.displayName = 'AppHead';

export { AppHead };
