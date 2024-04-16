const endpoints = {
    weather: {
      baseUrl: 'https://api.openweathermap.org/data/2.5/forecast',
      apiKey: '4f944c0231428c0ac6ebf79e36eba04d'
    },
  };
  
  let countryChoice = 'Addis Ababa';
  fetchWeatherData(countryChoice);
  
  $('.searchIcon').click(function() {
    const userChoice = $('.search-input').val();
    if (userChoice !== '') {
      countryChoice = userChoice;
      fetchWeatherData(countryChoice);
    }
  });
  
  function fetchWeatherData(city) {
    const weatherURL = `${endpoints.weather.baseUrl}?q=${city}&appid=${endpoints.weather.apiKey}&units=metric`;
    fetch(weatherURL)
      .then((response) => response.json())
      .then((data) => {
        weatherData(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
  
  const weatherData = (data) => {
    // Process and display weather data
  };

  const weatherData = (data) => {
    const listOfWeatherData = data.list;
    const startDate = fixDateInterval(data.list[0].dt_txt);
    const humidityArray = [];
    const tempArray = [];
    const windArray = [];
    // Extract relevant data and populate arrays
    
    // Display country icon, name, temperature, humidity, wind speed, and map
    createWeatherList(iconArray, tempArray, humidityArray, windArray, startDate, data);
    createMap(xAxis, yAxis);
  };