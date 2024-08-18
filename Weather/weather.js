let result= document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");
//function to fetch weather details from api and display them
let getWeather = () => {
    let cityValue = cityRef.value;
    // console.log('hi ',cityValue);
    //if input field is empty
    if (cityValue.length == 0){
        result.innerHTML =`<h3 class="msg">Please enter a city name</h3>`;
    }
    //if input field is not empty
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        //clear the input field
        cityRef.value="";
        fetch(url)
        .then((resp)=> resp.json())
        //if city name is valid
        .then((data)=> {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML=`<h2>${data.name}</h2>
            <h6 class="weather">${data.weather[0].main}</h6>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img class="icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;C</h1>
            <div class ="temp-container">
                <div>
                    <h6 class="title">min</h6>
                    <h4 class="temp">${data.main.temp_min}&#176;</h4>
                </div>
                <div>
                    <h6 class="title">max</h6>
                    <h4 class="temp">${data.main.temp_max}&#176;</h4>
                </div>
            </div>    
            `;
        })
        //if city name is not valid
        .catch(()=> {
            result.innerHTML=`<h3 class="msg">city not found</h3>`;
        });
    }
    
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load",getWeather);