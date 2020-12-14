[coursewebsite]: https://hendrixer.github.io/nextjs-course/
[nextjsdocumentation]: https://nextjs.org/docs

### Frontend Masters

### Course: **Introduction to Next.js**

<br />
<img src='https://static.frontendmasters.com/assets/courses/2020-09-15-next-js/thumb.jpg' id='thumbnail' width='25%' height='25%' />

## Sections in this Readme 📓

- [Frontend Masters Course's Table of Contents][coursewebsite]
- [Notes](#notes)
- [Documentation](#documentation)

### <a id='notes'></a>Course Notes 🧾

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

  ```javascript
  <Link href='/notes'>
    <a>Notes</a>
  </Link>
  ```

  - Why do we need the `as` keyword?
    - Next.js needs to know the value of the param. That's why the param needs to be mapped in some way.
      Example:
    ```javascript
    {note.id} href="/notes/[id]" as={`/notes/${note.id}`}
    ```

- Programmatic Routing

  - Just like the `Link` component, use the router for client-side routing. To navigate to a page, use the `push` method, which works like `href` on the `Link` component.

- Styling

  - You might have to extend Next.js to support your styling approach.
  - There are global and component level sryling capabilites. For global CSS, the entry point for the app needs to be imported. For that, create a `pages/_app.jsx` file and add this:

  ```javascript
  export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  ```

  - Modules can be used **anywhere** inside the app.

- Theme UI

  - Is a library that allows you to create theme objects and use them in your components. It also handles scoping and injecting the CSS into your app.
  - Create an object representing a theme and use that theme for all your components.

- Baseweb

  - [Baseweb Link](https://baseweb.design/)
  - Baseweb is a very similar React UI framework to Theme-UI

- Customizing Next.js

  - To change Netx.js's build system behavior, extend Next.js's features, or add ENV variables, it can be easily done in the `next-config.js` file.
  - Either export an object:

  ```javascript
  module.exports = {
    webpack: {
      // webpack config properties
    },
    env: {
      MY_ENV_VAR: process.env.SECRET,
    },
  };
  ```

  - This is where SVG loaders for webpack can be added
  - After you create `next-config.js` _(note that the name is very important)_ in the root of the project, Next.js will throw the following message:

  ```
  > Found a change in next.config.js. Restart the server to see the changes in effect.
  ```

  - Whatever is put inside of `next-config.js` will **merge** with what Next.js already has as per configuration. It's not going to blow-up everything.

- Plugins

  - Also known as **extended configurations**
  - They are defined inside of `next.config.js`:

  ```javascript
  const withOffline = require('next-offline');
  const config = {
    // your next config
  };

  module.exports = withOffline(config);
  ```

  - `dotEnvLoad` _(see in the `next.config.js` file)_ will look for an `.env` file, grab every environment variable within, and inject it into the environment.
  - Find all the official next plugins here: [next plugins](https://github.com/vercel/next-plugins)

- Typescript

  - Create in the root of the project a `tsconfig.json` file.
  - Install TypeScript:

  ```javascript
  npm install --save-dev typescript @types/react
  ```

  - `tsconfig.json` file will get populated with TypeScript default values

- API Routes

  - Next.js is a full-stack framework. It has a server not just for development, for rendering components on your server, but also for an API.
  - You can ship an API right next to your App with no setup.
  - All you have to do is create an `api` sub-folder inside `/pages`. There you can create API handlers.
  - You don't have to create routes, only the handlers _(which are like the components of the backend)_ .
  - Everything that goes into `api` is going to be a route _(and end-point)_. Just like with add pages as sub-folders inside of `/pages`.

- API Handlers

  - Install `next-connect` in order to create express-like handlers. See `/pages/api/index.js`.

- Creating an API

  - We can access the URL params on `req.query.paramName` just like with the client-side router.

- Fetching data

  - Next.js injects `fetch` into your environment
  - As a tip: `swr` _(is a hook that does a lot on the client side while fetching data)_ & `react-query` _(similar to swr)_ are helpful packages for the client-side data fetching needs. **These 2 are really game changers when it comes to data fetching**.
  - For fetching data ahead of time, we have 3 options: `getStaticProps`, `getStaticPaths`, and `getServerSideProps`. All of these are for **prerendering pages ONLY**. These are not used inside of components.
  - Typical use cases of `getStaticProps`:
    - file system work
    - Connect to a DB
    - Crawl a website
  - Typical use case of `getStaticPaths`:

    - for every single page you want to render, just send back the params:

    ```javascript
    export async function getStatiPaths() {
      // get all the paths for your posts from an API
      // or file system
      const results = await fetch('/api/posts');
      const posts = await results.json();
      const paths = posts.map((post) => ({ params: { slug: post.slug } }));
      /*
      [
        {params: {slug: 'get-started-with-node'}},
        {params: {slug: 'top-frameworks'}}
      ]
      */
      return { paths };
    }

    export async function getStaticPaths({ params }) {
      const res = await fetch(`/api/posts/${params.slug}`);
      const post = await res.json();
      return {
        props: { post },
      };
    }
    ```

  - `getServerSideProps` will be called at runtime during every request. So, unlike `getStaticProps`, you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers.

- When to use what?

  - Need data at runtime but don't need SSR? -> use client-side data fetching.
  - Need data at run time but do need SSR? -> use `getServerSideProps`.
  - Have pages that rely on data that is cachable and accessible at build time? Like from a CMS? -> use `getStaticProps`.
  - Have the same as above but the pages have dynamic URL params? -> use `getStaticProps` and `getStaticPaths`.

- Fetching with `getServerSideProps`

  - `getServerSideProps` only runs on the server.

- Fetching & Dynamic Rendering

  - If you want to fetch data in a component, that's purely client-side. Just as you would it in React.js. The page has to get rendered and then the components follow.
  - Most of the time data fetching happens inside of pages rather that components.

- Rendering Modes

  - Next.js looks at the data fetching in your page components to determine how and when to prerender your page. Here are the different modes:
    - `Static Generation`: Pages built at build time into HTML. CDN cacheable.
    - `Server-side Rendering`: Pages built at run time into HTML. Cached after the initial hit.
    - `Client-side Rendering`: Single-page app
  - By default all pages are prerendered, even if they don't export a data fetching method.
  - You choose the prerendering method (static or SSR) by what data function you export in your page component.
  - For client-side rendering, fetch your data inside your components. You can mix and match these rendering modes to have a genuinely hybrid app.

- Working with SSR

  - Server-Side Rendering is the ability of a front-end framework to render markup while running on a back-end system.
  - Applications that have the ability to render both on the server and on the client are called **universal apps**.
  - SSR + SPA = Universal App. You will find the term **isomorphic** app, it’s the same thing.
  - The user does not have to wait for your JS to load and gets a fully rendered HTML as soon as the initial request returns a response.
  - Crawlers will now see your website as any other static site on the web and will index all the content you render on the server. To recap, the two main benefits we get from SSR are:
    - Faster times for the initial page render
    - Fully indexable HTML pages
  - Next.js supports dynamic imports that, when used with components, will opt out of SSR.

  ```javascript
  import dynamic from 'next/dynamic';

  const SponsoredAd = dynamic(() => import('../components/sponsoredAd'), {
    ssr: false,
  });

  const Page = () => (
    <div>
      <h1>This will be prerendered</h1>

      {/* this won't */}
      <SponsoredAd />
    </div>
  );

  export default Page;
  ```

  - Sometimes you just need to skip rendering some component on the server because:
    - It depends on the DOM API
    - It depends on the client-side data
    - Something else

- Deployment

  - By default, a Next.js app has to be deployed to an environment that supports Node.js.
  - As a tip, you should deploy to Vercel. Vercel literally made Next,js.
  - If you export your app to be pure static (no need for Node.js), you can deploy to static hosting services. You can use: `next export`. There are quite some **gotchas**, though.
  - install the CLI `npm install -g vercel` and run `vercel`. That's it. If your project is already on Github, you can deploy that way from Vercel as well. Create an account and connect your Github account.

- ## Deploying Next.js

## <a id='documentation'></a>Documentation 🕶️

All related documentation for Next.js can be found here: [Next.js Documentation][nextjsdocumentation]
