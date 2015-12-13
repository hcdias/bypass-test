chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
      code:'var url = "'+tab.url+'";'+
      'var cleanUrl = url.substring(url.lastIndexOf("http"));'+
      'var xhr = new XMLHttpRequest();'+
      'xhr.open("GET",cleanUrl);'+
      'xhr.onload = function(){document.write(xhr.response);};xhr.send();'
    });
});