chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
      code:
      'navigator.__defineGetter__("userAgent",function(){return "Googlebot/2.1 (+http://www.googlebot.com/bot.html)"});'+
      'navigator.__defineGetter__("appName",function(){return "Googlebot"});'+
      'console.log(navigator.userAgent);'+
      'console.log(navigator.appName);'+
      'e = function(){'+
      	'var url = "'+tab.url+'";'+
      	'var cleanUrl = url.substring(url.lastIndexOf("http"));'+
      	'var xhr = new XMLHttpRequest();'+
      	'xhr.open("GET",cleanUrl);'+
	    'xhr.onload = function(){'+
	    	'document.write(xhr.response);'+
	    '};'+
      	'xhr.send();'+
      '};'+
      'e();'+
      'setTimeout(function(){e();}.bind(this),4000);'+
      'setTimeout(function(){document.getElementsByClassName("site")[1].scrollIntoView();},5000);'
    });
});