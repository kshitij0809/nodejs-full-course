// var somePromise= new Promise((resolve,reject)=>{

// 	setTimeout(()=>{

// 		  resolve("worked");
// 		  reject("unable it worked");
// 	},2000);
// });

// somePromise.then((message)=>{
//   console.log("success:",message);
// },(errormeassages)=>{
//   console.log("errormeassages",errormeassages);
// });



var addition= (a,b)=>{
	return new Promise((resolve,reject)=>{

	setTimeout(()=>{
		if(typeof a==='number' && typeof b==='number'){
           resolve(a+b);

		}else{

		  reject("unable it worked");
		}
		 
	},2000);
});
};

addition(5,9).then((res)=>{
  console.log("success:",res);
  return addition(res,'99');
},(errormeassages)=>{
  console.log("errormeassages",errormeassages);
}).then((res)=>{
  console.log("success:",res);
},(errormeassages)=>{
  console.log("errormeassages",errormeassages);
});