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
