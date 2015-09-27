/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;

// GAME VARIABLES
var helloLabel: createjs.Text;

function init(): void {
    console.log("Game Started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    createjs.Ticker.setFPS(60); // set frame rate to 60fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame

    main(); // call main game function
}

// MAIN GAME LOOP
function gameLoop(event: createjs.Event): void {
    stage.update(); // redraw/refresh stage every frame

}

// FUN HAPPENS HERE
function main(): void {
    helloLabel = new createjs.Text("Hello World", "60px Consolas", "#000000");
    helloLabel.regX = helloLabel.getBounds().width * 0.5;
    helloLabel.regY = helloLabel.getBounds().height * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel); // add label to the stage
}
