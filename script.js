const check = document.getElementById("check-btn")
const input = document.getElementById("text-input")
const result = document.getElementById("result")

check.addEventListener('click', () => {
   let inputValue = input.value
   
   function reverseString(str) {
        const lowerCase = str.toLowerCase()
        const cleanStr = lowerCase.replace(/[^a-zA-Z0-9]/g, '');
        console.log(cleanStr)
        return cleanStr.split('').reverse().join('');
    }
   switch (reverseString(inputValue)) {
        case "":
            alert("Please input a value")
            break;
        case reverseString(inputValue):
            result.textContent = `${inputValue} is a palindrome`
            break;
    default:
        result.textContent = `${inputValue} is not a palindrome`
   }
})