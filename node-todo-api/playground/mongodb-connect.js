const MongoClient=require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  
  if(err){
  	console.log("unable to connect to server");
  }
  console.log("connected to the server");


  db.collection('Todos').insertOne({
  	text:"something to do",
  	complecte:false
  },(err,result)=>{
  	if(err){
  		console.log("unable to insert the data");
  	}
  	console.log(JSON.stringify(result.ops,undefined,2));
  });



  db.close();
});

