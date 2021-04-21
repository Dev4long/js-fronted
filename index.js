let container = document.querySelector('div.container')
let carOl = document.createElement("ol")
let newCar = document.querySelector("form.car-form")





fetch("http://localhost:3000/cars")
    .then(res => res.json())
    .then((carsArr) => {
        cars = carsArr
        carsArr.forEach((carObj) => {
            renderCar(carObj)
        })
    })

function renderCar(car) {

    let carLi = document.createElement("li")
    carLi.className = "car"
    if (car.sport === true) {
        carLi.classList.add("sport")
    }

    let carMake = document.createElement("h2")
    carMake.innerText = `Make: ${car.make}`

    let carImg = document.createElement("img")
    carImg.className = "pic"
    carImg.src = car.image

    let carMod = document.createElement("h3")
    carMod.innerText = `Model: ${car.model}`

    let carHp = document.createElement("p")
    carHp.innerText = `${car.hp} Horsepower`
    carHp.className = "horses"

    let carYear = document.createElement("p")
    carYear.innerText = `Manufactured in ${car.year}`
    carYear.className = "year"

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "DELETE"

    let likeBtn = document.createElement("button")
    likeBtn.innerText = "❤️"
    likeBtn.className = "like-button"


    // CONSTRUCT THE CARD
    carLi.append(likeBtn, carMake, carMod, carHp, carYear, carImg, deleteBtn)
    // APPEND TO THE DOM
    carOl.append(carLi)

    container.append(carOl)


    likeBtn.addEventListener("click", (e) =>{
        fetch(`http://localhost:3000/foods/${car.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                
            })
        })
            .then(res => res.json())
            .then((updatedFoodObj) => {
    })


    deleteBtn.addEventListener("click", (evt) => {
        fetch(`http://localhost:3000/cars/${car.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((carObj) => {
                carLi.remove()
            })

    })
}



newCar.addEventListener('submit', (e) => {
    e.preventDefault()

    let carMake = document.querySelector("#make").value
    let carPic = document.querySelector("#image").value
    let carModel = document.querySelector("#model").value
    let carHp = document.querySelector("#horse-power").value
    let carYr = document.querySelector("#year").value
    let sportCar = document.querySelector("#sports").checked

    let car = {
        "make": carMake,
        "image": carPic,
        "model": carModel,
        "hp": carHp,
        "year": carYr,
        "sport": sportCar
    }

    fetch(`http://localhost:3000/cars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(car)
    })
        .then((r) => r.json())
        .then((newCar) => {
            renderCar(newCar)
            newCar = car
        })
        
})







let typeFilter = document.querySelector(".sports-filter")
let isToggleOn = false;

typeFilter.addEventListener('click', (e) => {
    let cars = document.querySelectorAll(".car")
    // Show only sports cars 
    if (isToggleOn === false){
        cars.forEach(car => {
            if (!car.classList.contains("sport")){
                car.style.display = 'none'
            } 
        })
    }
    // Show all cars 
    else {
        
        cars.forEach(car => {
            car.style.display = 'block';
        })
    } 
    isToggleOn = !isToggleOn; 
    
})
