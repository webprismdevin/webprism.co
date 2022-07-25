import defaultGroups from "./parts/defaultGroups";
import basicSEO from "./parts/basicSEO";
import { AiOutlineProfile } from 'react-icons/ai'
import portfolioDetails from "./parts/portfolioDetails";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "caseStudy",
  type: "document",
  icon: AiOutlineProfile,
  groups: [
    ...defaultGroups,
    {
      name: 'portfolio',
      title: 'Portfolio Details'
    }
  ],
  fields: [
    {
      name: 'slug',
      group: 'seo',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    basicSEO,
    {
      name: "title",
      type: "string",
      group: 'content'
    },
    ...portfolioDetails
  ],
};