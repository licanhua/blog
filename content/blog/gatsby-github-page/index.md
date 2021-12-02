---
title: Setup my blog website with Gatsby and deploy the website to GitHub Pages
date: "2021-11-30T23:12:03.284Z"
description: "This is about how to deploy Gatsby to GitHub Pages. As a developer, I want to host my own blogs. Since my code is in GitHub, I would like to hosting my blog on GitHub pages too."
tags: ["Gatsby", "Blog", "GitHub Pages"]

---
As a developer, I want to host my own blogs. Since my code is in GitHub, I would like to hosting my blog on GitHub pages too. I used [hexo](https://hexo.io/), and I want to try something new. There is a good discuss on [cra-vs-next-js-vs-gatsby](https://coffeencoding.com/cra-vs-next-js-vs-gatsby/), and finally start it with gatsby.


## Setup Gatsby CLI
```
npm install -g gatsby-cli
```

## Create the blog project
```
npx gatsby blog https://github.com/gatsbyjs/gatsby-starter-blog
```

## Change profile-pic.png
Replace src\images\profile-pic.png with your profile pic.

## Change your personal info
Open gatsby-config.js and change the details of your personal info

## Update content/blog
Replace content/blog with your first blog

## Verify your blog change
Start the dev site and go to http://localhost:8000/ to see your blog.
```
npm run start
```

## GitHub Pages
### Add homepage to package.json

The step below is important!

If you skip it, your app will not deploy correctly.

Open your package.json and add a homepage field for your project:
```
  "homepage": "https://myusername.github.io/my-app",
```
or for a GitHub user page:

```
  "homepage": "https://myusername.github.io",
```

or for a custom domain page:

```
  "homepage": "https://mywebsite.com",
```

### Install gh-pages and add deploy to scripts in package.json
```
npm install --save gh-pages
```

### Add deploy script to package.json
```
  "scripts": {
      ...
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
```

### Push the change to Github

[Adding an existing project to GitHub using the command line](
https://gist.github.com/alexpchin/102854243cd066f8b88e#:~:text=Create%20a%20new%20repository%20on%20GitHub.%201%20In,the%20origin.%20This%20comment%20has%20been%20minimized.%20), then commit and push the change to remote GitHub

```
git remote add origin <remote repository URL>
```

### Deploy to GitHub Pages
```
npm run deploy
```

## Todo
- Social Share
- Deploy from azure pipeline [Git Actions](https://www.xkoji.dev/blog/set-up-a-blog-with-gatsby-github-pages-and-github-actions/)
