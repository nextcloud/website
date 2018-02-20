# Nextcloud website

## Requirement

Install [Hugo](https://gohugo.io). For details see their [install guidelines](https://gohugo.io/getting-started/installing/).

## Development

```
hugo server -D
```

Then open [http://localhost:1313/](http://localhost:1313/) in your browser.

## Production

```
HUGO_ENV="production" hugo
```

Then copy `public/` to a directory that is served by a web server.
