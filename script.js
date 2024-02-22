const check = document.getElementById("check-btn")
const input = document.getElementById("text-input")
const result = document.getElementById("result")

check.addEventListener('click', () => {
   let inputValue = input.value
   let lowerCase = inputValue.toLowerCase()
   
   function removeSpecialCharacter(str){
        return str.replace(/[^\w\s]/gi, '');
   }
   const okay = "okay okay"
   console.log(removeSpecialCharacter(okay))


   function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
        return str.split('').reverse().join('');
    }
   switch (lowerCase) {
        case "":
            result.textContent = "Please input a value"
            break;
        case reverseString(lowerCase):
            result.textContent = `${inputValue} is a palindrome`
            break;
    default:
        result.textContent = `${inputValue} is not a palindrome`
   }
})