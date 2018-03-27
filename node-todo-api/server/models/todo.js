

var mongoose=require("mongoose");

var todo=mongoose.model('todo',{
text:	{
		type:String,
		required:true,
		minlength:1,
		trim:true
	},
completed:	{
		type:Boolean,
		default:true
	},
completedAt:	{
		type:Number,
		default:100
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
	   text:true,
	// completed:false,
	// completedAt:120
});

otherTodo.save().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(e)=>{
	console.log(e);
});


module.exports={todo}; 
