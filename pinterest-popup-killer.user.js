// ==UserScript==
// @name         Pinterest Popup Killer
// @version      0.1
// @description  Browse Pinterest without having to register
// @match        https://www.pinterest.com/*
// @require      https://gist.githubusercontent.com/realies/2fece0cd3e197cf6b31ca1316431a2a4/raw/debc0e6d4d537ac228d1d71f44b1162979a5278c/waitForKeyElements.js
// @author       realies
// ==/UserScript==
(() => {
    waitForKeyElements("body > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(3)", element => {
        element.style.display = "none";
    }, false);
})();
