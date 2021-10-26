import axios from 'axios';


export default async function ConsultAPI(){

    const axios = require('axios');

    var result=[];
    
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Sorocaba&appid=fe59787df0be63bef3f337e96c0a5e8e`)
    .then((response)=>{
        const data = response.data;
        const locationName = (data.sys.country + ',' + data.name);
        const temperaMin = data.main.temp_min;
        const temperaMax = data.main.temp_max;
        const wind = data.wind.speed;
        const humidity = data.main.humidity;
        const currentTemperature = data.main.temp;

        result = [currentTemperature, temperaMin, temperaMax, locationName, wind, humidity]
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })

    return result
}
