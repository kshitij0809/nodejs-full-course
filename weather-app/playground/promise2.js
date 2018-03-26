const request =require('request');



var geocodeAddress= (address)=>{
	return new Promise((resolve,reject)=>{
   var encodedaddress=encodeURIComponent(address);
request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=utter',
	json:true 
},(erroe,response,body)=>{
	if(erroe){
		reject("address not found");
	}
	else if(body.status==='ZERO_RESULTS'){
        reject("unable to find address");
	}
	else if(body.status==='OK'){
	
    resolve({
        address:body.results[0].formatted_address,
		lat:body.results[0].geometry.location.lat,
		long:body.results[0].geometry.location.lng,
    });
	
   }

});

	
});
};

geocodeAddress('00101').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
  
}).catch((errormeassages)=>{
	console.log(errormeassages);
});