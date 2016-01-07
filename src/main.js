'use strict';

import { app, BrowserWindow, crashReporter } from 'electron';

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});