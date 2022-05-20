
let countryList = document.getElementById("country_List")
let country = countryList.children;
let countryArray = Array.from(country);
let selectRegion = document.getElementById("country-select");

function selectoRegion() {
    selectRegion.addEventListener('change', function () {
        var selectedRegion = selectRegion.value;
        for (let i = 0; i < countryArray.length; i++) {
            if (countryArray[i].classList[1] !== selectedRegion) {
                countryArray[i].style.display = "none";
            } else {
                countryArray[i].style.display = "block";
            }
        }
    })
}

selectoRegion();

let user_input = document.getElementById("user_input");
console.log(countryArray[1].className);

function checkString() {
    user_input.addEventListener('keyup', function() {
        let value = user_input_value = user_input.value;
        let evaluateValue = value[0].toUpperCase();
        for (let i = 0; i < countryArray.length; i++) {
            if(countryArray[i].classList[2].includes(evaluateValue)) {
                countryArray[i].style.display = "block";
            } else {
                countryArray[i].style.display = "none";
            }
        }
    })    
}

checkString();




