let title = document.querySelector(".hexcode")
let bgcolor = document.querySelector("#bgcolor")
let btnclick = document.querySelector("#btnclick")
let hexcode = [0, 1, 2, 3, 4, 5, 6, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btnclick.addEventListener("click", () => {
    let hexcolor = "#"

    for (let i = 1; i <= 6; i++) {
        hexcolor += generate();
    }
    console.log(hexcolor)
    
    bgcolor.style.backgroundColor = hexcolor;
    title.innerHTML = hexcolor;
})

function generate() {
    let random = Math.floor(Math.random() * hexcode.length)
    return hexcode[random]
}