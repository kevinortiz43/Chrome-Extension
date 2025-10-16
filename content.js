console.log("hello world");
console.log("hello world2");
console.log("Hello world service worker");
console.log("testing something");


// the darkmodeButton when clicks will turn the body darkmode
const darkButton = document.getElementById("dark_mode_btn");
darkButton.addEventListener("click", darkModeClick);

function darkModeClick(){
    console.log("hello world")
const body = document.querySelector("body");
// console.log(`body`, body);
// console.log("body[0]", body[0]);
// console.log("body[0] base uri", body[0].baseURI);
body.style.backgroundColor = "rgb(32,32,32)";
}


const pTags = document.querySelectorAll("p");
// console.log('pTag', pTags);
// console.log(`pTag[0]`, pTags[0]);
pTags.style.color = "white";
// console.log(`ptags spread`, ...pTags)
// ...pTags.style.color = "white";
// pTags.forEach(p => {
//     p.style.color = 'white';
// });
// pTags.forEach((element) =>  {
//     element.style.color = "white";
// });

// ...array

changePTags = pTags.forEach((element) =>  {
    element.style.color = "white";
});



// ...array


