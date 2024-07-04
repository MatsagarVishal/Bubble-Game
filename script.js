
let hit1=0;
let score=0;
function buble() {
    let ele = " ";
    for (let index = 0; index < 126; index++) {
        ele += `<div class="buble">${Math.floor(Math.random() * 11)
            }</div>`;
    }
    document.querySelector("#bottom").innerHTML = ele;
}
buble();

function hit() {
     hit1 = Math.floor(Math.random() * 11);
    document.querySelector("#hit").innerHTML = hit1;
}
hit();

function timer() {
    let t = 60;
    let int = setInterval(() => {
        if (t >= 0) {
            document.querySelector("#timer").innerText = t;
            t--;
        }
        else {
            clearInterval(int);
            document.querySelector("#bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
timer();

function scoreIncrease() {
    
    document.querySelector(".crr").classList.add("inc");
        setTimeout(() => {
            score += 10;
    document.querySelector("#score").innerText=score;
        document.querySelector(".crr").classList.remove("inc");
        }, 1000 );
        
}

document.querySelector("#bottom").addEventListener("click", (details)=>{
    var clicked = +(details.target.innerText);
    console.log(clicked);
    if (hit1 === clicked) {
        scoreIncrease();
        hit();
        buble();
    }else if(hit1 != clicked){
        console.log("else part");
        document.querySelector("#bottom").removeEventListener("click", ()=>{}, true);
        document.querySelector(".alert").classList.add("activ");
        setTimeout(() => {
        document.querySelector(".alert").classList.remove("activ");
        },1000 );
        hit();
        buble();
    }
});
