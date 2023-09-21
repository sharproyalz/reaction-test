const box = document.getElementById("box");
const textChange = document.getElementById("text-change");

const randomNumber = Math.random() * 3000 + 3000;
console.log(randomNumber);
let boxGreen = true;

box.addEventListener("click", () => {
    if (boxGreen) {
        textChange.textContent = "Please wait!";
        start();
    }
});

const start = () => {
    setTimeout(() => {
        box.style.backgroundColor = "red";
        textChange.textContent = "Click now!";

        if (box.style.backgroundColor == "red") {
            let intervalMs = 10; // Set the interval time in milliseconds (e.g., 1000ms = 1 second)
            let timer = 0;

            container.addEventListener("click", () => {
                clearInterval(timerId); // This will stop the interval timer
                textChange.textContent = timerInSeconds + " Seconds";
                console.log(timerInSeconds);
            });

            function myFunction() {
                // Your code to be executed repeatedly at the specified interval
                timer = timer + intervalMs;
                timerInSeconds = timer / 1000;
                if (timer === 2000) {
                    clearInterval(timerId); // This will stop the interval timer
                    console.log("Interval timer stopped");
                }
            }

            // Start the interval timer
            const timerId = setInterval(myFunction, intervalMs);

            // To stop the timer after a certain duration (e.g., after 5 seconds):
        }
    }, randomNumber);
};

start();
