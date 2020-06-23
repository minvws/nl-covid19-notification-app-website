About
-----

This site is the project website of the notification-app by the Dutch Ministry of Health.

### **Status: work in progress**

### **Target audience:**

Ordinary citizens, the general public

### **Links:**

* [UX design in Figma](https://www.figma.com/file/Dmo5nuXcaoxMaNTXDFc9Cw/Status-dashboard-COVID-19-notificatieapp?node-id=0%3A1)
* [Status information](https://docs.google.com/document/d/1cZyhR4ggnF7sGkA1PKt-zbfC6bl7VpRqqhhICNhEbBk/edit)(in Dutch)
* [Current HTML implementation](https://bwbroersma.github.io/nl-covid19-notification-app-website/#) (still to be pushed to master)
* Discuss this website via the Code for NL Slack [Channel notificatie-app-website](https://app.slack.com/client/T68FXPFQV/C0151NCG140)[  ](https://app.slack.com/client/T68FXPFQV/C0151NCG140) ([join Slack workspace here](https://doemee.codefor.nl/)
* Also see the[Community website](https://github.com/minvws/nl-covid19-notification-app-community-website/blob/master/README.md) that is aimed specifically at (potential) community members.

Goals of the website:
---------------------

Before the app is finished, the main goal is to **inform** visitors:
* Goal 1: Provide a clear overview of which areas the team is working on / what the project status is.
* Goal 2: Eliminate common misunderstandings
  * "The app will be launched no matter what, the government is ignoring all the pitfalls!" --> No, we're investigating and building concurrently
  * "The government can access my contacts and track me all day" --> No, everything stays on your phone, the government can never technically access it. This is different for central solutions, but in NL we opted for a decentralized approach.
  * "The screens look as if they are finished, the app will be launched tomorrow!" --> No, we are still investigating many things.
* Goal 3: What will the app do? What is it? Why is an app necessary?
* Goal 4: Make it clear that this is partly a community driven project. Everyone is allowed to contribute, criticize, etc.
* Goal 5: Be transparant in our approach
* Goal 6: Communicate clearly that the government will decide whether to actually roll out the app after it is finished.

After the app is finished:

* **Goal after finished: Convince** people to download the app

Design principles
-----------------

* Design principle 1: Clarity and usability over eye candy
* Design principle 2: Test the results on the target group, guerilla testing in the supermarket
* Design principle 3: Mobile first
* Design principle 4: Usable for anyone (so: simply formulated in B1 language level, tested on users, etc.)
* Design principle 5: Confirm to the design principles of[  ](https://www.gebruikercentraal.nl/)[Gebruiker](https://www.gebruikercentraal.nl/)[  ](https://www.gebruikercentraal.nl/)[Centraal](https://www.gebruikercentraal.nl/).
* Design principle 6: The website 'feels' just like the app itself (tone of voice ("je", not "u"), graphics, interaction patterns, UX design, use, etc.)

Features, requirements and standards
------------------------------------

* Requirement 1: Adhering to WCAG accessibility standards as specified in the [Accessibility document](https://github.com/minvws/nl-covid19-notification-app-coordination/blob/master/accessibility/Toegankelijkheid.md) of the app itself.
* Requirement 2: Download button should be easily added after launch of the app.
* Requirement 3: Should be clear that the app was built in conjunction with Rijksoverheid, RIVM, GGD.
* Requirement 4: A/B testing (after launch of the app) should be possible in a privacy friendly way, so
  * Routing to variations of the website
  * Statistics preferably using the [Piwik (Mamoto) service of the government](https://www.communicatierijk.nl/vakkennis/rijkswebsites/aanbevolen-dienstverlening/platform-rijksoverheid-online)
* Requirement 5: Use of video's should be possible (adhering to [WCAG standards](https://www.digitoegankelijk.nl/uitleg-van-eisen/geluid-en-video))
* Requirement 6: adhere to [General Data Protection GDPR](https://gdpr.eu/tag/gdpr/) (in Dutch: Algemene Verordening Persoonsgegevens (AVG))
* Requirement 7: [Guidelines websites and other online resources](https://www.ubrijk.nl/documenten/brochure/brochure-2019/11/13/handreiking-verplichte-richtlijnen-websites-en-andere-online-middelen)
* Requirement 8: Multilingual support, allowing for a mechanism for crowdsourced translations. The crowdsourced translations are out of scope of the website, but the website setup should allow for it.

The hosting requirements are defined elsewhere.

## People involved (thank you!)
*(this part needs cleaning up, incorporate this list in the community website)*
* Initial idea: Edo Plantinga, community manager at VWS. (please note: the initial idea was a traffic light dashboard, it now evolved to the beginnings of a project website). 
* Community team lead: Harrie Kuipers (tel: 06 24260957 - harrie@osage.nl)
* UXers / frontenders: 
  * Bart Lenstra | bart@osage.nl
  * Paul Wagener (first draft)
  * Benjamin W. Boersma
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
* Technical lead, markdown setup via Jekyll: Benjamin W. Boersma @bwbroersma

## Technical setup

### GitHub Pages

[GitHub Pages](https://pages.github.com/) are public webpages hosted directly through the GitHub repository.

### Jekyll

GitHub Pages support the static site generator [Jekyll](https://jekyllrb.com/).
Jekyll supports [Markdown](https://daringfireball.net/projects/markdown/), [Liquid](https://github.com/Shopify/liquid/wiki), HTML and CSS to create a complete static website.
By using the Liquid templating language, content can be stored in Markdown.

### How to add a statement

To add a feature, create a Markdown file in `_statement` with the following template:
```md
---
index: 7
title: Is this statement true?
icon: thumbs-ub
summary: Short summary
timeline:
  completed:
    - Something that is completed
    - More stuff already done
  working-on:
    - Still working on X
    - Also need to check Y
---
There is optional Markdown content goes here, this can contain <code>HTML</code>.
```
For the `icon` field the values `book`, `lock`, `privacy` and `thumbs-up` can be used for now.

### How to add a question

To add a feature, create a Markdown file in `_questions` with the following template:
```md
---
set: 3-app
index: 6
title: Question about X
lang: nl
---
The answer in Markdown goes here, this can contain <code>HTML</code>.
```
For the `set` field the values `1-top5`, `2-opensource`, `3-app` and `4-development` can be used.
Please also include the name part as prefix of your file, e.g. `app-X.md`.

### Translation

Please give your file a short English name without spaces (you can use dash `-` instead).
You should at least provide the base file with `lang: nl`.
The translations should have the same name with a `-lang` suffix, where `lang` is the language keyword e.g. `en`.

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
