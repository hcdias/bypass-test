chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
      code:'var url = "'+tab.url+'";'+
      'var cleanUrl = url.substring(url.lastIndexOf("http"));'+
      'var xhr = new XMLHttpRequest();'+
      'xhr.open("GET",cleanUrl);'+
      'console.log(cleanUrl);'+
      'console.log("teste");'+
      'xhr.onload = function(){document.write(xhr.response);};xhr.send();'
    });
});