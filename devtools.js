


// Create the visible DevTools panel/tab.
function () {
  if ("devtools" in chrome &&
      chrome.devtools.panel) {
    chrome.devtools.panels.create("SassSee",
        "sasssee-32.png", "devtools.html");

  } else {
    webInspector.panels.create("SassSee", "sasssee-32.png",
                               "devtools.html");
  }
};
