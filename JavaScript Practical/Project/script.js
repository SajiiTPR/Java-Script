var addDetails = document.querySelector("#add-details")
var blackScreen = document.querySelector("#black-screen")
var addBook = document.querySelector(".add-book")

//display add button press
addBook.addEventListener("click",function(){
    addDetails.style.display="block"
    blackScreen.style.display="block"
})

//close popup button
var closebtn = document.querySelector("#close-popup")

closebtn.addEventListener("click",function(event){
    event.preventDefault()
    addDetails.style.display="none"
    blackScreen.style.display="none"
})

//creare card for #container, #book-title, #book-author, #book-decription, and #add-card button
var container = document.querySelector("#container")
var addbookbtn = document.querySelector("#add-card")
var booktitle = document.querySelector("#book-name")
var bookauthor = document.querySelector("#author-name")
var description = document.querySelector("#book-summary")

//create card function
addbookbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("id","container-box")
    div.innerHTML=`<h2 id="book-title">${booktitle.value}</h2>
                    <p id="book-author">${bookauthor.value}</p>
                    <p id="book-discription">${description.value}</p>
                    <button id="clear-btn" onclick="deletebtn(event)">Clear</button>`

    container.appendChild(div)
    addDetails.style.display="none"
    blackScreen.style.display="none"
})


//clear btn function
function deletebtn(event) {
    event.target.parentElement.remove()
}