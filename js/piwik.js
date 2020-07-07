var _paq = _paq || [];

_paq.push(["setCookieDomain", "*.minvws.github.io"]);
_paq.push(["setDomains", ["*.minvws.github.io"]]);
_paq.push(['setLinkTrackingTimer', 750]);
_paq.push(['setCustomDimension', 1, document.documentElement.lang]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);

(function() {
    var u="//statistiek.rijksoverheid.nl/piwik/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '7971']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();