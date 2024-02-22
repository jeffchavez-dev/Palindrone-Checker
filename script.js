const check = document.getElementById("check-btn")
const input = document.getElementById("text-input")

check.addEventListener('click', () => {
   let inputValue = input.value

   function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
  }
   switch (inputValue) {
        case "":
            alert("Please input a value")
            break;
        case reverseString(inputValue):
            alert(`${inputValue} is a palindrome`)
            break;
    default:
        alert(`${inputValue} is not a palindrome`)
   }
})