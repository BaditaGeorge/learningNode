// const fs = require('fs');
// const readStream = fs.createReadStream('arhiva.txt','utf8');
// const writeStream = fs.createWriteStream('reconstr.txt');
// var p =-1;
// var dist = [];
// var arr = [];
// var c = 0;
// for(var i=0;i<=255;i++){
// 	dist[i] = String.fromCharCode(i);
// }
// var code = 256;
// var index =0;
// var val = 0;
// readStream.on('data',(chunk)=>{
	
// });

const fs = require('fs');
const readStream = fs.createReadStream('arhiva.txt');
const writeStream = fs.createWriteStream('reconstr.txt');
var p =-1;
var dist = [];
var arr = [];
var n = 0;
var s = "";
var c = "";
for(var i=0;i<=255;i++){
	dist[i] = String.fromCharCode(i);
}
var code = 256;
var index =0;
var val = 0;
readStream.on('data',function(chunk){
	var str = chunk.toString();
	//console.log(str);
	var ints = str.split('\n').map(function(val){
		return parseInt(val);
	});
	p = ints[0];
	s = dist[p];
	c = "";
	c += s[0];
	console.log(s);
	for(var j=0;j<ints.length;j++){
		n = ints[j+1];
		//console.log(dist[n]);
		if(dist[n] === undefined){
			s = dist[p];
			s = s+c;
		} else{
			writeStream.write(dist[p]);
			s = dist[n];
		}
		//console.log(s);
		c = "";
		c += s[0];
		dist[code] = dist[p] + c;
		code += 1;
		p = n;
	}
	//console.log(s);
});