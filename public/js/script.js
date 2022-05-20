const selectRegion = document.getElementById('country-select');
// console.log(selectRegion.value);

const asia = document.querySelectorAll(".Asia");
selectRegion.addEventListener('click', function() {
    console.log(selectRegion.value);
    const list = document.getElementById('country_List');
    list.style.display = "none";

    if(selectRegion.value === "Asia") {
        asia.forEach(function(el){
            el.style.display = ""
        })
    }
})



