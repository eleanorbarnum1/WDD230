//if (navigator.geolocation) {
    //true
//    alert('Lets get the location (placeholder)');
        //Initial a request for the location
 //       navigator.geolocation.getCurrentPosition(function(pos){
            //'pos' return object has many properties we can grab
 //           var geoLat = pos.coords.latitude.toFixed(5);
 //           var geoLng = pos.coords.longitude.toFixed(5);
  //          var geoAcc = pos.coords.accuracy.toFixed(1);
 //         });
 // } else {
    //false
 //   alert('geolocation not available?! What browser is this?');
    // prompt for city?
 // }

 window.addEventListener('load',function(){
    this.navigator.geolocation.getCurrentPosition(function(position){
    
    let apiKey = '9e6bf538be1f1e79fd174c3fe367c3e6';
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat);
    console.log(long);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data);
    })
    .catch(function() {
      // catch any errors
    })
    function drawWeather( d ) {
        var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
        var windSpeed = Math.round(parseFloat(d.wind.speed));
        document.getElementById("temp").innerHTML = fahrenheit + '&deg;F';
        document.getElementById("weather-p1").innerHTML = `Wind Speed: ${windSpeed} km/h`;


    if ((fahrenheit <= 50) && (windSpeed > 3)){
        let chill = Math.round((35.74 + (0.6215 * fahrenheit))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*fahrenheit*Math.pow(windSpeed,0.16)));
        document.getElementById("weather-p2").innerHTML = `Wind Chill: ${chill}`;
    }else{
        document.getElementById("weather-p2").innerHTML = `Wind Chill: N/A`;
    }
}

})
 });