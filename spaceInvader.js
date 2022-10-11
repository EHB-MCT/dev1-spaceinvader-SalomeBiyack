"use strict";

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

drawRectangle();
function drawRectangle(){

context.beginPath();
context.fillStyle="#7FFF00";
context.rect(5,2,50,50);
context.fill();

}

drawRectangle();
context.beginPath();
context.fillStyle="#7FFF00";
context.rect(30,40,50,50);
context.fill();

drawRectangle();
context.beginPath();
context.fillStyle="#7FFF00";
context.rect(100,20,50,50);
context.fill();

drawRectangle();
context.beginPath();
context.fillStyle="#7FFF00";
context.rect(20,100,50,50);
context.fill();

drawRectangle();
context.beginPath();


