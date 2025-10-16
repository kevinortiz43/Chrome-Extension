document.addEventListener("DOMContentLoaded", function () {
  const fontButton = document.getElementById("lexend_font_btn");
  const darkButton = document.getElementById("dark_mode_btn");
  const focusButton = document.getElementById("focus_mode_btn");

  fontButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "lexend_on" });
      }
    });
  });

  darkButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "dark_mode_on" });
      }
    });
  });

  focusButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "focus_on" });
      }
    });
  });
});