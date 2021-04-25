# Weather App
## Overview
A weather application to check the inputted city's current weather by fetching API from [Accuweather]().

## Demo

## Libraries/Tools
* Bootstrap
* HTML
* CSS
* Javascript
* AccuWeather Locations API
* AccuWeather Current Conditions API

## How it works?

### Layout
We're using two divs
* Input for the city
* Information of the weatch

Input/form
```HTML
<!-- Form -->
<form action="" class="change-location my-4 text-center text-muted">
    <label for="city">Enter a location for weather information</label>
    <input type='text' name="city" class="form-control p-4">
</form>

```

Information of the weather will be displayed in a card form so we're using a bootstap's 'card' class.

```HTML 
<!-- Information about the Weather. -->
<div class="card shadow-lg rounded d-none">
    <!-- Img for day or night -->
    <img src="https://via.placeholder.com/400x300" class="time card-img-top">
    <div class="icon bg-light mx-auto text-center">
        <img src="">
    </div>
    <!-- Weather Info -->
    <div class="text-muted text-uppercase text-center details">
        <h5 class="my-5">City Name</h5>
        <div class="my-3">Weather Condition</div>
        <div class="display-4 my-4">
            <span>25</span>
            <span>&deg;C</span>
        </div>
    </div>

</div>
```

## Setting up your API


