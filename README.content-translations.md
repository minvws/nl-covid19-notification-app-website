Content & Translations
---------------------

## How to add a question

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

## Content formatting

Take a look at this [example content page](https://minvws.github.io/nl-covid19-notification-app-website/en/example-content-page) ([source in markdown](./example-content-page.md)) which displays all possible content formatting options. These display options are also available in: highlighted-faq, question

## Translation

Please give your file a short English name without spaces (you can use dash `-` instead).
You should at least provide the base file with `lang: nl`.
The translations should have the same name with a `-lang` suffix, where `lang` is the language keyword e.g. `en`.

See file [README.i18n.md](README.i18n.md) for technical details.
