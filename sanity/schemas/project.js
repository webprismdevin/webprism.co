/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'detailShots',
      title: 'Detail Shots',
      type: 'array',
      of: [{ type: 'image', options: {hotspot: true} }]
     },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'metaDesc',
      title: 'Meta Tag Description',
      description: 'The <Meta> Tag Description is used for preview text when a link is sent, and SEO.',
      rows: 3,
      type: 'text',
      validation: Rule => Rule.required().min(20).max(250)
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    }
  },
}
