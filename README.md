[coursewebsite]: https://hendrixer.github.io/nextjs-course/
[nextjsdocumentation]: https://nextjs.org/docs

### Frontend Masters

### Course: **Introduction to Next.js**

<br />
<img src='https://static.frontendmasters.com/assets/courses/2020-09-15-next-js/thumb.jpg' id='thumbnail' width='25%' height='25%' />
<br />

## Sections in this Readme 📓

- [Frontend Masters Course's Table of Contents][coursewebsite]
- [Notes](#notes)
- [Documentation](#documentation)

### Course Notes 🧾

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
  - Create the following scripts in `package.json`: `dev, build, start`
    - `dev`: runs the next.js app in development mode
    - `build`: builds the application and gets it ready for production
    - `start`: starts the build when the app is ready

- Routing pages with Next.js

  - Create a `pages` folder to hold all the pages of the app
  - Regarding dynamic parameters for the url, create `.jsx` files named as parameters between brackets like `[id]`, where `[id]` is a dynamic parameter name.
  - Prerendering occurs during Next.js optimization. Which means the page's HTML is created before it is sent to the sever.
  - `useRouter` is a React hook that gives us the actual router in order to get the parameter(s) associated with a given page.
  - `router.query` is an object with any associated params such as the `id` param. Remeber to call the param name the same as the file name inside `[]`. In this case: `[id].jsx`. In other words, the param name on the query object is the same name in the file for that page -> `router.query.id = [id.jsx]`.
  - `Catch-all routes` allows us to define catch-all routes for when we're too lazy to make a page for each one. Think of a glob: `this/folder/**`, where `**` means everything inside `folder`. We can do the same with our dynamic routes, we only need to create a file in our pages directory like this: `docs/[...param].jsx`.
  - `params` is an array of all the matching params (in order). Example: if `//notes/1/2/3/4`, then `params = ["1","2","3","4"]`. This pattern is especially useful when you have a bunch of pages that have the same (or very similar) layout but they need their own url. In other words, the only difference is the content.
  - `Optional Catch-all routes` is inclusive, which means it includes the parent path (i.e. `/notes`). Syntax = `docs/[[...params]].jsx`.

- What about non-pages?

  - When you just need a component, Next.js doesn't have any conventions about that. The community usually creates a `/src/components` folder where all the components live in.

- Is it possible to move the `pages` folder inside of `/src`?

  - Yes it is possible. Note that if there is a `pages` folder in the root, it would take precedence. So, always use one or the other but not both.

- Navigation

  - Next.js provides a `Link` component to route between pages. The important thing to remember is that the `Link` component is only used to navigate for **client-side routing** (no requests to the server). It has an `href` prop (similar to HTML).
  - It is highly recomended to wrap the link name inside of the `Link` component with an anchor tag `<a>` when navigating to a static path. Update your linter to not error out because your `<a>` tag does not have an `href`. Example of how to set up the link:

  ```
    <Link href='/notes'>
      <a>Notes</a>
    </Link>
  ```

  - Why do we need the `as` keyword?
    - Next.js needs to know the value of the param. That's why the param needs to be mapped in some way.
      Example:
    ```
    {note.id} href="/notes/[id]" as={`/notes/${note.id}`}
    ```

- Programmatic Routing
  - Just like the `Link` component, use the router for client-side routing. To navigate to a page, use the `push` method, which works like `href` on the `Link` component.

## Documentation 🕶️

All related documentation for Next.js can be found here: [Next.js Documentation][nextjsdocumentation]
