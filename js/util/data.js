
var holder;
var currentId;
var prevId;
var currentPage;
var prevPage;
var firstPlay=false;
var pageArr=[];
var pageTotal;
var canvasH;
var swipeBoo=false;
var music;

var App={
    /*配置*/
    config:function(){
        currentId=0;
        prevId=currentId;
        holder=exportRootArr[0].holder_mc;
        canvasH=1048;
        prevPage=pageArr[currentId];

        App.changePage();

        setTimeout(function(){
            currentPage.hand_mc.gotoAndPlay(2);
            App.pageEvent();
        },2700);

        music=new lib.music_mc();
        music.x=547;
        music.y=44;
        stage.addChild(music);
        Music.paused();
        MaskFun.init();
    },
    /*事件*/
    pageEvent:function(){
        /*var hammer=new Hammer(document.getElementById('container'));
         hammer.get("swipe").set({direction:Hammer.DIRECTION_HORIZONTAL|Hammer.DIRECTION_VERTICAL});//设置滑动方向
         hammer.on('swipeup swipedown', function(ev) {
         if(swipeBoo){return;}
         if(ev.type=='swipeup'){
         if(pageTotal>currentId)
         {
         currentId++;
         App.changePage()
         }
         }else{
         if(currentId>0&&currentId<=pageTotal)
         {
         currentId--;
         App.changePage()
         }
         }
         });*/

        $('.next_btn').bind('click',function(){
            console.log('next_page');

            if(pageTotal>currentId)
            {
                currentId++;
                MaskFun.intro();
                //App.changePage();
            }

        });

        $('.prev_btn').bind('click',function(){
            console.log('prev_page');
            if(currentId>0&&currentId<=pageTotal)
            {
                currentId--;
                MaskFun.intro();

            }
        });

        music.addEventListener('click',function(){
            Music.paused();
        });
    },
    //切换
    changePage:function(){
        currentPage= pageArr[currentId];
        holder.addChild(currentPage);
        currentPage.gotoAndStop(0);
        TweenMax.fromTo(currentPage,1,{alpha:0},{alpha:1,ease:Expo.easeOut});

        if(firstPlay){
            swipeBoo=true;
            App.pageOut();
            App.pageIn();
        }else{
            firstPlay=true;
            currentPage.gotoAndPlay(2);
        }


    },
    //进场
    pageIn:function(){
        //console.log(prevId,currentId);
        /*if(prevId==0){
         TweenMax.fromTo(currentPage,1,{y:canvasH},{y:0,ease:Expo.easeOut,onComplete:function(){
         prevPage=currentPage;
         swipeBoo=false;
         }});
         }else{
         if(prevId<currentId){
         TweenMax.fromTo(currentPage,1,{y:canvasH},{y:0,ease:Expo.easeOut,onComplete:function(){
         prevPage=currentPage;
         swipeBoo=false;

         }});
         }else{
         TweenMax.fromTo(currentPage,1,{y:-canvasH},{y:0,ease:Expo.easeOut,onComplete:function(){
         prevPage=currentPage;
         swipeBoo=false;
         }});
         }
         }*/

        /* if(prevId<currentId){
         TweenMax.fromTo(currentPage,1,{y:canvasH},{y:0,ease:Expo.easeOut,onComplete:function(){
         prevPage=currentPage;
         swipeBoo=false;

         }});
         }else{
         TweenMax.fromTo(currentPage,1,{y:-canvasH},{y:0,ease:Expo.easeOut,onComplete:function(){
         prevPage=currentPage;
         swipeBoo=false;
         }});
         }*/
        prevPage=currentPage;
        prevId=currentId;
    },
    /*出场*/
    pageOut:function(){
        /*if(prevId==0){
         //var page0=pageArr[0];
         //holder.addChild(page0);
         //page0.gotoAndPlay('out');
         }else{
         console.log('out1:'+prevId,currentId);
         if(prevId<currentId){
         TweenMax.fromTo(prevPage,1,{y:0},{y:-canvasH,ease:Expo.easeOut,onComplete:function(){
         console.log('remove');
         holder.removeChild(prevPage);
         }});
         }else{
         TweenMax.fromTo(prevPage,1,{y:0},{y:canvasH,ease:Expo.easeOut,onComplete:function(){
         holder.removeChild(prevPage);
         }});
         }

         }*/
        holder.removeChild(prevPage);
    }

};
var maskMc;
var MaskFun={
    init:function(){
        var self=this;
        maskMc=new lib.mask_mc();
        stage.addChild(maskMc);
        maskMc.x=640;
    },
    intro:function(){
        //console.log('out1:'+prevId,currentId);
        var h=5182;
        var speed=5;
        //TweenMax.to(currentPage,1,{alpha:0,ease:Expo.easeOut});
        setTimeout(function(){
            App.changePage();
            phone();
        },100);
        if(currentId>prevId)
        {
            TweenMax.fromTo(maskMc,speed,{x:0,y:canvasH},{x:0,y:-h,ease:Expo.easeOut,onComplete:function(){

                //phone();
            }});
            /*maskMc.p0.gotoAndStop(prevId);
             maskMc.p1.gotoAndStop(currentId);
             maskMc.p2.gotoAndStop(currentId);
             maskMc.p3.gotoAndStop(currentId);
             var tl=new TimelineMax({paused:true});
             tl.fromTo(maskMc,1,{x:0,alpha:0},{alpha:1,ease:Expo.easeOut})
             .fromTo(maskMc,1.5,{y:0},{y:-3*canvasH,ease:Expo.easeOut,onComplete:function(){
             App.changePage();
             }})
             .fromTo(maskMc,2,{alpha:1},{alpha:0,ease:Expo.easeInOut,onComplete:function(){
             currentPage.gotoAndPlay('in');
             phone();

             }});
             tl.play();*/
        }else{
            //TweenMax.fromTo(maskMc,{x:-6063,y:canvasH},{y:0,ease:Expo.easeOut});
            /*maskMc.p0.gotoAndStop(currentPage);
             maskMc.p1.gotoAndStop(prevId);
             maskMc.p2.gotoAndStop(prevId);
             maskMc.p3.gotoAndStop(prevId);
             var tl=new TimelineMax({paused:true});
             tl.fromTo(maskMc,1,{y:-3*canvasH,x:0,alpha:0},{alpha:1,ease:Expo.easeOut})
             .fromTo(maskMc,1.5,{y:-3*canvasH},{y:0,ease:Expo.easeOut,onComplete:function(){
             App.changePage();
             }})
             .fromTo(maskMc,3,{alpha:1},{alpha:0,ease:Expo.easeInOut,onComplete:function(){
             currentPage.gotoAndPlay('in');
             phone();

             }});
             tl.play();*/

            TweenMax.fromTo(maskMc,speed,{x:0,y:-h},{x:0,y:canvasH,ease:Expo.easeOut,onComplete:function(){
                //currentPage.gotoAndPlay('in');

            }});
        }

        setTimeout(function(){
            currentPage.gotoAndPlay('in');
        },(speed-3)*1000)


    }
};

function phone(){
    if(currentId==6){
        setTimeout(function(){
            $('.end_box').removeClass('wp');
        },3500)
    }else{
        $('.end_box').addClass('wp');
    }
}