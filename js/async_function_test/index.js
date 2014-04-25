var async=require('async');
var sexy=require('./sexy');
var use=new sexy.sexy();
var use2=new sexy.sexy();
var use3=new sexy.sexy();
var use4=new sexy.sexy();
console.log(sexy);

async.series([
	use.lazy('1'),
	use2.lazy('2'),
	use3.lazy('3'),
	use4.lazy('4'),
]);
