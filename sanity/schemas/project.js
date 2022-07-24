/* eslint-disable import/no-anonymous-default-export */
import { GrProjects } from 'react-icons/gr'
import defaultGroups from './parts/defaultGroups'

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: GrProjects,
  groups: [
    ...defaultGroups,
    {
      name: 'portfolio',
      title: 'Portfolio Details'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'portfolioDescription',
      group: 'portfolio',
      type: 'string'
    },
    {
      name: 'logo',
      type: 'image',
      group: 'portfolio'
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
      name: 'url',
      title: 'Project URL',
      type: 'url'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description: 'Be sure to enter all image details in "Edit Details".',
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
      description: 'The <Meta> Tag Description is used for preview text when a link is sent, and SEO. Rephrase the Project Overview (or just copy-paste).',
      rows: 3,
      type: 'text',
    },
    {
      name: 'body',
      title: 'Project Overview',
      type: 'blockContent',
    },
    {
      name: 'testimonial',
      title: 'Testimonial from Client',
      type: 'text'
    },
    {
      name: 'name',
      title: 'Client Name',
      type: 'string'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    }
  },
}
