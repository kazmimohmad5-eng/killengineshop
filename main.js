
const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 460,
    height: 700,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
  win.hide();

  // Toggle window with F1
  globalShortcut.register('F1', () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
    }
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
