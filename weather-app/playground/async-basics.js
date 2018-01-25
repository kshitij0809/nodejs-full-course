console.log("start");
setTimeout(()=>{
	console.log("middle");
},2000);
setTimeout(()=>{
	console.log("middle after setTimeout");
},0);
console.log("end");