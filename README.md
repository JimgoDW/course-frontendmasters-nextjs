[coursewebsite]: https://hendrixer.github.io/nextjs-course/
[nextjsdocumentation]: https://nextjs.org/docs

## Frontend Masters

## Course: **Introduction to Next.js**

<br />
<img src='https://static.frontendmasters.com/assets/courses/2020-09-15-next-js/thumb.jpg' id='thumbnail' width='25%' height='25%' />
<br />
<br />

---

## Sections in this Readme 📓

- [Frontend Masters Course's Table of Contents][coursewebsite]
- [Notes](#notes)
- [Documentation](#documentation)

---

## Notes 🧾

- What is Next.js?

  - Created by the `Vercel` team.
  - Can be defined as an `app-ready` framework. It is a fullstack framework, since it not only helps you build front-end apps, but also APIs.
  - It uses React.js as its `view library`.

- What do you get out of the box?

  - Development build system that you almost never have to touch
  - Production build system that you almost never have to touch
  - Pre-rendering
    - SSR
    - Build time
      Static
  - Routing that _you don't have to setup_
  - API routes

- When to use Next.js?

  - Need a SPA _(single page application)_? -> `create-react-app`
  - Need a static site, like a blog, that is also a SPA? -> `Next.js`
  - Need SSR _(server-side rendering)_, an API, and all the above? -> `Next.js`

- Creating a Next.js app

  - Install `next, react and react-dom`
  - Create the following scripts: `dev, build, start`
    - `dev`: runs the next.js app in development mode
    - `build`: builds the application and gets it ready for production
    - `start`: starts the build when the app is ready

- Routing pages with Next.js
  - Create a `pages` folder to hold all the pages of the app
  - Regarding dynamic parameters for the url, create `.jsx` files named as parameters between brackets like `[id]`, where `[id]` is a dynamic parameter name.

## Documentation 🕶️

All related documentation for Next.js can be found here: [Next.js Documentation][nextjsdocumentation]
