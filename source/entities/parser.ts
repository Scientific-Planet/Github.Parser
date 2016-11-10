/// <reference path="../../typings/index.d.ts" />
import * as peg from "pegjs";
import * as fs from "fs";
import * as path from "path";

export class Parser {
    constructor(public issue) {}
    private static _loadFile(filePath: string) {
        return fs.readFileSync(path.join(__dirname, filePath), "utf8");
    }
    private _parser = peg.generate(Parser._loadFile("../grammer/markdown"));
    public parse() {
        return this._parser.parse(Parser._loadFile("../markdown/dev.md"));
    }

}