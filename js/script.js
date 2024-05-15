// show output function 
const showOutput = output => document.getElementById("output").innerHTML = output;

// year in footer section 
let year = new Date().getFullYear()
document.getElementById("year").innerHTML = year


// if else statement 
const ifElseBtn = () => {
    let today = new Date().getDay()
    // console.log(today)
    if (today === 0) {
        showOutput("today is Sunday")
    } else if (today === 2) {
        showOutput("today is Tuesday")
    } else if (today === 5) {
        showOutput("today is Friday")
    } else {
        showOutput("some other day")
    }
}

// switch statement 

const switchBtn = () => {
    let today = new Date().getDay()
    switch (today) {
        case 0:
            showOutput("today is Sunday")
            break;
        case 1: case 2:
            showOutput("today is Monday or Tuesday")
            break;
        case 5:
            showOutput("today is Friday")
            break;
        default:
            showOutput("some other day")
    }

}

// keep asking function using (do while loop)
const keepAsking = () => {
    do {
        var yourName = prompt("please enter your name")
        if (yourName) {
            yourName = yourName.trim()
        }
    } while (yourName == null || yourName.length < 3)
    showOutput(yourName)
}