import {Issue, Markdown} from "./entities/github";

let issue = Issue.load();
let results = [];

//console.log(Markdown.syntax.Headers.H3.exec(issue));

while ((results = Markdown.syntax.Headers.H3.exec(issue)) !== null) {
  console.log(results[0]);
}

let expression = /\n/g;
let test = issue.split(expression);
console.log(test);



