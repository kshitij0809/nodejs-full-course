const yargs=require('yargs');

const axios=require('axios');


const argv=yargs
.options({
	a:{
		demand:true,
		alias:'address',
		describe:'address to fetch weather',
		string:true
	}
})
.help()
.alias('help','h')
.argv;

var encodedaddress=encodeURIComponent(argv.address);
var geocodeUrl='https://maps.googleapis.com/maps/api/geocode/json?address=utter';

axios.get(geocodeUrl).then((response)=>{
	if(response.data.status==='ZERO_RESULTS'){
        throw new Error("unable to find address");
	}

    var lat=response.data.results[0].geometry.location.lat;
    var lng=response.data.results[0].geometry.location.lng;
    var weatherUrl='https://api.darksky.net/forecast/3a9bc19970fea14da5616dcf89cb51fa/26,77';
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);


}).then((response)=>{

		 var temp=response.data.currently.temperature;		 
		 var apparenttemp=response.data.currently.apparentTemperature;
		 console.log("it is currently${temp}it feels like${apparenttemp}");



}).catch((errormeassages)=>{

  if(errormeassages.code==='ENOENT'){
		console.log("unable to find address");
	}
	else {
        console.log(errormeassages.message);
	}

	
});