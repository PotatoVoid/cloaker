function inject(url) {
  var tab = window.open('about:blank', '_blank');
  tab.document.open();
  tab.document.write(`
    <html>
      <head>
        <style>
          body { margin: 0; height: 100vh; }
          iframe { border: none; width: 100%; height: 100%; margin: 0; }
        </style>
      </head>
      <body>
        <iframe src="${url}"></iframe>
      </body>
    </html>
  `);
  tab.document.close();
}
