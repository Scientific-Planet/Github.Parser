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
            H3: /#{3}\s\w*\s\w*/g,
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
export class Parser {
    public static config = /\r\n/g;
    constructor(public issue) { }
    public parse() {
        return this.issue.split(Parser.config);
    }
}
