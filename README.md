# Nextcloud website

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
