chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const newBlack = "rgb(32,32,32)";

  if (request.action === "dark_mode_on") {
    console.log("hello");
    const pTags = document.querySelectorAll("p");
    document.body.style.backgroundColor = newBlack;
    Array.from(pTags).forEach((element) => {
      element.style.color = "white";
    });

    const h1Tags = document.querySelectorAll("h1");

    Array.from(h1Tags).forEach((element) => {
      element.style.color = "white";
    });

    const aTags = document.querySelectorAll("a");

    const divTags = document.querySelectorAll("div");

    console.log("div", divTags);

    Array.from(divTags).forEach((element) => {
      element.style.backgroundColor = newBlack;
    });

    Array.from(aTags).forEach((element) => {
      element.style.backgroundColor = newBlack;
      element.style.color = "white";
    });

    const h2Tags = document.querySelectorAll("h2");
    Array.from(h2Tags).forEach((element) => {
      element.style.color = "white";
    });

    const h3Tags = document.querySelectorAll("h3");
    Array.from(h3Tags).forEach((element) => {
      element.style.color = "white";
    });

    const spanTags = document.querySelectorAll("span");
    Array.from(spanTags).forEach((element) => {
      element.style.color = "white";
    });

    const h4Tags = document.querySelectorAll("h4");
    Array.from(h4Tags).forEach((element) => {
      element.style.color = "white";
    });

    const h5Tags = document.querySelectorAll("h5");
    Array.from(h5Tags).forEach((element) => {
      element.style.color = "white";
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "lexend_on") {
    console.log("hello");

    const pTags = document.querySelectorAll("p");
    Array.from(pTags).forEach((element) => {
      element.style.fontFamily = "Lexend";
      element.style.fontSize = "larger";
      //element.style.lineHeight = "2";
    });

    const h1Tags = document.querySelectorAll("h1");
    Array.from(h1Tags).forEach((element) => {
      element.style.fontFamily = "Lexend";
      element.style.fontSize = "larger";
      //element.style.lineHeight = "2";
    });

    const aTags = document.querySelectorAll("a");
    Array.from(aTags).forEach((element) => {
      element.style.fontFamily = "Lexend";
      element.style.fontSize = "larger";
      //element.style.lineHeight = "2";
    });

    const h2Tags = document.querySelectorAll("h2");
    Array.from(h2Tags).forEach((element) => {
      element.style.fontFamily = "Lexend";
      element.style.fontSize = "larger";
      //element.style.lineHeight = "2";
    });

    const h3Tags = document.querySelectorAll("h3");
    Array.from(h3Tags).forEach((element) => {
      element.style.fontFamily = "Lexend";
      element.style.fontSize = "larger";
      //element.style.lineHeight = "2";
    });

    const spanTags = document.querySelectorAll("span");
    Array.from(spanTags).forEach((element) => {
      element.style.fontFamily = "Lexend";
      element.style.fontSize = "larger";
      //element.style.lineHeight = "2";
    });

    const h4Tags = document.querySelectorAll("h4");
    Array.from(h4Tags).forEach((element) => {
      element.style.fontFamily = "Lexend";
      element.style.fontSize = "larger";
      //element.style.lineHeight = "2";
    });

    const h5Tags = document.querySelectorAll("h5");
    Array.from(h5Tags).forEach((element) => {
      element.style.fontFamily = "Lexend";
      element.style.fontSize = "larger";
      //element.style.lineHeight = "2";
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "focus_on") {
    console.log("focus On");
  }
});
