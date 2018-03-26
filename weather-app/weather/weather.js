const request =require('request');



var getWeather = (lat,lng,callback)=>{
request({
	url:'https://api.darksky.net/forecast/3a9bc19970fea14da5616dcf89cb51fa/26,77',
	json:true 
},(erroe,response,body)=>{
	if(erroe){
		callback("address not found forecast");
	}
	else if(response.statusCode===400){
        callback("unable to find address bro");
	}
	else if(response.statusCode===200){
	
    callback(undefined,{
    	temp:body.currently.temperature,
    	apparenttemp:body.currently.apparentTemperature
    });	
  }
 });
};

module.exports.getWeather=getWeather;