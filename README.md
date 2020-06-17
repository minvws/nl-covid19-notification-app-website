# Projectstatus website COVID-19 notificatieapp

# TEMPORARY CONTENT LOCK!!
As of 17-6-2020 Edo Plantinga is merging this document with another spec document. Please do not make any pull requests on this doc until further notice (probably in a few days), as this will create version problems. Ping Edo via Slack for a status update. 

## About
This site is intended as a project website of the notification-app by the Ministry of Healt team. It evolved from a status dashboard idea to something similar to the project website.

### Status: work in progress

### Target audience
Ordinary citizens, the general public

### Links

* [UX design in Figma](https://www.figma.com/file/Dmo5nuXcaoxMaNTXDFc9Cw/Status-dashboard-COVID-19-notificatieapp?node-id=0%3A1)
* [Statusinformation](https://docs.google.com/document/d/1cZyhR4ggnF7sGkA1PKt-zbfC6bl7VpRqqhhICNhEbBk/edit) (in Dutch)
* [Current HTML implementation](https://minvws.github.io/nl-covid19-notification-app-status/) (some iterations behind on the latest design)
* Discuss this website via the Code for NL Slack, [Channel Notificatie-app-status-website](https://app.slack.com/client/T68FXPFQV/C0151NCG140) ([join the Slack group here](https://doemee.codefor.nl))
* Also see the [Community website](https://github.com/minvws/nl-covid19-notification-app-community-website/blob/master/README.md) that is aimed specifically for (potential) community members. 

## Goals of the website:
- Provide a clear overview of which areas the team is working on
- eliminate common misunderstandings
  - "The app will be launched no matter what, the government is ignoring all the pitfalls!" --> No, we're investigating and building concurrently
  - "The government can access my contacts and track me all day" --> No, everything stays on your phone, the government can never technically access it. This is different for central solutions, but in NL we opted for a decentralized approach.
  - "The screens look as if they are finished, the app will be launched tomorrow!" --> No, we are still investigating many things.
- Make it clear that this is partly a community driven project. Everyone is allowed to contribute, criticize, etc.
- Be transparant in our approach

## Design principles
* Clarity and usability over eye candy
* Test results on the target group, guerilla testing in the supermarket
* Mobile usable
* Digitally accessible
* Usable for anyone (so: simply formulated in B1 language level, tested on users, etc.)
* Confirm to the design principles of [Gebruiker Centraal](https://www.gebruikercentraal.nl).

## People involved (thank you!)

* Initial idea: Edo Plantinga, community manager at VWS. (please note: the initial idea was a traffic light dashboard, it now evolved to the beginnings of a project website). 
* Community team lead: Harrie Kuipers (tel: 06 24260957 - harrie@osage.nl)
* UXers / frontenders: 
  * Bart Lenstra | bart@osage.nl
  * Paul Wagener (first draft)
  * Benjamin Boersma
* Ux experts (interface)
  * Ruben Ahuluheluw
  * Ruben Vandenbussche
  * Nelleke Harmse
* Ux testers
  * Nelleke Harmse
  * Ruben Vandenbussche
  * Ruben Ahuluheluw
  * Anouschka Scholten
* Copywriter: Maria Faragg
* Temporary overseeer of Github commits: @arianvp
* Technical lead, markdown setup via Jekyll: Benjamin Boersma

## Technical setup

### GitHub Pages

[GitHub Pages](https://pages.github.com/) are public webpages hosted directly through the GitHub repository.

### Jekyll

GitHub Pages support the static site generator [Jekyll](https://jekyllrb.com/).
Jekyll supports [Markdown](https://daringfireball.net/projects/markdown/), [Liquid](https://github.com/Shopify/liquid/wiki), HTML and CSS to create a complete static website.
By using the Liquid templating language, content can be stored in Markdown.

### How to add a feature

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

### How to test GitHub Pages locally

To build Jekyll, you could [install Jekyll locally](https://jekyllrb.com/docs/installation/) or probably the easier route: use a Docker image.
To use a Docker image you should have Docker engine installed, see [how to install Docker enginge](https://docs.docker.com/engine/install/).

[`starefossen/github-pages`](https://hub.docker.com/r/starefossen/github-pages) is a small Alpine Docker image for running GitHub Pages / Jekyll projects locally.
You only need to mount the pages in a volume under `/usr/src/app` like this:
```bash
docker run -it --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages
```
*Note: for Windows users we advise Powershell or another shell that supports `$PWD`, for `cmd` you can replace `$PWD` with `%cd%`.*

The Jekyll page will be available on [`http://localhost:4000`](http://localhost:4000/).
