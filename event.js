// console.log("event js connected");

function makeYellow(){
    document.body.style.backgroundColor = "yellow"
}

const greenButton = document.getElementById("make-green")
 greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = "green"
}

// addEventlistener
const purpleBtn = document.getElementById("purple-btn").addEventListener('click', function(){
    document.body.style.backgroundColor = "purple"
})
