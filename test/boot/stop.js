// test whether Jakhu can stop
var stop = require('../../boot/index.js');
describe('Boot tests', function () {
  it('can we stop the server?', function (done) {
    // body...
    stop.stop('test');
    stop.monstop('test');
    done();
  });
});
