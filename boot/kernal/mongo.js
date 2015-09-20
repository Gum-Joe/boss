var exec = require('child_process').exec;
var os = require('os');
var fs = require('fs');
var https = require('https');
var mkdirp = require('mkdirp');
var unzip = require('unzip');
var terminal = require('child_process').exec;
var clicolour = require('cli-color');

exports.start = function start(callback) {
  if(os.type() === "Windows_NT"){
    // start mongo
    // download if not Here
    // and exec
    // TODO: Make work in order
    fs.stat('./packages/mongo', function (err) {
      if(err){
        if(process.env.DOCKER === undefined || false){
          if(os.type() === "Darwin"){
            var terminal = require('child_process').spawn('bash', ['./scripts/getmongoosx.sh']);
            terminal.stdout.on('data', function (data) {
                console.log('stdout: ' + data);
            });

            terminal.stderr.on('data', function (data) {
                console.log('stderr: ' + data);
            });

            terminal.on('exit', function (code) {
                console.log('Done with '  + code);
            });

            setTimeout(function() {
              console.log("Downloading MongoDB...");
            }, 2000000);
          } else if(os.type() === "Windows_NT"){
            var terminal = require('child_process').spawn('bash', ['./scripts/getmongo.sh']);
            terminal.stdout.on('data', function (data) {
                console.log('stdout: ' + data);
            });

            terminal.stderr.on('data', function (data) {
                console.log('stderr: ' + data);
            });

            terminal.on('exit', function (code) {
                console.log('Done with '  + code);
            });

            setTimeout(function() {
              console.log("Downloading MongoDB...");
            }, 2000000);
          } else {
            console.log(clicolour.cyanBright("webOS ") + clicolour.magentaBright("database ") + "Sorry, you will need to start your own DB as their as so many distributions of Linux ");
          };
        } else {
          var terminal = require('child_process').spawn('bash', ['docker run mongo']);
          terminal.stdout.on('data', function (data) {
              console.log('stdout: ' + data);
          });

          terminal.stderr.on('data', function (data) {
              console.log('stderr: ' + data);
          });

          terminal.on('exit', function (code) {
              console.log('Done with '  + code);
          });

          setTimeout(function() {
            console.log("Downloading MongoDB...");
          }, 2000000);
        }

        terminal.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });

        terminal.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });

        terminal.on('exit', function (code) {
            console.log('Done with '  + code);
        });

        setTimeout(function() {
          console.log("Downloading MongoDB...");
        }, 2000000);
      } else {
        // start DB
        if(process.env.DOCKER === undefined || false){
          if(os.type() !== 'Linux'){
            var m = require('child_process').spawn('bash', ['./scripts/mongo.sh']);

            m.on('exit', function (code) {
                console.log(clicolour.cyanBright("webOS ") + clicolour.magentaBright("database ") + "Database started with "+code);
            });

            setTimeout(function() {
              console.log("Starting MongoDB...");
            }, 2000000);
          } else {
            console.log(clicolour.cyanBright("webOS ") + clicolour.magentaBright("database ") + "Sorry, but MongoDB is not stored locally as it was not downloaded");
          };
        } else {
          var terminal = require('child_process').spawn('bash', ['docker run mongo']);
        };
      };
    });
  } else {
    callback("EOS", "Not windows");
  };
}