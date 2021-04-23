// API Calls

// API Key
const key = 'Kmr8fsBplEVH9HwJn2p8pkczcZTb8XHx';

// 2 requests to 2 different endpoints

const getCity = async (city) => {

    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseURL + query);

    const data = await response.json();

    return data[0]
    

}




// getCity('lahore')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


const getWeather = async (id) => {

    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    
    const query = `${id}?apikey=${key}`;

    const response = await fetch(baseURL + query);
    const data = await response.json();

    return data[0]
}

//let's join the two methods together. 

// getCity('lahore')
//     .then(data => {
//         return getWeather(data.Key)
//     }).then(data => {
//         console.log(data)
//     }).catch(err => console.log(err))

//Update the location dynamically! 