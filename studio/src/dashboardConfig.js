export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629d834bb6d18e4359d00516",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blogs-studio-ezmd886w",
                  apiId: "1fd47b84-9544-44c8-881c-e36b6c6dd044",
                },
                {
                  buildHookId: "629d834bac0b814a0ba5a72d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blogs-web-rrt6jo42",
                  apiId: "9da1f21e-2307-410f-ad2a-df2a92c10de8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/yangchanglong2022/sanity-gatsby-blogs",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blogs-web-rrt6jo42.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
