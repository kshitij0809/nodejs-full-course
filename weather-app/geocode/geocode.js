const request =require('request');

var geocodeAddress=(address,callback)=>{
var encodedaddress=encodeURIComponent(address);


request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}',
	json:true 
},(erroe,response,body)=>{
	if(erroe){
		callback("address not found");
	}
	else if(body.status==='ZERO_RESULTS'){
        callback("unable to find address");
	}
	else if(body.status==='OK'){
	
    callback(undefined,{
        address:body.results[0].formatted_address,
		lat:body.results[0].geometry.location.lat,
		long:body.results[0].geometry.location.lng,
    });

	console.log(JSON.stringify(erroe,undefined,2));
	
}

});
}
module.exports.geocodeAddress=geocodeAddress;