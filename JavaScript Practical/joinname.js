// document.querySelector('#addbtn').addEventListener('click',function(){
//     let lap =  document.querySelector('#result')
//     let display =  document.querySelector('#result')
// });

let txt =  document.querySelector('#result')
let display =  document.querySelector('#result')

let fruits = ['banana','apple','orange','graps','pianapple']
fruits.forEach(function(prints){
        display.innerHTML += `<P>${prints}</p>`
})