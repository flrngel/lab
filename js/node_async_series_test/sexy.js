var def=function(){
	return new sexy();
};

var sexy=function(){
	this.lazy=function(str){
		console.log(this.hi);
		if( str == '1' ) this.hi='1234';
		console.log('yeah:'+str);
		setTimeout(function(){
			console.log(">"+str+":"+(new Date).getTime());
			for(var i=0;i<1000000000;i++){
			}
			console.log("<"+str+":"+(new Date).getTime());
		},1000);
	};
};

exports.sexy=def;
