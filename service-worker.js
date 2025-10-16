console.log("hello world");
console.log("hello world2");
console.log("Hello world service worker");
console.log("testing something");

const body = document.getElementsByTagName("body");
// console.log(`body`, body);
// console.log("body[0]", body[0]);
// console.log("body[0] base uri", body[0].baseURI);
body[0].style.backgroundColor = "black";

const pTags = document.getElementsByTagName("p"); 
// console.log('pTag', pTags);
// console.log(`pTag[0]`, pTags[0]);
// pTags[0].style.color = "white";
// console.log(`ptags spread`, ...pTags)
// ...pTags.style.color = "white";

pTags.forEach((element) =>  {
    element.style.color = "white";
});



// ...array


