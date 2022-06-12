/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "section",
  title: "Page Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
        name: "imageDark",
        title: 'Dark Mode Image',
        description: "Optional",
        type: "image"
    },
    {
        name: 'cta',
        title: 'CTA',
        type: 'object',
        fields: [
            {
                name: 'text',
                title: 'Text',
                type: 'string'
            },
            {
                name: 'link',
                title: 'Link',
                type: 'string'
            }
        ]
    }
  ],
};
