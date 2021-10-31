import React from "react";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.webprism.co",
    test: "http://localhost:3000"
  }[process.env.NODE_ENV];

  const query = encodeURIComponent(`*[ _type == "post" ] {title, _id, _updatedAt, slug }`);

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());
  const allPosts = result.result;

  const blogPages = allPosts.map(post => {
    return `${baseUrl}/posts/${post.slug.current}`
  })

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        ".DS_Store",
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "sitemap.xml.js",
        "adventures",
        "api",
        "nextgeninternet.tsx",
        "posts.tsx",
        "booknow.tsx"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.concat(blogPages)
        .map((url) => {
          if(!url.includes(".scss") && !url.includes(".json")){
            return `
              <url>
                <loc>${url.includes(".tsx") ? url.substring(0, url.length - 4): url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `
          }
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;