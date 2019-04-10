# Start

Run `hugo` and then serve the folder `public` on a webserver.

This can be accomplished by running this command:

```
hugo server
```

and open [http://localhost:1313/](http://localhost:1313/) in the browser.


# Staging environment

Currently there is a staging environment set up at [https://staging.weasel.rocks](https://staging.weasel.rocks), which serves the normal Wordpress powered website. Additionally special URLs are instead served from this hugo website. Currently those are:

* `/css`
* `/static-assets`
* [`/changelog`](https://staging.weasel.rocks/changelog/)

This should be a showcase on how well it all works together during the step by step migration from Wordpress to Hugo. Once the state of the staging environment is ready for production we will move it over to the real website and monitor it.
