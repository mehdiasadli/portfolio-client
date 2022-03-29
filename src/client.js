import sanityClient from '@sanity/client'
import imgBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '62eyto4u',
    dataset: 'production',
    apiVersion: '2022-03-29',
    useCdn: true,
    token: 'skuno3wlEoXDhZfrPiGME70vB2zOZPFtdpBf35lu4uBIG0X2VPx8Id35xCnPMh2ea9Hi3LgEuLgrILuGR4WeQWF3KwcXLWEgtM2USrlIjGdIGimUM7cR9TFlOa04IjsOgfjtmJ4BxLb8zZniCUBCMeCOF92FvICM647tTIOTZErHJXoGIpZ2'
})

const builder = imgBuilder(client)
export const urlFor = source => builder.image(source)