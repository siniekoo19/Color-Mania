let gameSeq = [];
let userSeq = [];

let btns = ["yellow" ,"red", "purple", "blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let btn = document.querySelector(".btn")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Stared");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 400);
}

function levelUp(){
    userSeq = [];

    level++;
    h3.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 3);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector(`.${randColor}`)

    gameSeq.push(randColor);
    console.log("Game Seq: " + gameSeq);

    gameFlash(randbtn);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `<h2>Game Over!! Your Score <b>${level}<b> <br> Press any key to restart</h2>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "black";
            }, 400
        );
        reset();
    }
}

function btnPress(){
    let btn = this;

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    userFlash(btn);
    // console.log("User Seq: " + userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}


function clickBtn(){
    let disSet = startBtn.style.display;
    if( disSet == "inline-block"){
        startBtn.style.display = "none";
    }
}