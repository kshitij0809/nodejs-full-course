const mongoose=require('mongoose');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');



var todo=mongoose.model('todo',{
text:	{
		type:String
	},
completed:	{
		type:Boolean
	},
completedAt:	{
		type:Number
	}
});



// var newtodo=new todo({
// 	text:"iitr"
// });

// newtodo.save().then((docs)=>{
//   console.log("saved doc",docs);
// },(e)=>{
// 	console.log(e);
// });


var otherTodo=new todo({
	text:"iitr",
	completed:false,
	completedAt:120
});

otherTodo.save().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(e)=>{
	console.log(e);
});