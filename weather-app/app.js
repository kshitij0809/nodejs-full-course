const yargs=require('yargs');

const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');

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


geocode.geocodeAddress(argv.address,(errorMessages,results)=>{
	if(errorMessages){
		console.log(errorMessages);
	}
	else{
		console.log(results.address);


		weather.getWeather(27,77,(errorMessages,weatherresults)=>{
	if(errorMessages){
		console.log(errorMessages);
	}
	else{
		console.log("it is currently${weatherresults.temp}it feels like${weatherresults.apparenttemp}");
	}
});


	}
});

//3a9bc19970fea14da5616dcf89cb51fa
//https://api.darksky.net/forecast/3a9bc19970fea14da5616dcf89cb51fa/37.8267,-122.4233
