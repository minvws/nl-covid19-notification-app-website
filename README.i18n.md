# README i18n

## Simple i18n in Jekyll without use of plugin
Jekyll doesn’t have support for multi-language sites baked in. Plugins are available, 
but to keep things simple and with minimal dependencies this implementation is proposed.
This strategy involves having a separate path for each language’s content, and keep the
default language (nl) at top-level.

## Separate languages by path and 'lang' key in collections
Content for each language exists in its own folder based on the language code, with default 
language (nl) at top-level. Contents in features collection are identified by a `lang` key, 
which will allow you to filter for a language key in the collection.

## Data dir
The `_data` directory holds files for translation (useful in layouts) and language metadata.

## To test:

  - Dutch (default) language (nl) http://127.0.0.1:4000
  - English language (en) http://127.0.0.1:4000/en

## Language switch
A language switch in HTML could look like this:

	<em>{{ site.data.translations['differentLanguage'][page.lang] }}:</em>
	<ul class="languages">
	{% for lang in site.data.languages %}
	    {% assign language = lang[1] %}
	    <li><a href="{{site.baseurl}}{{lang[0]}}">{{ language.label }}</a></li>
	{% endfor %}
	</ul>

## See also
See also [this article](https://forestry.io/blog/creating-a-multilingual-blog-with-jekyll/)
for a more extensive writeup of this same solution.
