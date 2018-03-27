//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  
  if(err){
  	console.log("unable to connect to server");
  }
  console.log("connected to the server");


   // db.collection('Users').deleteMany({name:'kshitij'}).then((result)=>{
   //  console.log(result);
   // });
      


      db.collection('Todos').findOneAndDelete({text:"something to do"}).then((result)=>{
    console.log(result);
   });

  //db.close();
 });

