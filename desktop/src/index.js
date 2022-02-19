const { app, BrowserWindow } = require('electron');

const createWindow = (width, height) => {
    const window = new BrowserWindow({
        autoHideMenuBar: true,
        width: width,
        height: height,
        minWidth: 800,
        minHeight: 600,
        icon: __dirname + '/assets/icon_bta.png',
        webPreferences: {
            nodeIntegration: true
        }
    });
    return (window);
}

app.whenReady().then(() => {
    const window = createWindow(1280, 800);
    window.loadFile('static/index.html');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
