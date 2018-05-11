var express=require("express");
var bodyParser=require("body-parser");

const {ObjectId}=require('mongodb');

var {mongoose}=require("./db/mongoose.js");


var {Todo} =require("./models/todo.js");

var {User} =require("./models/user.js");


var app=express();
const port=process.env.PORT || 3000;
 
app.use(bodyParser.json());



///POST method



app.post('/todos',(req,res)=>{
	
    var todo=new Todo({
    	text:req.body.text
    });

  todo.save().then((docs)=>{
     res.send(docs);
},(e)=>{
	res.status(400).send(e);
});


});




///GET method


app.get('/todos',(req,res)=>{
   

	Todo.find().then((todos)=>{
	     res.send(todos);
	},(e)=>{
		res.status(400).send(e);
	});


});

app.get('/',(req,res)=>{
   

	res.send("srishti");


});




///GET method by ID


app.get('/todos/:id',(req,res)=>{
   

   var id=req.params.id;
    
    if(!ObjectId.isValid(id)){
	return res.status(404).send();
}


	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
	     res.send({todo});
		}).catch((e)=>{
			res.status(404).send();
		});
	


});

app.listen(port,()=>{
	console.log(`server started at port ${port}`);
})

module.exports={app};