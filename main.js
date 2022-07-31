var filterStarIdeasText = document.querySelector("#filteredStarIdeas");
var showStarredIdeasButton = document.querySelector("#showStarredIdeasButton");
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

var newIdea
var savedIdeas = []

window.addEventListener('load', removeIdeaTemplate)
saveButton.addEventListener('click', saveNewIdea)
titleInput.addEventListener('input', errorHandler)
bodyInput.addEventListener('input', errorHandler)





function loadDisableButton() {
  document.getElementById("save-idea-button").disable = true
  errorHandler()
}




function errorHandler() {
  if (titleInput.value.length > 0 && bodyInput.value.length > 0) {
      saveButton.removeAttribute("disabled")
  } else {

    saveButton.setAttribute("disabled", "disabled")

  }
}
function removeIdeaTemplate() {
  errorHandler()

}




//ideaTileContainer.innerHTML = savedIdeas

function saveNewIdea() {

newIdea = new Idea(titleInput.value, bodyInput.value)
ideaCardTitle.innerText = newIdea.title
ideaCardBody.innerText = newIdea.body
savedIdeas.push(newIdea)

 ideaTileContainer.innerHTML +=
 `<div class='idea-card'><a href="#">
 <section class='star-banner'>
 <svg xmlns="http://www.w3.org/2000/svg" class='star' id="star-button" viewBox="0 0 16.06 15.65"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 29</title><g id="background"><polygon class="cls-1" points="8.02 2.48 9.64 5.77 13.27 6.29 10.64 8.85 11.26 12.47 8.02 10.76 4.77 12.47 5.39 8.85 2.76 6.29 6.39 5.77 8.02 2.48"/></g></svg>
 <!-- <svg xmlns="http://www.w3.org/2000/svg" class='active-star' id='star-active' viewBox="0 0 16.93 16.49"><defs><style>.cls-1{fill:#f16139;}</style></defs><title>Artboard 30</title><g id="background"><polygon class="cls-1" points="8.28 2.85 9.91 6.13 13.53 6.66 10.91 9.22 11.53 12.83 8.28 11.13 5.04 12.83 5.66 9.22 3.03 6.66 6.66 6.13 8.28 2.85"/></g></svg> -->
 <!-- <svg xmlns="http://www.w3.org/2000/svg" class='delete' id="delete-button" viewBox="0 0 18.18 17.72"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 31</title><g id="background"><polygon class="cls-1" points="13.13 5.87 12.43 5.16 8.97 8.61 5.53 5.16 4.82 5.87 8.27 9.32 4.82 12.77 5.53 13.48 8.97 10.03 12.43 13.48 13.13 12.77 9.68 9.32 13.13 5.87"/></g></svg> -->
 </section>
 <p class='idea-title' id='title-idea'>${newIdea.title}</p>
 <p class='idea-body' id='body-idea'>${newIdea.body}</p>
 <section class='comment-banner'>
 <svg xmlns="http://www.w3.org/2000/svg" class='comment-icon' id="comment-icon" viewBox="0 0 19.71 19.71"><defs><style>.cls-1{fill:#fff;stroke:#353567;stroke-miterlimit:10;}.cls-2{fill:#353567;}</style></defs><title>abacus-v1Artboard 41</title><g id="background"><circle class="cls-1" cx="9.76" cy="9.76" r="5.58"/><polygon class="cls-2" points="5.65 9.37 5.65 10.14 9.37 10.14 9.37 13.86 10.14 13.86 10.14 10.14 13.86 10.14 13.86 9.37 10.14 9.37 10.14 5.65 9.37 5.65 9.37 9.37 5.65 9.37"/></g></svg>
 <p class='comment'>Comment</p>
 </section>
 </a>
 </div>`

titleInput.value = ''
bodyInput.value = ''
}


function errorStateTitle() {
saveButton.style.backgroundColor = '#353567'
}

function errorStateBody() {
saveButton.style.backgroundColor = '#353567'
}

// #353567

// console.log('updates data model',newIdea)
// console.log('updates data model',savedIdeas)
// console.log('updates DOM',newIdea.title)
// console.log('updates DOM',newIdea.body)
// console.log('updates dom',ideaCard.innerHTML)
//  for(var i = 0; i < savedIdeas.length; i++) {
//
//
// }



// ideaCardTitle.innerText = newIdea.title // this is a good start but needs to be tweaked
// ideaCardBody.innerText = newIdea.body
// savedIdeas.push(newIdea)
// console.log(savedIdeas)
// }
