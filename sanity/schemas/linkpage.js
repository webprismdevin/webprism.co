import { AiOutlineLink } from 'react-icons/ai'

/* eslint-disable import/no-anonymous-default-export */
// studio/schemas/homepage.js
export default {
  name: "links_page",
  title: "Links Page",
  icon: AiOutlineLink,
  type: "document",

  // These actions define what users can do with this document.
  // Notice how "delete" is not available in this array.
  // This means, users can't delete this document
  // from within the studio
  __experimental_actions: ["update", "create", "publish"],

  fields: [
    {
      name: 'title',
      title: 'Hero Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'string'
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: 'reference', to: [{type: "link"}, {type: 'post'}]  }],
    },
  ],
};
