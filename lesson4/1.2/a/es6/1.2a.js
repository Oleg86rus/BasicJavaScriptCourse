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