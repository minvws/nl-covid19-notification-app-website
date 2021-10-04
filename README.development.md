Development
---------------------

## Branching strategy

We use the git flow way of working with one addition:

- `production` branch has been added. Once the version on the master has been previewed and OK'ed, it can be merged to the production branch which is used for internal acceptance testing. This way content editors can easily preview their changes on master (as set by GitHub pages) without (unintentionally) affecting an acceptance test.

## Jekyll

GitHub Pages support the static site generator [Jekyll](https://jekyllrb.com/).
Jekyll supports [Markdown](https://daringfireball.net/projects/markdown/), [Liquid](https://github.com/Shopify/liquid/wiki), HTML and CSS to create a complete static website.
By using the Liquid templating language, content can be stored in Markdown.

### How to test GitHub Pages locally

To build Jekyll, you could [install Jekyll locally](https://jekyllrb.com/docs/installation/) or probably the easier route: use a Docker image.
To use a Docker image you should have Docker engine installed, see [how to install Docker engine](https://docs.docker.com/engine/install/).

[`starefossen/github-pages`](https://hub.docker.com/r/starefossen/github-pages) is a small Alpine Docker image for running GitHub Pages / Jekyll projects locally.
You only need to mount the pages in a volume under `/usr/src/app` like this:
```bash
docker run -it --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages
```
*Note: for Windows users we advise Powershell or another shell that supports `$PWD`, for `cmd` you can replace `$PWD` with `%cd%`.*

The Jekyll page will be available on [`http://localhost:4000`](http://localhost:4000/).

To test locally with htmlproofer (to test validity of html-code):
```bash
bundle exec htmlproofer ./_site --checks-to-ignore=LinkCheck
```

### App store buttons

On a mobile device the appropriate (store) buttons should be shown.

- iOS: Show App Store
- Android: Show Google Play Store button

## Vendors

Note: rather than rely on a third party CDN or dependencies that are not part of this repository we choose to include all assets and dependencies. Please go to [the vendor licenses directory](./vendor-licenses) for the vendor licenses.
