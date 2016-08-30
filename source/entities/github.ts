/// <reference path="../../typings/index.d.ts" />
import * as fs from "fs";
import * as path from "path";

export class Github {
    public static loadIssue() {
        return this._loadFile("../markdown/sample.md");
    }
    private static _loadFile(filePath: string) {
        return fs.readFileSync(path.join(__dirname, filePath), "utf8");
    }
}
