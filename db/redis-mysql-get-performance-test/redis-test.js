var redis=require("redis"),client=redis.createClient("6379","127.0.0.1");
var async=require('async');

client.on("error",function(e,r){
	console.log(e);
});

var arr=[];
for(var i=0;i<1000000;i++){
	arr.push(Math.floor((Math.random()*10000000)));
}

//

var log=function(e,r){
	console.log(r);
};


console.log("--test--");
var t1=(new Date()).getTime();

var jobs=[];
var jf=function(i){
	var fx=function(callback){
		client.get(i.toString(),callback);
	};
	jobs.push(fx);
};

for(var i=0;i<1000000;i++){
	//console.log(client);
	//client.get("1",log);
	//console.log(client);
	jf(arr[i]);
}

/*jobs=[function(cb){
	client.get("1",function(e,r){
		cb(e,r);
	});
},function(cb){
	client.get("2",function(e,r){
		cb(e,r);
	});
}];
*/

//jobs=[];
//
//jobs=[function(callback){
//	client.mget(arr,callback);
//}];

//client.mget(arr,log);

async.parallel(jobs,function(e,r){
	console.log(r[0].length);
	var t2=(new Date()).getTime();
	console.log("ELAPSED: ",(t2-t1)/1000);
	console.log("--//test--");
	client.end();
});



//client.end();
