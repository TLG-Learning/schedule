let timerId;
let count = 0;

function start() {
  if (!timerId) {
    timerId = setInterval(() => {
      count++;

      document.querySelector("#count").innerText = count;
    }, 1000);
  }
}

function stop() {
  clearInterval(timerId);

  timerId = null;
}

// add a reset

// display time on minutes and seconds

// set timeout example

setTimeout(() => {
  console.log("Print me in 3 seconds");
}, 3000);
