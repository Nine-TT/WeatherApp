const search = document.querySelector('.input-search');

var content = document.querySelector('.content');


async function ChangeWeatherUI(weather) {

    var city = document.querySelector('.city');
    var country = document.querySelector('.country');
    var value = document.querySelector('.value');
    var time = document.querySelector('.time');
    var shortDesc = document.querySelector('.short-desc');

    var visibility = document.querySelector('.visibility span');
    var wind = document.querySelector('.wind span');
    var sun = document.querySelector('.sun span');

    city.innerHTML = weather.name
	country.innerHTML = weather.sys.country
	time.innerHTML = new Date().toLocaleString()
	shortDesc.innerHTML = weather.weather[0].main

	const temp =  Math.round(weather.main.temp)
	temperature.innerHTML = temp

    temp >= 18
		? (document.body.className = 'hot')
		: (document.body.className = 'cold')

	visibility.innerHTML = weather.visibility + ' (m)'
	wind.innerHTML = weather.wind.speed + ' (m/s)'
	sun.innerHTML = weather.clouds.all + ' (%)'

}

let input = search.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        console.log(e.target.value)
		getWeather(e.target.value)
	}
})


async function getWeather(input) {
    let apiKey = '1eab4aa8b854874d63a22c442cbbe391'
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`

    const res = await fetch(url)
    
	const weather = await res.json()
    console.log(weather)

	ChangeWeatherUI(weather)
}

getWeather('ha giang')
