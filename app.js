
const Key = "54194324056c56586ed768178017716f"

let inp = document.querySelector("input")

function show_date(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()

    
    return `${day} ${date} ${month} ${year}`

    

}

function show_data(data) {
    let city = document.querySelector(".city")
    city.innerHTML = `${data.name},${data.sys.country}`

    let date = document.querySelector(".date")
    date.innerHTML = show_date()

    let temp = document.querySelector(".temp")
    temp.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`

    let weather_telorance = document.querySelector(".hi-low")
    weather_telorance.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c/${Math.floor(data.main.temp_max - 273.15)}°c`

    let weather_situation = document.querySelector(".weather")
    weather_situation.innerHTML = `${data.weather[0].main}`
}

function fetch_data(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${Key}`)
    .then(res => res.json())
    .then(data => show_data(data))
}

inp.addEventListener("keypress", event => {
    
    if(event.keyCode === 13){
        fetch_data()
        
    }
})