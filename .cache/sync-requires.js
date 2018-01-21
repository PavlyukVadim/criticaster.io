// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/amadev/Рабочий стол/cv/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/amadev/Рабочий стол/cv/.cache/dev-404-page.js")),
  "component---src-pages-counter-js": preferDefault(require("/home/amadev/Рабочий стол/cv/src/pages/counter.js")),
  "component---src-pages-index-js": preferDefault(require("/home/amadev/Рабочий стол/cv/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/amadev/Рабочий стол/cv/src/pages/page-2.js")),
  "component---src-pages-404-js": preferDefault(require("/home/amadev/Рабочий стол/cv/src/pages/404.js"))
}

exports.json = {
  "layout-index.json": require("/home/amadev/Рабочий стол/cv/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/amadev/Рабочий стол/cv/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/home/amadev/Рабочий стол/cv/.cache/json/layout-index.json"),
  "counter.json": require("/home/amadev/Рабочий стол/cv/.cache/json/counter.json"),
  "layout-index.json": require("/home/amadev/Рабочий стол/cv/.cache/json/layout-index.json"),
  "index.json": require("/home/amadev/Рабочий стол/cv/.cache/json/index.json"),
  "layout-index.json": require("/home/amadev/Рабочий стол/cv/.cache/json/layout-index.json"),
  "page-2.json": require("/home/amadev/Рабочий стол/cv/.cache/json/page-2.json"),
  "layout-index.json": require("/home/amadev/Рабочий стол/cv/.cache/json/layout-index.json"),
  "404-html.json": require("/home/amadev/Рабочий стол/cv/.cache/json/404-html.json")
}