const request=require('request');

request({
	url:'http://maps.googleapis.com/maps/api/geocode/json?address=arera%20coloney%20bhopal',
	json:true 
},(erroe,response,body)=>{
	console.log(body);
});