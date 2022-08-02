 document.querySelector("#filteredStarIdeas");
document.querySelector("#showStarredIdeasButton");
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var saveButton = document.querySelector("#save-idea-button");
var magnaGlassButton = document.querySelector("#magni-glass");
var searchInput = document.querySelector("#search-input");
var ideaCard = document.querySelector('#full-idea')
var starButton = document.querySelector("#star-button");
var commentButton = document.querySelector("#comment-icon");
var deleteButton = document.querySelector("#delete-button");
var ideaCardTitle = document.querySelector('#title-idea')
var ideaCardBody = document.querySelector('#body-idea')
var userInputSelector = document.querySelector("#title-input","#body-input")
var ideaTileContainer = document.querySelector('.tile-box')
var inputForm = document.querySelector('#input-form')
var whiteStar = document.querySelector("img[src='assets/star.svg']")
var redStar = document.querySelector('.red-star')
var starBanner = document.querySelector('#banner-star')

var newIdea
var savedIdeas = []

window.addEventListener('load', errorHandler)
saveButton.addEventListener('click', saveNewIdea)
titleInput.addEventListener('input', errorHandler)
bodyInput.addEventListener('input', errorHandler)


function favoriteIdea() {

    for (var i = 0; i < savedIdeas.length; i++) {
    var ideaId = savedIdeas[i].id.toString()
      if(savedIdeas[i].id.toString() === ideaId){
        savedIdeas[i].updateIdea()
      }
    }
}

function errorHandler() {
  if (titleInput.value.length > 0 && bodyInput.value.length > 0) {
      saveButton.removeAttribute("disabled")
      saveButton.style.cursor = "auto"
  } else {
    saveButton.setAttribute("disabled", "disabled")
    saveButton.style.cursor = "none"
  }
}

function saveNewIdea() {
newIdea = new Idea(titleInput.value, bodyInput.value)
savedIdeas.push(newIdea)
ideaCardTitle.innerText = newIdea.title
ideaCardBody.innerText = newIdea.body
ideaTileContainer.innerHTML +=
 ` <div   id='full-idea' class='new-idea-card'>
    <section id='banner-star' class='star-banner'>
      <img class='red-star' src='assets/star-active.svg' alt="red star">
      <img class='star'  id='star-button' src='assets/star.svg' alt="white star">
      <img class='delete-x' src="assets/delete.svg" alt="delete-x">
    </section>
       <p class='idea-title' id='title-idea'>${newIdea.title} title</p>
       <p class='idea-body' id='body-idea'>${newIdea.body}</p>
         <section class='comment-banner'>
             <img class='comment-icon' id='comment-icon'  src="assets/comment.svg" alt="plus sign">
             <p class='comment'>Comment</p>
         </section>
       </div>`
var newIdeaCard = ideaTileContainer.querySelector('.new-idea-card')
newIdeaCard.addEventListener('click',favoriteIdea)
titleInput.value = null
bodyInput.value = null
errorHandler()
titleInput.value = ''
bodyInput.value = ''
}
