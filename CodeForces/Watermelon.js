"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
    console.log(x);
}

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", () => {
    inputString = inputString.split("\n");
    main();
});

function readline() {
    return inputString[currentLine++];
}

function main() {
    var data = parseInt(readline());

    if (data >=4 && data % 2==0) ? console.log("YES") : console.log("NO");
}