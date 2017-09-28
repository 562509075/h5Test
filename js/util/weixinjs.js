

//console.log("地址："+location.href);

$.ajax({
    //type:'get',
    url:"http://h5designer.com/apps/web/index.php?s=WxApi/getSignPackage",
    type: "get",
    dataType: 'jsonp',
    jsonp: 'imCallback',
    data: {url: location.href},
    timeout: 5000,
    success:function ( data ){
        //console.log('append===',data);
        var res=data.data;
        //alert('参数：'+data.data.share);
        //alert('后台返回:  appId:'+res.appId+' timestamp:'+res.timestamp+'  nonceStr:'+res.nonceStr+'  signature:'+res.signature);
        wx.config({
            debug:false, // 开启调试模式,调用的所有api的返回值会在客户端//alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.appId,
            timestamp:res.timestamp,
            nonceStr: res.nonceStr,
            signature: res.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'getLatestAddress',
                'editAddress',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ]
        });


        wx.ready(function () {

            //alert('配置成功');
            myShareFriend2();

        });

        wx.error(function(res){

            //alert('配置失败='+res);

        });



    }});


var WEBURL = 'http://h5designer.com/customer/anan/wkyqh2/';
var shareImg='images/share.jpg';
var shareUrl=WEBURL;

//1为默认
var shareCopy=[
    {'title':'亚泰·华府电梯生态洋房，荣耀问世',
        'title2':'亚泰·华府电梯生态洋房，荣耀问世',
        'desc':'建筑会给一座城市带来多少惊喜？即将为您开启'}

];
var shareId=0;
function myShareFriend2(){
    var imgUrl=WEBURL+shareImg;
    wx.onMenuShareTimeline({

        title: shareCopy[shareId].title, // 分享标题

        link:shareUrl, // 分享链接

        imgUrl: imgUrl, // 分享图标

        success: function () {
            //alert(shareDesc+'true')
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数

        }

    });

    wx.onMenuShareAppMessage({

        title:shareCopy[shareId].title2, // 分享标题

        desc: shareCopy[shareId].desc, // 分享描述

        link: shareUrl, // 分享链接

        imgUrl: imgUrl, // 分享图标

        type: '', // 分享类型,music、video或link，不填默认为link

        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空

        success: function () {
            //alert(shareDesc+'false');
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }

    });
}
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {myShareFriend2()});





