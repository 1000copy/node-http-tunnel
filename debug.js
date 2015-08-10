// nset NODE_DEBUG=httpdebug

function a(){
	var util = require('util');
	var debug = util.debuglog('httpdebug');
	debug(1211)
	console.log("1222")
}
//  任何stdin的输入，都可以被base64然后打印出来
function b(){
  var es = require('event-stream')
  var inspect = require('util').inspect
  var stream64 =  es.map(function(d, cb) {cb(null, d.toString('base64'));})
  process.stdin    
    .pipe(stream64)
    .pipe(process.stdout) 
}
b()