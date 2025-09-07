let code = document.querySelector("#color")
let div = document.querySelector("#changedcolor")
let btnclick = document.querySelector("#btnclick")
let hexcode = [0, 1, 2, 3, 4, 5, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btnclick.addEventListener("click", () => {
    let hexcolor = "#"

    for (let i = 1; i <= 6; i++) {
        hexcolor += generate();
    }
    console.log(hexcolor)
    
    div.style.backgroundColor = hexcolor;
    code.innerHTML = hexcolor;
})

function generate() {
    let random = Math.floor(Math.random() * hexcode.length)
    return hexcode[random]
}