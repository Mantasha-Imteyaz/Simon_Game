//                          SIMON GAME

let gameseq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns =['yellow','red','green','purple']

document.addEventListener("keypress",function(){
if(started == false){
    console.log("game is started")
    started = true;

    levelUp()
}
})

 function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250)
 }

 function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
     }

function levelUp(){
    userSeq = [];
level++;
h2.innerText =`Level ${level}`;

let rdmIndx = Math.floor(Math.random()*3);
let rdmColor = btns[rdmIndx];
let rdmbtn = document.querySelector(`.${rdmColor}`)
// console.log("rdmcolor :",rdmColor)
// console.log("rdmindex :",rdmIndx)
// console.log("rdmbtn :",rdmbtn)
gameseq.push(rdmColor);
console.log('gameseq =',gameseq)
gameFlash(rdmbtn)
}

function checkAns(idx){
    console.log("current Level :",level);
    // let idx = level-1;
    
    if(userSeq[idx]===gameseq[idx]){
        if(userSeq.length == gameseq.length){
setTimeout(levelUp,1000);
        }
}else{
    h2.innerHTML = `OH!Game Over!Your score was <b>${level}</b> <br> Press any key to start the game:AGAIN`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },1000)
    reset();
}
}

function btnPress(){
    console.log("Button is pressed");
// console.log(this)
let btn = this;
userFlash(btn);

userColor = btn.getAttribute("id");
console.log("usercolor :",userColor)
userSeq.push(userColor)
checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btnSimn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userSeq = [];
    level = 0;
}


