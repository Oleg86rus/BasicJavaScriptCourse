"use strict";
function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (text) {
this.text = text;
}
const post1 = new Post("Oleg", "lorem", new Date());
console.log(post1);
post1.edit("lorem lorem lorem");
console.log(post1);