
let targetNum = Math.floor(Math.random() * 100);
console.log(targetNum);
let attempts = 3//Number(document.getElementById("att").textContent)
console.log(attempts);

let inputBox = document.getElementById("inp")
const button = document.getElementById("btn")
button.addEventListener("click", () => {
    
    userInput = inputBox.value
    console.log(userInput);

    if (userInput == targetNum) {
    
        console.log("success!");
        inputBox.remove()
        
    
    } else if (userInput > targetNum) {
    
        console.log("Aim lower");
        attempts--
        
        document.getElementById("att").textContent = attempts;
        switch (attempts) {
            case 0:
                inputBox.remove()
                break;
        }
    
    } else if (userInput < targetNum) {
    
        console.log("Aim higher");
        attempts--
        
        document.getElementById("att").textContent = attempts;
        switch (attempts) {
            case 0:
                inputBox.remove()
                break;
        }
    
    
    } 
})


    



/* let targetNum = Math.floor(Math.random() * 100);


function guesser(input) {

    if (input == targetNum) return "success!";
    else if (input > targetNum) userInput = prompt("Aim lower");
    else if (input < targetNum) userInput = prompt("Aim higher");

}


while (userInput != targetNum) {

    guesser(userInput);
    //userInput = prompt("Give another guess: ");

}
 */
