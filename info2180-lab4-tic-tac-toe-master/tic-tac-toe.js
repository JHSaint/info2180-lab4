function boardSetup(){
    
    var board = document.getElementById("board")
    var boardSections = board.getElementsByTagName("div");

    for(i=0; i<boardSections.length;i++){
        boardSections[i].className = "square";
    }
}


window.onload = function(){
    
    boardSetup();

}

