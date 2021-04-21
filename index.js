let container = document.querySelector('div.container')
let carUl = document.createElement("ul")
let newCar = document.querySelector("form.car-form")
let carMake = document.querySelector("div.car-make")
let carPic = document.querySelector("div.car-image")
let carModel = document.querySelector("div.car-model")
let carHp = document.querySelector("div.car-hp")
let carYr = document.querySelector("div.car-year")


let cars = []

fetch("http://localhost:3000/cars")
    .then(res => res.json())
    .then((carsArr) => {
        cars = carsArr
        carsArr.forEach((carObj) => {
            renderCar(carObj)
        })
    })

function renderCar(cars) {

    let carLi = document.createElement("li")

    let carMake = document.createElement("h2")
    carMake.innerText = car.make

    let carImg = document.createElement("img")
    carImg.src = car.image

    let carMod = document.createElement("h3")
    carMod.innerText = car.model

    let carHp = document.createElement("p")
    carHp.innerText = `${car.hp} Horsepower`
    carHp.className = "horses"

    let carYear = document.createElement("p")
    carYear.innerText = car.year
    carYear.className = "year"


    // CONSTRUCT THE CARD
    carLi.append(carMake, carMod, carHp, carYear, carImg)
    // APPEND TO THE DOM
    carUl.append(carLi)

    container.append(carUl)

 }

newCar.addEventListener('click', (e) => {
    e.preventDefault()
    let newCar = carYr.value
    fetch("http://localhost:3000/cars", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cars),
    })
        .then((r) => r.json())
        .then((newCar) => {

        }) 
})

