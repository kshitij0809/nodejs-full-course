//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  
  if(err){
  	console.log("unable to connect to server");
  }
  console.log("connected to the server");


  // db.collection('Todos').find({
  // _id:new ObjectID('5ab9a5f34c6bb9b16108f4f0')
  // }).toArray().then((docs)=>{
  //    console.log('Todos');
  //    console.log(JSON.stringify(docs,undefined,3));
  // },(err)=>{
  // 	console.log("unable to find the document");
  // });



  // db.collection('Todos').find().count().then((count)=>{
  //    console.log(`Todos-count:${count}`);
  // },(err)=>{
  // 	console.log("unable to find the document");
  // });
 

   db.collection('Users').find({name:'kshitij'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,3)); 
 },(err)=>{
  	console.log("unable to find the document");
  });

  //db.close();
 });

