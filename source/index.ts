import {Issue, Markdown} from "./entities/github";

let issue = Issue.load();
let expression = /\r/g;

console.log(expression.exec(issue));


/*
while ((results = Markdown.syntax.Headers.H3.exec(issue)) !== null) {
  console.log(results[0]);
}
*/


