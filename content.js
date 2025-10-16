chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "dark_mode_on") {
    console.log("hello");

    document.body.style.backgroundColor = "black";
    Array.from(pTags).forEach((element) => {
    element.style.color = "white";
    });


    
  }
});
