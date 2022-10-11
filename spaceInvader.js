"use strict";

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

drawRectangle();
function drawRectangle(){

context.beginPath();
context.fillStyle="#7FFF00";
context.rect(25,25,50,25);
context.fill();
}

drawRectangle();
context.beginPath();
context.fillStyle="#7FFF00";
context.rect(125,25,50,25);
context.fill();

drawRectangle();
context.fillStyle="#7FFF00";
context.rect(25,75,50,25);
context.fill();

drawRectangle();
context.fillStyle="#7FFF00";
context.rect(25,100,50,25);
context.fill();

drawRectangle();
context.fillStyle="#7FFF00";
context.rect(75,100,50,25);
context.fill();

drawRectangle();
context.fillStyle="#7FFF00";
context.rect(100,100,50,25);
context.fill();

drawRectangle();
context.fillStyle="#7FFF00";
context.rect(125,75,50,25);
context.fill();

drawRectangle();
context.fillStyle="#7FFF00";
context.rect(125,100,50,25);
context.fill();