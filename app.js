let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");



let turno = true; //playerx ,  playero
let winPattern = [
    [0,1,2] , 
    [0,3,6], 
    [0,4,8] ,
    [2,5,8],
    [2,4,6],
    [1,4,7],  
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turno = true;
    enableBoxes(); 
    msgcontainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        
        if(turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPattern) {
        // console.log(pattern[0] , pattern[1] , pattern[2]);
        // console.log(
        //    boxes[pattern[0]].innerText , 
        //    boxes[pattern[1]].innerText ,
        //    boxes[pattern[2]].innerText 
        //   );

        let pos1val = boxes[ pattern[0]].innerText;
        let pos2val = boxes[ pattern[1]].innerText;
        let pos3val = boxes[ pattern[2]].innerText;


        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
              
                showWinner(pos1val);
            }
        }
    }
}

newbtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);