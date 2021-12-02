---
title: Add @wkocjan/gatsby-theme-intro plugin
date: "2021-12-01T08:12:03.284Z"
description: "Use plugin to tell your story by showing your skills, projects and career path"
tags: ["Gatsby", "Blog", "GitHub Pages", "@wkocjan/gatsby-theme-intro plugin"]

---
My website page is https://licanhua.github.io/, and I'd like to add a profile page https://licanhua.github.io/profile to the existing gatsby site.

## Install @wkocjan/gatsby-theme-intro
```
npm i @wkocjan/gatsby-theme-intro
```

## Setup the profile folder locally
Download content folder from https://github.com/stackbit-themes/gatsby-theme-intro and put it into my content/profile
Replace all the content with your profiles

## Setup the plugin
Add the plugin to gatsby-config.js
```
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "classic",
        basePath: "/profile",
        contentPath: "content/profile"
      },
    },
```

## Start the site and verify the change
```
npm run start
```

## Component shadowing

You can use Gatsby component shadowing technique to customize the theme..
Code you want to overwrite should be placed within src/@wkocjan/gatsby-theme-intro/ directory.
Please refer to the [official documentation](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to learn more.