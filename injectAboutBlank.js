function inject(url) {
  document.documentElement.innerHTML = `
  <head><title>Mail</title>
  <style>iframe { width: 100%; height: 100% }</style></head>
  <body><iframe src=[INSERT]></iframe></body>
  `
}
