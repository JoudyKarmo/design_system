// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
    title: 'OneUSU Design System',
    // tagline: 'Design, build, and ship coherent\n' +
    //     'experiences with the USU design system.',
    // url: 'https://your-docusaurus-test-site.com',
    url: 'http://192.168.0.6:3000',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    breadcrumbs: true,
                },
                blog: false,
                // blog: {
                //   showReadingTime: true,
                //   // Please change this to your repo.
                //   editUrl:
                //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig: {

        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

        navbar: {
            // title: 'All About One USU',
            //  style: 'dark',
            logo: {
                alt: 'USU',
                src: 'img/usu-logo.svg',
            },
            items: [
                // {
                //     type: 'docsVersionDropdown',
                //     position: 'left',
                //     dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
                //     dropdownActiveClassDisabled: true,
                // },
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorial',
                    position: 'left',
                    label: 'All About One USU',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'foundations',
                    position: 'left',
                    label: 'Foundations',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'content',
                    position: 'left',
                    label: 'Content',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'components',
                    position: 'left',
                    label: 'Components',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'patterns',
                    position: 'left',
                    label: 'Patterns',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'resources',
                    position: 'left',
                    label: 'Resources',
                },
                // {to: '/blog', label: 'Blog', position: 'left'},
                // {
                //     href: 'https://github.com/facebook/docusaurus',
                //     label: 'GitHub',
                //     position: 'right',
                // },
            ],
        },
         algolia: {
            apiKey: '04da223dad67e93f54a5a322e281ed8e',
            indexName: 'Design_System',
            contextualSearch: true,
            placeholder: 'Search in my website',
            appId: 'QSM0A4J6E0',
            externalUrlRegex: 'external\\.com|domain\\.com',
            searchParameters: {facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],},
            searchPagePath: 'search',
        },
        footer: {
            // style: 'dark',
            links: [
                  // {
                //     title: 'Docs',
                //     items: [
                //       {
                //         label: 'Tutorial',
                //         to: '/',
                //       },
                //     ],
                //   },
                //   {
                // title: 'Community',
                // items: [
                //   {
                //     label: 'Stack Overflow',
                //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //   },
                //   {
                //     label: 'Discord',
                //     href: 'https://discordapp.com/invite/docusaurus',
                //   },
                //   {
                //     label: 'Twitter',
                //     href: 'https://twitter.com/docusaurus',
                //   },
                // ],
                // },

                {
                    items: [
                        {
                            label: 'Privacy',
                            to: '/Privacy'
                        },
                    ],
                },
                {
                    // title: 'Career',
                    items: [
                        // {
                        //   label: 'Blog',
                        //   to: '/blog',
                        // },
                        {
                            label: 'License',
                            to: '/License'
                            // href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                }, {
                    items: [
                        {
                            label: 'Career',
                            to: '/Career'
                        },
                    ],
                },
            ],
            copyright: `© USU GmbH ${new Date().getFullYear()}`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },

    },
};

// module.exports = config;
