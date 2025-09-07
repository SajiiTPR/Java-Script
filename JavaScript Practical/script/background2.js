let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
                'A', 'B', 'C', 'D', 'E', 'F'];
let button = document.getElementById('button')
let color = document.getElementById('color')
let backscreen = document.getElementById('backscreen')

function generatecode(){
    let randomnum = Math.floor(Math.random()*random.length);
    return random[randomnum]
}

button.addEventListener('click' , ()=>{
    let colorcode = "#"
    for(let i = 1; i<=6; i++){
        colorcode += generatecode();
    }

    color.innerHTML = colorcode
    backscreen.style.backgroundColor=colorcode
})

let menu = document.querySelector('.menu')
let menulist = document.querySelector('nav ul')
menu.addEventListener('click',()=>{
    menulist.classList.toggle('showmenu')
})