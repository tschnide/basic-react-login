# Project Notes
* A single page app doesn't download all of the JavaScript. Rather than downloading every page for every change it will only download the stuff in the content area.
  * To use it you need to replace `<a href>` type links. Use the Link import from `react-router-dom`. Replace `a` with `Link` and `href` with `to`.
* 