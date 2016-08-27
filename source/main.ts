/*

import * as $ from "jquery";
import List from "./entities/list";

interface Item {
    name: string;
}

let nameOne: Item = { name: "Name1"};
let nameTwo: Item = { name: "Name2"};

let list: List<Item> = new List<Item>(nameOne, nameTwo);
let filter = (item: Item, value: string) => item.name === value;
let name = "Name1";
let filteredList = list.where(filter, name);

if (typeof window !== "undefined") {
    let html = list.map((item) => {
        return `<span>${item.name} </span>`;
    });
    $("#list").html(html.join(""));

    let html2 = filteredList.map((item) => {
        return `<span>${item.name} </span>`;
    });
    $("#filteredList").html(html2.join(""));
};
*/
