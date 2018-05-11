const {mongoose}=require("./../server/db/mongoose.js");
const {ObjectId}=require('mongodb');

const {Todo} =require("./../server/models/todo.js");
const {User} =require("./../server/models/user.js");


// var id='5abd93a781cf61c02463bcf9';


// if(!ObjectId.isValid(id)){
// 	console.log('id not found');
// }

// Todo.find({
// 	_id:id
// }).then((todo)=>{
// 	console.log('Todo',todo);
// });


// Todo.findOne({
// 	_id:id
// }).then((todo)=>{
// 	console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log('id not found');
// 	}
// 	console.log('Todo by id',todo);
// }).catch((e)=>{
// 	console.log(e);
// });

var id='5abad4234dc1afac203cdbbe';

User.findById(id).then((todo)=>{
	if(!todo){
		return console.log('id not found');
	}
	console.log(JSON.stringify(todo,undefined,2));
}).catch((e)=>{
	console.log(e);
});