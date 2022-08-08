const bgInput = document.getElementById("colorInput")
const body = document.body
const bgColor = `${bgInput.value}`
body.style.backgroundColor =`${bgInput.value}`
localStorage.setItem( "bg-color", bgColor)
console.log(bgInput.value)
bgInput.addEventListener("change",()=>{
    body.style.backgroundColor =`${bgInput.value}`
})