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
            H1: /#{1}\s/,
            H2: /#{2}\s/,
            H3: /#{3}\s/,
            H4: /#{4}\s/,
            H5: /#{5}\s/,
            H6: /#{6}\s/,
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
export class Parser {
    public static config = /\r\n/g;
    public output;
    constructor(public issue) { }
    public parse() {
        return this.issue.split(Parser.config);
    }
}
