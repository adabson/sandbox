var myName: string = "Dabson";
var myAge: number = 41;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;

let tsEl = document.getElementById("tsStuff");

tsEl.innerHTML = "My Name is " + myName;

document.write("myName is a " + typeof (myName) + "<br>");
document.write("canVote is a " + typeof (canVote) + "<br>");
document.write("myAge is a " + typeof (myAge) + "<br>");
document.write("anything is a " + typeof (anything) + "<br>");

var strToNum: number = parseInt("5");
var numToStr: number = 5;

document.write("strToNum is a " + typeof (strToNum) + "<br>");
document.write("numToStr is a " + typeof numToStr.toString() + "<br>");

const PI = 3.14159;
document.write("PI is a " + typeof (PI) + "<br>");