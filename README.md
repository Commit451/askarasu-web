# askarasu-web

Will you answer the caw?

## Static hosting

`npm run build` creates HTML entrypoints for `/privacy/`, `/terms/`, `/share/`,
and `/support/`, alongside the SPA fallback `404.html`. GitHub Pages redirects
requests without a trailing slash to these directories, so direct links return
HTTP 200 instead of rendering the app with a 404 response. Keep `staticRoutes` in
`vite.config.ts` aligned with the public routes in `src/App.tsx`.

askarasu-web is available under the MIT license. See the LICENSE file for more info.
