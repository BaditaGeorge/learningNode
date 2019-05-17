// const fs = require('fs');
// const readStream = fs.createReadStream('lota.txt','utf8');
// const writeStream = fs.createWriteStream('dir/example2.txt');
// readStream.on('data',(chunk)=>{
// 	writeStream.write(chunk);
// });
const fs = require('fs');
const readStream = fs.createReadStream('lota.txt','utf8');
readStream.on('data',(chunk)=>{
	console.log(chunk);
});