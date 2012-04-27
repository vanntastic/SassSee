(function(dt) {
                var requestUrl;
    
                dt.panels.create("SassSee", "sasssee-icon.png", "Panel.html");
    
                dt.resources.onNavigated.addListener(function(url) {
                    requestUrl = url;
                });
    
                dt.resources.onFinished.addListener(function(resource) {
                    if (resource.request.url === requestUrl) {
                        // TODO handle request, communicate with panel.html to modify content
                    }
                });
            })(chrome.devtools); 
            