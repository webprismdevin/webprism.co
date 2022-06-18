// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
// import category from './category'
import project from './project'
import post from './post'
import author from './author'
import link from './link'
import links_page from './linkpage'
import homepage from './homepage'
import section from './section'
import webDesign from './web-design'
import digitalMarketing from './digital-marketing'
import service from './service'
import callToAction from './parts/callToAction'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    homepage,
    webDesign,
    digitalMarketing,
    service,
    links_page,
    project,
    post,
    author,
    link,
    section,
    // category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    callToAction
  ]),
})
