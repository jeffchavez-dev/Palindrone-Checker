const check = document.getElementById("check-btn")
const input = document.getElementById("text-input")

check.addEventListener('click', () => {
   if (input.value === "") {
        alert("Please input a value")
   }
})