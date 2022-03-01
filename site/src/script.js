let progress = 0;
const loadingWindow = document.querySelector(
  "a2k-window[title='Please wait...']"
);

const children = loadingWindow.children;

console.log("type", typeof children);

// const children = loadingWindow.querySelector("> *");
const intervalId = setInterval(() => {
  const el = document.querySelector("a2k-progress");

  // console.log("children", children);

  console.log(el);

  if (!el) return;

  progress = progress + 1.2;

  el.setAttribute("progress", progress);
  if (progress > 70) {
    // while (loadingWindow.firstChild) {
    //   loadingWindow.removeChild(loadingWindow.lastChild);
    // }

    loadingWindow.innerHTML = `
      <p>There was an error loading Andricos2000</p>
      <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on Twitter</p>
      <p>Hey there you, what's up?</p>
    `;

    // change the content to say that there was an error loading the page
    // make the windows noise
    // enable dragging effect
    clearInterval(intervalId);
  }
}, 100);