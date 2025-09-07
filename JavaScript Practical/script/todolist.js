// let button = document.querySelector("#btn")
// let input = document.querySelector("#input")
// let todoList = document.querySelector("#todoList")

// let todos = [];

// button.addEventListener('click' , ()=>{
//     todos.push(input.value)
//     showval(input.value)
//     input.value = '';
// });

// function showval(todoval){
//     let para = document.createElement('p');
//     para.innerText = todoval
//     todoList.appendChild(para)
// }

let input = document.getElementById('input')
let btn = document.getElementById('btn')
let todoList = document.getElementById('todoList')

btn.addEventListener('click', ()=>{
    let newelement = document.createElement('p')
    newelement.innerText = input.value
    todoList.appendChild(newelement)
    input.value ='';
})