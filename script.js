const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const container = document.querySelector(".palin-container");
let result = document.createElement("p");
result.setAttribute("id", "result");

const getPalindrome = function (str) {
    let split = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('');
    let length = str.length;
    let isPalin = true;
    for (let x = 0; x < (length / 2); x++) {
        if (split[x] !== split[split.length - 1 - x]) {
            isPalin = false;
            break;
        }
    }
    return isPalin;
}

checkButton.addEventListener("click", () => {
    result.remove()
    let phrase = textInput.value;
    textInput.value = '';

    if (getPalindrome(phrase)) {
        result.innerHTML = `${phrase} is a palindrome`;
    } else {
        result.innerHTML = `${phrase} is not a palindrome`;
    }

    container.appendChild(result);
})