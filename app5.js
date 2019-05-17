const fs = require('fs');
const readStream = fs.createReadStream('app.js','utf8');
const writeStream = fs.createWriteStream('arhiva.txt');
var p = "";
var dist = [];
var arr = [];
for(var i=0; i<=255; i++){
	dist[String.fromCharCode(i)] = i;
}
var c = "";
var code = 256;
var index = 0;
readStream.on('data',(chunk)=>{
	var str = chunk.toString();
	for(var i=0;i<str.length;i++){
		if(p === "")
			p += str[i];
		if(i!==str.length-1)
			c += str[i+1];
		if(dist[p+c] !== undefined){
			p += c;
		}
		else{
			arr.push(dist[p]);
			dist[p+c] = code;
			code += 1;
			writeStream.write(arr[index].toString()+'\n');
			index += 1;
			p = c;
		}
		c = "";
	}
});
