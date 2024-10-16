let boxces = document.querySelectorAll(".box");
let res = document.querySelector("#endgame");
let newgame= document.querySelector("#firstgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO= true;

const winPattern = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],


];

const reset = () =>{
    turnO = true;
    enebleboxces();
    msgContainer.classList.add("hide");
     }


boxces.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");

        if (turnO){
            box.innerText= "O";
            turnO = false;
        }
        else {
            box.innerText= "X";
            turnO = true;
        }

        box.disabled = true;
        checkWinner ();

    })
})


const disableboxces = () =>{
    for (let box of boxces){
        box.disabled = true;
    }
}

const enebleboxces = () =>{
    for (let box of boxces){
        box.disabled = false;
        box.innerText="";
    }
}

let showWinner = (Winner) =>{
    msg.innerText= `Congurtulation , Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableboxces();


}

let checkWinner = () =>{
    for ( let pattern of winPattern){
        let pos1Val = boxces[pattern[0]].innerText; 
        let pos2Val = boxces[pattern[1]].innerText; 
     let pos3Val = boxces[pattern[2]].innerText; 

     if (pos1Val !="" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val=== pos3Val){

            console.log("Winner" ,pos1Val);
            showWinner (pos1Val)
        }
     }

    }
}

 

newgame.addEventListener("click", reset);
res.addEventListener("click", reset);