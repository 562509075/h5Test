/**
 * Created by anan on 15-9-5.
 */

//var canvas, stage, exportRoot;
//window.onload=function(){init()};

function init2() {
    //document.addEventListener('touchmove', function (e) {e.preventDefault()});
    //canvas = document.getElementById("wapView");
    images = images||{};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", handleProgress);
    Data.libData();
    //console.log(libArr0[loadingId]);
    loader.loadManifest(libArr0[loadingId]);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleProgress(evt){
    //console.log('progress:'+evt.loaded);
    var precent=Math.floor(evt.loaded*100);
    exportRoot5.loading.txt.text=precent+'%';
    //$('.loading-txt').html(precent+'%');

}

var loadingFirst=true;
function handleComplete() {
    //stage.removeChild(exportRoot5);
    exportRootArr[0] = libArr1[loadingId];
    Data.pageList();
    if(loadingFirst){
        console.log('complete:page');
        loadingFirst=false;
        //stage = new createjs.Stage(canvas);
        stage.addChild(exportRootArr[0]);
        stage.update();
        createjs.Touch.enable(stage);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
        stage.removeChild(exportRoot5);
        App.config();
    }

    if(loadingId<loadingTotal){
        loadingId+=1;
        init2();
    }
}