/// <refrence path="../source/interfaces/interfaces.d.ts" />
import { expect } from "chai";

import { Dictionary } from "../source/entities/dictionary";
type T = string;

describe("Dictionary<string>", () => {
    it("ContainsKey(key) should return true if key added", () => {
        let dictionary = new Dictionary<T>();
        dictionary.Add("john", "doe");

        let john = dictionary.ContainsKey("john");
        expect(john).eql(true);
    });
    it("Count() should return the number of items in the dictionary", () => {
        let dictionary = new Dictionary<T>();
        dictionary.Add("john", "doe");
        dictionary.Add("john2", "doe2");

        let count = dictionary.Count();
        expect(count).eql(2);
    });
    it("Item(key) should return value associated with key", () => {
        let dictionary = new Dictionary<T>();
        dictionary.Add("john", "doe");
        dictionary.Add("john2", "doe2");

        let doe = dictionary.Item("john");
        expect(doe).eql("doe");
    });
    it("Item(key) should return undefined when no key are available", () => {
        let dictionary = new Dictionary<T>();

        let doe = dictionary.Item("john");
        expect(doe).eql(undefined);
    });
    it("Keys() should return all keys in dictionary", () => {
        let dictionary = new Dictionary<T>();
        dictionary.Add("john", "doe");
        dictionary.Add("john2", "doe2");

        let keys = dictionary.Keys();
        expect(keys).eql(["john", "john2"]);
    });
    it("Remove(key) should remove item from the dictionary", () => {
        let dictionary = new Dictionary<T>();
        dictionary.Add("john", "doe");
        dictionary.Add("john2", "doe2");

        let count = dictionary.Count();
        expect(count).eql(2);
        dictionary.Remove("john2");
        let count2 = dictionary.Count();
        expect(count2).eql(1);
    });
    it("Values() should return all values in dictionary", () => {
        let dictionary = new Dictionary<T>();
        dictionary.Add("john", "doe");
        dictionary.Add("john2", "doe2");

        let values = dictionary.Values();
        expect(values).eql(["doe", "doe2"]);
    });
});
