"use strict"
class Post{
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text){
        this.test = text;
    }
}
const post1 = new Post("Oleg", "lorem", new Date());
console.log(post1);
post1.edit("lorem lorem lorem");
console.log(post1);

class AttachedPost extends Post{
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}
const attached1 = new AttachedPost("Oleg", "Lorem1", new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit("LOREM1 LOREM1 LOREM1");
console.log(attached1);