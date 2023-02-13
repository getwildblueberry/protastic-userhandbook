module.exports = {
    title: 'Protastic Benutzerhandbuch',
    description: 'Benutzerhandbuch von Protastic Plattform',
    head: [
        ['link', { rel: 'icon', href: '/assets/images/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    themeConfig: {
        logo: '/assets/images/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Zur Plattform', link: 'http://app.process-experience.de/protastic/' }
        ],
        sidebar: [
            '/register/',
            '/startpage/',
            '/process/',
            '/question/',
            '/survey/',
            '/evaluation/',
            '/checklist/',
            '/user-management/',
            '/support/',
        ]
    },
    plugins: [
        [
            '@vuepress/back-to-top',
            '@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
            },
        ]
    ]
}