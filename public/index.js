
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
'use strict';

var Main = function Main(){
    var consoleStyle = [
        'color: #9d00ff',
        'font-weight: bold',
        'font-style: italic',
        'font-size: 20px',
        'text-shadow: 1px 1px #a9a9a9'
    ].join(";");

    var renderArea = document.getElementById('renderArea');
    console.log("%c Welcome to Javascript ES6 Training", consoleStyle);
    renderArea.innerText = "Render Area";
};

new Main();
