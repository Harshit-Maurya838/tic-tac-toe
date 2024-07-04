const boxes = document.querySelectorAll(".box");
const turn = document.querySelector(".turn_tell");
const winnerMsg = document.querySelector(".winner_msg");
const resetBtn = document.querySelector(".reset_game_btn");
const newGame = document.querySelector(".new_game_btn");
let turnO = true;
const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let count = 0;

// ======button_clicking_turn===========

const yourTurn = (n) =>{
    if(boxes[n].innerText === ""){
        if(turnO){
            boxes[n].innerText = `O`;
            turnO = false;
            turn.innerText = `X`;
            count++;
        }else{
            boxes[n].innerText = `X`;
            turnO = true;
            turn.innerText = `O`;
            count++;
        }
        checkDraw();
        checkWinner();
    }
}

// ============Show_Winner=============

const showWinner = (winner) =>{
    winnerMsg.innerText = `Game Over, Winner is ${winner}`;
    newGame.classList.remove("hide");
    resetBtn.classList.add("hide");
};

// ============disable_button===========

const disableAllBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

// ============enable_button===========

const enableAllBtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


// ============Checking_Winner==============

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let posiVal1 = boxes[pattern[0]].innerText;
        let posiVal2 = boxes[pattern[1]].innerText;
        let posiVal3 = boxes[pattern[2]].innerText;
        if(posiVal1 !== "" && posiVal2 !== "" && posiVal3 !== ""){
            if(posiVal1 === posiVal2 && posiVal2 === posiVal3 && posiVal1 === posiVal3){
                disableAllBtn();
                showWinner(posiVal1);
                count = 0;
            }
        }
    }
};

// ==============Reset_Button=============

const resetGame = () =>{
    enableAllBtn();
    turn.innerText = `O`;
    count = 0;
}

// ==============NewGame_Button=============

const newGamebtn = () =>{
    enableAllBtn();
    winnerMsg.innerText = `Welcome, Game starts by O`;
    turn.innerText = `O`;
    count = 0;
}

// ===========checking_Draw_Match=============

const checkDraw = () =>{
    if(count >= 9){
        disableAllBtn()
        winnerMsg.innerText = `Ohh! Its Draw`;
        newGame.classList.remove("hide");
        resetBtn.classList.add("hide");
    }
}