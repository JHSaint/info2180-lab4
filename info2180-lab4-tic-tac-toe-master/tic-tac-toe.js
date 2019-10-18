var state =[""];
var counter =0;

function boardSetup(){

    var board = document.getElementById("board")
    var boardSections = board.getElementsByTagName("div");

    for(i=0; i<boardSections.length;i++){
        boardSections[i].className = "square";
    }

}

function highlight (e){
    var board = document.getElementById("board")
    var boardSections = board.getElementsByTagName("div");

    if(e.target.classList.contains("square") == true){
        for(i=0; i<boardSections.length;i++){
            boardSections[i].classList.remove("hover");
        }
        e.target.classList.add("hover");
    }



}
function makePlay(e){

    if(e.target.nodeName == "DIV"){

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
    }
}


window.onload = function(){
    
    boardSetup();
    console.log(board);
    board.addEventListener("mouseover", highlight);
    board.addEventListener("click",makePlay);
}

