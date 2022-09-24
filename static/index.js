import { FakeConsole } from "./src/js/console.js";

const fConsole = new FakeConsole();

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    fConsole.elapse()
    fConsole.log("starting", "main@index.js", Date.now())
    event.preventDefault();
    try {
        window.navigator.serviceWorker.register('https://combative-gold-moccasins.cyclic.app/src/js/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        fConsole.log("starting service worker", "sw@index.js", Date.now())
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url && fConsole.log("non-url query detected, switching to google search", "sw@index.js", Date.now());
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url && fConsole.log("query is url", "sw@index.js");;

        fConsole.log("relocating", "sw", Date.now())
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });}
    catch(e) {
        fConsole.error("failed to start sw", e, "sw@index.js", Date.now());
        fConsole.end()
    }
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
