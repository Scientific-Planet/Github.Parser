/// <refrence path="../source/interfaces/interfaces.d.ts" />
import { expect } from "chai";
import * as fs from "fs";

import {Github} from "../source/entities/github";

describe("Github", () => {
    describe("Issue", () => {
        it("Load() should return sample mardown", () => {
            let sample = fs.readFileSync("./source/markdown/sample.md", "utf8");
            let result = Github.loadIssue();
            expect(result).eql(sample);
    });
    });
});
