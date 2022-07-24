// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  __experimental_actions: ["update", "create", "publish"],
  groups: [
    {
      name: "seo",
      title: "SEO",
      default: true,
    },
    {
      name: "banner",
    },
    {
      name: "footer",
    },
  ],
  fields: [
    {
        name: "banner",
        type: "array",
        group: "banner",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "text",
                type: "string",
              },
              {
                name: "link",
                type: "string",
              },
            ],
          },
        ],
      },
    {
      name: "footerLinks",
      type: "array",
      group: "footer",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              type: "string",
            },
            {
              name: "link",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
