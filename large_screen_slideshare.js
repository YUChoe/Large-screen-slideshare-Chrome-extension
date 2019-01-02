var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('large_screen_slideshare.css');
document.head.appendChild(style);
