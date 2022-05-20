
let countryList = document.getElementById("country_List")
// console.log(countryList);
let country = countryList.children;
let countryArray = Array.from(country);
// console.log(countryArray);
let selectRegion = document.getElementById("country-select");
// console.log(selectRegion);
console.log(countryArray[0].classList[1] == "Asia")

    // console.log(countryArray[0].className.contains('asia'))

function selectRegion() {
    selectRegion.addEventListener('change', function () {
        var selectedRegion = selectRegion.value;
        for (let i = 0; i < countryArray.length; i++) {
            if (countryArray[i].classList[1] !== selectedRegion) {
                countryArray[i].style.display = "none";
            }
        }
    })
}




