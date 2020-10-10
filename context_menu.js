'use strict';

chrome.contextMenus.create({
    id: "id",
    title: 'GeoPeek',
    contexts: ["selection"],
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    var sText = info.selectionText;
    var url = "http://maps.google.com/?q=" + encodeURIComponent(sText);
    window.open(url, '_blank');
});