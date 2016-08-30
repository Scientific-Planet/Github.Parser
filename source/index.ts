import {Github} from "./entities/github";
import {Parser, Markdown} from "./entities/parser";

let issue = Github.loadIssue();
let parser = new Parser(issue);
console.log(parser.parse());

let results = [];
while ((results = Markdown.syntax.Headers.H3.exec(issue)) !== null) {
  console.log(results[0]);
}
