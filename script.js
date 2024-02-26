const check = document.getElementById("check-btn")
const input = document.getElementById("text-input")
const result = document.getElementById("result")

check.addEventListener('click', () => {
   let inputValue = input.value
   
   function reverseString(str) {
        const lowerCase = str.toLowerCase()
        const cleanStr = lowerCase.replace(/[^a-z0-9_]/g, '')
     //    const cleanStr = lowerCase.replace(/[^a-z0-9 ]/g, '');
        console.log(cleanStr)
        return cleanStr.split('').reverse().join('');
    }
    const reversedValue = reverseString(inputValue)

   if (inputValue === "") {
            alert("Please input a value")
   } else if (reversedValue === inputValue) {
        result.textContent = `${inputValue} is a palindrome`
   } else {
        result.textContent = `${inputValue} is not a palindrome`
   }
})