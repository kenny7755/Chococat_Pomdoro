let title = "Chococat's Pomdoro Timer"
document.getElementById("title_main").innerHTML = "Welcome to " + title + "!";

const start = document.getElementById("startbtn")
const pause = document.getElementById("pausebtn")
const reset = document.getElementById("resetbtn")
const choose = document.getElementById("choosebtn")
const timer = document.getElementById("time_shown")
let count;
let timeleft = 3;
let breakLeft = 300;

function updateClock() {
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    const countElement = document.getElementById("time_shown");
    let formattedTime = minutes + ":" + seconds;
    timer.innerHTML = formattedTime;
    if (timeleft == 0) {
        clearInterval(count);
        let img = document.createElement("img");
        img.src = "https://i.postimg.cc/tTYMgjm2/832954893608962179.jpg";
        document.getElementById("finishedTimer").textContent = "All done!";
        let loadimg = document.getElementById("finishedImg").appendChild(img);
        loadimg.style.width = "20em";
        loadimg.style.display = "Flex";
        loadimg.style.justifyContent = "center";
        loadimg.style.margin = "auto";
    }
}

function startClock () {
   count = setInterval( () => {
    timeleft--;
    updateClock();
   }, 1000);
}

function pauseClock () {
    clearInterval(count);
    timeleft = 1500;
}
function resetClock () {
    clearInterval(count);
    timeleft = 1500;
    updateClock();
}

function breakTime () {
 if (timeleft == 0) {
    new_count = setInterval(() => {
        breakLeft--;
    }, 1000);
 }
 startClock()
}

function chooseTime() {
    const newTimer = prompt("Enter the new time: ");
    if (!isNaN(newTimer) && newTimer > 0 ) {
        timeEntered = parselnt(newTimer);
        minutes = timeEntered;
        seconds = 0;
        const newTimeEl = document.getElementById("time_shown");
        newTimeEl.innerHTML = formattedTime;
        clearInterval(count);
    }
}
start.addEventListener("click", startClock)
pause.addEventListener("click", pauseClock)
reset.addEventListener("click", resetClock) 
choose.addEventListener("click", chooseTime)