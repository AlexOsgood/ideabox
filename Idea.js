class Idea {
  constructor(title, body, star) {
    this.id = Date.now()
    this.title = title
    this.body = body
    this.star = false
  }

   updateIdea() { 
    if(this.star === false) {
      this.star = true
    } else if(this.star === true) {
      this.star = false
    }
 }



  saveToStorage() {}



  deleteFromStorage() {}

}
