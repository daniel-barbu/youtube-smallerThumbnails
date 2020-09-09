// ==UserScript==
// @name         youtube-smallerThumbnails
// @match        *.youtube.com/*
// ==/UserScript==

if (window.location.href.startsWith("https://www.youtube.com/results?search_query=")) {
    function fct() {
        console.log("exec fct()");
        for (var i=0; i<document.getElementsByTagName("ytd-thumbnail").length; i++) {
            document.getElementsByTagName("ytd-thumbnail")[i].style.zoom="0.8";
            document.getElementsByTagName("ytd-thumbnail")[i].childNodes[2].childNodes[3].style.zoom="1.3";
            document.getElementsByTagName("ytd-thumbnail")[i].childNodes[2].childNodes[7].style.zoom="1.2";
        }
        for (i=0; i<document.getElementsByTagName("ytd-playlist-thumbnail").length; i++) document.getElementsByTagName("ytd-playlist-thumbnail")[i].style.zoom="0.8";
    } fct();
}
window.onscroll=function(){fct()};
