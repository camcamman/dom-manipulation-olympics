var headtextsmall = document.createElement("p");
headtextsmall.innerHTML = "<span>Cameron</span> wrote this javascript"
document.body.prepend(headtextsmall)
headtextsmall.style.textAlign = "center"
document.querySelector("span").style.color ="blue"

var headtext = document.createElement("p");
headtext.textContent = "JavaScript Made This!!"
headtext.style.fontSize = "30px"
document.body.prepend(headtext); 
headtext.style.textAlign = "center"

// var button = document.getElementsByTagName("button")
// document.getElementById("clear-button").addEventListener("click",funClear;

// function funClear () { document.querySelector(".messages").innerHTML("");
// }

document.querySelector(".l1").textContent="where do you live"

document.querySelector(".r1").textContent="with my parents"

document.querySelector(".l2").textContent="where do your parent live"

document.querySelector(".r2").textContent="with me"

document.getElementById("clear-button").addEventListener("click",clearfun)

function clearfun () {
    document.querySelector(".messages").textContent=""
}

document.getElementById("theme-drop-down").addEventListener("change",dropdownfun)

function dropdownfun() {
    var theme = document.getElementById("theme-drop-down").value
    if (theme==="theme-one"){
        theme1fun()
    }
    if (theme==="theme-two") {
    theme2fun()
    }
}

function theme2fun() {
    var text = document.querySelectorAll(".left")
    var text2 = document.querySelectorAll(".right")
    for (let i = 0; i < text.length; i++){
        text[i].style.backgroundColor="red"
        text[i].style.color="white"
    }
    for (let i = 0; i < text2.length; i++) {
        text2[i].style.backgroundColor="black"
        text2[i].style.color="white"
    }
} 

function theme1fun() {
    var text = document.querySelectorAll(".left")
    var text2 = document.querySelectorAll(".right")
    for (let i = 0; i < text.length; i++){
        text[i].style.backgroundColor="blue"
        text[i].style.color="white"
    }
    for (let i = 0; i < text2.length; i++) {
        text2[i].style.backgroundColor="brown"
        text2[i].style.color="white"
    }
}
function sendfun() {
    var mess = document.querySelector(".messages").className=right;
    var input = document.getElementById("input")
    mess.append(input.value)
    console.log("send")
}
var messageSide = 'left';
var sendButton = document.getElementById("send-button")
sendButton.addEventListener("click",function(event) {
    event.preventDefault()
    var mss = document.createElement("p")
    var mes = document.getElementById("messages")
    var inputBox = document.getElementById("input")
    mss.textContent=inputBox.value
    mss.className='message ' + messageSide
    //switching sides if stgatment
    if (messageSide === 'left') messageSide = 'right'; 
    else messageSide = 'left';
    mes.append(mss)
})