

let fetchdata = function () {


    let search = document.getElementById("search_wether");
    let val = search.value;

    let a = fetch(`https://goweather.herokuapp.com/weather/${val}`);




    let temp = document.getElementById("temper");
    let wethDetail = document.getElementById("wethDetail");

    let winds = document.getElementById("wind");



    let t1temp = document.getElementById("t1temp")
    let t2temp = document.getElementById("t2temp")
    let t3temp = document.getElementById("t3temp")

    let t1wind = document.getElementById("t1wind")
    let t2wind = document.getElementById("t2wind")
    let t3wind = document.getElementById("t3wind")



    a.then((response) => {
        return response.json();

    }).then((response) => {
        console.log(response);



        let weath = response;

        let tem = weath.temperature;
        let win = weath.wind;
        let detail = weath.description;
        wethDetail.innerHTML = detail;

        if(wethDetail.innerHTML  == 'Sunny'){
            document.querySelector(".wethercont").style.backgroundImage = 'url(sunny.gif)'
            console.log("yes sunny")
        }
        else if(wethDetail.innerHTML == 'Partly cloudy'){
            document.querySelector(".wethercont").style.backgroundImage = 'url(coudy.avif)'

            console.log("yes cloudy")
        }

        else if(wethDetail.innerHTML == 'Patchy heavy snow'){
            document.querySelector(".wethercont").style.backgroundImage = 'url(snow.gif)'

            console.log("yes snowing")
        }

        else if(wethDetail.innerHTML == 'Light snow shower'){
            document.querySelector(".wethercont").style.backgroundImage = 'url(snow.gif)'

            console.log("yes snowing")
        }

        else if(wethDetail.innerHTML == 'Light rain'){
            document.querySelector(".wethercont").style.backgroundImage = 'url(rain2.gif)'

            console.log("Light rain")
        }

        else if(wethDetail.innerHTML == 'Light rain shower'){
            document.querySelector(".wethercont").style.backgroundImage = 'url(rain2.gif)'

            console.log("Light rain shower")
        }

        else if(wethDetail.innerHTML == 'Clear'){
            document.querySelector(".wethercont").style.backgroundImage = 'url(sunny.jpg)'

            console.log("yes Clear")
        }
        else{
            console.log("not working");
        }

        temp.innerHTML = tem;
        winds.innerHTML = 'Wind ' + win;




        let forca = weath.forecast;

        let day1 = forca[0];
        let day2 = forca[1];
        let day3 = forca[2];

        let d1 = `${day1.day} ${day1.temperature} ${day1.wind}`;
        t1temp.innerHTML = day1.temperature;
        t1wind.innerHTML = day1.wind;

        let d2 = `${day2.day} ${day2.temperature} ${day2.wind}`;
        t2temp.innerHTML = day2.temperature;
        t2wind.innerHTML = day2.wind;

        let d3 = `${day3.day} ${day3.temperature} ${day3.wind}`;
        t3temp.innerHTML = day3.temperature;
        t3wind.innerHTML = day3.wind;





    })


}



let inp = document.querySelector("#search_wether");

inp.addEventListener("click", function () {
    if (inp.style.width === "80%") {

        inp.style.width = " 30%";
    }
    else {
        inp.style.width = "80%";
    }
})


