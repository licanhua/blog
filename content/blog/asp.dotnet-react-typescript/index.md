---
title: Create an ASP.NET Core app with React + Typescript in Visual Studio
date: "2022-09-12T21:30:03.284Z"
description: "Create an ASP.NET Core app with React + Typescript"
tags: ["Asp.net Core", "React", "TypeScript"]

---

ASP.NET Core doesn't provide the template to create a React project with Typescript support. There are multiple ways to add Typescript to Asp.net project. For example, [Tutorial: Create an ASP.NET Core app with TypeScript in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-aspnet-with-typescript?view=vs-2022)
If you are going to create a new React project, the easy way to use `create-react-app` 

Source code: https://github.com/licanhua/asp.net-core-react-typescript/tree/main

## Step 1 Create an ASP.NET core app with React

[Create an ASP.NET Core app with React in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022)

## Step 2 Rename ClientApp to ClientApp2
```cmd
move ClientApp ClientApp2
```
## Step 3 Start a new Create React App project with TypeScript

```
npx create-react-app ClientApp --template typescript
```

## Step 4 Copy below files from ClientApp2 to Client

```
aspnetcore-https.js
aspnetcore-react.js
.env
.env.development
```

## Step 5 Add prestart to package.json
```json
  "scripts": {
    "prestart": "node aspnetcore-https && node aspnetcore-react",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
## Step 7, Copy setupProxy.js from ClientApp2\src to ClientApp\src

## Step 8, Add http-proxy-middleware to package.json

```json
  "dependencies": {
    ...,
    "http-proxy-middleware": "^2.0.6"
  },
```

## Step 9, run `npm i`

## Step 10, Run the ASP.NET project from Visual Studio.

Expecting the new React project is launched with https://localhost:44473/, and the API endpoint is https://localhost:44473/weatherforecast