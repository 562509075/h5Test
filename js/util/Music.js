/**
 * Created by anan on 17-3-28.
 */

/*º”‘ÿ“Ù¿÷*/
var Music={
    boo:false,
    load:function(){

        //alert('music begin');
        /*function musicInWeixinHandler() {
         //musicPlay(true);
         //console.log('“Ù¿÷œÏ∆¿¥');
         document.addEventListener("WeixinJSBridgeReady", function () {
         //console.log('“Ù¿÷œÏ∆¿¥');
         }, false);
         document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
         }
         document.addEventListener('DOMContentLoaded', musicInWeixinHandler);*/

        AudioMgr.load([
            {name: 'bg',src: 'media/bgm.mp3',autoplay:false,loop: true}
        ], function() {
            //setInterval(function(){Music.play();},50);
            //init2();
            //Music.play();
            init2();
            /* $('.music').bind('click',musicClick);
             function musicClick(){
             Music.paused();
             }*/
            //Music.play();
            //alert(222);
            /* document.addEventListener("WeixinJSBridgeReady", function () {
             Music.paused();
             //alert(111);
             }, false);*/

        });
    },
    stop:function(){
        AudioMgr.pause('bg');
    },
    play:function(){
        AudioMgr.play('bg');
    },
    paused:function(){
        if(Music.boo){
            //$('.music0').addClass('wp');
            //$('.music1').removeClass('wp');
            music.gotoAndStop(1);
            Music.stop();
        }else{
            //$('.music0').removeClass('wp');
            //$('.music1').addClass('wp');
            music.gotoAndStop(0);
            Music.play();
        }

        Music.boo=!Music.boo;
    }
};