const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const container = document.querySelector(".palin-container");
const result = document.getElementById("result");

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
    result.textContent = '';
    let phrase = textInput.value;
    textInput.value = '';

    if (phrase === '') {
        alert("Please input a value");
    } else if (getPalindrome(phrase)) {
        result.textContent = `${phrase} is a palindrome`;
    } else {
        result.textContent = `${phrase} is not a palindrome`;
    }
})