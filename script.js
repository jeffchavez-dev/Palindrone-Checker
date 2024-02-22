const check = document.getElementById("check-btn")
const input = document.getElementById("text-input")
const result = document.getElementById("result")

check.addEventListener('click', () => {
   let inputValue = input.value
   let lowerCase = inputValue.toLowerCase()
   
   function reverseString(str) {
        const replace = str.replace(/[^a-zA-Z0-9]/g, '');
        console.log(replace)
        return replace.split('').reverse().join('');
    }
   switch (reverseString(lowerCase)) {
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