/// <reference path="../../typings/index.d.ts" />
import * as fs from "fs";
import * as path from "path";

function loadFile(filePath: string) {
    return fs.readFileSync(path.join(__dirname, filePath), "utf8");
}
export class Markdown {
    public static syntax = {
        Code: "`X`",
        Emphasis: {
            Bold: "**X** or __X__",
            BoldAndItallics: "**_X_**",
            Italics: "*X* or _X_",
            Strikethrough: "~~X~~",
        },
        Headers: {
            H1: "#{1}",
            H2: "#{2}",
            H3: /#{3}/g,
            H4: "#{4}",
            H5: "#{5}",
            H6: "#{6}",
        },
        Horizontal: {
            Line: "*** or --- or ___",
        },
        Images: "![alt text](url.png)",
        Links: {
            Inline: "[title](url)",
            Mention: "@",
        },
        Lists: {
            Indent: "...",
            Ordered: "1.",
            OrderedSub: "..1.",
            Task: "- [ ]",
            UnOrdered: "* or - or +",
            UnOrderedSub: "⋅⋅*",
        },
        Quotes: {
            Block: ">",
        },
    };
}
export class Issue {
    public static load() {
        return loadFile("../markdown/sample.md");
    }
}


