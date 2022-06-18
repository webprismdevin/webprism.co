/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true
        },
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'sections',
            title: 'Page Sections',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'section'}}]
        }
    ]
}