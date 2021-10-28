import React from "react";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = ({ res }:any) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.webprism.co",
    test: "http://localhost:3000"
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        ".DS_Store",
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "sitemap.xml.tsx",
        "adventures",
        "api",
        "styles.scss",
        "index.module.scss",
        "contact.module.scss",
        "nextgeninternet.tsx"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
        console.log(staticPagePath)
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
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