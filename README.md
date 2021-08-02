<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [About](#about)
- [Status](#status)
- [Goals of the website:](#goals-of-the-website)
- [Design principles](#design-principles)
- [Features, requirements and standards](#features-requirements-and-standards)
- [How this website came about (pinging journalists)](#how-this-website-came-about-pinging-journalists)
- [Disclaimer](#disclaimer)
- [Honorable mentions and gratitude](#honorable-mentions-and-gratitude)
- [Development & Contribution process](#development--contribution-process)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## About

This repository contains the source files of the official website for the Dutch COVID-19 Notification App CoronaMelder and is available at [coronamelder.nl](https://coronamelder.nl)


## Status

Please join the Slack channel and check out the kanban board for the latest status. 


## Goals of the website:

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


## Design principles

* Design principle 1: Clarity and usability over eye candy
* Design principle 2: Test the results on the target group, guerrilla testing in the supermarket, etc. 
* Design principle 3: Mobile first
* Design principle 4: Usable for anyone (so: simply formulated in B1 language level, tested on users, etc.)
* Design principle 5: Confirm to the design principles of [Gebruiker Centraal](https://www.gebruikercentraal.nl/).
* Design principle 6: The website 'feels' just like the app itself (tone of voice ("je", not "u"), graphics, interaction patterns, UX design, use, etc.)


## Features, requirements and standards

**Preamble:** the intended quality of the website is very high (10/10), as this will impact the number of downloads both directly (defined as a high click-through rate to the app stores) and indirectly (influencing public opinion, by taking away common misconceptions etc.). 
* Requirement 1: Adhering to **WCAG accessibility standards** as specified in the [Accessibility document](https://github.com/minvws/nl-covid19-notification-app-coordination/blob/master/accessibility/Toegankelijkheid.md) of the app itself.
* Requirement 2: **Download button should be easily added after launch of the app.**
* Requirement 3: Should be clear that the app was built in conjunction with **Rijksoverheid, RIVM, GGD**.
* Requirement 4: **A/B testing** (before and after launch of the app) should be possible in a privacy-friendly way. Rationale: the website is an essential step in the conversion funnel. Every percentage of improvement at this step will result in a significant increase in numbers of downloads (in the order of hundreds of thousands), thus aiding the epidemiological effectiveness of the app. 
  * Routing to variations of the website
  * Statistics preferably using the [Piwik service of the government](https://www.communicatierijk.nl/vakkennis/rijkswebsites/aanbevolen-dienstverlening/platform-rijksoverheid-online)
  * It should be possible to assess the effectiveness of social media campaigns (as a part of the conversion funnel before people land on the website). 
* Requirement 5: Use of **video's** should be possible (adhering to [WCAG standards](https://www.digitoegankelijk.nl/uitleg-van-eisen/geluid-en-video))
* Requirement 6: adhere to [General Data Protection **GDPR**](https://gdpr.eu/tag/gdpr/) (in Dutch: Algemene Verordening Persoonsgegevens (AVG))
* Requirement 7: [**Government guidelines websites** and other online resources](https://www.ubrijk.nl/documenten/brochure/brochure-2019/11/13/handreiking-verplichte-richtlijnen-websites-en-andere-online-middelen)
* Requirement 8: **Multilingual** support, allowing for a mechanism for crowdsourced translations. The crowdsourced translations are out of scope of the website, but the website setup should allow for it.
* Requirement 9: **Open research, build and design process**. It should be easy for people to suggest improvements to the website, as this will improve the quality significantly (see: preamble). Also, this will help us in giving more ownership of the app among the people in The Netherlands, hopefully aiding adoption. Among others, we hope to involve: 
  * The designers and UX researchers of the app itself, who have learnt a lot about the concerns and desires of users via their extensive UX research and testing. This will also bring the look and feel of the website and the app closer together. 
  * The coders and designers of the Code for NL community, that can help improve accessibility, multilingual challenges, etc. 
  * The UX researchers of the Code for NL community, that have gained insight into the main concerns of potential users via questionnaire (in Dutch) 'Een app om grip te krijgen op Corona, hoe zie jij dat?': [Results summary (in Dutch)](https://www.dropbox.com/s/kmeomop89hd9kkl/Resultaten%20-%20Enqu%C3%AAte%20-Een%20app%20om%20grip%20te%20krijgen%20op%20Corona%20-%20Hoe%20zie%20jij%20dat_.pdf?dl=0) or [View all the answers (in Dutch)](https://nl.surveymonkey.com/results/SM-QYKBMWPF7/)

The hosting requirements are defined elsewhere.


## How this website came about (pinging journalists) 

There is a nice story to be told about how the website was created. It all started with a high-level traffic light dashboard idea to indicate the status of the project. This idea was adopted by the community, that let this project evolve (via GitHub and Slack) from the traffic dashboard to what is now the project website-to-be. The whole process can be followed via [Channel notificatie-app-website](https://app.slack.com/client/T68FXPFQV/C0151NCG140) ([join Slack workspace here](https://doemee.codefor.nl/)). 
Please ping any of the people involved via Slack if you are interested in writing an article about this.


## Disclaimer

The design and development of the website started as a volunteering project [in the community](https://minvws.github.io/nl-covid19-notification-app-community-website/). The Ministry of Health, Welfare and Sport has built the current website on the foundation created by community members.

Do you want to get in touch with the people involved in designing and building the website? Join the [CodeForNL Slack](https://doemee.codefor.nl/) and go to the `#coronamelder-website` channel. Although the primary language used on the channel is Dutch, you should feel free to join the conversation in English.


## Honorable mentions and gratitude 

Shout out to all volunteers that helped out, among which: Harrie Kuipers (project lead), Paul Wagener (initial HTML implementation), Benjamin W. Broersma (tech lead, HTML implementation of the version 0.6 design, translatable templates via markdown), Anouschka Scholten (UX research questionnaire among 500+ people), Arian van Putten (helped out with GitHub issues and useful comments) and Bart Lenstra (designs in Figma). Also involved were Laura Engelshove, Cas Zeegers, Nelleke Harmse, Ruben Vandenbussche, Ruben Ahuluheluw, Joost Soeterbroek. 

Harrie, Bart, Cas and Laura have later been asked to finish the project on a paid basis. 


## Development & Contribution process 

Note: rather than rely on a third party CDN or dependencies that are not part of this repository; all assets and dependencies are part of this build. Please go to [the vendor licenses directory](./vendor-licenses) for the vendor licenses.

The development team works directly from this open-source repository. If you plan to propose changes, we recommend opening an issue beforehand where we can discuss your planned changes. This increases the chance that we’re able to use your contribution (or it avoids doing work if there are reasons why we wouldn't be able to use it).
See also [Develop with us (contribute and review)](README.development.md) and [i18n (internationalization)](README.i18n.md)

