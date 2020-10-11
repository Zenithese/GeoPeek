'use strict';

chrome.contextMenus.create({
    id: "id",
    title: 'GeoPeek',
    contexts: ["selection"],
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    let sText = info.selectionText;
    let url = "http://maps.google.com/?q=" + encodeURIComponent(sText);
    window.open(url, '_blank');
    // chrome.windows.create({
    //     url: url,
    //     focused: true,
    //     type: "popup"
    // });
    // let peek = document.createElement('peek')
    // peek.style.width = "100px"
    // peek.style.height = "100px"
    // peek.style.backgroundColor = "red"
    // peek.style.zIndex = 1000
    // document.body.appendChild(peek)
    // chrome.tabs.executeScript({
    //     code: "let peek = document.createElement('peek'); peek.style.width = '100px'; peek.style.height = '100px' peek.style.backgroundColor = 'red'; peek.style.zIndex = 1000; document.body.appendChild(peek)"
    // })
});