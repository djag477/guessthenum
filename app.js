
let targetNum = Math.floor(Math.random() * 100);
console.log(targetNum);
let attempts = 3//Number(document.getElementById("att").textContent)
console.log(attempts);
let subHeadline = document.querySelector('.container h3')
let startRange = document.querySelectorAll('header h1 span')[0]
let endRange = document.querySelectorAll('header h1 span')[1]
console.log(subHeadline);
console.log("start range",startRange);
console.log("end range",endRange);

let inputBox = document.getElementById("inp")
const button = document.getElementById("btn")
button.addEventListener("click", () => {
    
    userInput = inputBox.value
    console.log(userInput);

    if (userInput == targetNum) {
    
        console.log("success!");
        subHeadline.textContent = "success!"
        inputBox.remove()
        
    
    } else if (userInput > targetNum) {
    
        subHeadline.textContent = "Aim lower"
        endRange.textContent = userInput
        console.log("Aim lower");
        attempts--
        
        document.getElementById("att").textContent = attempts;
        if (attempts == 0) inputBox.remove();
        
    
    } else if (userInput < targetNum) {
    
        subHeadline.textContent = "Aim higher";
        startRange.textContent = userInput
        console.log("Aim higher");
        attempts--
        
        document.getElementById("att").textContent = attempts;
        if (attempts == 0) inputBox.remove();
    
    
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
