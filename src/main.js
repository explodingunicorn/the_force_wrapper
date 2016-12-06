var path = require('path');
var DIRECTORY;

if (process.argv[2] === '-n') {
  //var midi = require('./js/midi.js');
  DIRECTORY = "nothing";
  exports.directory = DIRECTORY;
  var express = require('express');

  var app = express();

  app.use(express.static(__dirname + '/public'));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.listen(3000);
}
else if (process.argv[2] = '-e') {
  //const midi = require('./js/midi.js');
  var electron = require('electron');
  //const {app, BrowserWindow} = electron;

  electron.app.on('ready', function() {
    var win = new electron.BrowserWindow({width: 800, height: 600})
    win.enableLargerThanScreen = true;
    win.setSize(800, 600);
    win.loadURL('file://' + __dirname + '/index.html');
    win.webContents.openDevTools();
  });
}
