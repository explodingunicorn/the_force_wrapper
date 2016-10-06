//const midi = require('./js/midi.js');
const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', () => {
  let win = new BrowserWindow({width: 800, height: 600})
  win.enableLargerThanScreen = true;
  win.setSize(800, 600);
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();
})
