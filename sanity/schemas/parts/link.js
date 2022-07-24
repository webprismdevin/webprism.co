// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Link",
    name: "link",
    description: "Link object with text and link (url) field.",
    type: "object",
    fields: [
      {
        name: "text",
        type: "string",
      },
      {
        name: "link",
        type: "string",
        description: 'Destination url. Can be absolute or relative.'
      },
    ],
  };
  