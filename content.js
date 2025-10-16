chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "dark_mode_on") {
    console.log("hello");
    const pTags = document.querySelectorAll("p");
    document.body.style.backgroundColor = "rgb(32,32,32)";
    Array.from(pTags).forEach((element) => {
      element.style.color = "white";
    });
  }
});
