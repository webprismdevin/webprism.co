/* eslint-disable import/no-anonymous-default-export */
import { RiFilePaper2Line } from 'react-icons/ri'

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: RiFilePaper2Line,
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
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
      description: 'The <Meta name="description"> tag is used for preview text when a link is sent, and  important for SEO.',
      rows: 3,
      type: 'text',
      validation: Rule => Rule.required().min(20).max(250)
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }
  ],

  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Publish Date, Old',
      name: 'publishedAtAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
