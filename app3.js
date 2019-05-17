// const fs = require('fs');
// fs.mkdir('dir',(err)=>{
// 	if(err)
// 		console.log(err);
// 	else{
// 			if(err)
// 				console.log(err);
// 			else
// 				fs.writeFile('./dir/example.txt','some example',(err)=>{
// 					if(err)
// 						console.log(err);
// 					else{
// 						console.log('succesfully created file');
// 					}
// 				});
// 		}
// });

// const fs = require('fs');
// fs.unlink('dir/example.txt',(err)=>{
// 	if(err)
// 		console.log(err);
// 	else{
// 		fs.rmdir('dir',(err)=>{
// 			if(err)
// 				console.log(err);
// 			else
// 				console.log('succesfully deleted!');
// 		});
// 	}
// });
const fs = require('fs');
fs.readdir('example',(err,files)=>{
	if(err)
		console.log(err);
	else{
		for(let file of files){
			fs.unlink('example/'+file,(err)=>{
				if(err)
					console.log(err);
				else
					console.log('Succesfully deleted file ' + file);
			})
		}
	}
});