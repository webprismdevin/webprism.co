// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'linkPageLink',
    title: 'Link',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'altDesc',
                    type: 'string',
                    title: 'Alt Description'
                }
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        }
    ]
}