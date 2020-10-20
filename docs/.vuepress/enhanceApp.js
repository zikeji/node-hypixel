export default ({router}) => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    var _paq = window._paq = window._paq || [];
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function () {
      var u = "//analytics.zynados.com/";
      _paq.push(['setTrackerUrl', u + 'trk.php']);
      _paq.push(['setSiteId', '1']);
      var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
      g.type = 'text/javascript'; g.async = true; g.src = u + 'trk.js'; s.parentNode.insertBefore(g, s);
    })();

    router.afterEach(function (to) {
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['setCustomUrl', to.fullPath]);
      window._paq.push(['trackPageView']);
      if (window.addthis) {
        window.addthis.layers.refresh();
      }
    });
  }
}