import { GET_CITY_INFO } from "./types";

export const getCityInfo = (city_name) => dispatch => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&APPID=1c2c0597a063bf5261ed0a4a2ba10781&units=metric`)
    .then(res => res.json())
    .then(city_info =>
      dispatch({
        type: GET_CITY_INFO,
        payload: city_info
      })
    )
    .catch((e) => console.log(e))
};
