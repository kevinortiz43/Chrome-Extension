document.addEventListener("DOMContentLoaded", function () {
  const fontButton = document.getElementById("lexend_font_btn");

  fontButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "lexend_on" });
      }
    });
  });

  const button = document.getElementById("dark_mode_btn");

  button.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "dark_mode_on" });
      }
    });
  });

  const focusButton = document.getElementById("focus_mode");

  focusButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "focus_on" });
      }
    });
  });
});
