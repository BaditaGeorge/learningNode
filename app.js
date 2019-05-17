/*const tutorial = require('./tut');
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SMO());*/

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tut',(num1,num2)=>{
	console.log(num1+num2);
});

eventEmitter.emit('tut',1,2);

class Person extends EventEmitter{
	constructor(name){
		super();
		this._name = name;
	}
	get name(){
		return this._name;
	}
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');
christina.on('name',()=>{
	console.log('my name is ' + christina.name);
});
pedro.on('name',()=>{
	console.log('my name is ' + pedro.name);
});
 
pedro.emit('name');
christina.emit('name');