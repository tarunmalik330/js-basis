let p = document.querySelector("p")
let button = document.querySelector("button")
let button1 = document.querySelector("button")

button.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1
})
// button.lessEventListener("click", function () {
//     p.innerHTML = -p.innerHTML - 1
// })