const API_KEY = "878df4331630aebe5cf7eb7d0f221b0d";

const makeIconURL = (iconId) => {
  return  `https://openweathermap.org/img/wn/${iconId}@2x.png`
};



const getFormatWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  const {
    weather,
    main: { temp, feels_like, pressure, humidity,temp_min,temp_max },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];
  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    pressure,
    humidity,
    speed,
    country,
    name,
    temp_min,
    temp_max,
  };
};

export { getFormatWeatherData };
