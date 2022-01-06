let url = `http://api.weatherstack.com/current?access_key=160c6abae7989dd7bfe365be94571322&query=New York`

const degree = document.getElementById("degree")
const city = document.getElementById("city")
const date =  document.getElementById("date")
const weatherDes = document.getElementById("weatherDes")
const humidity = document.getElementById("humidity")
const windSpeed = document.getElementById("windSpeed")
const input = document.getElementById("input")

const fetchApi = async () => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch {
        console.log("error", error)
    }
}
fetchApi().then((res) => {
    console.log(res)
    add(res)
})
const add = (res) => {
    degree.innerText = res.current.temperature
    city.innerText = res.location.name
    date.innerText = res.location.localtime
    weatherDes.innerText = res.current.weather_descriptions[0]
    humidity.innerText = res.current.humidity
    windSpeed.innerText = res.current.wind_speed
}

const searchButton = () => {
    url = `http://api.weatherstack.com/current?access_key=160c6abae7989dd7bfe365be94571322&query=${input.value}`
    fetchApi().then((res) => {
        add(res)
    })
}