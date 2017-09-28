

var canvas, stage, exportRoot5;
window.onload=function(){init()};

function init() {
    document.addEventListener('touchmove', function (e) {e.preventDefault()},false);
    canvas = document.getElementById("wapView");
    images = images||{};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad1);
    loader.addEventListener("complete", handleComplete1);
    loader.addEventListener("progress", handleProgress1);
    loader.loadManifest(lib5.properties.manifest);
}

function handleFileLoad1(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleProgress1(evt){
    //var precent=Math.floor(evt.loaded*100);
    //$('.loading-txt').html(precent+'%');

}

function handleComplete1() {
    console.log('complete:loading');
    //return;
    exportRoot5 = new lib5.loading();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot5);
    stage.update();
    createjs.Touch.enable(stage);
    createjs.Ticker.setFPS(lib5.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
    Music.load();
}