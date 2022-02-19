const { app, BrowserWindow } = require('electron');
const fetch = require('node-fetch');
var LocalStorage;
var localStorage;

if (typeof localStorage === 'undefined' || localStorage === null) {
    LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./storage');
}

const createWindow = (width, height) => {
    const window = new BrowserWindow({
        autoHideMenuBar: true,
        width: width,
        height: height,
        minWidth: 800,
        minHeight: 600,
        title: 'BTA Client',
        icon: __dirname + '/assets/icon_bta.png',
        webPreferences: {
            nodeIntegration: true
        }
    });
    return (window);
}

app.whenReady().then(() => {
    const window = createWindow(1280, 800);

    if (localStorage.getItem("code"))
        window.loadFile('static/index.html');
    else {
        fetch('https://api-bta.tk/auth/register', {
            method: 'POST'
        }).then((response) => {
            response.text().then((text) => {
                localStorage.setItem('code', JSON.parse(text).code);
            });
        }).then(() => {
            window.loadFile('static/index.html');
        });
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
