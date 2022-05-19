/* Day-Night Mode
** light: hsl(0, 0%,98%) = #fafafa
** dark: hsl(207, 26%, 17%) = #202c37
*/
function switchMode() {
    let moon = document.getElementById("moon");
    if (moon.className == "moon") {
        moon.className = "sun";
        document.body.style.backgroundColor = "#202c37";
        document.body.style.color = "#fafafa";
    } else {
        moon.className = "moon";
        document.body.style.backgroundColor = "#fafafa";
        document.body.style.color = "#202c37";
    }
}

// switchMode();