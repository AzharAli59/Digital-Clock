let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");




// Function to update the time
function updateTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Pad single-digit minutes and seconds with a leading zero
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the HTML elements
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
    ampmElement.innerHTML = ampm;
}

// Initial update
// updateTime();

// Set interval to update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);





