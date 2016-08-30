import {Github} from "./entities/github";
import {Parser, Markdown} from "./entities/parser";

let issue = Github.loadIssue();
let parser = new Parser(issue);
console.log(parser.parse());

/*
let results = [];
expression = /#{3}\s\w*\s\w* /g
while ((results = expression.exec(issue)) !== null) {
  console.log(results[0]);
}
*/
