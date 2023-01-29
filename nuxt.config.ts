// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Ali Khalouf',
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Hey, I am Ali Khalouf, a Front-end Developer and a lover open sources. Working at StarEx.'
                },
                {
                    name: 'og:type',
                    content: 'website',
                },
                {
                    name: 'og:image:alt',
                    content: 'Ali'
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    name: 'twitter:site',
                    content: '@itsalikhalouf'
                },
                {
                    name: 'og:title',
                    content: 'Ali Khalouf'
                },
                {
                    name: 'og:description',
                    content: 'Hey, I am Ali Khalouf, a Front-end Developer and a lover open sources. Working at StarEx.'
                }
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: 'logo.png'}
            ]
        }
    },
})