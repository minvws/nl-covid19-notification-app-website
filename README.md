# nl-covid19-notification-app-dashboard

## What is GitHub Pages

[GitHub Pages](https://pages.github.com/) are public webpages hosted directly through the GitHub repository.

## What is Jekyll

GitHub Pages support the static site generator [Jekyll](https://jekyllrb.com/).
Jekyll supports [Markdown](https://daringfireball.net/projects/markdown/), [Liquid](https://github.com/Shopify/liquid/wiki), HTML and CSS to create a complete static website.
By using the Liquid templating language, content can be stored in Markdown.

## How to add a feature

To add a feature, create a Markdown file in `_features` with the following template:
```md
---
title: The title
summary: Short summary
status: in-progress
---
The Markdown content goes here, this can contain <code>HTML</code>.
```
For the status field the values `failed`, `in-progress` and `checked` can be used.
Please prefix your file with 3 zero's and a dash (`000-`), it will be renamed to have an incremental number when we merge it.

## How to test GitHub Pages locally

To build Jekyll, you could [install Jekyll locally](https://jekyllrb.com/docs/installation/) or probably the easier route: use a Docker image.
To use a Docker image you should have Docker engine installed, see [how to install Docker enginge](https://docs.docker.com/engine/install/).

[`starefossen/github-pages`](https://hub.docker.com/r/starefossen/github-pages) is a small Alpine Docker image for running GitHub Pages / Jekyll projects locally.
You need to do is to mount the pages in a volume under `/usr/src/app` like this:
```bash
docker run -it --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages
```
*Note: for Windows we advise Powershell or another shell that supports `$PWD`, for `cmd` you can replace `$PWD` with `%cd%`.*

The Jekyll page will be available on `http://localhost:4000`.
