chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const newBlack = 'rgb(32,32,32)';
  const linkColor = 'rgb(135, 206, 250)';
  const textColor = "white"

  if (request.action === 'dark_mode_on') {
    const pTags = document.querySelectorAll('p');

    const aTags = document.querySelectorAll('a');

    const divTags = document.querySelectorAll('div');

    const spanTags = document.querySelectorAll('span');

    const h1Tags = document.querySelectorAll('h1');

    const h2Tags = document.querySelectorAll('h2');

    const h3Tags = document.querySelectorAll('h3');

    const h4Tags = document.querySelectorAll('h4');

    const h5Tags = document.querySelectorAll('h5');

    document.body.style.backgroundColor = newBlack;
    Array.from(pTags).forEach((element) => {
      element.style.color = textColor
    });

    Array.from(h1Tags).forEach((element) => {
      element.style.color = textColor
    });

    Array.from(divTags).forEach((element) => {
      element.style.backgroundColor = newBlack;
    });

    Array.from(aTags).forEach((element) => {
      element.style.backgroundColor = newBlack;
      element.style.color = linkColor;
    });

    Array.from(h2Tags).forEach((element) => {
      element.style.color = textColor
    });

    Array.from(h3Tags).forEach((element) => {
      element.style.color = textColor
    });

    Array.from(spanTags).forEach((element) => {
      element.style.color = textColor
    });

    Array.from(h4Tags).forEach((element) => {
      element.style.color = textColor
    });

    Array.from(h5Tags).forEach((element) => {
      element.style.color = textColor
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'lexend_on') {
    console.log('hello');

    const pTags = document.querySelectorAll('p');
    Array.from(pTags).forEach((element) => {
      element.style.fontFamily = 'Lexend';
      element.style.fontSize = 'larger';
      element.style.lineHeight = '2';
    });

    const h1Tags = document.querySelectorAll('h1');
    Array.from(h1Tags).forEach((element) => {
      element.style.fontFamily = 'Lexend';
      element.style.fontSize = 'larger';
      element.style.lineHeight = '2';
    });

    const aTags = document.querySelectorAll('a');
    Array.from(aTags).forEach((element) => {
      element.style.fontFamily = 'Lexend';
      element.style.fontSize = 'larger';
      element.style.lineHeight = '2';
    });

    const h2Tags = document.querySelectorAll('h2');
    Array.from(h2Tags).forEach((element) => {
      element.style.fontFamily = 'Lexend';
      element.style.fontSize = 'larger';
      element.style.lineHeight = '2';
    });

    const h3Tags = document.querySelectorAll('h3');
    Array.from(h3Tags).forEach((element) => {
      element.style.fontFamily = 'Lexend';
      element.style.fontSize = 'larger';
      element.style.lineHeight = '2';
    });

    const spanTags = document.querySelectorAll('span');
    Array.from(spanTags).forEach((element) => {
      element.style.fontFamily = 'Lexend';
      element.style.fontSize = 'larger';
      element.style.lineHeight = '2';
    });

    const h4Tags = document.querySelectorAll('h4');
    Array.from(h4Tags).forEach((element) => {
      element.style.fontFamily = 'Lexend';
      element.style.fontSize = 'larger';
      element.style.lineHeight = '2';
    });

    const h5Tags = document.querySelectorAll('h5');
    Array.from(h5Tags).forEach((element) => {
      element.style.fontFamily = 'Lexend';
      element.style.fontSize = 'larger';
      element.style.lineHeight = '2';
    });

    const h6Tags = document.querySelectorAll('h6');
    Array.from(h6Tags).forEach((element) => {
      element.style.fontFamily = 'Lexend';
      element.style.fontSize = 'larger';
      element.style.lineHeight = '2';
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
 

  if (request.action === 'focus_on') {
    console.log('focus On');

    
    const textElements = document.querySelectorAll('p');
    textElements.addEventListener('mouseenter', () => {
      textElements.style.backgroundColor = 'purple';
    });

    textElements.addEventListener('mouseleave', () => {
      textElements.style.backgroundColor = '';
    });
  }
});
