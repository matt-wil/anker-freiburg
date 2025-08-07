/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_SITE_URL || 'https://www.anker-tattoo.de',
    generateRobotsTxt: true,
    exclude: ["/server-sitemap.xml", "/blog/*"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: '/admin'
            },
            {
                userAgent: '*',
                allow: '/'
            }
        ],
        additionalSitemaps: [
            `${process.env.NEXT_SITE_URL}/server-sitemap.xml`
        ]
    }
  }