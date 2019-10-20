var winner = 0;
var state =[""];
var counter =0;
var totalS = [["","",""],["","",""],["","",""]];

function boardSetup(){

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
    let w = "";

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
    var l = 0;

    if(e.target.nodeName == "DIV"){l

        if(state[0] == ""){
            state[0] = "X";
            e.target.innerHTML = "X";
            e.target.classList.add("X");

        }else if(state[counter] == "O" && e.target.innerHTML == ""){
            state.push("X");
            counter--;
            e.target.innerHTML = "X";
            e.target.classList.add("X");

        }else if(state[counter] == "X" && e.target.innerHTML == ""){
            state.push("O");
            counter++;
            e.target.innerHTML = "O";
            e.target.classList.add("O");
        }

        
        for(i = 0; i <3; i++){
            for(j = 0; j <3; j++){
                totalS[i][j] = boardSections[l];
                l++;
            }
        }

        checkWin();
    }
}

window.onload = function(){

    boardSetup();
    board.addEventListener("mouseover", highlight);
    board.addEventListener("click",makePlay);
}

