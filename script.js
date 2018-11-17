const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock() {
  var date = new Date();

// Get the current time with date object.
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  
  // Create the hour.
  let hrPos = (hr*360/12)+(min*(360/60)/12);
// Create the minute.
  let minPos = (min*360/60)+(sec*(360/60)/60);
// Create the second.
  let secPos = sec*360/60;


// Add the calculate deg to the element
  HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
}

var interval = setInterval(runTheClock, 1000);


