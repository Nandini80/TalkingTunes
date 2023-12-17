document.addEventListener('DOMContentLoaded', function () {
  document.body.style.pointerEvents = 'auto';
});

function handleHint() {
  alert('In order to go to the next level you have to click these buttons');
}

//assinging sounds to the array indexs
var arr = [];
for (var i = 0; i < 26; i++) {
  var ch = String.fromCharCode('a'.charCodeAt(0) + i);
  arr.push("sounds/" + ch + ".mp3");
}
// Generate a random index in the range [0, 25)
// var randomIndex = Math.floor(Math.random() * 26);


function generateRandomString(n) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let randomString = '';

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

var opt = generateRandomString(4);
function setName() {
  document.getElementById("d1").innerHTML = opt[0];
  document.getElementById("d2").innerHTML = opt[1];
  document.getElementById("d3").innerHTML = opt[2];
  document.getElementById("d4").innerHTML = opt[3];
  // document.getElementById("d5").innerHTML = opt[4];
  // document.getElementById("d6").innerHTML = opt[5];

  console.log(opt);
}

setName();

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


  function handleJiitCombination() {
    // alert('Congratulations!');
    window.location.href = 'win.html';
  }

var jiitState = 0;

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  // alert(opt);
  var enteredCharIndex = event.key.charCodeAt(0) - 'a'.charCodeAt(0);
  console.log(enteredCharIndex);
  var parts = arr[enteredCharIndex].split("/");
  var characterAfterSlash = parts[1];
  var chars = characterAfterSlash[0];
  console.log(chars);

  if (chars == opt[jiitState]) {
    jiitState++;
    if (jiitState === opt.length) {
      handleJiitCombination();
    }
  }
  else jiitState = 0;
});
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

arr = shuffleArray(arr);


function makeSound(key) {
  console.log(arr);
  switch (key) {
    case "a":
      var tom1 = new Audio(arr[0]);
      tom1.play();
      break;
    case "b":
      var tom2 = new Audio(arr[1]);
      tom2.play();
      break;
    case "c":
      var tom3 = new Audio(arr[2]);
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio(arr[3]);
      tom4.play();
      break;
    case "e":
      var snare = new Audio(arr[4]);
      snare.play();
      break;
    case "f":
      var crash = new Audio(arr[5]);
      crash.play();
      break;
    case "g":
      var kick = new Audio(arr[6]);
      kick.play();
      break;

    case "h":
      var tom1 = new Audio(arr[7]);
      tom1.play();
      break;
    case "i":
      var tom2 = new Audio(arr[8]);
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio(arr[9]);
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio(arr[10]);
      tom4.play();
      break;
    case "l":
      var snare = new Audio(arr[11]);
      snare.play();
      break;
    case "m":
      var crash = new Audio(arr[12]);
      crash.play();
      break;
    case "n":
      var kick = new Audio(arr[13]);
      kick.play();
      break;

    case "o":
      var tom1 = new Audio(arr[14]);
      tom1.play();
      break;
    case "p":
      var tom2 = new Audio(arr[15]);
      tom2.play();
      break;
    case "q":
      var tom3 = new Audio(arr[16]);
      tom3.play();
      break;
    case "r":
      var tom4 = new Audio(arr[17]);
      tom4.play();
      break;
    case "s":
      var snare = new Audio(arr[18]);
      snare.play();
      break;
    case "t":
      var crash = new Audio(arr[19]);
      crash.play();
      break;
    case "u":
      var kick = new Audio(arr[20]);
      kick.play();
      break;

    case "v":
      var tom1 = new Audio(arr[21]);
      tom1.play();
      break;
    case "w":
      var tom2 = new Audio(arr[22]);
      tom2.play();
      break;
    case "x":
      var tom3 = new Audio(arr[23]);
      tom3.play();
      break;
    case "y":
      var tom4 = new Audio(arr[24]);
      tom4.play();
      break;
    case "z":
      var snare = new Audio(arr[25]);
      snare.play();
      break;
    default:
      console.log(key);
  }
}




let startButtonWasClicked = false;
let timerReseted = false;
let timerEnded = false;
let stopButtonWasClicked = false;

//getting the dom references
const hoursSpan = document.querySelector("#hours");
const minutesSpan = document.querySelector("#minutes");
const secondsSpan = document.querySelector("#seconds");

//initial vallues
const initialHour = hoursSpan.textContent;
const initialMinute = minutesSpan.textContent;
const initialSecond = secondsSpan.textContent;

//adding eventListener
const resetBtn = document.querySelector("#timer-reset");
resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  TimerReset();
})
const timerBtn = document.querySelector("#timer-start");
timerBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!startButtonWasClicked) {
    TimerStart();
  } else {
    TimerStop();
  }
});

function TimerEnded() {
  timerBtn.disabled = true;
  timerBtn.style.opacity = 0.5;
  startButtonWasClicked = false;

  // Add the redirection logic here
  window.location.href = 'loose.html';
}

function TimerReset() {
  if (!startButtonWasClicked) {
    timerBtn.disabled = false;;
    timerBtn.style.opacity = 1;
    timerBtn.textContent = "Start"
    timerBtn.style.backgroundColor = "#04AA6D"
    resetBtn.style.backgroundColor = "red";

    startButtonWasClicked = false;
    timerEnded = false;
    stopButtonWasClicked = false;

    hoursSpan.textContent = initialHour;
    minutesSpan.textContent = initialMinute;
    secondsSpan.textContent = initialSecond;
  } else {
    timerReseted = true;
    timerBtn.textContent = "Start"
    timerBtn.style.backgroundColor = "#04AA6D"
    resetBtn.style.backgroundColor = "red";

    startButtonWasClicked = false;
    timerEnded = false;
    stopButtonWasClicked = false;

    hoursSpan.textContent = initialHour;
    minutesSpan.textContent = initialMinute;
    secondsSpan.textContent = initialSecond;
  }
}

function TimerStop() {
  startButtonWasClicked = false;
  stopButtonWasClicked = true;
  timerBtn.textContent = "Start";
}

function TimerStart() {

  startButtonWasClicked = true;
  timerBtn.textContent = "Stop"
  resetBtn.disabled = false;
  resetBtn.style.backgroundColor = "#04AA6D";

  //getting the time
  let hours = Number(hoursSpan.textContent);
  let minutes = Number(minutesSpan.textContent);
  let seconds = Number(secondsSpan.textContent);

  let timeInSeconds = (seconds) + (minutes * 60) + (hours * 60 * 60);

  let intervalId = setInterval(() => {
    console.log(timeInSeconds);
    //checking for reset
    if (timerReseted) {
      timerReseted = false;
      clearInterval(intervalId);
      return;
    }

    //checking if the timer was paused
    if (stopButtonWasClicked) {
      stopButtonWasClicked = false;
      clearInterval(intervalId);
      return;
    }

    //converting seconds to minutes and hours
    SecondToHoursAndMinutes(timeInSeconds);

    //checking if the timer ended
    if (timeInSeconds === 0) {
      TimerEnded();
      clearInterval(intervalId);
    }

    timeInSeconds--;

  }, 900)

  function SecondToHoursAndMinutes(time) {

    //checking if the seconds are 0 beforehand
    //since 0 divided to everything is 0
    if (time === 0) {
      hoursSpan.textContent = "00";
      minutesSpan.textContent = "00";
      secondsSpan.textContent = "00";
      return;
    }

    minutes = ((time / 60) - (hours * 60));
    seconds = (time % 60).toFixed(0);

    //once an hour passes it is dividable to 3600 seconds
    if (time % 3600 === 0) {
      hours = ((time / 60) / 60).toFixed(0) - 1;
      minutes = 59;
      seconds = 59;
    }

    //i am converting the minutes to string since i only need
    //the first two numbers
    let temp = minutes.toString();
    minutes = Number(temp.slice(0, 2));

    if (hours === 0 || hours < 10) {
      hoursSpan.textContent = "0" + hours.toString();
    } else {
      hoursSpan.textContent = hours.toString();
    }

    if (minutes === 0 || minutes < 10) {
      minutesSpan.textContent = "0" + minutes.toString();
    } else {
      minutesSpan.textContent = minutes.toString();
    }
    if (seconds === 0 || seconds < 10) {
      secondsSpan.textContent = "0" + seconds.toString();
    } else {
      secondsSpan.textContent = seconds.toString();
    }

  }
}
