// ========================================
// Electron main process
// ========================================

const Electron = require('electron');
const app = Electron.app;
const BrowserWindow = Electron.BrowserWindow;

const path = require('path');

function getClientFile(file) {
    return path.join('file://', __dirname, '../client', file);
}

// ----------------------------------------

let window = null;

// When Electron is ready starting up, start renderer processes
// (aka create windows and such).
app.on('ready', () => {
    window = new BrowserWindow({
        width: 800,
        height: 600
    });

    window.loadURL(getClientFile('index.html'));
    window.openDevTools();
});

// Quit application when all windows are closed
// (I'm not sure why ignore 'darwin' platform, the docs tell so)
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});