const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
    "Former Pakistan cricket star Khan was elected prime minister in 2018, but fell out with the country's powerful armyAfter a series of defections,"
];

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
    
});
