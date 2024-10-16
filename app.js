let gameSeq=[];
let userSeq=[];
let randbtns=["one","two","three","four"];
let started= false;
let level=0;
let high=0;
let h= document.querySelector("h2");
let btns=document.querySelectorAll(".btn");
document.addEventListener("keypress",()=>{
    if(started==false){
        started=true;
        levelUp();
    }  
});
function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },500);
}

function checkSeq(ind){
    if(gameSeq[ind]==userSeq[ind]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h.innerHTML=`Game Over!! <br><i>Your Score ${level}<i><br>Press any key to start`;
        started=false;
        level=0;
        gameSeq=[];
        userSeq=[];
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },750);
    }
}
function levelUp(){
    userSeq=[];
    level++;
    h.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randcol=randbtns[randInd];
    let randbtn=document.querySelector(`.${randcol}`);
    gameSeq.push(randcol);
    console.log("game seq",gameSeq);
    flashbtn(randbtn);
}

for(b of btns){
    b.addEventListener("click",function(){
       
        col=this.getAttribute("id");
        userSeq.push(col);
        flashbtn(this);
        console.log("user seq",userSeq);
        checkSeq(userSeq.length-1);
        
    })
}
