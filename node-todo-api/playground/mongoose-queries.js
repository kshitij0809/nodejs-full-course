const {mongoose}=require("./../server/db/mongoose.js");
const {ObjectId}=require('mongodb');

const {Todo} =require("./../server/models/todo.js");


var id='abd93a781cf61c02463bcf9';


if(!ObjectId.isValid(id)){
	console.log('id not found');
}

Todo.find({
	_id:id
}).then((todo)=>{
	console.log('Todo',todo);
});


Todo.findOne({
	_id:id
}).then((todo)=>{
	console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
	if(!todo){
		return console.log('id not found');
	}
	console.log('Todo by id',todo);
}).catch((e)=>{
	console.log(e);
});