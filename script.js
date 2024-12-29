let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msgPara=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");
const genCompChoice=()=>{
    //rock,paper,scissor
    const option=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return option[index];
}
const drawGame=()=>{
    msgPara.innerText="Game was Draw! Play Again";
    msgPara.style.backgroundColor="#081b31";
}
const showWinner=(userWin)=>{
    if(userWin){
        userscore+=1;
        userScorePara.innerText=userscore;
        msgPara.innerText="You Win";
        msgPara.style.backgroundColor="green";
    }else{
        computerscore+=1;
        compScorePara.innerText=computerscore;
        msgPara.innerText="You Loose";
        msgPara.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    const compChoice=genCompChoice();
    if (userChoice===compChoice){
        //Draw
        drawGame()
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="paper"?true:false;
        }
        showWinner(userWin);

    }
}




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
        
    });
});