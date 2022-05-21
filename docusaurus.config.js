// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const themeLiveCodeblock = require("@docusaurus/theme-live-codeblock/lib");
// const sectionPrefix = require('./src/remark/section-prefix');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
    title: 'OneUSU Design System',
    // tagline: 'Design, build, and ship coherent\n' +
    //     'experiences with the USU design system.',
    // url: 'https://your-docusaurus-test-site.com',
    url: 'elaborate-mousse-ce89c2.netlify.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'JoudyKarmo', // Usually your GitHub org/user name.
    projectName: 'design_system', // Usually your repo name.
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    // remarkPlugins: [sectionPrefix],
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    breadcrumbs: true,
                },

                // i18n: {
                //     defaultLocale: 'en',
                //     // eslint-disable-next-line no-nested-ternary
                //     locales: isDeployPreview
                //         ? // Deploy preview: keep it fast!
                //         ['en']
                //         : isI18nStaging
                //             ? // Staging locales: https://docusaurus-i18n-staging.netlify.app/
                //             ['en', 'ja']
                //             : // Production locales
                //             ['en', 'fr', 'pt-BR', 'ko', 'zh-CN'],
                // },
                blog: false,
                // blog: {
                //   showReadingTime: true,
                //   // Please change this to your repo.
                //   editUrl:
                //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/usu-icons.css')],
                    themes: [
                        // ... Your other themes.
                        [
                            // require.resolve("@easyops-cn/docusaurus-search-local"),
                            {
                                // ... Your options.
                                // `hashed` is recommended as long-term-cache of index file is possible.
                                // hashed: true,
                                // For Docs using Chinese, The `language` is recommended to set to:
                                // ```
                                // language: ["en", "zh"],
                                // ```
                            },
                        ],
                    ],
                },
            }),
        ],
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            de: {
                label: 'Deutsch',
            },
        },
    },
    plugins: ['@docusaurus/theme-live-codeblock', require.resolve("@cmfcmf/docusaurus-search-local")],
    themeConfig: {

        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

        liveCodeBlock: {
            playgroundPosition: 'bottom',
        },
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
                {
                    type: "localeDropdown",
                    position: "right"
                }
                // {to: '/blog', label: 'Blog', position: 'left'},
                // {
                //     href: 'https://github.com/facebook/docusaurus',
                //     label: 'GitHub',
                //     position: 'right',
                // },
            ],
        },
        // algolia: {
        //     apiKey: '04da223dad67e93f54a5a322e281ed8e',
        //     indexName: 'Design_System',
        //     contextualSearch: true,
        //     placeholder: 'Search in my website',
        //     appId: 'QSM0A4J6E0',
        //     externalUrlRegex: 'external\\.com|domain\\.com',
        //     searchParameters: {facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],},
        //     searchPagePath: 'search',
        // },
        footer: {
            links: [
                {
                    label: 'Privacy',
                    // to: '/Privacy'
                    href: 'https://github.com/JoudyKarmo/design_system'
                },

                {
                    label: 'License',
                    // to: '/License',
                    href: 'https://github.com/JoudyKarmo/design_system'
                },

                {
                    label: 'Career',
                    // to: '/Career',
                    href: 'https://github.com/JoudyKarmo/design_system'
                },
            ],
            copyright: `© USU GmbH ${new Date().getFullYear()}`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: []
        },
    },
};
// module.exports = config;
