


var mongoose=require("mongoose");


var User=mongoose.model('User',{
email:	{
		type:String,
		required:true,
		minlength:1,
		trim:true
	}
});





// var user=new User({
// 	   email:"kshitijpratap0809@gmail.com"
// });

// user.save().then((docs)=>{
//   console.log("saved doc",docs);
// },(e)=>{
// 	console.log(e);
// });

module.exports={User}; 
