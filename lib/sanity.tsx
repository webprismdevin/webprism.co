import sanityClient from '@sanity/client';


export const client = sanityClient({
  projectId: '0ggffobx',
  dataset: 'production',
  apiVersion: '2021-10-30', // use current UTC date - see "specifying API version"!
//   token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})