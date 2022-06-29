const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cca89a8275fd47c427d00f0ee7a577cc";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
  });
