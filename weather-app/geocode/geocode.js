const request =require('request');

var geocodeAddress=(address)=>{




var encodedaddress=encodeURIComponent(address);
console.log(encodedaddress);


request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=encodedaddress',
	json:true 
},(erroe,response,body)=>{
	if(erroe){
		console.log("address not found");
	}
	else if(body.status==='ZERO_RESULTS'){
        console.log("unable to find address");
	}
	else if(body.status==='OK'){
	
	console.log(JSON.stringify(erroe,undefined,2));
	console.log(`address:${body.results[0].formatted_address}`);
	console.log(`lat:${body.results[0].geometry.location.lat}`);
	console.log(`long:${body.results[0].geometry.location.lng}`);
}

});




}
module.exports.geocodeAddress=geocodeAddress;