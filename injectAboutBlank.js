function inject(url) {
  var tab = window.open('about:blank', '_blank');
  tab.document.body.style.margin = "0";
  tab.document.body.style.height = "100vh";
  var iframe = tab.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.src = url;
  tab.document.body.appendChild(iframe);
}
