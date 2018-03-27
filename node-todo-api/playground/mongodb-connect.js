const MongoClient=require('mongodb').MongoClient;

var users={name:"kshitij",age:20};
var {name}=users;
console.log(name);		


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  
  if(err){
  	console.log("unable to connect to server");
  }
  console.log("connected to the server");


  // db.collection('Todos').insertOne({
  // 	text:"something to do",
  // 	complecte:false
  // },(err,result)=>{
  // 	if(err){
  // 		console.log("unable to insert the data");
  // 	}
  // 	console.log(JSON.stringify(result.ops,undefined,2));
  // });


  //user database inerting name,age,etc


//   db.collection('Users').insertOne({


//   	name:"kshitij",
//   	age:20,
//   	location:"Roorkee"
//   },(err,result)=>{
//   	if(err){
//   		console.log("unable to insert the data");
//   	}
//   	console.log(result.ops[0]._id);
//   });

//   db.close();
 });

