import dogs from "./src/data.js";
import Dog from "./src/dog.js";

let currentDog = setNewDog()

const dogPart = document.getElementById("dog-part")
const likeBtn = document.getElementById("like-btn")
const dislikeBtn = document.getElementById("dislike-btn")

function setNewDog() {
    return new Dog(dogs[ Math.floor ( Math.random() * dogs.length )])
}

function activateLike(){
    currentDog.hasBeenLiked = true
    likeBtn.classList.add("bg-green-200")
}

function disableLike(){
    currentDog.hasBeenLiked = false
    likeBtn.classList.remove("bg-green-200")
}

function activateDislike(){
    currentDog.hasBeenSwiped = true
    dislikeBtn.classList.add("bg-red-200")
}

function disableDislike(){
    currentDog.hasBeenSwiped = false
    dislikeBtn.classList.remove("bg-red-200")
}

function nextDog() {
    likeBtn.disabled = true
    dislikeBtn.disabled = true
    setTimeout(function(){
        currentDog = setNewDog()
        likeBtn.disabled = false
        likeBtn.classList.remove("bg-green-200")
        dislikeBtn.disabled = false
        dislikeBtn.classList.remove("bg-red-200")
        render()
    },1500)
}

likeBtn.addEventListener("click", function(){
    if ( !currentDog.hasBeenLiked ) {
        if( currentDog.hasBeenSwiped ) {
            disableDislike()
        }
        activateLike()
    }  else if ( currentDog.hasBeenLiked ) {
        disableLike()
    } 
    render()
    nextDog()
})

dislikeBtn.addEventListener("click", function(){
    if ( !currentDog.hasBeenSwiped ) {
        if ( currentDog.hasBeenLiked ){
            disableLike()
        }
        activateDislike()
    } else if ( currentDog.hasBeenSwiped ) {
        disableDislike()
    }
    render()
    nextDog()
})

function render() {
    dogPart.innerHTML = currentDog.getDogHtml()
    
}



render()






