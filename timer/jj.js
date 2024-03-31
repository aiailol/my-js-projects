// Set the date for the beginning of summer (June 1st)
var summerDate = new Date(new Date().getFullYear(), 5, 1); // Month is zero-based (0 for January, 5 for June)

// Update the countdown every 1 second
var x = setInterval(function() {
  // Get current date and time
  var now = new Date().getTime();
  
  // Calculate the remaining time
  var distance = summerDate - now;
  
  // Calculate days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the HTML elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
  }
}, 1000);
