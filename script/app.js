// DOM Manipulation

const cityForm = document.querySelector('form');
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const searchList = document.querySelector('.search-list')

//Update City
const updateCity = async (city) => {
    const cityDetails = await getCity(city)
    //console.log(cityDetails)
    const weather = await getWeather(cityDetails.Key)
    console.log(weather)

    return {cityDetails, weather} //shorthand for {cityDetails: cityDetails, weather: weather}

}

//On Enter do this
cityForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => {
            throw new Error('Please enter the correct city name');
        })
    // updateCity(city)
    //     .then(data => updateUI(data))

})

// Update UI

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {

    // const cityDetails = data.cityDetails;
    // const weather = data.weather;
    // The line below is a shorthand of the two lines of code above.

    const {cityDetails, weather} = data;
    details.innerHTML = `
        <h5 class="my-5">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

    // Setting day/night image
    let timeSource = null;

    if (weather.IsDayTime) {
        timeSource = 'img/day.svg'
    } else {
        timeSource = 'img/night.svg'
    }

    time.setAttribute('src', timeSource )

    let iconSource = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSource)

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
    
    
}
