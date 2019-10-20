var winner = 0;
var w = "";
var state =[""];
var totalS = [["","",""],["","",""],["","",""]];

function boardSetup(){

    var game = document.getElementById("game");
    var board = document.getElementById("board");
    var boardSections = board.getElementsByTagName("div");

    for(i=0; i<boardSections.length;i++){
        boardSections[i].className = "square";
    }
}

function highlight (e){
    var board = document.getElementById("board");
    var boardSections = board.getElementsByTagName("div");

    if(e.target.classList.contains("square") == true){
        for(i=0; i<boardSections.length;i++){
            boardSections[i].classList.remove("hover");
        }
        e.target.classList.add("hover");
    }
}

function rowCheck(){
    let sum=0;
    for(j = 0; j <3; j++){
        for(k = 0; k <3; k++){
            if(totalS[j][k].innerHTML == "X"){
                sum+= 1;
            }else if(totalS[j][k].innerHTML == "O"){
                sum+= 4; 
            }
        }
        if(sum == 12){
            winner = 1;
            return "O";
        }
        if(sum == 3){
            winner = 1;
            return "X";
        }
        sum = 0;
    }
    return "";
}

function columnCheck(){
    let sum=0;
    for(j = 0; j <3; j++){
        for(k = 0; k <3; k++){
            if(totalS[k][j].innerHTML == "X"){
                sum+= 1;
            }else if(totalS[k][j].innerHTML == "O"){
                sum+= 4; 
            }
        }
        if(sum == 12){
            winner = 1;
            return "O";

        }
        if(sum == 3){
            winner = 1;
            return "X";
        }
        sum = 0;
    }

    return "";
}

function diagonalCheck(){
    if(totalS[0][0].innerHTML == totalS[1][1].innerHTML && totalS[1][1].innerHTML == totalS[2][2].innerHTML){
        if(totalS[0][0].innerHTML == "X"){
            winner = 1;
            return "X";
        }else if(totalS[0][0].innerHTML == "O"){
            winner = 1;
            return "O";
        }
    }else if(totalS[0][2].innerHTML == totalS[1][1].innerHTML && totalS[1][1].innerHTML == totalS[2][0].innerHTML){
        if(totalS[0][2].innerHTML == "X"){
            winner = 1;
            return "X";
        }else if(totalS[0][2].innerHTML == "O"){
            winner = 1;
            return "O";
        }
    }
    return "";

}


function checkWin(){
    

    if(winner == 0){
        w = rowCheck();
        if(w == ""){
            w = columnCheck();
        }
        if(w == ""){
            w = diagonalCheck();
        }

        if(winner == 1){
            let status = document.getElementById("status");
            if(w == "X"){
                status.innerHTML = "Congratulations! X is the Winner!";
            }else{
                status.innerHTML = "Congratulations! O is the Winner!";
            }
            status.classList.add("you-won");
        }
            
    }
}

function makePlay(e){

    var board = document.getElementById("board")
    var boardSections = board.getElementsByTagName("div");
    let l = 0;

    if(e.target.nodeName == "DIV"){l

        if(state[0] == ""){
            state[0] = "X";
            e.target.innerHTML = "X";
            e.target.classList.add("X");

        }else if(state[0] == "O" && e.target.innerHTML == ""){
            state[0] = "X";
            e.target.innerHTML = "X";
            e.target.classList.add("X");

        }else if(state[0]== "X" && e.target.innerHTML == ""){
            state[0] = "O";
            e.target.innerHTML = "O";
            e.target.classList.add("O");
        }

        for(let i = 0; i <3; i++){
            for(let j = 0; j <3; j++){
                totalS[i][j] = boardSections[l];
                l++;
            }
        }

        checkWin();
    }
}

function reset(e){
    var board = document.getElementById("board")
    var boardSections = board.getElementsByTagName("div");
    
    let l = 0;


    if(e.target.nodeName === 'BUTTON'){
        
        let status = document.getElementById("status");
        state[0] = "";
        w = "";
        winner = 0;

        for (const key in boardSections) {
            if (boardSections.hasOwnProperty(key)) {
                const element = boardSections[key];
                

                if(element.classList.contains("X")){
                    element.innerHTML= "";
                    element.classList.remove("X");
                }

                
                if(element.classList.contains("O")){
                    element.innerHTML= "";
                    element.classList.remove("O");
                }

            }
        }


        status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won"); 

        for(let i = 0; i <3; i++){
            for(let j = 0; j <3; j++){
                totalS[i][j] = "";
                l++;
            }
        }
    }


}

window.onload = function(){

    boardSetup();
    board.addEventListener("mouseover", highlight);
    board.addEventListener("click",makePlay);
    game.addEventListener("click",reset);
}

