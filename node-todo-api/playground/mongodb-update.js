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
      


      db.collection('Users').findOneAndUpdate({name:"kshitij"},
        {
          $set:{
            name:"pawan"
          }
        ,
          $inc:{
            age:22
          }
        },{
            returnOriginal:false
          }
        ).then((result)=>{
    console.log(result);
   });

  //db.close();
 });

