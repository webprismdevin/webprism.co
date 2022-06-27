/* eslint-disable import/no-anonymous-default-export */
// studio/schemas/homepage.js
export default {
  name: "homepage",
  title: "Homepage",
  type: "document",

  // These actions define what users can do with this document.
  // Notice how "delete" is not available in this array.
  // This means, users can't delete this document
  // from within the studio
  __experimental_actions: ["update", "create", "publish"],
  groups: [
    {
      name: 'content',
      title: 'Page Content',
      default: true
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      group: 'seo',
      type: "string",
    },
    {
      name: "pageDescription",
      title: "Meta Description",
      group: 'seo',
      type: "text",
    },
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      group: 'content',
      fields: [
        {
          title: "Title",
          description:
            "This title will appear in the hero unit at the top of the page",
          type: "string",
          name: "title",
        },
        {
          title: "Subtitle",
          name: "subtitle",
          description:
            "This subtitle will appear in the hero unit at the top of the page",
          type: "text",
        },
        {
          title: "CTA",
          name: "cta",
          description: "Main button in the hero",
          type: "string",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'testimonial',
      type: 'object',
      group: 'content',
      fields: [
        {
          name: 'client',
          type: 'string'
        },
        {
          name: 'text',
          type: 'text'
        },
        {
          name: 'name',
          type: 'string'
        }
      ]
    },
    {
      name: 'belowTheFold',
      type: 'object',
      group: 'content',
      fields: [
        {
          name: 'title',
          type: 'string'
        },
        {
          name: 'text',
          type: 'text'
        },
        {
          name: 'cta',
          type: 'string'
        }
      ]
    },
    {
        name: 'about',
        type: 'object',
        group: 'content',
        fields: [
          {
            name: 'superText',
            type: 'string'
          },
          {
            name: 'title',
            type: 'string'
          },
          {
            name: 'text',
            type: 'text'
          },
          {
            name: 'features',
            type: 'array',
            of: [{type: 'string'}] 
          }
        ]
    }, 
    {
      name: "caseStudies",
      title: "Featured Work",
      type: "array",
      group: 'content',
      of: [
        {
          type: "object",
          name: "Feature",
          fields: [
            {
              name: "supertext",
              title: "SUPERTEXT",
              type: "string",
            },
            {
              name: "title",
              title: "Feature Title",
              type: "string",
            },
            {
              name: "project",
              title: "Linked Project",
              type: "reference",
              to: [{ type: "project" }],
            },
          ],
        },
      ],
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      group: 'content',
      of: [{ type: "reference", to: [{ type: "section" }] }],
    },
    {
      name: "caseStudy",
      title: "Featured Case Study",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          description: "Use the company name",
          type: "string",
        },
        {
          name: "beforeImage",
          title: "Before Image",
          type: "image",
        },
        {
          name: "afterImage",
          title: "After Image",
          type: "image",
        },
        {
          name: "description",
          title: "Short Description",
          type: "text",
        },
      ],
    },
    {
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      group: 'content',
      of: [
        {
          name: "faq",
          title: "FAQ",
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "getStarted",
      title: "Get Started: Final Section",
      type: "object",
      group: 'content',
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "button",
          title: "Button Settings",
          type: "object",
          fields: [
            {
              name: "text",
              title: "Text",
              type: "string",
            },
            {
              name: "link",
              title: "Link Destination",
              description: "Can be relative or absolute.",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
