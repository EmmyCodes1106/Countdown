// Set the target date and time
const targetDate = new Date("Decrmber 25, 2024 14:05:00").getTime();

// Get HTML elements for countdown updates
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Update countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        // Calculate time units
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Update HTML elements
        daysElement.textContent = days.toString().padStart(2, "0");
        hoursElement.textContent = hours.toString().padStart(2, "0");
        minutesElement.textContent = minutes.toString().padStart(2, "0");
        secondsElement.textContent = seconds.toString().padStart(2, "0");
    } else {
        // If countdown is over
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = "<h2> The Countdown is Over! <br >It's Christmas 2024✨✨🎄</h2>";
    }
}

// Start countdown
const interval = setInterval(updateCountdown, 1000);
