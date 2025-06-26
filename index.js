// document.querySelector("li a").style.color = "red";
// document.querySelector("button").style.backgroundColor = "yellow";
// document.querySelector("h1").classList.add = "huge";

const navigationEntries = performance.getEntriesByType("navigation");
if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
    var nrRan1 = Math.floor(Math.random() * 6 ) + 1
    var nrRan2 = Math.floor(Math.random() * 6 ) + 1

    if (nrRan1 > nrRan2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    }else if (nrRan2 > nrRan1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
    }else if (nrRan2 === nrRan1) {
        document.querySelector("h1").innerHTML = "Draw!"
    }


    document.querySelector(".dice_1").setAttribute ("src", "./images/dice" + nrRan1 + ".png")
document.querySelector(".dice_2").setAttribute ("src", "./images/dice" + nrRan2 + ".png")
}

document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload(); // Reîncarcă pagina
});