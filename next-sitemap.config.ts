import type { IConfig } from 'next-sitemap';

const config: IConfig = {
    siteUrl: process.env.NEXT_PUBLIC_FRONTEND_PATH || '',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
        additionalSitemaps: [
            `${process.env.NEXT_PUBLIC_FRONTEND_PATH || ''}/server-sitemap.xml`,
        ],
    },
};

export default config;
