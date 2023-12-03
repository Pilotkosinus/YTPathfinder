// ==UserScript==
// @name         YTPathfinder
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Redirect YouTube videos to a custom domain while keeping the video ID same.
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    let lastUrl = location.href;

    setInterval(function() {
        let currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            if (currentUrl.includes('youtube.com/watch?v=')) {
                let videoId = currentUrl.split('watch?v=')[1].split('&')[0];
                let newUrl = `https://yt.cdaut.de/watch?v=${videoId}`;
                window.location.replace(newUrl);
            }
        }
    }, 1000); // checks every 1 second
})();
