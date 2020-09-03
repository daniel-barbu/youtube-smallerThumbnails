// ==UserScript==
// @name         youtube-smallerThumbnails
// @match        https://www.youtube.com/results?search_query=*
// ==/UserScript==

if (window.location.href.startsWith("https://www.youtube.com/results?search_query=")) {
    for (var i=0; i<document.getElementsByTagName("ytd-thumbnail").length; i++) document.getElementsByTagName("ytd-thumbnail")[i].style.zoom="0.8";
    for (var i=0; i<document.getElementsByTagName("ytd-playlist-thumbnail").length; i++) document.getElementsByTagName("ytd-playlist-thumbnail")[i].style.zoom="0.8";

    window.onscroll = function (e) {
        for (var i=0; i<document.getElementsByTagName("ytd-thumbnail").length; i++) document.getElementsByTagName("ytd-thumbnail")[i].style.zoom="0.8";
        for (var i=0; i<document.getElementsByTagName("ytd-playlist-thumbnail").length; i++) document.getElementsByTagName("ytd-playlist-thumbnail")[i].style.zoom="0.8";
    }
}
