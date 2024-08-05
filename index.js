let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let copycode = document.querySelector(".codeCopy");
let hexValue1 = "#0C1757";
let hexValue2 = "#7B2DE9";

function hexColors() {
    let myHex = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += myHex[Math.floor(Math.random() * 16)];
    }
    return colors;
}

function handleBtn1() {
    hexValue1 = hexColors();
    btn1.innerText = hexValue1;
    btn1.style.backgroundColor = hexValue1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${hexValue1}, ${hexValue2})`;
    copycode.innerHTML = `background-image: linear-gradient(to right, ${hexValue1}, ${hexValue2});`;
}

function handleBtn2() {
    hexValue2 = hexColors();
    btn2.innerText = hexValue2;
    btn2.style.backgroundColor = hexValue2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${hexValue1}, ${hexValue2})`;
    copycode.innerHTML = `background-image: linear-gradient(to right, ${hexValue1}, ${hexValue2});`;
}

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
copycode.addEventListener("click", function() {
    navigator.clipboard.writeText(copycode.innerText);
});
