console.log("start");
setTimeout(()=>{
	console.log("middle");
})
setTimeout(()=>{
	console.log("middle after setTimeout");
})
console.log("end");