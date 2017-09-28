(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtFilters = {};

// library properties:
    lib.properties = {
        width: 640,
        height: 1048,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/l0_0.png", id:"l0_0"},
            {src:"images/l0_1.png", id:"l0_1"},
            {src:"images/l0_2.png", id:"l0_2"},
            {src:"images/l0_4.png", id:"l0_4"},
            {src:"images/l_bg.jpg", id:"l_bg"},
            {src:"images/y0.png", id:"y0"},
            {src:"images/y1.png", id:"y1"},
            {src:"images/y2.png", id:"y2"},
            {src:"images/y3.png", id:"y3"}
        ]
    };



    lib.ssMetadata = [];


    lib.webfontAvailable = function(family) {
        lib.properties.webfonts[family] = true;
        var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
        for(var f = 0; f < txtFilters.length; ++f) {
            txtFilters[f].updateCache();
        }
    };
// symbols:



    (lib.l0_0 = function() {
        this.initialize(img.l0_0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,223);


    (lib.l0_1 = function() {
        this.initialize(img.l0_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,81,29);


    (lib.l0_2 = function() {
        this.initialize(img.l0_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,51,99);


    (lib.l0_4 = function() {
        this.initialize(img.l0_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,222);


    (lib.l_bg = function() {
        this.initialize(img.l_bg);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1048);


    (lib.y0 = function() {
        this.initialize(img.y0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,385,463);


    (lib.y1 = function() {
        this.initialize(img.y1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,58,110);


    (lib.y2 = function() {
        this.initialize(img.y2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,84,89);


    (lib.y3 = function() {
        this.initialize(img.y3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,107,188);


    (lib.Tween1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.y2();
        this.instance.setTransform(-42,-44.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42,-44.5,84,89);


    (lib.Symbol13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.l0_4();
        this.instance.setTransform(0,380);

        this.instance_1 = new lib.l0_2();
        this.instance_1.setTransform(287,949);

        this.instance_2 = new lib.l0_1();
        this.instance_2.setTransform(277,935);

        this.instance_3 = new lib.l0_0();
        this.instance_3.setTransform(0,380);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,377,640,671);


    (lib.Symbol11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.y2();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,84,89);


    (lib.Symbol10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.y3();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,107,188);


    (lib.Symbol7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.y1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,58,110);


    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.y0();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,385,463);


    (lib.Symbol12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol11();
        this.instance.setTransform(42,44.5,1,1,0,0,0,42,44.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,84,89);


    (lib.Symbol9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol10();
        this.instance.setTransform(53.5,94,1,1,0,0,0,53.5,94);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:53.6,rotation:90,x:-370.5,y:1546.5},169).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,107,188);


    (lib.Symbol8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_313 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(313).call(this.frame_313).wait(8));

        // Symbol 9
        this.instance = new lib.Symbol9();
        this.instance.setTransform(509.6,242,1,1,0,0,0,53.5,94);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(254).to({_off:false},0).wait(67));

        // Symbol 9
        this.instance_1 = new lib.Symbol9();
        this.instance_1.setTransform(-74.5,134,1,1,0,0,0,53.5,94);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(117).to({_off:false},0).wait(204));

        // Symbol 9
        this.instance_2 = new lib.Symbol9();
        this.instance_2.setTransform(277.6,54,1,1,0,0,0,53.5,94);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(321));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(224.1,-40,107,188);


    (lib.Symbol6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol7();
        this.instance.setTransform(29,55,1,1,0,0,0,29,55);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:29.1,regY:55.1,rotation:105,x:-791.3,y:1491.4},283).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,58,110);


    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol3();
        this.instance.setTransform(192.5,231.5,1,1,0,0,0,192.5,231.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30,x:-751.8,y:1655.9},45).to({_off:true},1).wait(116));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,385,463);


    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_157 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(157).call(this.frame_157).wait(5));

        // Symbol 2
        this.instance = new lib.Symbol2();
        this.instance.setTransform(384.6,694.5,1,1,0,0,0,192.5,231.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).wait(49));

        // Symbol 2
        this.instance_1 = new lib.Symbol2();
        this.instance_1.setTransform(20.5,163.5,1,1,0,0,0,192.5,231.5);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).wait(105));

        // Symbol 2
        this.instance_2 = new lib.Symbol2();
        this.instance_2.setTransform(192.5,231.5,1,1,0,0,0,192.5,231.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(162));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,385,463);


    (lib.Tween2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol12();
        this.instance.setTransform(0,0,1,1,0,0,0,42,44.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42,-44.5,84,89);


    (lib.Symbol5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Tween1("synched",0);
        this.instance.setTransform(42,44.5);

        this.instance_1 = new lib.Tween2("synched",0);
        this.instance_1.setTransform(-674.2,1480.8,1,1,75);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},349).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:75,x:-674.2,y:1480.8},349).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,84,89);


    (lib.Symbol4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_231 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(231).call(this.frame_231).wait(4));

        // Symbol 5
        this.instance = new lib.Symbol5();
        this.instance.setTransform(386.1,256.6,1,1,0,0,0,42,44.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).to({_off:true},100).wait(1));

        // Symbol 5
        this.instance_1 = new lib.Symbol5();
        this.instance_1.setTransform(210.1,84.5,1,1,0,0,0,42,44.5);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).to({_off:true},176).wait(1));

        // Symbol 5
        this.instance_2 = new lib.Symbol5();
        this.instance_2.setTransform(42,44.5,1,1,0,0,0,42,44.5);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({_off:true},132).wait(1));

        // Symbol 6
        this.instance_3 = new lib.Symbol6();
        this.instance_3.setTransform(315.1,74,1,1,0,0,0,29,55);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(214));

        // Symbol 6
        this.instance_4 = new lib.Symbol6();
        this.instance_4.setTransform(197.1,-101,1,1,0,0,0,29,55);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(162).to({_off:false},0).to({_off:true},72).wait(1));

        // Symbol 6
        this.instance_5 = new lib.Symbol6();
        this.instance_5.setTransform(29,55,1,1,0,0,0,29,55);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},234).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,58,110);


    (lib.loading_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_39 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(9));

        // Layer 3
        this.txt = new cjs.Text("0%", "17px 'Arial'");
        this.txt.name = "txt";
        this.txt.textAlign = "center";
        this.txt.lineHeight = 21;
        this.txt.lineWidth = 100;
        this.txt.setTransform(320,385);

        this.timeline.addTween(cjs.Tween.get(this.txt).wait(48));

        // big
        this.instance = new lib.Symbol1();
        this.instance.setTransform(764.5,-304.5,1,1,0,0,0,192.5,231.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

        // Layer 2
        this.instance_1 = new lib.Symbol8();
        this.instance_1.setTransform(365.5,-234,1,1,0,0,0,53.5,94);

        this.instance_2 = new lib.Symbol4();
        this.instance_2.setTransform(426,-113,1,1,0,0,0,42,55);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(48));

        // Layer 1
        this.instance_3 = new lib.Symbol13();
        this.instance_3.setTransform(320,524,1,1,0,0,0,320,524);
        this.instance_3.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:714,y:714,alpha:0.013},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.101},0).wait(1).to({alpha:0.134},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.221},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.342},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.489},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.823},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.903},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.998},0).wait(1).to({regY:524,y:524,alpha:1},0).wait(20));

        // Layer 4
        this.instance_4 = new lib.l_bg();

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-536,957,1584);


// stage content:
    (lib.loading = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // holder
        this.loading = new lib.loading_1();
        this.loading.setTransform(320,524,1,1,0,0,0,320,524);

        this.timeline.addTween(cjs.Tween.get(this.loading).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(320,-12,957,1584);

})(lib5 = lib5||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib5, images, createjs, ss;