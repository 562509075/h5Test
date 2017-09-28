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
            {src:"images/bgg.jpg", id:"bgg"},
            {src:"images/bgg1.png", id:"bgg1"},
            {src:"images/bgg2.png", id:"bgg2"},
            {src:"images/hand.png", id:"hand"},
            {src:"images/l0_2.png", id:"l0_2"},
            {src:"images/l0_4.png", id:"l0_4"},
            {src:"images/l_bg.jpg", id:"l_bg"},
            {src:"images/logo.png", id:"logo"},
            {src:"images/music_bg.png", id:"music_bg"},
            {src:"images/music_Icon.png", id:"music_Icon"},
            {src:"images/p1_0.png", id:"p1_0"},
            {src:"images/p1_1.png", id:"p1_1"},
            {src:"images/p1_10.png", id:"p1_10"},
            {src:"images/p1_11.png", id:"p1_11"},
            {src:"images/p1_12.png", id:"p1_12"},
            {src:"images/p1_13.png", id:"p1_13"},
            {src:"images/p1_14.png", id:"p1_14"},
            {src:"images/p1_2.png", id:"p1_2"},
            {src:"images/p1_3.png", id:"p1_3"},
            {src:"images/p1_4.png", id:"p1_4"},
            {src:"images/p1_5.png", id:"p1_5"},
            {src:"images/p1_6.png", id:"p1_6"},
            {src:"images/p1_7.png", id:"p1_7"},
            {src:"images/p1_8.png", id:"p1_8"},
            {src:"images/p1_9.png", id:"p1_9"},
            {src:"images/p2_0.jpg", id:"p2_0"},
            {src:"images/p2_1.png", id:"p2_1"},
            {src:"images/p2_2.png", id:"p2_2"},
            {src:"images/p2_3.png", id:"p2_3"},
            {src:"images/p2_4.png", id:"p2_4"},
            {src:"images/p2_5.png", id:"p2_5"},
            {src:"images/p2_6.png", id:"p2_6"},
            {src:"images/p2_7.png", id:"p2_7"},
            {src:"images/p2_8.png", id:"p2_8"},
            {src:"images/p2_9.png", id:"p2_9"},
            {src:"images/p3_0.jpg", id:"p3_0"},
            {src:"images/p3_1.png", id:"p3_1"},
            {src:"images/p3_10.png", id:"p3_10"},
            {src:"images/p3_2.png", id:"p3_2"},
            {src:"images/p3_3.png", id:"p3_3"},
            {src:"images/p3_4.png", id:"p3_4"},
            {src:"images/p3_5.png", id:"p3_5"},
            {src:"images/p3_6.png", id:"p3_6"},
            {src:"images/p3_7.png", id:"p3_7"},
            {src:"images/p3_8.png", id:"p3_8"},
            {src:"images/p3_9.png", id:"p3_9"},
            {src:"images/p4_0.jpg", id:"p4_0"},
            {src:"images/p4_1.png", id:"p4_1"},
            {src:"images/p4_10.png", id:"p4_10"},
            {src:"images/p4_11.png", id:"p4_11"},
            {src:"images/p4_12.png", id:"p4_12"},
            {src:"images/p4_2.png", id:"p4_2"},
            {src:"images/p4_3.png", id:"p4_3"},
            {src:"images/p4_4.png", id:"p4_4"},
            {src:"images/p4_5.png", id:"p4_5"},
            {src:"images/p4_6.png", id:"p4_6"},
            {src:"images/p4_7.png", id:"p4_7"},
            {src:"images/p4_8.png", id:"p4_8"},
            {src:"images/p4_9.png", id:"p4_9"},
            {src:"images/p5_0.jpg", id:"p5_0"},
            {src:"images/p5_1.png", id:"p5_1"},
            {src:"images/p5_2.png", id:"p5_2"},
            {src:"images/p5_3.png", id:"p5_3"},
            {src:"images/p5_4.png", id:"p5_4"},
            {src:"images/p5_5.png", id:"p5_5"},
            {src:"images/p6_0.png", id:"p6_0"},
            {src:"images/p6_1.png", id:"p6_1"},
            {src:"images/p6_2.png", id:"p6_2"},
            {src:"images/p6_3.png", id:"p6_3"},
            {src:"images/p6_4.png", id:"p6_4"},
            {src:"images/p6_5.png", id:"p6_5"},
            {src:"images/p6_6.png", id:"p6_6"},
            {src:"images/p6_7.png", id:"p6_7"},
            {src:"images/p6_8.png", id:"p6_8"},
            {src:"images/p7_0.png", id:"p7_0"},
            {src:"images/p7_3.png", id:"p7_3"},
            {src:"images/p7_4.png", id:"p7_4"},
            {src:"images/p7_5.png", id:"p7_5"},
            {src:"images/p7_6.png", id:"p7_6"},
            {src:"images/p7_8.png", id:"p7_8"},
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



    (lib.bgg = function() {
        this.initialize(img.bgg);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1439);


    (lib.bgg1 = function() {
        this.initialize(img.bgg1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,376);


    (lib.bgg2 = function() {
        this.initialize(img.bgg2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,491);


    (lib.hand = function() {
        this.initialize(img.hand);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,197,233);


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


    (lib.logo = function() {
        this.initialize(img.logo);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.music_bg = function() {
        this.initialize(img.music_bg);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,69,59);


    (lib.music_Icon = function() {
        this.initialize(img.music_Icon);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,21,36);


    (lib.p1_0 = function() {
        this.initialize(img.p1_0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,30,29);


    (lib.p1_1 = function() {
        this.initialize(img.p1_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,80,271);


    (lib.p1_10 = function() {
        this.initialize(img.p1_10);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,281,625);


    (lib.p1_11 = function() {
        this.initialize(img.p1_11);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,234);


    (lib.p1_12 = function() {
        this.initialize(img.p1_12);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,159,40);


    (lib.p1_13 = function() {
        this.initialize(img.p1_13);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,158,38);


    (lib.p1_14 = function() {
        this.initialize(img.p1_14);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,414,29);


    (lib.p1_2 = function() {
        this.initialize(img.p1_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,62,213);


    (lib.p1_3 = function() {
        this.initialize(img.p1_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,70,49);


    (lib.p1_4 = function() {
        this.initialize(img.p1_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,47,54);


    (lib.p1_5 = function() {
        this.initialize(img.p1_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,83,85);


    (lib.p1_6 = function() {
        this.initialize(img.p1_6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,105);


    (lib.p1_7 = function() {
        this.initialize(img.p1_7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,111,56);


    (lib.p1_8 = function() {
        this.initialize(img.p1_8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,90,83);


    (lib.p1_9 = function() {
        this.initialize(img.p1_9);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,70,48);


    (lib.p2_0 = function() {
        this.initialize(img.p2_0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1048);


    (lib.p2_1 = function() {
        this.initialize(img.p2_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.p2_2 = function() {
        this.initialize(img.p2_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,101,391);


    (lib.p2_3 = function() {
        this.initialize(img.p2_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,12,333);


    (lib.p2_4 = function() {
        this.initialize(img.p2_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,12,333);


    (lib.p2_5 = function() {
        this.initialize(img.p2_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,23,245);


    (lib.p2_6 = function() {
        this.initialize(img.p2_6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,34,314);


    (lib.p2_7 = function() {
        this.initialize(img.p2_7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,31,314);


    (lib.p2_8 = function() {
        this.initialize(img.p2_8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,90,90);


    (lib.p2_9 = function() {
        this.initialize(img.p2_9);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,348,997);


    (lib.p3_0 = function() {
        this.initialize(img.p3_0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1048);


    (lib.p3_1 = function() {
        this.initialize(img.p3_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,351,233);


    (lib.p3_10 = function() {
        this.initialize(img.p3_10);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,278,994);


    (lib.p3_2 = function() {
        this.initialize(img.p3_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,502,345);


    (lib.p3_3 = function() {
        this.initialize(img.p3_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,624);


    (lib.p3_4 = function() {
        this.initialize(img.p3_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.p3_5 = function() {
        this.initialize(img.p3_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,103,337);


    (lib.p3_6 = function() {
        this.initialize(img.p3_6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,48,466);


    (lib.p3_7 = function() {
        this.initialize(img.p3_7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,57,466);


    (lib.p3_8 = function() {
        this.initialize(img.p3_8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,32,443);


    (lib.p3_9 = function() {
        this.initialize(img.p3_9);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,34,443);


    (lib.p4_0 = function() {
        this.initialize(img.p4_0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1048);


    (lib.p4_1 = function() {
        this.initialize(img.p4_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,392);


    (lib.p4_10 = function() {
        this.initialize(img.p4_10);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,47,553);


    (lib.p4_11 = function() {
        this.initialize(img.p4_11);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,57,553);


    (lib.p4_12 = function() {
        this.initialize(img.p4_12);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,170,1012);


    (lib.p4_2 = function() {
        this.initialize(img.p4_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,591,164);


    (lib.p4_3 = function() {
        this.initialize(img.p4_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,373,129);


    (lib.p4_4 = function() {
        this.initialize(img.p4_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,597,212);


    (lib.p4_5 = function() {
        this.initialize(img.p4_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,255,52);


    (lib.p4_6 = function() {
        this.initialize(img.p4_6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,261,131);


    (lib.p4_7 = function() {
        this.initialize(img.p4_7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,594,196);


    (lib.p4_8 = function() {
        this.initialize(img.p4_8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.p4_9 = function() {
        this.initialize(img.p4_9);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,120,399);


    (lib.p5_0 = function() {
        this.initialize(img.p5_0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1048);


    (lib.p5_1 = function() {
        this.initialize(img.p5_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.p5_2 = function() {
        this.initialize(img.p5_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,119,386);


    (lib.p5_3 = function() {
        this.initialize(img.p5_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,47,448);


    (lib.p5_4 = function() {
        this.initialize(img.p5_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,56,448);


    (lib.p5_5 = function() {
        this.initialize(img.p5_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,248,1004);


    (lib.p6_0 = function() {
        this.initialize(img.p6_0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,303,692);


    (lib.p6_1 = function() {
        this.initialize(img.p6_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,330,596);


    (lib.p6_2 = function() {
        this.initialize(img.p6_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,262,57);


    (lib.p6_3 = function() {
        this.initialize(img.p6_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,262,57);


    (lib.p6_4 = function() {
        this.initialize(img.p6_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,162,110);


    (lib.p6_5 = function() {
        this.initialize(img.p6_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,270,15);


    (lib.p6_6 = function() {
        this.initialize(img.p6_6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,307,38);


    (lib.p6_7 = function() {
        this.initialize(img.p6_7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,307,45);


    (lib.p6_8 = function() {
        this.initialize(img.p6_8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,266,1002);


    (lib.p7_0 = function() {
        this.initialize(img.p7_0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,181,412);


    (lib.p7_3 = function() {
        this.initialize(img.p7_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,162,110);


    (lib.p7_4 = function() {
        this.initialize(img.p7_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,517,56);


    (lib.p7_5 = function() {
        this.initialize(img.p7_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,34,94);


    (lib.p7_6 = function() {
        this.initialize(img.p7_6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,381,86);


    (lib.p7_8 = function() {
        this.initialize(img.p7_8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,232,31);


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


    (lib.Symbol78 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#343434").s().p("Ah5B6Qg0gyAAhIQAAhHA0gyQAyg0BHAAQBIAAAyA0QA0AyAABHQAABIg0AyQgyA0hIAAQhHAAgyg0gAhKhKQgfAgAAAqQAAAsAfAfQAgAfAqAAQAsAAAfgfQAfgfAAgsQAAgqgfggQgfgfgsAAQgqAAggAfg");
        this.shape.setTransform(17.4,17.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,34.8,34.8);


    (lib.Symbol77 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p6_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,330,596);


    (lib.Symbol76 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p6_0();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,303,692);


    (lib.Symbol75 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p7_0();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,181,412);


    (lib.Symbol68 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.hand();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,197,233);


    (lib.Symbol65 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p7_8();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,232,31);


    (lib.Symbol64 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p7_6();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,381,86);


    (lib.Symbol62 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p7_4();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,517,56);


    (lib.Symbol61 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p7_3();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,162,110);


    (lib.Symbol60 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p6_2();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,262,57);


    (lib.Symbol59 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p6_5();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,270,15);


    (lib.Symbol58 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p6_3();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,262,57);


    (lib.Symbol57 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p6_7();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,307,45);


    (lib.Symbol56 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p6_6();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,307,38);


    (lib.Symbol55 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p6_4();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,162,110);


    (lib.Symbol52 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p5_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.Symbol51 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p5_4();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,56,448);


    (lib.Symbol50 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p5_3();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,47,448);


    (lib.Symbol49 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p5_2();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,119,386);


    (lib.Symbol48 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p4_8();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.Symbol47 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p4_9();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,120,399);


    (lib.Symbol46 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p4_10();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,47,553);


    (lib.Symbol45 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p4_11();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,57,553);


    (lib.Symbol44 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p4_6();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,261,131);


    (lib.Symbol43 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p4_5();

        this.instance_1 = new lib.p4_4();
        this.instance_1.setTransform(272,100);

        this.instance_2 = new lib.p4_3();
        this.instance_2.setTransform(532,8);

        this.instance_3 = new lib.p4_2();
        this.instance_3.setTransform(154,268);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,905,432);


    (lib.Symbol42 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p3_0();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1048);


    (lib.Symbol41 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p3_4();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.Symbol40 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p3_7();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,57,466);


    (lib.Symbol39 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p3_9();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,34,443);


    (lib.Symbol38 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p3_8();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,32,443);


    (lib.Symbol37 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p3_6();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,48,466);


    (lib.Symbol36 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p3_5();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,103,337);


    (lib.Symbol34 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p3_3();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,624);


    (lib.Symbol33 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p3_2();
        this.instance.setTransform(222,164);

        this.instance_1 = new lib.p3_1();

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,724,509);


    (lib.Symbol32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p2_8();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,90,90);


    (lib.Symbol31 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p2_3();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,12,333);


    (lib.Symbol30 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p2_7();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,31,314);


    (lib.Symbol29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p2_6();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,34,314);


    (lib.Symbol28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p2_5();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,23,245);


    (lib.Symbol27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p2_4();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,12,333);


    (lib.Symbol26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p2_2();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,101,391);


    (lib.Symbol25 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p2_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.Symbol24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_13();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,158,38);


    (lib.Symbol23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_14();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,414,29);


    (lib.Symbol22 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_12();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,159,40);


    (lib.Symbol21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_11();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,234);


    (lib.Symbol18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.l_bg();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1048);


    (lib.Symbol16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_7();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,111,56);


    (lib.Symbol14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_9();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,70,48);


    (lib.Symbol12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_8();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,90,83);


    (lib.Symbol11a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.y2();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,84,89);


    (lib.Symbol10a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.y3();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,107,188);


    (lib.Symbol10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,80,271);


    (lib.Symbol9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_2();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,62,213);


    (lib.Symbol8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_0();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,30,29);


    (lib.Symbol7a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.y1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,58,110);


    (lib.Symbol7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_3();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,70,49);


    (lib.Symbol6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_4();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,47,54);


    (lib.Symbol5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_5();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,83,85);


    (lib.Symbol4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.logo();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,103,71);


    (lib.Symbol3a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.y0();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,385,463);


    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.l0_4();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,222);


    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.p1_6();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,105);


    (lib.music_mc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AluFbIAAq1ILdAAIAAK1g");
        this.shape.setTransform(33.9,29.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#C7000A").ss(2,1,1).p("AhohoIDRDR");
        this.shape_1.setTransform(34.5,28);
        this.shape_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1));

        // Layer 1
        this.instance = new lib.music_Icon();
        this.instance.setTransform(24,9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

        // Layer 2
        this.instance_1 = new lib.music_bg();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.9,-5.4,73.5,69.5);


    (lib.mask_mc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 7
        this.instance = new lib.bgg1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 6
        this.instance_1 = new lib.bgg();
        this.instance_1.setTransform(0,3253);

        this.instance_2 = new lib.bgg();
        this.instance_2.setTransform(0,1814);

        this.instance_3 = new lib.bgg2();
        this.instance_3.setTransform(0,4691);

        this.instance_4 = new lib.bgg();
        this.instance_4.setTransform(0,375);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,5182);


    (lib.holder = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;


    (lib.Symbol74 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol75();
        this.instance.setTransform(70.5,408.8,1,1,0,0,0,70.5,408.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1},24).to({rotation:0},25).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,181,412);


    (lib.Symbol67 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_20 = function() {
            this.gotoAndPlay(2);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

        // Layer 1
        this.instance = new lib.Symbol68();
        this.instance.setTransform(98.5,116.5,1,1,0,0,0,98.5,116.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:106.5,y:108.5},9).to({x:98.5,y:116.5},10).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;


    (lib.Symbol54 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol77();
        this.instance.setTransform(340,298,1,1,0,0,0,330,298);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:330.1,regY:298.1,rotation:1,x:340.1,y:298.1},24).to({regX:330,regY:298,rotation:0,x:340,y:298},25).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(10,0,330,596);


    (lib.Symbol53 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol76();
        this.instance.setTransform(-12,346,1,1,0,0,0,0,346);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,rotation:-1},24).to({regX:0,rotation:0},25).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12,0,303,692);


    (lib.Symbol20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 2
        this.instance = new lib.Symbol78();
        this.instance.setTransform(17.5,17,1,1,0,0,0,17.5,17);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.9,scaleX:1.98,scaleY:1.98,x:17.6,y:16.9,alpha:0.012},20).wait(1));

        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#343434").s().p("Ah5B6Qg0gyAAhIQAAhHA0gyQAyg0BHAAQBIAAAyA0QA0AyAABHQAABIg0AyQgyA0hIAAQhHAAgyg0gAhKhKQgfAgAAAqQAAAsAfAfQAgAfAqAAQAsAAAfgfQAfgfAAgsQAAgqgfggQgfgfgsAAQgqAAggAfg");
        this.shape.setTransform(17.4,17.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,35,34.8);


    (lib.Symbol19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 2
        this.instance = new lib.Symbol20();
        this.instance.setTransform(32.2,16.7,1,1,0,0,0,17.5,17);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 1
        this.instance_1 = new lib.l0_2();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-0.3,51,99.4);


    (lib.Symbol15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol16();
        this.instance.setTransform(9.5,51.1,1,1,0,0,0,9.5,51.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.5,x:9.6},34).to({rotation:0,x:9.5},35).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,111,56);


    (lib.Symbol13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol14();
        this.instance.setTransform(35,24,1,1,0,0,0,35,24);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,rotation:5.7,x:0,y:0},34).to({regX:35,regY:24,rotation:0,x:35,y:24},35).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,70,48);


    (lib.Symbol12a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol11a();
        this.instance.setTransform(42,44.5,1,1,0,0,0,42,44.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,84,89);


    (lib.Symbol11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol12();

        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.7},34).to({rotation:0},35).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,90,83);


    (lib.Symbol9a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol10a();
        this.instance.setTransform(53.5,94,1,1,0,0,0,53.5,94);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:53.6,rotation:90,x:-370.5,y:1546.5},169).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,107,188);


    (lib.Symbol8a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_313 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(313).call(this.frame_313).wait(8));

        // Symbol 9
        this.instance = new lib.Symbol9a();
        this.instance.setTransform(509.6,242,1,1,0,0,0,53.5,94);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(254).to({_off:false},0).wait(67));

        // Symbol 9
        this.instance_1 = new lib.Symbol9a();
        this.instance_1.setTransform(-74.5,134,1,1,0,0,0,53.5,94);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(117).to({_off:false},0).wait(204));

        // Symbol 9
        this.instance_2 = new lib.Symbol9a();
        this.instance_2.setTransform(277.6,54,1,1,0,0,0,53.5,94);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(321));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(224.1,-40,107,188);


    (lib.Symbol6a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol7a();
        this.instance.setTransform(29,55,1,1,0,0,0,29,55);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:29.1,regY:55.1,rotation:105,x:-791.3,y:1491.4},283).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,58,110);


    (lib.Symbol2a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol3a();
        this.instance.setTransform(192.5,231.5,1,1,0,0,0,192.5,231.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30,x:-751.8,y:1655.9},45).to({_off:true},1).wait(116));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,385,463);


    (lib.Symbol1a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_157 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(157).call(this.frame_157).wait(5));

        // Symbol 2
        this.instance = new lib.Symbol2a();
        this.instance.setTransform(384.6,694.5,1,1,0,0,0,192.5,231.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).wait(49));

        // Symbol 2
        this.instance_1 = new lib.Symbol2a();
        this.instance_1.setTransform(20.5,163.5,1,1,0,0,0,192.5,231.5);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).wait(105));

        // Symbol 2
        this.instance_2 = new lib.Symbol2a();
        this.instance_2.setTransform(192.5,231.5,1,1,0,0,0,192.5,231.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(162));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,385,463);


    (lib.Tween2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol12a();
        this.instance.setTransform(0,0,1,1,0,0,0,42,44.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42,-44.5,84,89);


    (lib.Symbol79 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_74 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(9));

        // Layer 3
        this.instance = new lib.Symbol20();
        this.instance.setTransform(49.5,968.9,0.1,0.1,0,0,0,18,17.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(1).to({regX:17.4,regY:17.9,scaleX:0.1,scaleY:0.1,y:969},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:49.4,y:968.9},0).wait(1).to({scaleX:0.15,scaleY:0.15,y:969},0).wait(1).to({scaleX:0.18,scaleY:0.18},0).wait(1).to({scaleX:0.23,scaleY:0.23},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:49.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:969.1},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:49.2},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:49.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:969.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:49},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:969.3},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:48.9},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:17.5,regY:17,scaleX:1,scaleY:1,x:49.5,y:968.9},0).wait(15));

        // Layer 2
        this.instance_1 = new lib.Symbol20();
        this.instance_1.setTransform(49.5,17,0.1,0.1,0,0,0,18,17);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:17.4,regY:17.9,scaleX:0.1,scaleY:0.1,y:17.1},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:49.4},0).wait(1).to({scaleX:0.15,scaleY:0.15,y:17.2},0).wait(1).to({scaleX:0.18,scaleY:0.18,y:17.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,y:17.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:49.3,y:17.3},0).wait(1).to({scaleX:0.36,scaleY:0.36},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:49.2,y:17.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:17.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:49.1,y:17.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:17.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:49},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:17.8},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:48.9,y:17.9},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:17.5,regY:17,scaleX:1,scaleY:1,x:49.5,y:17},0).wait(62));

        // Layer 4 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_18 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_19 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_20 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_21 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_22 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_23 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_24 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_25 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_26 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_27 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_28 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_29 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_30 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_31 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_32 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_33 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_34 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_35 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_36 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_37 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_38 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_39 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_40 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_41 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_42 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_43 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_44 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_45 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_46 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_47 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_48 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_49 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_50 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_51 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_52 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_53 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_54 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:80.1,y:-507}).wait(1).to({graphics:mask_graphics_19,x:80.1,y:-506.1}).wait(1).to({graphics:mask_graphics_20,x:80.1,y:-503}).wait(1).to({graphics:mask_graphics_21,x:80.1,y:-497.7}).wait(1).to({graphics:mask_graphics_22,x:80.1,y:-489.9}).wait(1).to({graphics:mask_graphics_23,x:80.1,y:-479.4}).wait(1).to({graphics:mask_graphics_24,x:80.1,y:-465.8}).wait(1).to({graphics:mask_graphics_25,x:80.1,y:-448.8}).wait(1).to({graphics:mask_graphics_26,x:80.1,y:-428.1}).wait(1).to({graphics:mask_graphics_27,x:80.1,y:-403.3}).wait(1).to({graphics:mask_graphics_28,x:80.1,y:-374}).wait(1).to({graphics:mask_graphics_29,x:80.1,y:-339.8}).wait(1).to({graphics:mask_graphics_30,x:80.1,y:-300.5}).wait(1).to({graphics:mask_graphics_31,x:80.1,y:-255.7}).wait(1).to({graphics:mask_graphics_32,x:80.1,y:-205.7}).wait(1).to({graphics:mask_graphics_33,x:80.1,y:-150.9}).wait(1).to({graphics:mask_graphics_34,x:80.1,y:-92.4}).wait(1).to({graphics:mask_graphics_35,x:80.1,y:-31.6}).wait(1).to({graphics:mask_graphics_36,x:80.1,y:29.6}).wait(1).to({graphics:mask_graphics_37,x:80.1,y:89.3}).wait(1).to({graphics:mask_graphics_38,x:80.1,y:146}).wait(1).to({graphics:mask_graphics_39,x:80.1,y:198.5}).wait(1).to({graphics:mask_graphics_40,x:80.1,y:246.2}).wait(1).to({graphics:mask_graphics_41,x:80.1,y:288.8}).wait(1).to({graphics:mask_graphics_42,x:80.1,y:326.4}).wait(1).to({graphics:mask_graphics_43,x:80.1,y:359.2}).wait(1).to({graphics:mask_graphics_44,x:80.1,y:387.6}).wait(1).to({graphics:mask_graphics_45,x:80.1,y:412}).wait(1).to({graphics:mask_graphics_46,x:80.1,y:432.6}).wait(1).to({graphics:mask_graphics_47,x:80.1,y:449.9}).wait(1).to({graphics:mask_graphics_48,x:80.1,y:464.1}).wait(1).to({graphics:mask_graphics_49,x:80.1,y:475.6}).wait(1).to({graphics:mask_graphics_50,x:80.1,y:484.5}).wait(1).to({graphics:mask_graphics_51,x:80.1,y:491.1}).wait(1).to({graphics:mask_graphics_52,x:80.1,y:495.6}).wait(1).to({graphics:mask_graphics_53,x:80.1,y:498.2}).wait(1).to({graphics:mask_graphics_54,x:80.1,y:499.1}).wait(29));

        // Layer 1
        this.instance_2 = new lib.p6_8();
        this.instance_2.setTransform(0,18);
        this.instance_2._off = true;

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(65));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(47.7,15.3,3.5,3.5);


    (lib.Symbol72 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_68 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(68).call(this.frame_68).wait(10));

        // Layer 3
        this.instance = new lib.Symbol20();
        this.instance.setTransform(147.6,967.7,0.1,0.1,0,0,0,17.5,17);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(1).to({regX:17.4,regY:17.9,scaleX:0.1,scaleY:0.1,x:147.5},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.13,scaleY:0.13,y:967.8},0).wait(1).to({scaleX:0.16,scaleY:0.16},0).wait(1).to({scaleX:0.19,scaleY:0.19},0).wait(1).to({scaleX:0.24,scaleY:0.24,y:967.9},0).wait(1).to({scaleX:0.3,scaleY:0.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:968},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:968.1},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:968.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:968.3},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:968.4},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:968.5},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:147.4},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:17.5,regY:17,scaleX:1,scaleY:1,x:147.6,y:967.7},0).wait(12));

        // Layer 2
        this.instance_1 = new lib.Symbol20();
        this.instance_1.setTransform(148.6,17,0.1,0.1,0,0,0,17.5,17);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:17.4,regY:17.9,scaleX:0.1,scaleY:0.1,x:148.5,y:17.1},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.13,scaleY:0.13},0).wait(1).to({scaleX:0.16,scaleY:0.16},0).wait(1).to({scaleX:0.19,scaleY:0.19,y:17.2},0).wait(1).to({scaleX:0.24,scaleY:0.24},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:17.3},0).wait(1).to({scaleX:0.37,scaleY:0.37},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:17.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:17.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:17.6},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:17.7},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:17.8},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:17.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:148.4},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:17.5,regY:17,scaleX:1,scaleY:1,x:148.6,y:17},0).wait(57));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_17 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_18 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_19 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_20 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_21 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_22 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_23 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_24 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_25 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_26 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_27 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_28 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_29 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_30 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_31 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_32 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_33 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_34 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_35 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_36 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_37 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_38 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_39 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_40 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_41 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_42 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_43 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_44 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_45 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_46 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_47 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_48 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_49 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_50 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_51 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_52 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_53 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:171.1,y:-498}).wait(1).to({graphics:mask_graphics_18,x:171.1,y:-496.9}).wait(1).to({graphics:mask_graphics_19,x:171.1,y:-493.4}).wait(1).to({graphics:mask_graphics_20,x:171.1,y:-487.4}).wait(1).to({graphics:mask_graphics_21,x:171.1,y:-478.5}).wait(1).to({graphics:mask_graphics_22,x:171.1,y:-466.7}).wait(1).to({graphics:mask_graphics_23,x:171.1,y:-451.6}).wait(1).to({graphics:mask_graphics_24,x:171.1,y:-432.9}).wait(1).to({graphics:mask_graphics_25,x:171.1,y:-410.5}).wait(1).to({graphics:mask_graphics_26,x:171.1,y:-384}).wait(1).to({graphics:mask_graphics_27,x:171.1,y:-353.3}).wait(1).to({graphics:mask_graphics_28,x:171.1,y:-318.2}).wait(1).to({graphics:mask_graphics_29,x:171.1,y:-278.6}).wait(1).to({graphics:mask_graphics_30,x:171.1,y:-234.7}).wait(1).to({graphics:mask_graphics_31,x:171.1,y:-186.8}).wait(1).to({graphics:mask_graphics_32,x:171.1,y:-135.5}).wait(1).to({graphics:mask_graphics_33,x:171.1,y:-81.7}).wait(1).to({graphics:mask_graphics_34,x:171.1,y:-26.3}).wait(1).to({graphics:mask_graphics_35,x:171.1,y:29.2}).wait(1).to({graphics:mask_graphics_36,x:171.1,y:83.8}).wait(1).to({graphics:mask_graphics_37,x:171.1,y:136.3}).wait(1).to({graphics:mask_graphics_38,x:171.1,y:185.7}).wait(1).to({graphics:mask_graphics_39,x:171.1,y:231.6}).wait(1).to({graphics:mask_graphics_40,x:171.1,y:273.5}).wait(1).to({graphics:mask_graphics_41,x:171.1,y:311.3}).wait(1).to({graphics:mask_graphics_42,x:171.1,y:344.9}).wait(1).to({graphics:mask_graphics_43,x:171.1,y:374.5}).wait(1).to({graphics:mask_graphics_44,x:171.1,y:400.3}).wait(1).to({graphics:mask_graphics_45,x:171.1,y:422.5}).wait(1).to({graphics:mask_graphics_46,x:171.1,y:441.3}).wait(1).to({graphics:mask_graphics_47,x:171.1,y:456.9}).wait(1).to({graphics:mask_graphics_48,x:171.1,y:469.5}).wait(1).to({graphics:mask_graphics_49,x:171.1,y:479.5}).wait(1).to({graphics:mask_graphics_50,x:171.1,y:487}).wait(1).to({graphics:mask_graphics_51,x:171.1,y:492.1}).wait(1).to({graphics:mask_graphics_52,x:171.1,y:495}).wait(1).to({graphics:mask_graphics_53,x:171.1,y:496}).wait(25));

        // Layer 1
        this.instance_2 = new lib.p5_5();
        this.instance_2.setTransform(0,15);
        this.instance_2._off = true;

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(61));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(146.8,15.3,3.5,3.5);


    (lib.Symbol71 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_73 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(5));

        // Symbol 20
        this.instance = new lib.Symbol20();
        this.instance.setTransform(18.4,975.5,0.1,0.1,0,0,0,18,17.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).wait(1).to({regX:17.4,regY:17.9,scaleX:0.1,scaleY:0.1,x:18.3},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.13,scaleY:0.13},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:18.2},0).wait(1).to({scaleX:0.2,scaleY:0.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,y:975.6},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:18.1},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:975.7},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:18},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:17.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:975.8},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:17.8},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:975.9},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:17.5,regY:17,scaleX:1,scaleY:1,x:18.4,y:975.5},0).wait(10));

        // Symbol 20
        this.instance_1 = new lib.Symbol20();
        this.instance_1.setTransform(17.5,17,0.1,0.1,0,0,0,17.5,17);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:17.4,regY:17.9,scaleX:0.1,scaleY:0.1,y:17.1},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.13,scaleY:0.13},0).wait(1).to({scaleX:0.16,scaleY:0.16},0).wait(1).to({scaleX:0.19,scaleY:0.19,y:17.2},0).wait(1).to({scaleX:0.24,scaleY:0.24},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:17.3},0).wait(1).to({scaleX:0.38,scaleY:0.38},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:17.4},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:17.4,y:17.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:17.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:17.7},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:17.8},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:17.9},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:17.5,regY:17,scaleX:1,scaleY:1,x:17.5,y:17},0).wait(58));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_15 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_16 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_17 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_18 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_19 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_20 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_21 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_22 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_23 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_24 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_25 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_26 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_27 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_28 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_29 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_30 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_31 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_32 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_33 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_34 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_35 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_36 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_37 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_38 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_39 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_40 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_41 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_42 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_43 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_44 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_45 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_46 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_47 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_48 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_49 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_50 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_51 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_52 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_53 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:16.1,y:-517}).wait(1).to({graphics:mask_graphics_16,x:16.1,y:-516.1}).wait(1).to({graphics:mask_graphics_17,x:16.1,y:-513.2}).wait(1).to({graphics:mask_graphics_18,x:16.1,y:-508.3}).wait(1).to({graphics:mask_graphics_19,x:16.1,y:-501}).wait(1).to({graphics:mask_graphics_20,x:16.1,y:-491.4}).wait(1).to({graphics:mask_graphics_21,x:16.1,y:-479}).wait(1).to({graphics:mask_graphics_22,x:16.1,y:-463.9}).wait(1).to({graphics:mask_graphics_23,x:16.1,y:-445.7}).wait(1).to({graphics:mask_graphics_24,x:16.1,y:-424.2}).wait(1).to({graphics:mask_graphics_25,x:16.1,y:-399.3}).wait(1).to({graphics:mask_graphics_26,x:16.1,y:-370.6}).wait(1).to({graphics:mask_graphics_27,x:16.1,y:-338.1}).wait(1).to({graphics:mask_graphics_28,x:16.1,y:-301.7}).wait(1).to({graphics:mask_graphics_29,x:16.1,y:-261.3}).wait(1).to({graphics:mask_graphics_30,x:16.1,y:-217}).wait(1).to({graphics:mask_graphics_31,x:16.1,y:-169.4}).wait(1).to({graphics:mask_graphics_32,x:16.1,y:-118.8}).wait(1).to({graphics:mask_graphics_33,x:16.1,y:-66.1}).wait(1).to({graphics:mask_graphics_34,x:16.1,y:-12.3}).wait(1).to({graphics:mask_graphics_35,x:16.1,y:41.6}).wait(1).to({graphics:mask_graphics_36,x:16.1,y:94.4}).wait(1).to({graphics:mask_graphics_37,x:16.1,y:145.1}).wait(1).to({graphics:mask_graphics_38,x:16.1,y:193}).wait(1).to({graphics:mask_graphics_39,x:16.1,y:237.4}).wait(1).to({graphics:mask_graphics_40,x:16.1,y:278.1}).wait(1).to({graphics:mask_graphics_41,x:16.1,y:314.8}).wait(1).to({graphics:mask_graphics_42,x:16.1,y:347.5}).wait(1).to({graphics:mask_graphics_43,x:16.1,y:376.4}).wait(1).to({graphics:mask_graphics_44,x:16.1,y:401.5}).wait(1).to({graphics:mask_graphics_45,x:16.1,y:423.1}).wait(1).to({graphics:mask_graphics_46,x:16.1,y:441.4}).wait(1).to({graphics:mask_graphics_47,x:16.1,y:456.7}).wait(1).to({graphics:mask_graphics_48,x:16.1,y:469.1}).wait(1).to({graphics:mask_graphics_49,x:16.1,y:478.8}).wait(1).to({graphics:mask_graphics_50,x:16.1,y:486.1}).wait(1).to({graphics:mask_graphics_51,x:16.1,y:491.1}).wait(1).to({graphics:mask_graphics_52,x:16.1,y:494}).wait(1).to({graphics:mask_graphics_53,x:16.1,y:495}).wait(25));

        // p4_12.png
        this.instance_2 = new lib.p4_12();
        this.instance_2.setTransform(0,8);
        this.instance_2._off = true;

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(63));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(15.8,15.3,3.5,3.5);


    (lib.Symbol70 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_88 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(88).call(this.frame_88).wait(3));

        // Layer 3
        this.instance = new lib.Symbol20();
        this.instance.setTransform(232.9,968.7,0.1,0.1,0,0,0,18,17);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({regX:17.5,scaleX:1,scaleY:1},19,cjs.Ease.get(1)).wait(11));

        // Layer 2
        this.instance_1 = new lib.Symbol20();
        this.instance_1.setTransform(232,17,0.1,0.1,0,0,0,18,17);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:17.5,scaleX:1,scaleY:1},22,cjs.Ease.get(1)).wait(69));

        // Layer 4 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_22 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_23 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_24 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_25 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_26 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_27 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_28 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_29 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_30 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_31 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_32 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_33 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_34 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_35 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_36 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_37 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_38 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_39 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_40 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_41 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_42 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_43 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_44 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_45 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_46 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_47 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_48 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_49 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_50 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_51 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_52 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_53 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_54 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_55 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_56 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_57 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_58 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_59 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_60 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_61 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_62 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_63 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_64 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_65 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_66 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_67 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_68 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_69 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_70 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_71 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_72 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_graphics_22,x:208.2,y:-502}).wait(1).to({graphics:mask_graphics_23,x:208.2,y:-501.6}).wait(1).to({graphics:mask_graphics_24,x:208.2,y:-500.3}).wait(1).to({graphics:mask_graphics_25,x:208.2,y:-498.1}).wait(1).to({graphics:mask_graphics_26,x:208.2,y:-494.8}).wait(1).to({graphics:mask_graphics_27,x:208.2,y:-490.5}).wait(1).to({graphics:mask_graphics_28,x:208.2,y:-485}).wait(1).to({graphics:mask_graphics_29,x:208.2,y:-478.3}).wait(1).to({graphics:mask_graphics_30,x:208.2,y:-470.2}).wait(1).to({graphics:mask_graphics_31,x:208.2,y:-460.6}).wait(1).to({graphics:mask_graphics_32,x:208.2,y:-449.5}).wait(1).to({graphics:mask_graphics_33,x:208.2,y:-436.6}).wait(1).to({graphics:mask_graphics_34,x:208.2,y:-422}).wait(1).to({graphics:mask_graphics_35,x:208.2,y:-405.3}).wait(1).to({graphics:mask_graphics_36,x:208.2,y:-386.4}).wait(1).to({graphics:mask_graphics_37,x:208.2,y:-365.1}).wait(1).to({graphics:mask_graphics_38,x:208.2,y:-341.4}).wait(1).to({graphics:mask_graphics_39,x:208.2,y:-314.9}).wait(1).to({graphics:mask_graphics_40,x:208.2,y:-285.5}).wait(1).to({graphics:mask_graphics_41,x:208.2,y:-253.1}).wait(1).to({graphics:mask_graphics_42,x:208.2,y:-217.6}).wait(1).to({graphics:mask_graphics_43,x:208.2,y:-179.2}).wait(1).to({graphics:mask_graphics_44,x:208.2,y:-137.9}).wait(1).to({graphics:mask_graphics_45,x:208.2,y:-94.3}).wait(1).to({graphics:mask_graphics_46,x:208.2,y:-48.8}).wait(1).to({graphics:mask_graphics_47,x:208.2,y:-2.2}).wait(1).to({graphics:mask_graphics_48,x:208.2,y:44.5}).wait(1).to({graphics:mask_graphics_49,x:208.2,y:90.4}).wait(1).to({graphics:mask_graphics_50,x:208.2,y:134.7}).wait(1).to({graphics:mask_graphics_51,x:208.2,y:176.7}).wait(1).to({graphics:mask_graphics_52,x:208.2,y:216.1}).wait(1).to({graphics:mask_graphics_53,x:208.2,y:252.4}).wait(1).to({graphics:mask_graphics_54,x:208.2,y:285.6}).wait(1).to({graphics:mask_graphics_55,x:208.2,y:315.9}).wait(1).to({graphics:mask_graphics_56,x:208.2,y:343.1}).wait(1).to({graphics:mask_graphics_57,x:208.2,y:367.6}).wait(1).to({graphics:mask_graphics_58,x:208.2,y:389.4}).wait(1).to({graphics:mask_graphics_59,x:208.2,y:408.8}).wait(1).to({graphics:mask_graphics_60,x:208.2,y:426}).wait(1).to({graphics:mask_graphics_61,x:208.2,y:441.1}).wait(1).to({graphics:mask_graphics_62,x:208.2,y:454.3}).wait(1).to({graphics:mask_graphics_63,x:208.2,y:465.7}).wait(1).to({graphics:mask_graphics_64,x:208.2,y:475.5}).wait(1).to({graphics:mask_graphics_65,x:208.2,y:483.8}).wait(1).to({graphics:mask_graphics_66,x:208.2,y:490.7}).wait(1).to({graphics:mask_graphics_67,x:208.2,y:496.3}).wait(1).to({graphics:mask_graphics_68,x:208.2,y:500.8}).wait(1).to({graphics:mask_graphics_69,x:208.2,y:504.1}).wait(1).to({graphics:mask_graphics_70,x:208.2,y:506.4}).wait(1).to({graphics:mask_graphics_71,x:208.2,y:507.7}).wait(1).to({graphics:mask_graphics_72,x:208.2,y:508.2}).wait(19));

        // Layer 1
        this.instance_2 = new lib.p2_9();
        this.instance_2.setTransform(0,23);
        this.instance_2._off = true;

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(69));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(230.2,15.3,3.5,3.5);


    (lib.Symbol66 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 2
        this.instance = new lib.Symbol20();
        this.instance.setTransform(17.7,31.5,1,1,0,0,0,17.5,17);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 1
        this.instance_1 = new lib.p7_5();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,35,94);


    (lib.Symbol35 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_72 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(6));

        // Layer 2
        this.instance = new lib.Symbol20();
        this.instance.setTransform(113.5,17,0.1,0.1,0,0,0,18,17);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:17.4,regY:17.9,scaleX:0.1,scaleY:0.1,x:113.4,y:17.1},0).wait(1).to({scaleX:0.12,scaleY:0.12},0).wait(1).to({scaleX:0.14,scaleY:0.14},0).wait(1).to({scaleX:0.18,scaleY:0.18,y:17.2},0).wait(1).to({scaleX:0.23,scaleY:0.23},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:113.3,y:17.3},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:17.4},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:113.2,y:17.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:113.1,y:17.6},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:113,y:17.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:17.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:112.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:17.9},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:17.5,regY:17,scaleX:1,scaleY:1,x:113.5,y:17},0).wait(60));

        // Layer 3
        this.instance_1 = new lib.Symbol20();
        this.instance_1.setTransform(107.4,964.7,0.1,0.1,0,0,0,18,17);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).wait(1).to({regX:17.4,regY:17.9,scaleX:0.1,scaleY:0.1,x:107.3},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.13,scaleY:0.13,y:964.8},0).wait(1).to({scaleX:0.16,scaleY:0.16},0).wait(1).to({scaleX:0.2,scaleY:0.2},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:107.2,y:964.9},0).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:107.1,y:965},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:965.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:107,y:965.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:965.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:106.9,y:965.4},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:106.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:965.5},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:965.6},0).wait(1).to({scaleX:1,scaleY:1,y:965.5},0).wait(1).to({regX:17.5,regY:17,scaleX:1,scaleY:1,x:107.4,y:964.7},0).wait(12));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_16 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_17 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_18 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_19 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_20 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_21 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_22 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_23 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_24 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_25 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_26 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_27 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_28 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_29 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_30 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_31 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_32 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_33 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_34 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_35 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_36 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_37 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_38 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_39 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_40 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_41 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_42 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_43 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_44 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_45 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_46 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_47 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_48 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_49 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_50 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_51 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_52 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_53 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_54 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_55 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");
        var mask_graphics_56 = new cjs.Graphics().p("EglUBSCMAAAikDMBKpAAAMAAACkDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:122,y:-498}).wait(1).to({graphics:mask_graphics_17,x:122,y:-497.2}).wait(1).to({graphics:mask_graphics_18,x:122,y:-494.7}).wait(1).to({graphics:mask_graphics_19,x:122,y:-490.3}).wait(1).to({graphics:mask_graphics_20,x:122,y:-483.8}).wait(1).to({graphics:mask_graphics_21,x:122,y:-475}).wait(1).to({graphics:mask_graphics_22,x:122,y:-463.7}).wait(1).to({graphics:mask_graphics_23,x:122,y:-449.5}).wait(1).to({graphics:mask_graphics_24,x:122,y:-432.3}).wait(1).to({graphics:mask_graphics_25,x:122,y:-411.5}).wait(1).to({graphics:mask_graphics_26,x:122,y:-386.9}).wait(1).to({graphics:mask_graphics_27,x:122,y:-358.2}).wait(1).to({graphics:mask_graphics_28,x:122,y:-324.8}).wait(1).to({graphics:mask_graphics_29,x:122,y:-286.6}).wait(1).to({graphics:mask_graphics_30,x:122,y:-243.5}).wait(1).to({graphics:mask_graphics_31,x:122,y:-195.6}).wait(1).to({graphics:mask_graphics_32,x:122,y:-143.5}).wait(1).to({graphics:mask_graphics_33,x:122,y:-88.3}).wait(1).to({graphics:mask_graphics_34,x:122,y:-31.5}).wait(1).to({graphics:mask_graphics_35,x:122,y:25.4}).wait(1).to({graphics:mask_graphics_36,x:122,y:80.5}).wait(1).to({graphics:mask_graphics_37,x:122,y:132.7}).wait(1).to({graphics:mask_graphics_38,x:122,y:181.1}).wait(1).to({graphics:mask_graphics_39,x:122,y:225.2}).wait(1).to({graphics:mask_graphics_40,x:122,y:265}).wait(1).to({graphics:mask_graphics_41,x:122,y:300.5}).wait(1).to({graphics:mask_graphics_42,x:122,y:332}).wait(1).to({graphics:mask_graphics_43,x:122,y:359.7}).wait(1).to({graphics:mask_graphics_44,x:122,y:384.1}).wait(1).to({graphics:mask_graphics_45,x:122,y:405.3}).wait(1).to({graphics:mask_graphics_46,x:122,y:423.6}).wait(1).to({graphics:mask_graphics_47,x:122,y:439.4}).wait(1).to({graphics:mask_graphics_48,x:122,y:452.9}).wait(1).to({graphics:mask_graphics_49,x:122,y:464.2}).wait(1).to({graphics:mask_graphics_50,x:122,y:473.6}).wait(1).to({graphics:mask_graphics_51,x:122,y:481.2}).wait(1).to({graphics:mask_graphics_52,x:122,y:487.1}).wait(1).to({graphics:mask_graphics_53,x:122,y:491.6}).wait(1).to({graphics:mask_graphics_54,x:122,y:494.6}).wait(1).to({graphics:mask_graphics_55,x:122,y:496.4}).wait(1).to({graphics:mask_graphics_56,x:122,y:497}).wait(22));

        // Layer 1
        this.instance_2 = new lib.p3_10();
        this.instance_2.setTransform(-17,27);
        this.instance_2._off = true;

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(62));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(111.7,15.3,3.5,3.5);


    (lib.Symbol17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol13();
        this.instance.setTransform(210,427,1,1,0,0,0,35,24);

        this.instance_1 = new lib.Symbol11();
        this.instance_1.setTransform(94,507.5,1,1,0,0,0,45,41.5);

        this.instance_2 = new lib.Symbol15();
        this.instance_2.setTransform(217.5,384,1,1,0,0,0,55.5,28);

        this.instance_3 = new lib.p1_10();

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,281,625);


    (lib.Symbol5a = function(mode,startPosition,loop) {
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


    (lib.Symbol4a = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_231 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(231).call(this.frame_231).wait(4));

        // Symbol 5
        this.instance = new lib.Symbol5a();
        this.instance.setTransform(386.1,256.6,1,1,0,0,0,42,44.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).to({_off:true},100).wait(1));

        // Symbol 5
        this.instance_1 = new lib.Symbol5a();
        this.instance_1.setTransform(210.1,84.5,1,1,0,0,0,42,44.5);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).to({_off:true},176).wait(1));

        // Symbol 5
        this.instance_2 = new lib.Symbol5a();
        this.instance_2.setTransform(42,44.5,1,1,0,0,0,42,44.5);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({_off:true},132).wait(1));

        // Symbol 6
        this.instance_3 = new lib.Symbol6a();
        this.instance_3.setTransform(315.1,74,1,1,0,0,0,29,55);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(214));

        // Symbol 6
        this.instance_4 = new lib.Symbol6a();
        this.instance_4.setTransform(197.1,-101,1,1,0,0,0,29,55);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(162).to({_off:false},0).to({_off:true},72).wait(1));

        // Symbol 6
        this.instance_5 = new lib.Symbol6a();
        this.instance_5.setTransform(29,55,1,1,0,0,0,29,55);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},234).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,58,110);


    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // p1_9.png
        this.instance = new lib.Symbol17();
        this.instance.setTransform(0,625,1,1,0,0,0,0,625);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,rotation:-1},49).to({regX:0,rotation:0},50).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,281,625);


    (lib.page6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{"in":30});

        // timeline functions:
        this.frame_95 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(15));

        // Layer 3
        this.instance = new lib.Symbol1a();
        this.instance.setTransform(764.5,-304.5,1,1,0,0,0,192.5,231.5);

        this.instance_1 = new lib.Symbol8a();
        this.instance_1.setTransform(365.5,-234,1,1,0,0,0,53.5,94);

        this.instance_2 = new lib.Symbol4a();
        this.instance_2.setTransform(426,-113,1,1,0,0,0,42,55);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(110));

        // p7_8.png
        this.instance_3 = new lib.Symbol65();
        this.instance_3.setTransform(319,931.5,1,1,0,0,0,116,15.5);
        this.instance_3.alpha = 0.012;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).wait(1).to({y:931.6,alpha:0.014},0).wait(1).to({y:931.8,alpha:0.02},0).wait(1).to({y:932.3,alpha:0.03},0).wait(1).to({y:933,alpha:0.047},0).wait(1).to({y:934,alpha:0.07},0).wait(1).to({y:935.3,alpha:0.1},0).wait(1).to({y:936.9,alpha:0.14},0).wait(1).to({y:939.1,alpha:0.19},0).wait(1).to({y:941.7,alpha:0.252},0).wait(1).to({y:944.8,alpha:0.326},0).wait(1).to({y:948.4,alpha:0.41},0).wait(1).to({y:952.3,alpha:0.501},0).wait(1).to({y:956.1,alpha:0.59},0).wait(1).to({y:959.6,alpha:0.673},0).wait(1).to({y:962.7,alpha:0.745},0).wait(1).to({y:965.3,alpha:0.806},0).wait(1).to({y:967.4,alpha:0.856},0).wait(1).to({y:969.1,alpha:0.896},0).wait(1).to({y:970.4,alpha:0.928},0).wait(1).to({y:971.5,alpha:0.952},0).wait(1).to({y:972.3,alpha:0.971},0).wait(1).to({y:972.8,alpha:0.984},0).wait(1).to({y:973.2,alpha:0.993},0).wait(1).to({y:973.4,alpha:0.998},0).wait(1).to({y:973.5,alpha:1},0).wait(36));

        // p7_6.png
        this.instance_4 = new lib.Symbol64();
        this.instance_4.setTransform(319.5,820.1,1,1,0,0,0,190.5,43);
        this.instance_4.alpha = 0.012;
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).wait(1).to({y:819.9,alpha:0.014},0).wait(1).to({y:819.5,alpha:0.02},0).wait(1).to({y:818.7,alpha:0.03},0).wait(1).to({y:817.5,alpha:0.047},0).wait(1).to({y:815.8,alpha:0.07},0).wait(1).to({y:813.6,alpha:0.1},0).wait(1).to({y:810.7,alpha:0.14},0).wait(1).to({y:807.1,alpha:0.19},0).wait(1).to({y:802.6,alpha:0.252},0).wait(1).to({y:797.2,alpha:0.326},0).wait(1).to({y:791,alpha:0.41},0).wait(1).to({y:784.4,alpha:0.501},0).wait(1).to({y:777.9,alpha:0.59},0).wait(1).to({y:771.8,alpha:0.673},0).wait(1).to({y:766.6,alpha:0.745},0).wait(1).to({y:762.1,alpha:0.806},0).wait(1).to({y:758.5,alpha:0.856},0).wait(1).to({y:755.6,alpha:0.896},0).wait(1).to({y:753.3,alpha:0.928},0).wait(1).to({y:751.5,alpha:0.952},0).wait(1).to({y:750.1,alpha:0.971},0).wait(1).to({y:749.1,alpha:0.984},0).wait(1).to({y:748.5,alpha:0.993},0).wait(1).to({y:748.1,alpha:0.998},0).wait(1).to({y:748,alpha:1},0).wait(36));

        // p7_5.png
        this.instance_5 = new lib.Symbol66();
        this.instance_5.setTransform(319,47,1,1,0,0,0,17,47);
        this.instance_5.alpha = 0.012;
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).wait(1).to({regX:17.6,regY:46,x:319.6,y:46,alpha:0.014},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.501},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:17,regY:47,x:319,y:47,alpha:1},0).wait(55));

        // p7_4.png
        this.instance_6 = new lib.Symbol62();
        this.instance_6.setTransform(320.5,430.1,1,1,0,0,0,258.5,28);
        this.instance_6.alpha = 0.012;
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({_off:false},0).wait(1).to({y:429.9,alpha:0.014},0).wait(1).to({y:429.3,alpha:0.02},0).wait(1).to({y:428.2,alpha:0.03},0).wait(1).to({y:426.6,alpha:0.047},0).wait(1).to({y:424.3,alpha:0.07},0).wait(1).to({y:421.3,alpha:0.1},0).wait(1).to({y:417.4,alpha:0.14},0).wait(1).to({y:412.4,alpha:0.19},0).wait(1).to({y:406.2,alpha:0.252},0).wait(1).to({y:398.9,alpha:0.326},0).wait(1).to({y:390.5,alpha:0.41},0).wait(1).to({y:381.5,alpha:0.501},0).wait(1).to({y:372.6,alpha:0.59},0).wait(1).to({y:364.4,alpha:0.673},0).wait(1).to({y:357.3,alpha:0.745},0).wait(1).to({y:351.3,alpha:0.806},0).wait(1).to({y:346.3,alpha:0.856},0).wait(1).to({y:342.3,alpha:0.896},0).wait(1).to({y:339.2,alpha:0.928},0).wait(1).to({y:336.7,alpha:0.952},0).wait(1).to({y:334.9,alpha:0.971},0).wait(1).to({y:333.5,alpha:0.984},0).wait(1).to({y:332.7,alpha:0.993},0).wait(1).to({y:332.2,alpha:0.998},0).wait(1).to({y:332,alpha:1},0).wait(47));

        // p7_3.png
        this.instance_7 = new lib.Symbol61();
        this.instance_7.setTransform(321,272.1,1,1,0,0,0,81,55);
        this.instance_7.alpha = 0.012;
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({_off:false},0).wait(1).to({y:271.9,alpha:0.014},0).wait(1).to({y:271.3,alpha:0.02},0).wait(1).to({y:270.2,alpha:0.03},0).wait(1).to({y:268.6,alpha:0.047},0).wait(1).to({y:266.3,alpha:0.07},0).wait(1).to({y:263.3,alpha:0.1},0).wait(1).to({y:259.4,alpha:0.14},0).wait(1).to({y:254.4,alpha:0.19},0).wait(1).to({y:248.2,alpha:0.252},0).wait(1).to({y:240.9,alpha:0.326},0).wait(1).to({y:232.5,alpha:0.41},0).wait(1).to({y:223.5,alpha:0.501},0).wait(1).to({y:214.6,alpha:0.59},0).wait(1).to({y:206.4,alpha:0.673},0).wait(1).to({y:199.3,alpha:0.745},0).wait(1).to({y:193.3,alpha:0.806},0).wait(1).to({y:188.3,alpha:0.856},0).wait(1).to({y:184.3,alpha:0.896},0).wait(1).to({y:181.2,alpha:0.928},0).wait(1).to({y:178.7,alpha:0.952},0).wait(1).to({y:176.9,alpha:0.971},0).wait(1).to({y:175.5,alpha:0.984},0).wait(1).to({y:174.7,alpha:0.993},0).wait(1).to({y:174.2,alpha:0.998},0).wait(1).to({y:174,alpha:1},0).wait(55));

        // p7_0.png
        this.instance_8 = new lib.Symbol74();
        this.instance_8.setTransform(549.5,842,1,1,0,0,0,90.5,206);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110));

        // Layer 1
        this.instance_9 = new lib.Symbol18();
        this.instance_9.setTransform(320,524,1,1,0,0,0,320,524);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-536,957,1584);


    (lib.page5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{"in":33});

        // timeline functions:
        this.frame_89 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(7));

        // Layer 3
        this.instance = new lib.Symbol1a();
        this.instance.setTransform(764.5,-304.5,1,1,0,0,0,192.5,231.5);

        this.instance_1 = new lib.Symbol8a();
        this.instance_1.setTransform(365.5,-234,1,1,0,0,0,53.5,94);

        this.instance_2 = new lib.Symbol4a();
        this.instance_2.setTransform(426,-113,1,1,0,0,0,42,55);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(96));

        // p6_2.png
        this.instance_3 = new lib.Symbol60();
        this.instance_3.setTransform(317,678.5,1,1,0,0,0,131,28.5);
        this.instance_3.alpha = 0.012;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).wait(1).to({y:678.1,alpha:0.014},0).wait(1).to({y:676.7,alpha:0.021},0).wait(1).to({y:674.3,alpha:0.035},0).wait(1).to({y:670.8,alpha:0.054},0).wait(1).to({y:665.9,alpha:0.081},0).wait(1).to({y:659.6,alpha:0.116},0).wait(1).to({y:651.6,alpha:0.159},0).wait(1).to({y:642,alpha:0.212},0).wait(1).to({y:630.7,alpha:0.274},0).wait(1).to({y:617.9,alpha:0.344},0).wait(1).to({y:603.9,alpha:0.421},0).wait(1).to({y:589.4,alpha:0.501},0).wait(1).to({y:574.9,alpha:0.58},0).wait(1).to({y:561.2,alpha:0.656},0).wait(1).to({y:548.8,alpha:0.724},0).wait(1).to({y:537.8,alpha:0.784},0).wait(1).to({y:528.3,alpha:0.836},0).wait(1).to({y:520.4,alpha:0.88},0).wait(1).to({y:514,alpha:0.915},0).wait(1).to({y:508.8,alpha:0.943},0).wait(1).to({y:504.8,alpha:0.965},0).wait(1).to({y:501.9,alpha:0.981},0).wait(1).to({y:500,alpha:0.992},0).wait(1).to({y:498.9,alpha:0.998},0).wait(1).to({y:498.5,alpha:1},0).wait(12));

        // p6_5.png
        this.instance_4 = new lib.Symbol59();
        this.instance_4.setTransform(319,636.5,1,1,0,0,0,135,7.5);
        this.instance_4.alpha = 0.012;
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).wait(1).to({y:636.1,alpha:0.014},0).wait(1).to({y:634.7,alpha:0.021},0).wait(1).to({y:632.3,alpha:0.035},0).wait(1).to({y:628.8,alpha:0.054},0).wait(1).to({y:623.9,alpha:0.081},0).wait(1).to({y:617.6,alpha:0.116},0).wait(1).to({y:609.6,alpha:0.159},0).wait(1).to({y:600,alpha:0.212},0).wait(1).to({y:588.7,alpha:0.274},0).wait(1).to({y:575.9,alpha:0.344},0).wait(1).to({y:561.9,alpha:0.421},0).wait(1).to({y:547.4,alpha:0.501},0).wait(1).to({y:532.9,alpha:0.58},0).wait(1).to({y:519.2,alpha:0.656},0).wait(1).to({y:506.8,alpha:0.724},0).wait(1).to({y:495.8,alpha:0.784},0).wait(1).to({y:486.3,alpha:0.836},0).wait(1).to({y:478.4,alpha:0.88},0).wait(1).to({y:472,alpha:0.915},0).wait(1).to({y:466.8,alpha:0.943},0).wait(1).to({y:462.8,alpha:0.965},0).wait(1).to({y:459.9,alpha:0.981},0).wait(1).to({y:458,alpha:0.992},0).wait(1).to({y:456.9,alpha:0.998},0).wait(1).to({y:456.5,alpha:1},0).wait(17));

        // p6_3.png
        this.instance_5 = new lib.Symbol58();
        this.instance_5.setTransform(317,591.5,1,1,0,0,0,131,28.5);
        this.instance_5.alpha = 0.012;
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).wait(1).to({y:591.1,alpha:0.014},0).wait(1).to({y:589.7,alpha:0.021},0).wait(1).to({y:587.3,alpha:0.035},0).wait(1).to({y:583.8,alpha:0.054},0).wait(1).to({y:578.9,alpha:0.081},0).wait(1).to({y:572.6,alpha:0.116},0).wait(1).to({y:564.6,alpha:0.159},0).wait(1).to({y:555,alpha:0.212},0).wait(1).to({y:543.7,alpha:0.274},0).wait(1).to({y:530.9,alpha:0.344},0).wait(1).to({y:516.9,alpha:0.421},0).wait(1).to({y:502.4,alpha:0.501},0).wait(1).to({y:487.9,alpha:0.58},0).wait(1).to({y:474.2,alpha:0.656},0).wait(1).to({y:461.8,alpha:0.724},0).wait(1).to({y:450.8,alpha:0.784},0).wait(1).to({y:441.3,alpha:0.836},0).wait(1).to({y:433.4,alpha:0.88},0).wait(1).to({y:427,alpha:0.915},0).wait(1).to({y:421.8,alpha:0.943},0).wait(1).to({y:417.8,alpha:0.965},0).wait(1).to({y:414.9,alpha:0.981},0).wait(1).to({y:413,alpha:0.992},0).wait(1).to({y:411.9,alpha:0.998},0).wait(1).to({y:411.5,alpha:1},0).wait(22));

        // p6_7.png
        this.instance_6 = new lib.Symbol57();
        this.instance_6.setTransform(318.5,535.5,1,1,0,0,0,153.5,22.5);
        this.instance_6.alpha = 0.012;
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(43).to({_off:false},0).wait(1).to({y:535.1,alpha:0.014},0).wait(1).to({y:533.7,alpha:0.021},0).wait(1).to({y:531.3,alpha:0.035},0).wait(1).to({y:527.8,alpha:0.054},0).wait(1).to({y:522.9,alpha:0.081},0).wait(1).to({y:516.6,alpha:0.116},0).wait(1).to({y:508.6,alpha:0.159},0).wait(1).to({y:499,alpha:0.212},0).wait(1).to({y:487.7,alpha:0.274},0).wait(1).to({y:474.9,alpha:0.344},0).wait(1).to({y:460.9,alpha:0.421},0).wait(1).to({y:446.4,alpha:0.501},0).wait(1).to({y:431.9,alpha:0.58},0).wait(1).to({y:418.2,alpha:0.656},0).wait(1).to({y:405.8,alpha:0.724},0).wait(1).to({y:394.8,alpha:0.784},0).wait(1).to({y:385.3,alpha:0.836},0).wait(1).to({y:377.4,alpha:0.88},0).wait(1).to({y:371,alpha:0.915},0).wait(1).to({y:365.8,alpha:0.943},0).wait(1).to({y:361.8,alpha:0.965},0).wait(1).to({y:358.9,alpha:0.981},0).wait(1).to({y:357,alpha:0.992},0).wait(1).to({y:355.9,alpha:0.998},0).wait(1).to({y:355.5,alpha:1},0).wait(28));

        // p6_6.png
        this.instance_7 = new lib.Symbol56();
        this.instance_7.setTransform(318.5,485,1,1,0,0,0,153.5,19);
        this.instance_7.alpha = 0.012;
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({_off:false},0).wait(1).to({y:484.6,alpha:0.014},0).wait(1).to({y:483.2,alpha:0.021},0).wait(1).to({y:480.8,alpha:0.035},0).wait(1).to({y:477.3,alpha:0.054},0).wait(1).to({y:472.4,alpha:0.081},0).wait(1).to({y:466.1,alpha:0.116},0).wait(1).to({y:458.1,alpha:0.159},0).wait(1).to({y:448.5,alpha:0.212},0).wait(1).to({y:437.2,alpha:0.274},0).wait(1).to({y:424.4,alpha:0.344},0).wait(1).to({y:410.4,alpha:0.421},0).wait(1).to({y:395.9,alpha:0.501},0).wait(1).to({y:381.4,alpha:0.58},0).wait(1).to({y:367.7,alpha:0.656},0).wait(1).to({y:355.3,alpha:0.724},0).wait(1).to({y:344.3,alpha:0.784},0).wait(1).to({y:334.8,alpha:0.836},0).wait(1).to({y:326.9,alpha:0.88},0).wait(1).to({y:320.5,alpha:0.915},0).wait(1).to({y:315.3,alpha:0.943},0).wait(1).to({y:311.3,alpha:0.965},0).wait(1).to({y:308.4,alpha:0.981},0).wait(1).to({y:306.5,alpha:0.992},0).wait(1).to({y:305.4,alpha:0.998},0).wait(1).to({y:305,alpha:1},0).wait(33));

        // p6_4.png
        this.instance_8 = new lib.Symbol55();
        this.instance_8.setTransform(321,373,1,1,0,0,0,81,55);
        this.instance_8.alpha = 0.012;
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33).to({_off:false},0).wait(1).to({y:372.6,alpha:0.014},0).wait(1).to({y:371.2,alpha:0.021},0).wait(1).to({y:368.8,alpha:0.035},0).wait(1).to({y:365.3,alpha:0.054},0).wait(1).to({y:360.4,alpha:0.081},0).wait(1).to({y:354.1,alpha:0.116},0).wait(1).to({y:346.1,alpha:0.159},0).wait(1).to({y:336.5,alpha:0.212},0).wait(1).to({y:325.2,alpha:0.274},0).wait(1).to({y:312.4,alpha:0.344},0).wait(1).to({y:298.4,alpha:0.421},0).wait(1).to({y:283.9,alpha:0.501},0).wait(1).to({y:269.4,alpha:0.58},0).wait(1).to({y:255.7,alpha:0.656},0).wait(1).to({y:243.3,alpha:0.724},0).wait(1).to({y:232.3,alpha:0.784},0).wait(1).to({y:222.8,alpha:0.836},0).wait(1).to({y:214.9,alpha:0.88},0).wait(1).to({y:208.5,alpha:0.915},0).wait(1).to({y:203.3,alpha:0.943},0).wait(1).to({y:199.3,alpha:0.965},0).wait(1).to({y:196.4,alpha:0.981},0).wait(1).to({y:194.5,alpha:0.992},0).wait(1).to({y:193.4,alpha:0.998},0).wait(1).to({y:193,alpha:1},0).wait(38));

        // line
        this.instance_9 = new lib.Symbol79();
        this.instance_9.setTransform(403,537.5,1,1,0,0,0,133,510.5);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(69).to({_off:false},0).wait(27));

        // p6_1.png
        this.instance_10 = new lib.Symbol54();
        this.instance_10.setTransform(475,418,1,1,0,0,0,165,298);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(96));

        // p6_0.png
        this.instance_11 = new lib.Symbol53();
        this.instance_11.setTransform(151.5,527,1,1,0,0,0,151.5,346);

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96));

        // Layer 1
        this.instance_12 = new lib.Symbol18();
        this.instance_12.setTransform(320,524,1,1,0,0,0,320,524);

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(96));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12,-536,969,1584);


    (lib.page4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{"in":35});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_117 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(117).call(this.frame_117).wait(15));

        // p5_4.png
        this.instance = new lib.Symbol51();
        this.instance.setTransform(690.1,766,1,1,0,0,0,28,224);
        this.instance.alpha = 0.012;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).wait(1).to({x:689.9,alpha:0.013},0).wait(1).to({x:689.4,alpha:0.015},0).wait(1).to({x:688.5,y:766.1,alpha:0.02},0).wait(1).to({x:687.3,alpha:0.027},0).wait(1).to({x:685.5,y:766.2,alpha:0.036},0).wait(1).to({x:683.3,alpha:0.049},0).wait(1).to({x:680.5,y:766.3,alpha:0.064},0).wait(1).to({x:677.1,y:766.4,alpha:0.083},0).wait(1).to({x:673,y:766.6,alpha:0.105},0).wait(1).to({x:668.2,y:766.7,alpha:0.132},0).wait(1).to({x:662.4,y:766.9,alpha:0.163},0).wait(1).to({x:655.7,y:767.1,alpha:0.2},0).wait(1).to({x:648,y:767.4,alpha:0.242},0).wait(1).to({x:639.3,y:767.7,alpha:0.29},0).wait(1).to({x:629.5,y:768,alpha:0.344},0).wait(1).to({x:618.8,y:768.4,alpha:0.403},0).wait(1).to({x:607.4,y:768.8,alpha:0.465},0).wait(1).to({x:595.7,y:769.1,alpha:0.53},0).wait(1).to({x:584.2,y:769.5,alpha:0.593},0).wait(1).to({x:573.2,y:769.9,alpha:0.653},0).wait(1).to({x:563.1,y:770.2,alpha:0.709},0).wait(1).to({x:553.9,y:770.5,alpha:0.759},0).wait(1).to({x:545.9,y:770.8,alpha:0.803},0).wait(1).to({x:538.9,y:771,alpha:0.842},0).wait(1).to({x:532.9,y:771.2,alpha:0.875},0).wait(1).to({x:527.8,y:771.4,alpha:0.903},0).wait(1).to({x:523.5,y:771.6,alpha:0.926},0).wait(1).to({x:519.9,y:771.7,alpha:0.946},0).wait(1).to({x:517,y:771.8,alpha:0.962},0).wait(1).to({x:514.7,alpha:0.974},0).wait(1).to({x:512.9,y:771.9,alpha:0.984},0).wait(1).to({x:511.6,alpha:0.991},0).wait(1).to({x:510.7,y:772,alpha:0.996},0).wait(1).to({x:510.2,alpha:0.999},0).wait(1).to({x:510,alpha:1},0).wait(49));

        // p5_3.png
        this.instance_1 = new lib.Symbol50();
        this.instance_1.setTransform(626.6,766,1,1,0,0,0,23.5,224);
        this.instance_1.alpha = 0.012;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).wait(1).to({x:626.4,alpha:0.013},0).wait(1).to({x:625.9,alpha:0.015},0).wait(1).to({x:625,y:766.1,alpha:0.02},0).wait(1).to({x:623.8,alpha:0.027},0).wait(1).to({x:622,y:766.2,alpha:0.036},0).wait(1).to({x:619.8,alpha:0.049},0).wait(1).to({x:617,y:766.3,alpha:0.064},0).wait(1).to({x:613.6,y:766.4,alpha:0.083},0).wait(1).to({x:609.5,y:766.6,alpha:0.105},0).wait(1).to({x:604.7,y:766.7,alpha:0.132},0).wait(1).to({x:598.9,y:766.9,alpha:0.163},0).wait(1).to({x:592.2,y:767.1,alpha:0.2},0).wait(1).to({x:584.5,y:767.4,alpha:0.242},0).wait(1).to({x:575.8,y:767.7,alpha:0.29},0).wait(1).to({x:566,y:768,alpha:0.344},0).wait(1).to({x:555.3,y:768.4,alpha:0.403},0).wait(1).to({x:543.9,y:768.8,alpha:0.465},0).wait(1).to({x:532.2,y:769.1,alpha:0.53},0).wait(1).to({x:520.7,y:769.5,alpha:0.593},0).wait(1).to({x:509.7,y:769.9,alpha:0.653},0).wait(1).to({x:499.6,y:770.2,alpha:0.709},0).wait(1).to({x:490.4,y:770.5,alpha:0.759},0).wait(1).to({x:482.4,y:770.8,alpha:0.803},0).wait(1).to({x:475.4,y:771,alpha:0.842},0).wait(1).to({x:469.4,y:771.2,alpha:0.875},0).wait(1).to({x:464.3,y:771.4,alpha:0.903},0).wait(1).to({x:460,y:771.6,alpha:0.926},0).wait(1).to({x:456.4,y:771.7,alpha:0.946},0).wait(1).to({x:453.5,y:771.8,alpha:0.962},0).wait(1).to({x:451.2,alpha:0.974},0).wait(1).to({x:449.4,y:771.9,alpha:0.984},0).wait(1).to({x:448.1,alpha:0.991},0).wait(1).to({x:447.2,y:772,alpha:0.996},0).wait(1).to({x:446.7,alpha:0.999},0).wait(1).to({x:446.5,alpha:1},0).wait(56));

        // p5_2.png
        this.instance_2 = new lib.Symbol49();
        this.instance_2.setTransform(545.6,750,1,1,0,0,0,59.5,193);
        this.instance_2.alpha = 0.012;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).wait(1).to({x:545.4,alpha:0.013},0).wait(1).to({x:544.9,alpha:0.015},0).wait(1).to({x:544,y:750.1,alpha:0.02},0).wait(1).to({x:542.8,alpha:0.027},0).wait(1).to({x:541,y:750.2,alpha:0.036},0).wait(1).to({x:538.8,alpha:0.049},0).wait(1).to({x:536,y:750.3,alpha:0.064},0).wait(1).to({x:532.6,y:750.4,alpha:0.083},0).wait(1).to({x:528.5,y:750.6,alpha:0.105},0).wait(1).to({x:523.7,y:750.7,alpha:0.132},0).wait(1).to({x:517.9,y:750.9,alpha:0.163},0).wait(1).to({x:511.2,y:751.1,alpha:0.2},0).wait(1).to({x:503.5,y:751.4,alpha:0.242},0).wait(1).to({x:494.8,y:751.7,alpha:0.29},0).wait(1).to({x:485,y:752,alpha:0.344},0).wait(1).to({x:474.3,y:752.4,alpha:0.403},0).wait(1).to({x:462.9,y:752.8,alpha:0.465},0).wait(1).to({x:451.2,y:753.1,alpha:0.53},0).wait(1).to({x:439.7,y:753.5,alpha:0.593},0).wait(1).to({x:428.7,y:753.9,alpha:0.653},0).wait(1).to({x:418.6,y:754.2,alpha:0.709},0).wait(1).to({x:409.4,y:754.5,alpha:0.759},0).wait(1).to({x:401.4,y:754.8,alpha:0.803},0).wait(1).to({x:394.4,y:755,alpha:0.842},0).wait(1).to({x:388.4,y:755.2,alpha:0.875},0).wait(1).to({x:383.3,y:755.4,alpha:0.903},0).wait(1).to({x:379,y:755.6,alpha:0.926},0).wait(1).to({x:375.4,y:755.7,alpha:0.946},0).wait(1).to({x:372.5,y:755.8,alpha:0.962},0).wait(1).to({x:370.2,alpha:0.974},0).wait(1).to({x:368.4,y:755.9,alpha:0.984},0).wait(1).to({x:367.1,alpha:0.991},0).wait(1).to({x:366.2,y:756,alpha:0.996},0).wait(1).to({x:365.7,alpha:0.999},0).wait(1).to({x:365.5,alpha:1},0).wait(62));

        // p5_1.png
        this.instance_3 = new lib.Symbol52();
        this.instance_3.setTransform(475.5,434.5,1,1,0,0,0,51.5,35.5);
        this.instance_3.alpha = 0.012;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).wait(1).to({y:434.6,alpha:0.013},0).wait(1).to({y:434.8,alpha:0.015},0).wait(1).to({y:435.1,alpha:0.02},0).wait(1).to({y:435.6,alpha:0.027},0).wait(1).to({y:436.3,alpha:0.036},0).wait(1).to({y:437.2,alpha:0.049},0).wait(1).to({y:438.3,alpha:0.064},0).wait(1).to({y:439.7,alpha:0.083},0).wait(1).to({y:441.3,alpha:0.105},0).wait(1).to({y:443.3,alpha:0.132},0).wait(1).to({y:445.5,alpha:0.163},0).wait(1).to({y:448.2,alpha:0.2},0).wait(1).to({y:451.3,alpha:0.242},0).wait(1).to({y:454.8,alpha:0.29},0).wait(1).to({y:458.7,alpha:0.344},0).wait(1).to({y:463,alpha:0.403},0).wait(1).to({y:467.6,alpha:0.465},0).wait(1).to({y:472.2,alpha:0.53},0).wait(1).to({y:476.8,alpha:0.593},0).wait(1).to({y:481.2,alpha:0.653},0).wait(1).to({y:485.3,alpha:0.709},0).wait(1).to({y:488.9,alpha:0.759},0).wait(1).to({y:492.2,alpha:0.803},0).wait(1).to({y:495,alpha:0.842},0).wait(1).to({y:497.4,alpha:0.875},0).wait(1).to({y:499.4,alpha:0.903},0).wait(1).to({y:501.1,alpha:0.926},0).wait(1).to({y:502.5,alpha:0.946},0).wait(1).to({y:503.7,alpha:0.962},0).wait(1).to({y:504.6,alpha:0.974},0).wait(1).to({y:505.3,alpha:0.984},0).wait(1).to({y:505.9,alpha:0.991},0).wait(1).to({y:506.2,alpha:0.996},0).wait(1).to({y:506.4,alpha:0.999},0).wait(1).to({y:506.5,alpha:1},0).wait(51));

        // line
        this.instance_4 = new lib.Symbol72();
        this.instance_4.setTransform(288,538,1,1,0,0,0,116,510);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).wait(60));

        // p5_0.jpg
        this.instance_5 = new lib.p5_0();

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(132));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1048);


    (lib.page3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{"in":32});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_86 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(86).call(this.frame_86).wait(14));

        // line
        this.instance = new lib.Symbol71();
        this.instance.setTransform(387,538,1,1,0,0,0,85,510);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).wait(36));

        // p4_11.png
        this.instance_1 = new lib.Symbol45();
        this.instance_1.setTransform(443.5,490.5,1,1,0,0,0,28.5,276.5);
        this.instance_1.alpha = 0.012;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).wait(1).to({x:443.3,alpha:0.013},0).wait(1).to({x:442.7,alpha:0.016},0).wait(1).to({x:441.7,alpha:0.021},0).wait(1).to({x:440.2,alpha:0.029},0).wait(1).to({x:438.2,alpha:0.041},0).wait(1).to({x:435.5,alpha:0.055},0).wait(1).to({x:432,alpha:0.074},0).wait(1).to({x:427.8,alpha:0.097},0).wait(1).to({x:422.5,alpha:0.126},0).wait(1).to({x:416.1,alpha:0.16},0).wait(1).to({x:408.4,alpha:0.202},0).wait(1).to({x:399.2,alpha:0.252},0).wait(1).to({x:388.3,alpha:0.312},0).wait(1).to({x:375.7,alpha:0.38},0).wait(1).to({x:361.8,alpha:0.456},0).wait(1).to({x:347,alpha:0.536},0).wait(1).to({x:332.4,alpha:0.615},0).wait(1).to({x:318.9,alpha:0.689},0).wait(1).to({x:306.9,alpha:0.753},0).wait(1).to({x:296.8,alpha:0.808},0).wait(1).to({x:288.4,alpha:0.854},0).wait(1).to({x:281.5,alpha:0.891},0).wait(1).to({x:276,alpha:0.921},0).wait(1).to({x:271.6,alpha:0.945},0).wait(1).to({x:268.1,alpha:0.964},0).wait(1).to({x:265.5,alpha:0.978},0).wait(1).to({x:263.7,alpha:0.988},0).wait(1).to({x:262.4,alpha:0.995},0).wait(1).to({x:261.7,alpha:0.999},0).wait(1).to({x:261.5,alpha:1},0).wait(25));

        // p4_10.png
        this.instance_2 = new lib.Symbol46();
        this.instance_2.setTransform(379.5,490.5,1,1,0,0,0,23.5,276.5);
        this.instance_2.alpha = 0.012;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).wait(1).to({x:379.3,alpha:0.013},0).wait(1).to({x:378.7,alpha:0.016},0).wait(1).to({x:377.7,alpha:0.021},0).wait(1).to({x:376.2,alpha:0.029},0).wait(1).to({x:374.2,alpha:0.041},0).wait(1).to({x:371.5,alpha:0.055},0).wait(1).to({x:368,alpha:0.074},0).wait(1).to({x:363.8,alpha:0.097},0).wait(1).to({x:358.5,alpha:0.126},0).wait(1).to({x:352.1,alpha:0.16},0).wait(1).to({x:344.4,alpha:0.202},0).wait(1).to({x:335.2,alpha:0.252},0).wait(1).to({x:324.3,alpha:0.312},0).wait(1).to({x:311.7,alpha:0.38},0).wait(1).to({x:297.8,alpha:0.456},0).wait(1).to({x:283,alpha:0.536},0).wait(1).to({x:268.4,alpha:0.615},0).wait(1).to({x:254.9,alpha:0.689},0).wait(1).to({x:242.9,alpha:0.753},0).wait(1).to({x:232.8,alpha:0.808},0).wait(1).to({x:224.4,alpha:0.854},0).wait(1).to({x:217.5,alpha:0.891},0).wait(1).to({x:212,alpha:0.921},0).wait(1).to({x:207.6,alpha:0.945},0).wait(1).to({x:204.1,alpha:0.964},0).wait(1).to({x:201.5,alpha:0.978},0).wait(1).to({x:199.7,alpha:0.988},0).wait(1).to({x:198.4,alpha:0.995},0).wait(1).to({x:197.7,alpha:0.999},0).wait(1).to({x:197.5,alpha:1},0).wait(32));

        // p4_9.png
        this.instance_3 = new lib.Symbol47();
        this.instance_3.setTransform(299,447.5,1,1,0,0,0,60,199.5);
        this.instance_3.alpha = 0.012;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).wait(1).to({x:298.8,alpha:0.013},0).wait(1).to({x:298.2,alpha:0.016},0).wait(1).to({x:297.2,alpha:0.021},0).wait(1).to({x:295.7,alpha:0.029},0).wait(1).to({x:293.7,alpha:0.041},0).wait(1).to({x:291,alpha:0.055},0).wait(1).to({x:287.5,alpha:0.074},0).wait(1).to({x:283.3,alpha:0.097},0).wait(1).to({x:278,alpha:0.126},0).wait(1).to({x:271.6,alpha:0.16},0).wait(1).to({x:263.9,alpha:0.202},0).wait(1).to({x:254.7,alpha:0.252},0).wait(1).to({x:243.8,alpha:0.312},0).wait(1).to({x:231.2,alpha:0.38},0).wait(1).to({x:217.3,alpha:0.456},0).wait(1).to({x:202.5,alpha:0.536},0).wait(1).to({x:187.9,alpha:0.615},0).wait(1).to({x:174.4,alpha:0.689},0).wait(1).to({x:162.4,alpha:0.753},0).wait(1).to({x:152.3,alpha:0.808},0).wait(1).to({x:143.9,alpha:0.854},0).wait(1).to({x:137,alpha:0.891},0).wait(1).to({x:131.5,alpha:0.921},0).wait(1).to({x:127.1,alpha:0.945},0).wait(1).to({x:123.6,alpha:0.964},0).wait(1).to({x:121,alpha:0.978},0).wait(1).to({x:119.2,alpha:0.988},0).wait(1).to({x:117.9,alpha:0.995},0).wait(1).to({x:117.2,alpha:0.999},0).wait(1).to({x:117,alpha:1},0).wait(38));

        // p4_8.png
        this.instance_4 = new lib.Symbol48();
        this.instance_4.setTransform(211.5,108.5,1,1,0,0,0,51.5,35.5);
        this.instance_4.alpha = 0.012;
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).wait(1).to({y:108.6,alpha:0.013},0).wait(1).to({y:108.7,alpha:0.016},0).wait(1).to({y:109.1,alpha:0.021},0).wait(1).to({y:109.6,alpha:0.029},0).wait(1).to({y:110.3,alpha:0.041},0).wait(1).to({y:111.1,alpha:0.055},0).wait(1).to({y:112.3,alpha:0.074},0).wait(1).to({y:113.7,alpha:0.097},0).wait(1).to({y:115.4,alpha:0.126},0).wait(1).to({y:117.5,alpha:0.16},0).wait(1).to({y:120.1,alpha:0.202},0).wait(1).to({y:123.1,alpha:0.252},0).wait(1).to({y:126.7,alpha:0.312},0).wait(1).to({y:130.8,alpha:0.38},0).wait(1).to({y:135.4,alpha:0.456},0).wait(1).to({y:140.3,alpha:0.536},0).wait(1).to({y:145.1,alpha:0.615},0).wait(1).to({y:149.6,alpha:0.689},0).wait(1).to({y:153.5,alpha:0.753},0).wait(1).to({y:156.9,alpha:0.808},0).wait(1).to({y:159.6,alpha:0.854},0).wait(1).to({y:161.9,alpha:0.891},0).wait(1).to({y:163.7,alpha:0.921},0).wait(1).to({y:165.2,alpha:0.945},0).wait(1).to({y:166.3,alpha:0.964},0).wait(1).to({y:167.2,alpha:0.978},0).wait(1).to({y:167.8,alpha:0.988},0).wait(1).to({y:168.2,alpha:0.995},0).wait(1).to({y:168.4,alpha:0.999},0).wait(1).to({y:168.5,alpha:1},0).wait(23));

        // p4_6.png
        this.instance_5 = new lib.Symbol44();
        this.instance_5.setTransform(569.5,351.5,1,1,0,0,0,130.5,65.5);
        this.instance_5.alpha = 0.012;
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({_off:false},0).wait(1).to({x:569.4,alpha:0.013},0).wait(1).to({x:569.3,alpha:0.016},0).wait(1).to({x:568.9,alpha:0.021},0).wait(1).to({x:568.4,alpha:0.029},0).wait(1).to({x:567.8,alpha:0.04},0).wait(1).to({x:566.9,alpha:0.054},0).wait(1).to({x:565.8,alpha:0.072},0).wait(1).to({x:564.5,alpha:0.094},0).wait(1).to({x:562.9,alpha:0.121},0).wait(1).to({x:560.9,alpha:0.153},0).wait(1).to({x:558.6,alpha:0.192},0).wait(1).to({x:555.8,alpha:0.237},0).wait(1).to({x:552.6,alpha:0.29},0).wait(1).to({x:548.9,alpha:0.351},0).wait(1).to({x:544.8,alpha:0.419},0).wait(1).to({x:540.3,alpha:0.492},0).wait(1).to({x:535.7,alpha:0.569},0).wait(1).to({x:531.2,alpha:0.643},0).wait(1).to({x:527,alpha:0.712},0).wait(1).to({x:523.2,alpha:0.774},0).wait(1).to({x:520,alpha:0.826},0).wait(1).to({x:517.4,alpha:0.87},0).wait(1).to({x:515.2,alpha:0.906},0).wait(1).to({x:513.5,alpha:0.934},0).wait(1).to({x:512.1,alpha:0.957},0).wait(1).to({x:511.1,alpha:0.974},0).wait(1).to({x:510.4,alpha:0.986},0).wait(1).to({x:509.9,alpha:0.994},0).wait(1).to({x:509.6,alpha:0.999},0).wait(1).to({x:509.5,alpha:1},0).wait(19));

        // p4_7.png
        this.instance_6 = new lib.p4_7();
        this.instance_6.setTransform(0,852);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100));

        // p4_1.png
        this.instance_7 = new lib.p4_1();
        this.instance_7.setTransform(0,656);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

        // Symbol 43
        this.instance_8 = new lib.Symbol43();
        this.instance_8.setTransform(333.5,266,1,1,0,0,0,452.5,216);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100));

        // p4_0.jpg
        this.instance_9 = new lib.p4_0();

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-119,0,905,1048);


    (lib.page2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{"in":38});

        // timeline functions:
        this.frame_102 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(102).call(this.frame_102).wait(12));

        // p3_8.png
        this.instance = new lib.Symbol38();
        this.instance.setTransform(644.5,452.5,1,1,0,0,0,17.5,222.5);
        this.instance.alpha = 0.012;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(1).to({regX:16,regY:221.5,x:642.8,y:451.5,alpha:0.013},0).wait(1).to({x:642.1,alpha:0.017},0).wait(1).to({x:640.8,alpha:0.024},0).wait(1).to({x:639,alpha:0.035},0).wait(1).to({x:636.5,y:451.4,alpha:0.049},0).wait(1).to({x:633.3,alpha:0.067},0).wait(1).to({x:629.4,y:451.3,alpha:0.09},0).wait(1).to({x:624.5,alpha:0.118},0).wait(1).to({x:618.7,y:451.2,alpha:0.151},0).wait(1).to({x:611.9,y:451.1,alpha:0.191},0).wait(1).to({x:603.9,y:451,alpha:0.236},0).wait(1).to({x:595,y:450.9,alpha:0.288},0).wait(1).to({x:585,y:450.8,alpha:0.345},0).wait(1).to({x:574.1,y:450.7,alpha:0.407},0).wait(1).to({x:562.7,y:450.6,alpha:0.473},0).wait(1).to({x:551.1,y:450.4,alpha:0.54},0).wait(1).to({x:539.7,y:450.3,alpha:0.605},0).wait(1).to({x:528.9,y:450.2,alpha:0.667},0).wait(1).to({x:518.9,y:450.1,alpha:0.725},0).wait(1).to({x:510,y:450,alpha:0.776},0).wait(1).to({x:502.1,y:449.9,alpha:0.821},0).wait(1).to({x:495.3,y:449.8,alpha:0.861},0).wait(1).to({x:489.5,y:449.7,alpha:0.894},0).wait(1).to({x:484.6,alpha:0.922},0).wait(1).to({x:480.6,y:449.6,alpha:0.945},0).wait(1).to({x:477.5,alpha:0.963},0).wait(1).to({x:475,y:449.5,alpha:0.977},0).wait(1).to({x:473.2,alpha:0.988},0).wait(1).to({x:471.9,alpha:0.995},0).wait(1).to({x:471.2,alpha:0.999},0).wait(1).to({regX:17.5,regY:222.5,x:472.5,y:450.5,alpha:1},0).wait(37));

        // p3_7.png
        this.instance_1 = new lib.Symbol40();
        this.instance_1.setTransform(724,450,1,1,0,0,0,6,234);
        this.instance_1.alpha = 0.012;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).wait(1).to({regX:28.5,regY:233,x:746.3,y:449,alpha:0.013},0).wait(1).to({x:745.6,alpha:0.017},0).wait(1).to({x:744.3,alpha:0.024},0).wait(1).to({x:742.5,alpha:0.035},0).wait(1).to({x:740,y:448.9,alpha:0.049},0).wait(1).to({x:736.8,alpha:0.067},0).wait(1).to({x:732.9,y:448.8,alpha:0.09},0).wait(1).to({x:728,alpha:0.118},0).wait(1).to({x:722.2,y:448.7,alpha:0.151},0).wait(1).to({x:715.4,y:448.6,alpha:0.191},0).wait(1).to({x:707.4,y:448.5,alpha:0.236},0).wait(1).to({x:698.5,y:448.4,alpha:0.288},0).wait(1).to({x:688.5,y:448.3,alpha:0.345},0).wait(1).to({x:677.6,y:448.2,alpha:0.407},0).wait(1).to({x:666.2,y:448.1,alpha:0.473},0).wait(1).to({x:654.6,y:447.9,alpha:0.54},0).wait(1).to({x:643.2,y:447.8,alpha:0.605},0).wait(1).to({x:632.4,y:447.7,alpha:0.667},0).wait(1).to({x:622.4,y:447.6,alpha:0.725},0).wait(1).to({x:613.5,y:447.5,alpha:0.776},0).wait(1).to({x:605.6,y:447.4,alpha:0.821},0).wait(1).to({x:598.8,y:447.3,alpha:0.861},0).wait(1).to({x:593,y:447.2,alpha:0.894},0).wait(1).to({x:588.1,alpha:0.922},0).wait(1).to({x:584.1,y:447.1,alpha:0.945},0).wait(1).to({x:581,alpha:0.963},0).wait(1).to({x:578.5,y:447,alpha:0.977},0).wait(1).to({x:576.7,alpha:0.988},0).wait(1).to({x:575.4,alpha:0.995},0).wait(1).to({x:574.7,alpha:0.999},0).wait(1).to({regX:6,regY:234,x:552,y:448,alpha:1},0).wait(26));

        // p3_9.png
        this.instance_2 = new lib.Symbol39();
        this.instance_2.setTransform(689.5,452.5,1,1,0,0,0,15.5,222.5);
        this.instance_2.alpha = 0.012;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).wait(1).to({regX:17,regY:221.5,x:690.8,y:451.5,alpha:0.013},0).wait(1).to({x:690.1,alpha:0.017},0).wait(1).to({x:688.8,alpha:0.024},0).wait(1).to({x:687,alpha:0.035},0).wait(1).to({x:684.5,y:451.4,alpha:0.049},0).wait(1).to({x:681.3,alpha:0.067},0).wait(1).to({x:677.4,y:451.3,alpha:0.09},0).wait(1).to({x:672.5,alpha:0.118},0).wait(1).to({x:666.7,y:451.2,alpha:0.151},0).wait(1).to({x:659.9,y:451.1,alpha:0.191},0).wait(1).to({x:651.9,y:451,alpha:0.236},0).wait(1).to({x:643,y:450.9,alpha:0.288},0).wait(1).to({x:633,y:450.8,alpha:0.345},0).wait(1).to({x:622.1,y:450.7,alpha:0.407},0).wait(1).to({x:610.7,y:450.6,alpha:0.473},0).wait(1).to({x:599.1,y:450.4,alpha:0.54},0).wait(1).to({x:587.7,y:450.3,alpha:0.605},0).wait(1).to({x:576.9,y:450.2,alpha:0.667},0).wait(1).to({x:566.9,y:450.1,alpha:0.725},0).wait(1).to({x:558,y:450,alpha:0.776},0).wait(1).to({x:550.1,y:449.9,alpha:0.821},0).wait(1).to({x:543.3,y:449.8,alpha:0.861},0).wait(1).to({x:537.5,y:449.7,alpha:0.894},0).wait(1).to({x:532.6,alpha:0.922},0).wait(1).to({x:528.6,y:449.6,alpha:0.945},0).wait(1).to({x:525.5,alpha:0.963},0).wait(1).to({x:523,y:449.5,alpha:0.977},0).wait(1).to({x:521.2,alpha:0.988},0).wait(1).to({x:519.9,alpha:0.995},0).wait(1).to({x:519.2,alpha:0.999},0).wait(1).to({regX:15.5,regY:222.5,x:517.5,y:450.5,alpha:1},0).wait(32));

        // p3_6.png
        this.instance_3 = new lib.Symbol37();
        this.instance_3.setTransform(597,450,1,1,0,0,0,22,234);
        this.instance_3.alpha = 0.012;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).wait(1).to({regX:24,regY:233,x:598.8,y:449,alpha:0.013},0).wait(1).to({x:598.1,alpha:0.017},0).wait(1).to({x:596.8,alpha:0.024},0).wait(1).to({x:595,alpha:0.035},0).wait(1).to({x:592.5,y:448.9,alpha:0.049},0).wait(1).to({x:589.3,alpha:0.067},0).wait(1).to({x:585.4,y:448.8,alpha:0.09},0).wait(1).to({x:580.5,alpha:0.118},0).wait(1).to({x:574.7,y:448.7,alpha:0.151},0).wait(1).to({x:567.9,y:448.6,alpha:0.191},0).wait(1).to({x:559.9,y:448.5,alpha:0.236},0).wait(1).to({x:551,y:448.4,alpha:0.288},0).wait(1).to({x:541,y:448.3,alpha:0.345},0).wait(1).to({x:530.1,y:448.2,alpha:0.407},0).wait(1).to({x:518.7,y:448.1,alpha:0.473},0).wait(1).to({x:507.1,y:447.9,alpha:0.54},0).wait(1).to({x:495.7,y:447.8,alpha:0.605},0).wait(1).to({x:484.9,y:447.7,alpha:0.667},0).wait(1).to({x:474.9,y:447.6,alpha:0.725},0).wait(1).to({x:466,y:447.5,alpha:0.776},0).wait(1).to({x:458.1,y:447.4,alpha:0.821},0).wait(1).to({x:451.3,y:447.3,alpha:0.861},0).wait(1).to({x:445.5,y:447.2,alpha:0.894},0).wait(1).to({x:440.6,alpha:0.922},0).wait(1).to({x:436.6,y:447.1,alpha:0.945},0).wait(1).to({x:433.5,alpha:0.963},0).wait(1).to({x:431,y:447,alpha:0.977},0).wait(1).to({x:429.2,alpha:0.988},0).wait(1).to({x:427.9,alpha:0.995},0).wait(1).to({x:427.2,alpha:0.999},0).wait(1).to({regX:22,regY:234,x:425,y:448,alpha:1},0).wait(40));

        // p3_5.png
        this.instance_4 = new lib.Symbol36();
        this.instance_4.setTransform(506.5,402.5,1,1,0,0,0,51.5,168.5);
        this.instance_4.alpha = 0.012;
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).wait(1).to({x:506.3,alpha:0.013},0).wait(1).to({x:505.6,alpha:0.017},0).wait(1).to({x:504.3,alpha:0.024},0).wait(1).to({x:502.5,alpha:0.035},0).wait(1).to({x:500,y:402.4,alpha:0.049},0).wait(1).to({x:496.8,alpha:0.067},0).wait(1).to({x:492.9,y:402.3,alpha:0.09},0).wait(1).to({x:488,alpha:0.118},0).wait(1).to({x:482.2,y:402.2,alpha:0.151},0).wait(1).to({x:475.4,y:402.1,alpha:0.191},0).wait(1).to({x:467.4,y:402,alpha:0.236},0).wait(1).to({x:458.5,y:401.9,alpha:0.288},0).wait(1).to({x:448.5,y:401.8,alpha:0.345},0).wait(1).to({x:437.6,y:401.7,alpha:0.407},0).wait(1).to({x:426.2,y:401.6,alpha:0.473},0).wait(1).to({x:414.6,y:401.4,alpha:0.54},0).wait(1).to({x:403.2,y:401.3,alpha:0.605},0).wait(1).to({x:392.4,y:401.2,alpha:0.667},0).wait(1).to({x:382.4,y:401.1,alpha:0.725},0).wait(1).to({x:373.5,y:401,alpha:0.776},0).wait(1).to({x:365.6,y:400.9,alpha:0.821},0).wait(1).to({x:358.8,y:400.8,alpha:0.861},0).wait(1).to({x:353,y:400.7,alpha:0.894},0).wait(1).to({x:348.1,alpha:0.922},0).wait(1).to({x:344.1,y:400.6,alpha:0.945},0).wait(1).to({x:341,alpha:0.963},0).wait(1).to({x:338.5,y:400.5,alpha:0.977},0).wait(1).to({x:336.7,alpha:0.988},0).wait(1).to({x:335.4,alpha:0.995},0).wait(1).to({x:334.7,alpha:0.999},0).wait(1).to({x:334.5,alpha:1},0).wait(45));

        // p3_4.png
        this.instance_5 = new lib.Symbol41();
        this.instance_5.setTransform(502.5,100.5,1,1,0,0,0,51.5,35.5);
        this.instance_5.alpha = 0.012;
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52).to({_off:false},0).wait(1).to({y:100.6,alpha:0.013},0).wait(1).to({y:100.9,alpha:0.017},0).wait(1).to({y:101.4,alpha:0.024},0).wait(1).to({y:102.1,alpha:0.035},0).wait(1).to({y:103.1,alpha:0.049},0).wait(1).to({y:104.3,alpha:0.067},0).wait(1).to({y:105.9,alpha:0.09},0).wait(1).to({y:107.8,alpha:0.118},0).wait(1).to({y:110.1,alpha:0.151},0).wait(1).to({y:112.8,alpha:0.191},0).wait(1).to({y:115.9,alpha:0.236},0).wait(1).to({y:119.5,alpha:0.288},0).wait(1).to({y:123.4,alpha:0.345},0).wait(1).to({y:127.7,alpha:0.407},0).wait(1).to({y:132.2,alpha:0.473},0).wait(1).to({y:136.8,alpha:0.54},0).wait(1).to({y:141.3,alpha:0.605},0).wait(1).to({y:145.6,alpha:0.667},0).wait(1).to({y:149.5,alpha:0.725},0).wait(1).to({y:153.1,alpha:0.776},0).wait(1).to({y:156.2,alpha:0.821},0).wait(1).to({y:158.9,alpha:0.861},0).wait(1).to({y:161.2,alpha:0.894},0).wait(1).to({y:163.1,alpha:0.922},0).wait(1).to({y:164.7,alpha:0.945},0).wait(1).to({y:165.9,alpha:0.963},0).wait(1).to({y:166.9,alpha:0.977},0).wait(1).to({y:167.6,alpha:0.988},0).wait(1).to({y:168.1,alpha:0.995},0).wait(1).to({y:168.4,alpha:0.999},0).wait(1).to({y:168.5,alpha:1},0).wait(31));

        // line
        this.instance_6 = new lib.Symbol35();
        this.instance_6.setTransform(341.5,531.5,1,1,0,0,0,135.5,504.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).wait(40));

        // p3_3.png
        this.instance_7 = new lib.Symbol34();
        this.instance_7.setTransform(320,736,1,1,0,0,0,320,312);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114));

        // p3_2.png
        this.instance_8 = new lib.Symbol33();
        this.instance_8.setTransform(265,429.5,1,1,0,0,0,362,254.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(114));

        // p3_0.jpg
        this.instance_9 = new lib.Symbol42();
        this.instance_9.setTransform(320,524,1,1,0,0,0,320,524);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(114));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-97,0,737,1048);


    (lib.page1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{"in":25});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_105 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(105).call(this.frame_105).wait(6));

        // p2_1.png
        this.instance = new lib.Symbol25();
        this.instance.setTransform(225.5,108.5,1,1,0,0,0,51.5,35.5);
        this.instance.alpha = 0.012;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(2).to({y:108.7,alpha:0.015},0).wait(1).to({y:108.9,alpha:0.019},0).wait(1).to({y:109.3,alpha:0.025},0).wait(1).to({y:109.8,alpha:0.034},0).wait(1).to({y:110.5,alpha:0.045},0).wait(1).to({y:111.4,alpha:0.059},0).wait(1).to({y:112.5,alpha:0.077},0).wait(1).to({y:113.8,alpha:0.099},0).wait(1).to({y:115.5,alpha:0.126},0).wait(1).to({y:117.5,alpha:0.16},0).wait(1).to({y:120,alpha:0.201},0).wait(1).to({y:123,alpha:0.25},0).wait(1).to({y:126.6,alpha:0.31},0).wait(1).to({y:130.9,alpha:0.381},0).wait(1).to({y:135.7,alpha:0.459},0).wait(1).to({y:140.7,alpha:0.541},0).wait(1).to({y:145.4,alpha:0.62},0).wait(1).to({y:149.6,alpha:0.689},0).wait(1).to({y:153.2,alpha:0.748},0).wait(1).to({y:156.2,alpha:0.798},0).wait(1).to({y:158.7,alpha:0.839},0).wait(1).to({y:160.8,alpha:0.873},0).wait(1).to({y:162.5,alpha:0.901},0).wait(1).to({y:163.9,alpha:0.924},0).wait(1).to({y:165,alpha:0.943},0).wait(1).to({y:166,alpha:0.958},0).wait(1).to({y:166.7,alpha:0.971},0).wait(1).to({y:167.3,alpha:0.981},0).wait(1).to({y:167.8,alpha:0.988},0).wait(1).to({y:168.1,alpha:0.994},0).wait(1).to({y:168.3,alpha:0.997},0).wait(1).to({y:168.5,alpha:0.999},0).wait(1).to({alpha:1},0).wait(17));

        // p2_8.png
        this.instance_1 = new lib.Symbol32();
        this.instance_1.setTransform(266,523,1,1,0,0,0,45,45);
        this.instance_1.alpha = 0.012;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(2).to({x:266.1,alpha:0.015},0).wait(1).to({x:266.3,alpha:0.019},0).wait(1).to({x:266.5,alpha:0.025},0).wait(1).to({x:266.9,alpha:0.034},0).wait(1).to({x:267.3,alpha:0.045},0).wait(1).to({x:267.9,alpha:0.059},0).wait(1).to({x:268.6,alpha:0.077},0).wait(1).to({x:269.5,alpha:0.099},0).wait(1).to({x:270.6,alpha:0.126},0).wait(1).to({x:272,alpha:0.16},0).wait(1).to({x:273.6,alpha:0.201},0).wait(1).to({x:275.7,alpha:0.25},0).wait(1).to({x:278.1,alpha:0.31},0).wait(1).to({x:280.9,alpha:0.381},0).wait(1).to({x:284.1,alpha:0.459},0).wait(1).to({x:287.4,alpha:0.541},0).wait(1).to({x:290.6,alpha:0.62},0).wait(1).to({x:293.4,alpha:0.689},0).wait(1).to({x:295.8,alpha:0.748},0).wait(1).to({x:297.8,alpha:0.798},0).wait(1).to({x:299.5,alpha:0.839},0).wait(1).to({x:300.9,alpha:0.873},0).wait(1).to({x:302,alpha:0.901},0).wait(1).to({x:302.9,alpha:0.924},0).wait(1).to({x:303.7,alpha:0.943},0).wait(1).to({x:304.3,alpha:0.958},0).wait(1).to({x:304.8,alpha:0.971},0).wait(1).to({x:305.2,alpha:0.981},0).wait(1).to({x:305.5,alpha:0.988},0).wait(1).to({x:305.7,alpha:0.994},0).wait(1).to({x:305.9,alpha:0.997},0).wait(1).to({x:306,alpha:0.999},0).wait(1).to({alpha:1},0).wait(14));

        // p2_3.png
        this.instance_2 = new lib.Symbol31();
        this.instance_2.setTransform(479.1,380.5,1,1,0,0,0,6,166.5);
        this.instance_2.alpha = 0.012;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).wait(1).to({x:478.9,alpha:0.013},0).wait(1).to({x:478.4,alpha:0.015},0).wait(1).to({x:477.5,alpha:0.02},0).wait(1).to({x:476.2,alpha:0.027},0).wait(1).to({x:474.4,alpha:0.037},0).wait(1).to({x:472,alpha:0.05},0).wait(1).to({x:469,alpha:0.066},0).wait(1).to({x:465.1,alpha:0.088},0).wait(1).to({x:460.2,alpha:0.114},0).wait(1).to({x:454.2,alpha:0.147},0).wait(1).to({x:446.8,alpha:0.187},0).wait(1).to({x:437.5,alpha:0.237},0).wait(1).to({x:426.3,alpha:0.298},0).wait(1).to({x:412.8,alpha:0.371},0).wait(1).to({x:397.5,alpha:0.454},0).wait(1).to({x:381.5,alpha:0.541},0).wait(1).to({x:366.2,alpha:0.624},0).wait(1).to({x:352.8,alpha:0.697},0).wait(1).to({x:341.5,alpha:0.758},0).wait(1).to({x:332.2,alpha:0.809},0).wait(1).to({x:324.6,alpha:0.85},0).wait(1).to({x:318.4,alpha:0.884},0).wait(1).to({x:313.3,alpha:0.912},0).wait(1).to({x:309.2,alpha:0.934},0).wait(1).to({x:305.8,alpha:0.952},0).wait(1).to({x:303.2,alpha:0.966},0).wait(1).to({x:301.1,alpha:0.978},0).wait(1).to({x:299.5,alpha:0.986},0).wait(1).to({x:298.4,alpha:0.993},0).wait(1).to({x:297.6,alpha:0.997},0).wait(1).to({x:297.1,alpha:0.999},0).wait(1).to({x:297,alpha:1},0).wait(33));

        // p2_7.png
        this.instance_3 = new lib.Symbol30();
        this.instance_3.setTransform(444.6,385,1,1,0,0,0,15.5,157);
        this.instance_3.alpha = 0.012;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).wait(1).to({x:444.4,alpha:0.013},0).wait(1).to({x:443.9,alpha:0.015},0).wait(1).to({x:443,alpha:0.02},0).wait(1).to({x:441.7,alpha:0.027},0).wait(1).to({x:439.9,alpha:0.037},0).wait(1).to({x:437.5,alpha:0.05},0).wait(1).to({x:434.5,alpha:0.066},0).wait(1).to({x:430.6,alpha:0.088},0).wait(1).to({x:425.7,alpha:0.114},0).wait(1).to({x:419.7,alpha:0.147},0).wait(1).to({x:412.3,alpha:0.187},0).wait(1).to({x:403,alpha:0.237},0).wait(1).to({x:391.8,alpha:0.298},0).wait(1).to({x:378.3,alpha:0.371},0).wait(1).to({x:363,alpha:0.454},0).wait(1).to({x:347,alpha:0.541},0).wait(1).to({x:331.7,alpha:0.624},0).wait(1).to({x:318.3,alpha:0.697},0).wait(1).to({x:307,alpha:0.758},0).wait(1).to({x:297.7,alpha:0.809},0).wait(1).to({x:290.1,alpha:0.85},0).wait(1).to({x:283.9,alpha:0.884},0).wait(1).to({x:278.8,alpha:0.912},0).wait(1).to({x:274.7,alpha:0.934},0).wait(1).to({x:271.3,alpha:0.952},0).wait(1).to({x:268.7,alpha:0.966},0).wait(1).to({x:266.6,alpha:0.978},0).wait(1).to({x:265,alpha:0.986},0).wait(1).to({x:263.9,alpha:0.993},0).wait(1).to({x:263.1,alpha:0.997},0).wait(1).to({x:262.6,alpha:0.999},0).wait(1).to({x:262.5,alpha:1},0).wait(36));

        // p2_6.png
        this.instance_4 = new lib.Symbol29();
        this.instance_4.setTransform(400.1,385,1,1,0,0,0,17,157);
        this.instance_4.alpha = 0.012;
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).wait(1).to({x:399.9,alpha:0.013},0).wait(1).to({x:399.4,alpha:0.015},0).wait(1).to({x:398.5,alpha:0.02},0).wait(1).to({x:397.2,alpha:0.027},0).wait(1).to({x:395.4,alpha:0.037},0).wait(1).to({x:393,alpha:0.05},0).wait(1).to({x:390,alpha:0.066},0).wait(1).to({x:386.1,alpha:0.088},0).wait(1).to({x:381.2,alpha:0.114},0).wait(1).to({x:375.2,alpha:0.147},0).wait(1).to({x:367.8,alpha:0.187},0).wait(1).to({x:358.5,alpha:0.237},0).wait(1).to({x:347.3,alpha:0.298},0).wait(1).to({x:333.8,alpha:0.371},0).wait(1).to({x:318.5,alpha:0.454},0).wait(1).to({x:302.5,alpha:0.541},0).wait(1).to({x:287.2,alpha:0.624},0).wait(1).to({x:273.8,alpha:0.697},0).wait(1).to({x:262.5,alpha:0.758},0).wait(1).to({x:253.2,alpha:0.809},0).wait(1).to({x:245.6,alpha:0.85},0).wait(1).to({x:239.4,alpha:0.884},0).wait(1).to({x:234.3,alpha:0.912},0).wait(1).to({x:230.2,alpha:0.934},0).wait(1).to({x:226.8,alpha:0.952},0).wait(1).to({x:224.2,alpha:0.966},0).wait(1).to({x:222.1,alpha:0.978},0).wait(1).to({x:220.5,alpha:0.986},0).wait(1).to({x:219.4,alpha:0.993},0).wait(1).to({x:218.6,alpha:0.997},0).wait(1).to({x:218.1,alpha:0.999},0).wait(1).to({x:218,alpha:1},0).wait(40));

        // p2_5.png
        this.instance_5 = new lib.Symbol28();
        this.instance_5.setTransform(362.6,358.5,1,1,0,0,0,11.5,122.5);
        this.instance_5.alpha = 0.012;
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).wait(1).to({x:362.4,alpha:0.013},0).wait(1).to({x:361.9,alpha:0.015},0).wait(1).to({x:361,alpha:0.02},0).wait(1).to({x:359.7,alpha:0.027},0).wait(1).to({x:357.9,alpha:0.037},0).wait(1).to({x:355.5,alpha:0.05},0).wait(1).to({x:352.5,alpha:0.066},0).wait(1).to({x:348.6,alpha:0.088},0).wait(1).to({x:343.7,alpha:0.114},0).wait(1).to({x:337.7,alpha:0.147},0).wait(1).to({x:330.3,alpha:0.187},0).wait(1).to({x:321,alpha:0.237},0).wait(1).to({x:309.8,alpha:0.298},0).wait(1).to({x:296.3,alpha:0.371},0).wait(1).to({x:281,alpha:0.454},0).wait(1).to({x:265,alpha:0.541},0).wait(1).to({x:249.7,alpha:0.624},0).wait(1).to({x:236.3,alpha:0.697},0).wait(1).to({x:225,alpha:0.758},0).wait(1).to({x:215.7,alpha:0.809},0).wait(1).to({x:208.1,alpha:0.85},0).wait(1).to({x:201.9,alpha:0.884},0).wait(1).to({x:196.8,alpha:0.912},0).wait(1).to({x:192.7,alpha:0.934},0).wait(1).to({x:189.3,alpha:0.952},0).wait(1).to({x:186.7,alpha:0.966},0).wait(1).to({x:184.6,alpha:0.978},0).wait(1).to({x:183,alpha:0.986},0).wait(1).to({x:181.9,alpha:0.993},0).wait(1).to({x:181.1,alpha:0.997},0).wait(1).to({x:180.6,alpha:0.999},0).wait(1).to({x:180.5,alpha:1},0).wait(44));

        // p2_4.png
        this.instance_6 = new lib.Symbol27();
        this.instance_6.setTransform(336.1,380.5,1,1,0,0,0,6,166.5);
        this.instance_6.alpha = 0.012;
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},0).wait(1).to({x:335.9,alpha:0.013},0).wait(1).to({x:335.4,alpha:0.015},0).wait(1).to({x:334.5,alpha:0.02},0).wait(1).to({x:333.2,alpha:0.027},0).wait(1).to({x:331.4,alpha:0.037},0).wait(1).to({x:329,alpha:0.05},0).wait(1).to({x:326,alpha:0.066},0).wait(1).to({x:322.1,alpha:0.088},0).wait(1).to({x:317.2,alpha:0.114},0).wait(1).to({x:311.2,alpha:0.147},0).wait(1).to({x:303.8,alpha:0.187},0).wait(1).to({x:294.5,alpha:0.237},0).wait(1).to({x:283.3,alpha:0.298},0).wait(1).to({x:269.8,alpha:0.371},0).wait(1).to({x:254.5,alpha:0.454},0).wait(1).to({x:238.5,alpha:0.541},0).wait(1).to({x:223.2,alpha:0.624},0).wait(1).to({x:209.8,alpha:0.697},0).wait(1).to({x:198.5,alpha:0.758},0).wait(1).to({x:189.2,alpha:0.809},0).wait(1).to({x:181.6,alpha:0.85},0).wait(1).to({x:175.4,alpha:0.884},0).wait(1).to({x:170.3,alpha:0.912},0).wait(1).to({x:166.2,alpha:0.934},0).wait(1).to({x:162.8,alpha:0.952},0).wait(1).to({x:160.2,alpha:0.966},0).wait(1).to({x:158.1,alpha:0.978},0).wait(1).to({x:156.5,alpha:0.986},0).wait(1).to({x:155.4,alpha:0.993},0).wait(1).to({x:154.6,alpha:0.997},0).wait(1).to({x:154.1,alpha:0.999},0).wait(1).to({x:154,alpha:1},0).wait(48));

        // p2_2.png
        this.instance_7 = new lib.Symbol26();
        this.instance_7.setTransform(284.6,340.5,1,1,0,0,0,50.5,195.5);
        this.instance_7.alpha = 0.012;
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).wait(1).to({x:284.4,alpha:0.013},0).wait(1).to({x:283.9,alpha:0.015},0).wait(1).to({x:283,alpha:0.02},0).wait(1).to({x:281.7,alpha:0.027},0).wait(1).to({x:279.9,alpha:0.037},0).wait(1).to({x:277.5,alpha:0.05},0).wait(1).to({x:274.5,alpha:0.066},0).wait(1).to({x:270.6,alpha:0.088},0).wait(1).to({x:265.7,alpha:0.114},0).wait(1).to({x:259.7,alpha:0.147},0).wait(1).to({x:252.3,alpha:0.187},0).wait(1).to({x:243,alpha:0.237},0).wait(1).to({x:231.8,alpha:0.298},0).wait(1).to({x:218.3,alpha:0.371},0).wait(1).to({x:203,alpha:0.454},0).wait(1).to({x:187,alpha:0.541},0).wait(1).to({x:171.7,alpha:0.624},0).wait(1).to({x:158.3,alpha:0.697},0).wait(1).to({x:147,alpha:0.758},0).wait(1).to({x:137.7,alpha:0.809},0).wait(1).to({x:130.1,alpha:0.85},0).wait(1).to({x:123.9,alpha:0.884},0).wait(1).to({x:118.8,alpha:0.912},0).wait(1).to({x:114.7,alpha:0.934},0).wait(1).to({x:111.3,alpha:0.952},0).wait(1).to({x:108.7,alpha:0.966},0).wait(1).to({x:106.6,alpha:0.978},0).wait(1).to({x:105,alpha:0.986},0).wait(1).to({x:103.9,alpha:0.993},0).wait(1).to({x:103.1,alpha:0.997},0).wait(1).to({x:102.6,alpha:0.999},0).wait(1).to({x:102.5,alpha:1},0).wait(54));

        // p2_9.png
        this.instance_8 = new lib.Symbol70();
        this.instance_8.setTransform(261.5,537.5,1,1,0,0,0,174.5,510.5);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(71).to({_off:false},0).wait(40));

        // p2_0.jpg
        this.instance_9 = new lib.p2_0();

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(111));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1048);


    (lib.page0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{"in":1,out:94});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_93 = function() {
            this.stop();
        }
        this.frame_126 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(93).call(this.frame_93).wait(33).call(this.frame_126).wait(1));

        // Layer 24
        this.hand_mc = new lib.Symbol67();
        this.hand_mc.setTransform(209.5,1087.5,1,1,0,0,0,98.5,116.5);
        this.hand_mc._off = true;

        this.timeline.addTween(cjs.Tween.get(this.hand_mc).wait(82).to({_off:false},0).to({_off:true},12).wait(33));

        // Layer 20
        this.instance = new lib.Symbol1a();
        this.instance.setTransform(764.5,-304.5,1,1,0,0,0,192.5,231.5);

        this.instance_1 = new lib.Symbol8a();
        this.instance_1.setTransform(365.5,-234,1,1,0,0,0,53.5,94);

        this.instance_2 = new lib.Symbol4a();
        this.instance_2.setTransform(426,-113,1,1,0,0,0,42,55);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},94).to({state:[]},32).wait(1));

        // p1_13.png
        this.instance_3 = new lib.Symbol24();
        this.instance_3.setTransform(318,980,1,1,0,0,0,79,19);
        this.instance_3.alpha = 0.012;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).wait(1).to({y:979.8,alpha:0.014},0).wait(1).to({y:979.2,alpha:0.022},0).wait(1).to({y:978.1,alpha:0.035},0).wait(1).to({y:976.5,alpha:0.055},0).wait(1).to({y:974.3,alpha:0.082},0).wait(1).to({y:971.4,alpha:0.118},0).wait(1).to({y:967.7,alpha:0.163},0).wait(1).to({y:963.3,alpha:0.218},0).wait(1).to({y:958,alpha:0.283},0).wait(1).to({y:952.1,alpha:0.357},0).wait(1).to({y:945.5,alpha:0.437},0).wait(1).to({y:938.8,alpha:0.521},0).wait(1).to({y:932.1,alpha:0.604},0).wait(1).to({y:925.8,alpha:0.681},0).wait(1).to({y:920.2,alpha:0.751},0).wait(1).to({y:915.3,alpha:0.811},0).wait(1).to({y:911.2,alpha:0.861},0).wait(1).to({y:907.9,alpha:0.902},0).wait(1).to({y:905.2,alpha:0.935},0).wait(1).to({y:903.2,alpha:0.96},0).wait(1).to({y:901.7,alpha:0.979},0).wait(1).to({y:900.7,alpha:0.991},0).wait(1).to({y:900.2,alpha:0.998},0).wait(1).to({y:900,alpha:1},0).wait(15).to({y:898.6},0).wait(1).to({y:894.2},0).wait(1).to({y:886.5},0).wait(1).to({y:874.8},0).wait(1).to({y:858.6},0).wait(1).to({y:837.2},0).wait(1).to({y:809.7},0).wait(1).to({y:775.1},0).wait(1).to({y:732.1},0).wait(1).to({y:679.4},0).wait(1).to({y:615.8},0).wait(1).to({y:540.9},0).wait(1).to({y:455.9},0).wait(1).to({y:364.2},0).wait(1).to({y:271.4},0).wait(1).to({y:183.4},0).wait(1).to({y:103.9},0).wait(1).to({y:34.7},0).wait(1).to({y:-24.3},0).wait(1).to({y:-74.2},0).wait(1).to({y:-115.9},0).wait(1).to({y:-150.6},0).wait(1).to({y:-179.2},0).wait(1).to({y:-202.6},0).wait(1).to({y:-221.5},0).wait(1).to({y:-236.4},0).wait(1).to({y:-247.9},0).wait(1).to({y:-256.3},0).wait(1).to({y:-261.9},0).wait(1).to({y:-265.2},0).wait(1).to({y:-266.2},0).to({_off:true},1).wait(1));

        // p1_14.png
        this.instance_4 = new lib.Symbol23();
        this.instance_4.setTransform(318,933.5,1,1,0,0,0,207,14.5);
        this.instance_4.alpha = 0.012;
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).wait(1).to({y:933.3,alpha:0.014},0).wait(1).to({y:932.7,alpha:0.022},0).wait(1).to({y:931.6,alpha:0.035},0).wait(1).to({y:930,alpha:0.055},0).wait(1).to({y:927.8,alpha:0.082},0).wait(1).to({y:924.9,alpha:0.118},0).wait(1).to({y:921.2,alpha:0.163},0).wait(1).to({y:916.8,alpha:0.218},0).wait(1).to({y:911.5,alpha:0.283},0).wait(1).to({y:905.6,alpha:0.357},0).wait(1).to({y:899,alpha:0.437},0).wait(1).to({y:892.3,alpha:0.521},0).wait(1).to({y:885.6,alpha:0.604},0).wait(1).to({y:879.3,alpha:0.681},0).wait(1).to({y:873.7,alpha:0.751},0).wait(1).to({y:868.8,alpha:0.811},0).wait(1).to({y:864.7,alpha:0.861},0).wait(1).to({y:861.4,alpha:0.902},0).wait(1).to({y:858.7,alpha:0.935},0).wait(1).to({y:856.7,alpha:0.96},0).wait(1).to({y:855.2,alpha:0.979},0).wait(1).to({y:854.2,alpha:0.991},0).wait(1).to({y:853.7,alpha:0.998},0).wait(1).to({y:853.5,alpha:1},0).wait(18).to({y:852.1},0).wait(1).to({y:847.7},0).wait(1).to({y:840},0).wait(1).to({y:828.3},0).wait(1).to({y:812.1},0).wait(1).to({y:790.7},0).wait(1).to({y:763.2},0).wait(1).to({y:728.6},0).wait(1).to({y:685.6},0).wait(1).to({y:632.9},0).wait(1).to({y:569.3},0).wait(1).to({y:494.4},0).wait(1).to({y:409.4},0).wait(1).to({y:317.7},0).wait(1).to({y:224.9},0).wait(1).to({y:136.9},0).wait(1).to({y:57.4},0).wait(1).to({y:-11.7},0).wait(1).to({y:-70.8},0).wait(1).to({y:-120.7},0).wait(1).to({y:-162.4},0).wait(1).to({y:-197.1},0).wait(1).to({y:-225.7},0).wait(1).to({y:-249.1},0).wait(1).to({y:-268},0).wait(1).to({y:-282.9},0).wait(1).to({y:-294.4},0).wait(1).to({y:-302.8},0).wait(1).to({y:-308.4},0).wait(1).to({y:-311.7},0).wait(1).to({y:-312.7},0).to({_off:true},1).wait(1));

        // p1_12.png
        this.instance_5 = new lib.Symbol22();
        this.instance_5.setTransform(318.5,887,1,1,0,0,0,79.5,20);
        this.instance_5.alpha = 0.012;
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).wait(1).to({y:886.8,alpha:0.014},0).wait(1).to({y:886.2,alpha:0.022},0).wait(1).to({y:885.1,alpha:0.035},0).wait(1).to({y:883.5,alpha:0.055},0).wait(1).to({y:881.3,alpha:0.082},0).wait(1).to({y:878.4,alpha:0.118},0).wait(1).to({y:874.7,alpha:0.163},0).wait(1).to({y:870.3,alpha:0.218},0).wait(1).to({y:865,alpha:0.283},0).wait(1).to({y:859.1,alpha:0.357},0).wait(1).to({y:852.5,alpha:0.437},0).wait(1).to({y:845.8,alpha:0.521},0).wait(1).to({y:839.1,alpha:0.604},0).wait(1).to({y:832.8,alpha:0.681},0).wait(1).to({y:827.2,alpha:0.751},0).wait(1).to({y:822.3,alpha:0.811},0).wait(1).to({y:818.2,alpha:0.861},0).wait(1).to({y:814.9,alpha:0.902},0).wait(1).to({y:812.2,alpha:0.935},0).wait(1).to({y:810.2,alpha:0.96},0).wait(1).to({y:808.7,alpha:0.979},0).wait(1).to({y:807.7,alpha:0.991},0).wait(1).to({y:807.2,alpha:0.998},0).wait(1).to({y:807,alpha:1},0).wait(22).to({y:805.6},0).wait(1).to({y:801.2},0).wait(1).to({y:793.5},0).wait(1).to({y:781.8},0).wait(1).to({y:765.6},0).wait(1).to({y:744.2},0).wait(1).to({y:716.7},0).wait(1).to({y:682.1},0).wait(1).to({y:639.1},0).wait(1).to({y:586.4},0).wait(1).to({y:522.8},0).wait(1).to({y:447.9},0).wait(1).to({y:362.9},0).wait(1).to({y:271.2},0).wait(1).to({y:178.4},0).wait(1).to({y:90.4},0).wait(1).to({y:11},0).wait(1).to({y:-58.2},0).wait(1).to({y:-117.3},0).wait(1).to({y:-167.2},0).wait(1).to({y:-208.9},0).wait(1).to({y:-243.6},0).wait(1).to({y:-272.2},0).wait(1).to({y:-295.6},0).wait(1).to({y:-314.5},0).wait(1).to({y:-329.4},0).wait(1).to({y:-340.9},0).wait(1).to({y:-349.3},0).wait(1).to({y:-354.9},0).wait(1).to({y:-358.2},0).wait(1).to({y:-359.2},0).to({_off:true},1).wait(1));

        // Layer 3
        this.instance_6 = new lib.Symbol19();
        this.instance_6.setTransform(312.5,998.5,1,1,0,0,0,25.5,49.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({regX:32,regY:41.1,x:319,y:988.7},0).wait(1).to({y:984.4},0).wait(1).to({y:976.6},0).wait(1).to({y:964.9},0).wait(1).to({y:948.8},0).wait(1).to({y:927.4},0).wait(1).to({y:899.9},0).wait(1).to({y:865.3},0).wait(1).to({y:822.4},0).wait(1).to({y:769.7},0).wait(1).to({y:706.3},0).wait(1).to({y:631.5},0).wait(1).to({y:546.5},0).wait(1).to({y:455},0).wait(1).to({y:362.3},0).wait(1).to({y:274.3},0).wait(1).to({y:195},0).wait(1).to({y:125.9},0).wait(1).to({y:66.9},0).wait(1).to({y:17.2},0).wait(1).to({y:-24.5},0).wait(1).to({y:-59.1},0).wait(1).to({y:-87.7},0).wait(1).to({y:-111.1},0).wait(1).to({y:-130},0).wait(1).to({y:-144.9},0).wait(1).to({y:-156.4},0).wait(1).to({y:-164.7},0).wait(1).to({y:-170.4},0).wait(1).to({y:-173.6},0).wait(1).to({regX:25.5,regY:49.5,x:312.5,y:-166.3},0).to({_off:true},1).wait(1));

        // Layer 19
        this.instance_7 = new lib.Symbol21();
        this.instance_7.setTransform(320,1047.2,1,1,0,0,0,320,117);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(94).to({_off:false},0).wait(1).to({y:1045.8},0).wait(1).to({y:1041.5},0).wait(1).to({y:1033.7},0).wait(1).to({y:1022},0).wait(1).to({y:1005.9},0).wait(1).to({y:984.5},0).wait(1).to({y:957},0).wait(1).to({y:922.4},0).wait(1).to({y:879.5},0).wait(1).to({y:826.8},0).wait(1).to({y:763.4},0).wait(1).to({y:688.6},0).wait(1).to({y:603.6},0).wait(1).to({y:512.1},0).wait(1).to({y:419.4},0).wait(1).to({y:331.4},0).wait(1).to({y:252.1},0).wait(1).to({y:183},0).wait(1).to({y:124},0).wait(1).to({y:74.3},0).wait(1).to({y:32.6},0).wait(1).to({y:-2},0).wait(1).to({y:-30.6},0).wait(1).to({y:-54},0).wait(1).to({y:-72.9},0).wait(1).to({y:-87.8},0).wait(1).to({y:-99.3},0).wait(1).to({y:-107.6},0).wait(1).to({y:-113.3},0).wait(1).to({y:-116.5},0).wait(1).to({y:-117.6},0).to({_off:true},1).wait(1));

        // p1_2.png
        this.instance_8 = new lib.Symbol9();
        this.instance_8.setTransform(436.1,412.5,1,1,0,0,0,31,106.5);
        this.instance_8.alpha = 0.012;
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({_off:false},0).wait(1).to({x:435.9,alpha:0.014},0).wait(1).to({x:435.4,alpha:0.02},0).wait(1).to({x:434.6,alpha:0.032},0).wait(1).to({x:433.3,alpha:0.049},0).wait(1).to({x:431.6,alpha:0.073},0).wait(1).to({x:429.4,alpha:0.103},0).wait(1).to({x:426.7,alpha:0.14},0).wait(1).to({x:423.4,alpha:0.185},0).wait(1).to({x:419.5,alpha:0.239},0).wait(1).to({x:415.1,alpha:0.299},0).wait(1).to({x:410.2,alpha:0.366},0).wait(1).to({x:405,alpha:0.437},0).wait(1).to({x:399.7,alpha:0.51},0).wait(1).to({x:394.4,alpha:0.583},0).wait(1).to({x:389.4,alpha:0.651},0).wait(1).to({x:384.8,alpha:0.715},0).wait(1).to({x:380.7,alpha:0.771},0).wait(1).to({x:377.1,alpha:0.821},0).wait(1).to({x:374,alpha:0.863},0).wait(1).to({x:371.4,alpha:0.899},0).wait(1).to({x:369.2,alpha:0.928},0).wait(1).to({x:367.5,alpha:0.952},0).wait(1).to({x:366.2,alpha:0.97},0).wait(1).to({x:365.2,alpha:0.984},0).wait(1).to({x:364.5,alpha:0.993},0).wait(1).to({x:364.1,alpha:0.998},0).wait(1).to({x:364,alpha:1},0).wait(17).to({y:411.1},0).wait(1).to({y:406.8},0).wait(1).to({y:399},0).wait(1).to({y:387.3},0).wait(1).to({y:371.2},0).wait(1).to({y:349.8},0).wait(1).to({y:322.3},0).wait(1).to({y:287.7},0).wait(1).to({y:244.8},0).wait(1).to({y:192.1},0).wait(1).to({y:128.7},0).wait(1).to({y:53.9},0).wait(1).to({y:-31},0).wait(1).to({y:-122.6},0).wait(1).to({y:-215.3},0).wait(1).to({y:-303.2},0).wait(1).to({y:-382.5},0).wait(1).to({y:-451.7},0).wait(1).to({y:-510.7},0).wait(1).to({y:-560.4},0).wait(1).to({y:-602.1},0).wait(1).to({y:-636.7},0).wait(1).to({y:-665.3},0).wait(1).to({y:-688.7},0).wait(1).to({y:-707.6},0).wait(1).to({y:-722.5},0).wait(1).to({y:-734},0).wait(1).to({y:-742.3},0).wait(1).to({y:-748},0).wait(1).to({y:-751.2},0).wait(1).to({y:-752.3},0).to({_off:true},1).wait(1));

        // p1_1.png
        this.instance_9 = new lib.Symbol10();
        this.instance_9.setTransform(150,414.5,1,1,0,0,0,40,135.5);
        this.instance_9.alpha = 0.012;
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51).to({_off:false},0).wait(1).to({x:150.2,alpha:0.014},0).wait(1).to({x:151.2,alpha:0.02},0).wait(1).to({x:152.8,alpha:0.032},0).wait(1).to({x:155.2,alpha:0.049},0).wait(1).to({x:158.5,alpha:0.073},0).wait(1).to({x:162.7,alpha:0.103},0).wait(1).to({x:167.9,alpha:0.14},0).wait(1).to({x:174.2,alpha:0.185},0).wait(1).to({x:181.6,alpha:0.239},0).wait(1).to({x:190.1,alpha:0.299},0).wait(1).to({x:199.4,alpha:0.366},0).wait(1).to({x:209.4,alpha:0.437},0).wait(1).to({x:219.6,alpha:0.51},0).wait(1).to({x:229.7,alpha:0.583},0).wait(1).to({x:239.3,alpha:0.651},0).wait(1).to({x:248.1,alpha:0.715},0).wait(1).to({x:256,alpha:0.771},0).wait(1).to({x:263,alpha:0.821},0).wait(1).to({x:268.9,alpha:0.863},0).wait(1).to({x:273.9,alpha:0.899},0).wait(1).to({x:278,alpha:0.928},0).wait(1).to({x:281.3,alpha:0.952},0).wait(1).to({x:283.9,alpha:0.97},0).wait(1).to({x:285.8,alpha:0.984},0).wait(1).to({x:287,alpha:0.993},0).wait(1).to({x:287.8,alpha:0.998},0).wait(1).to({x:288,alpha:1},0).wait(17).to({y:413.1},0).wait(1).to({y:408.8},0).wait(1).to({y:401},0).wait(1).to({y:389.3},0).wait(1).to({y:373.2},0).wait(1).to({y:351.8},0).wait(1).to({y:324.3},0).wait(1).to({y:289.7},0).wait(1).to({y:246.8},0).wait(1).to({y:194.1},0).wait(1).to({y:130.7},0).wait(1).to({y:55.9},0).wait(1).to({y:-29},0).wait(1).to({y:-120.6},0).wait(1).to({y:-213.3},0).wait(1).to({y:-301.2},0).wait(1).to({y:-380.5},0).wait(1).to({y:-449.7},0).wait(1).to({y:-508.7},0).wait(1).to({y:-558.4},0).wait(1).to({y:-600.1},0).wait(1).to({y:-634.7},0).wait(1).to({y:-663.3},0).wait(1).to({y:-686.7},0).wait(1).to({y:-705.6},0).wait(1).to({y:-720.5},0).wait(1).to({y:-732},0).wait(1).to({y:-740.3},0).wait(1).to({y:-746},0).wait(1).to({y:-749.2},0).wait(1).to({y:-750.3},0).to({_off:true},1).wait(1));

        // p1_5.png
        this.instance_10 = new lib.Symbol5();
        this.instance_10.setTransform(319.3,235.9,3.4,3.4,0,0,0,41.7,42.6);
        this.instance_10.alpha = 0.012;
        this.instance_10._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({_off:false},0).wait(1).to({regX:41.5,regY:42.5,scaleX:3.37,scaleY:3.37,x:318.6,y:235.5,alpha:0.026},0).wait(1).to({scaleX:3.25,scaleY:3.25,y:235.6,alpha:0.073},0).wait(1).to({scaleX:3.04,scaleY:3.04,x:318.5,y:235.5,alpha:0.162},0).wait(1).to({scaleX:2.71,scaleY:2.71,alpha:0.296},0).wait(1).to({scaleX:2.3,scaleY:2.3,x:318.4,alpha:0.465},0).wait(1).to({scaleX:1.88,scaleY:1.88,alpha:0.638},0).wait(1).to({scaleX:1.53,scaleY:1.53,alpha:0.783},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:318.3,alpha:0.887},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:235.4,alpha:0.954},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:235.5,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,x:318.5,alpha:1},0).wait(16).to({y:235.3},0).wait(1).to({y:234.5},0).wait(1).to({y:233.2},0).wait(1).to({y:231.2},0).wait(1).to({y:228.3},0).wait(1).to({y:224.5},0).wait(1).to({y:219.6},0).wait(1).to({y:213.5},0).wait(1).to({y:206.1},0).wait(1).to({y:197.8},0).wait(1).to({y:189},0).wait(1).to({y:180.3},0).wait(1).to({y:172.5},0).wait(1).to({y:165.7},0).wait(1).to({y:160},0).wait(1).to({y:155.4},0).wait(1).to({y:151.8},0).wait(1).to({y:148.9},0).wait(1).to({y:146.8},0).wait(1).to({y:145.3},0).wait(1).to({y:144.3},0).wait(1).to({y:143.7},0).wait(1).to({y:143.5},0).wait(20).to({y:142.1},0).wait(1).to({y:137.8},0).wait(1).to({y:130},0).wait(1).to({y:118.3},0).wait(1).to({y:102.2},0).wait(1).to({y:80.8},0).wait(1).to({y:53.3},0).wait(1).to({y:18.8},0).wait(1).to({y:-24.2},0).wait(1).to({y:-76.8},0).wait(1).to({y:-140.3},0).wait(1).to({y:-215.1},0).wait(1).to({y:-300},0).wait(1).to({y:-391.6},0).wait(1).to({y:-484.3},0).wait(1).to({y:-572.2},0).wait(1).to({y:-651.5},0).wait(1).to({y:-720.7},0).wait(1).to({y:-779.7},0).wait(1).to({y:-829.4},0).wait(1).to({y:-871.1},0).wait(1).to({y:-905.7},0).wait(1).to({y:-934.3},0).wait(1).to({y:-957.7},0).wait(1).to({y:-976.6},0).wait(1).to({y:-991.5},0).wait(1).to({y:-1003},0).wait(1).to({y:-1011.3},0).wait(1).to({y:-1017},0).wait(1).to({y:-1020.2},0).wait(1).to({y:-1021.3},0).to({_off:true},1).wait(1));

        // p1_4.png
        this.instance_11 = new lib.Symbol6();
        this.instance_11.setTransform(291,284.9,4.448,4.448,0,0,0,23.6,27.2);
        this.instance_11.alpha = 0.012;
        this.instance_11._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).wait(1).to({regX:23.5,regY:27,scaleX:4.4,scaleY:4.4,x:290.5,y:284,alpha:0.026},0).wait(1).to({scaleX:4.23,scaleY:4.23,alpha:0.073},0).wait(1).to({scaleX:3.93,scaleY:3.93,alpha:0.162},0).wait(1).to({scaleX:3.46,scaleY:3.46,alpha:0.296},0).wait(1).to({scaleX:2.87,scaleY:2.87,y:283.9,alpha:0.465},0).wait(1).to({scaleX:2.26,scaleY:2.26,alpha:0.638},0).wait(1).to({scaleX:1.76,scaleY:1.76,y:283.8,alpha:0.783},0).wait(1).to({scaleX:1.39,scaleY:1.39,alpha:0.887},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.954},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:290.4,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,x:290.5,y:284,alpha:1},0).wait(13).to({y:283.8},0).wait(1).to({y:283},0).wait(1).to({y:281.7},0).wait(1).to({y:279.7},0).wait(1).to({y:276.8},0).wait(1).to({y:273},0).wait(1).to({y:268.1},0).wait(1).to({y:262},0).wait(1).to({y:254.6},0).wait(1).to({y:246.3},0).wait(1).to({y:237.5},0).wait(1).to({y:228.8},0).wait(1).to({y:221},0).wait(1).to({y:214.2},0).wait(1).to({y:208.5},0).wait(1).to({y:203.9},0).wait(1).to({y:200.3},0).wait(1).to({y:197.4},0).wait(1).to({y:195.3},0).wait(1).to({y:193.8},0).wait(1).to({y:192.8},0).wait(1).to({y:192.2},0).wait(1).to({y:192},0).wait(20).to({y:190.6},0).wait(1).to({y:186.3},0).wait(1).to({y:178.5},0).wait(1).to({y:166.8},0).wait(1).to({y:150.7},0).wait(1).to({y:129.3},0).wait(1).to({y:101.8},0).wait(1).to({y:67.2},0).wait(1).to({y:24.3},0).wait(1).to({y:-28.3},0).wait(1).to({y:-91.8},0).wait(1).to({y:-166.6},0).wait(1).to({y:-251.5},0).wait(1).to({y:-343.1},0).wait(1).to({y:-435.8},0).wait(1).to({y:-523.7},0).wait(1).to({y:-603},0).wait(1).to({y:-672.2},0).wait(1).to({y:-731.2},0).wait(1).to({y:-780.9},0).wait(1).to({y:-822.6},0).wait(1).to({y:-857.2},0).wait(1).to({y:-885.8},0).wait(1).to({y:-909.2},0).wait(1).to({y:-928.1},0).wait(1).to({y:-943},0).wait(1).to({y:-954.5},0).wait(1).to({y:-962.8},0).wait(1).to({y:-968.5},0).wait(1).to({y:-971.7},0).wait(1).to({y:-972.8},0).to({_off:true},1).wait(1));

        // p1_3.png
        this.instance_12 = new lib.Symbol7();
        this.instance_12.setTransform(324.9,332.8,4.144,4.144,0,0,0,35.2,24.8);
        this.instance_12.alpha = 0.012;
        this.instance_12._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(32).to({_off:false},0).wait(1).to({regX:35,regY:24.5,scaleX:4.09,scaleY:4.09,x:324,y:331.5,alpha:0.029},0).wait(1).to({scaleX:3.9,scaleY:3.9,alpha:0.087},0).wait(1).to({scaleX:3.55,scaleY:3.55,alpha:0.197},0).wait(1).to({scaleX:3.03,scaleY:3.03,x:323.9,alpha:0.361},0).wait(1).to({scaleX:2.42,scaleY:2.42,y:331.4,alpha:0.553},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:323.8,y:331.3,alpha:0.729},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:323.9,alpha:0.86},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:323.8,y:331.2,alpha:0.943},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,x:324,y:331.5,alpha:1},0).wait(11).to({y:331.3},0).wait(1).to({y:330.5},0).wait(1).to({y:329.2},0).wait(1).to({y:327.2},0).wait(1).to({y:324.3},0).wait(1).to({y:320.5},0).wait(1).to({y:315.6},0).wait(1).to({y:309.5},0).wait(1).to({y:302.1},0).wait(1).to({y:293.8},0).wait(1).to({y:285},0).wait(1).to({y:276.3},0).wait(1).to({y:268.5},0).wait(1).to({y:261.7},0).wait(1).to({y:256},0).wait(1).to({y:251.4},0).wait(1).to({y:247.8},0).wait(1).to({y:244.9},0).wait(1).to({y:242.8},0).wait(1).to({y:241.3},0).wait(1).to({y:240.3},0).wait(1).to({y:239.7},0).wait(1).to({y:239.5},0).wait(20).to({y:238.1},0).wait(1).to({y:233.8},0).wait(1).to({y:226},0).wait(1).to({y:214.3},0).wait(1).to({y:198.2},0).wait(1).to({y:176.8},0).wait(1).to({y:149.3},0).wait(1).to({y:114.7},0).wait(1).to({y:71.8},0).wait(1).to({y:19.2},0).wait(1).to({y:-44.3},0).wait(1).to({y:-119.1},0).wait(1).to({y:-204},0).wait(1).to({y:-295.6},0).wait(1).to({y:-388.3},0).wait(1).to({y:-476.2},0).wait(1).to({y:-555.5},0).wait(1).to({y:-624.7},0).wait(1).to({y:-683.7},0).wait(1).to({y:-733.4},0).wait(1).to({y:-775.1},0).wait(1).to({y:-809.7},0).wait(1).to({y:-838.3},0).wait(1).to({y:-861.7},0).wait(1).to({y:-880.6},0).wait(1).to({y:-895.5},0).wait(1).to({y:-907},0).wait(1).to({y:-915.3},0).wait(1).to({y:-921},0).wait(1).to({y:-924.2},0).wait(1).to({y:-925.3},0).to({_off:true},1).wait(1));

        // p1_0.png
        this.instance_13 = new lib.Symbol8();
        this.instance_13.setTransform(360,296.5,6.107,6.107,0,0,0,15,14.5);
        this.instance_13.alpha = 0.012;
        this.instance_13._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(35).to({_off:false},0).wait(1).to({scaleX:6,scaleY:6,alpha:0.033},0).wait(1).to({scaleX:5.62,scaleY:5.62,alpha:0.107},0).wait(1).to({scaleX:4.89,scaleY:4.89,alpha:0.246},0).wait(1).to({scaleX:3.87,scaleY:3.87,alpha:0.445},0).wait(1).to({scaleX:2.78,scaleY:2.78,alpha:0.656},0).wait(1).to({scaleX:1.92,scaleY:1.92,alpha:0.822},0).wait(1).to({scaleX:1.37,scaleY:1.37,alpha:0.929},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(9).to({y:296.3},0).wait(1).to({y:295.5},0).wait(1).to({y:294.2},0).wait(1).to({y:292.2},0).wait(1).to({y:289.3},0).wait(1).to({y:285.5},0).wait(1).to({y:280.6},0).wait(1).to({y:274.5},0).wait(1).to({y:267.1},0).wait(1).to({y:258.8},0).wait(1).to({y:250},0).wait(1).to({y:241.3},0).wait(1).to({y:233.5},0).wait(1).to({y:226.7},0).wait(1).to({y:221},0).wait(1).to({y:216.4},0).wait(1).to({y:212.8},0).wait(1).to({y:209.9},0).wait(1).to({y:207.8},0).wait(1).to({y:206.3},0).wait(1).to({y:205.3},0).wait(1).to({y:204.7},0).wait(1).to({y:204.5},0).wait(20).to({y:203.1},0).wait(1).to({y:198.8},0).wait(1).to({y:191},0).wait(1).to({y:179.3},0).wait(1).to({y:163.2},0).wait(1).to({y:141.8},0).wait(1).to({y:114.3},0).wait(1).to({y:79.7},0).wait(1).to({y:36.8},0).wait(1).to({y:-15.8},0).wait(1).to({y:-79.3},0).wait(1).to({y:-154.1},0).wait(1).to({y:-239},0).wait(1).to({y:-330.6},0).wait(1).to({y:-423.3},0).wait(1).to({y:-511.2},0).wait(1).to({y:-590.5},0).wait(1).to({y:-659.7},0).wait(1).to({y:-718.7},0).wait(1).to({y:-768.4},0).wait(1).to({y:-810.1},0).wait(1).to({y:-844.7},0).wait(1).to({y:-873.3},0).wait(1).to({y:-896.7},0).wait(1).to({y:-915.6},0).wait(1).to({y:-930.5},0).wait(1).to({y:-942},0).wait(1).to({y:-950.3},0).wait(1).to({y:-956},0).wait(1).to({y:-959.2},0).wait(1).to({y:-960.3},0).to({_off:true},1).wait(1));

        // logo.png
        this.instance_14 = new lib.Symbol4();
        this.instance_14.setTransform(320.3,435.3,5.777,5.777,0,0,0,51.8,35.8);
        this.instance_14.alpha = 0.012;
        this.instance_14._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(22).to({_off:false},0).to({scaleX:5.71,scaleY:5.71,x:320.2,y:435.2,alpha:0.031},1).wait(1).to({regX:51.5,regY:35.5,scaleX:5.48,scaleY:5.48,x:318.4,y:433.5,alpha:0.078},0).wait(1).to({scaleX:5.05,scaleY:5.05,alpha:0.166},0).wait(1).to({scaleX:4.4,scaleY:4.4,y:433.4,alpha:0.3},0).wait(1).to({scaleX:3.59,scaleY:3.59,x:318.3,alpha:0.468},0).wait(1).to({scaleX:2.75,scaleY:2.75,y:433.3,alpha:0.64},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:318.2,y:433.2,alpha:0.784},0).wait(1).to({scaleX:1.55,scaleY:1.55,alpha:0.888},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.954},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,x:318.5,y:433.5,alpha:1},0).wait(20).to({y:433.9},0).wait(1).to({y:435.2},0).wait(1).to({y:437.6},0).wait(1).to({y:441.2},0).wait(1).to({y:446.3},0).wait(1).to({y:453.1},0).wait(1).to({y:461.8},0).wait(1).to({y:472.7},0).wait(1).to({y:485.9},0).wait(1).to({y:500.7},0).wait(1).to({y:516.4},0).wait(1).to({y:531.8},0).wait(1).to({y:545.8},0).wait(1).to({y:557.9},0).wait(1).to({y:568},0).wait(1).to({y:576.2},0).wait(1).to({y:582.7},0).wait(1).to({y:587.8},0).wait(1).to({y:591.6},0).wait(1).to({y:594.3},0).wait(1).to({y:596.2},0).wait(1).to({y:597.2},0).wait(1).to({y:597.5},0).wait(20).to({y:596.1},0).wait(1).to({y:591.8},0).wait(1).to({y:584},0).wait(1).to({y:572.3},0).wait(1).to({y:556.2},0).wait(1).to({y:534.8},0).wait(1).to({y:507.3},0).wait(1).to({y:472.7},0).wait(1).to({y:429.8},0).wait(1).to({y:377.1},0).wait(1).to({y:313.7},0).wait(1).to({y:238.9},0).wait(1).to({y:153.9},0).wait(1).to({y:62.4},0).wait(1).to({y:-30.3},0).wait(1).to({y:-118.2},0).wait(1).to({y:-197.5},0).wait(1).to({y:-266.7},0).wait(1).to({y:-325.7},0).wait(1).to({y:-375.4},0).wait(1).to({y:-417.1},0).wait(1).to({y:-451.7},0).wait(1).to({y:-480.3},0).wait(1).to({y:-503.7},0).wait(1).to({y:-522.6},0).wait(1).to({y:-537.5},0).wait(1).to({y:-549},0).wait(1).to({y:-557.3},0).wait(1).to({y:-563},0).wait(1).to({y:-566.2},0).wait(1).to({y:-567.3},0).to({_off:true},1).wait(1));

        // Layer 6
        this.instance_15 = new lib.Symbol1();
        this.instance_15.setTransform(319.9,502.8,1.875,1.875,0,0,0,319.9,52.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(17).to({regX:320,regY:52.5,scaleX:1.87,scaleY:1.87,x:320.1,y:502.6},0).wait(1).to({scaleX:1.87,scaleY:1.87,y:503},0).wait(1).to({scaleX:1.85,scaleY:1.85,y:503.6},0).wait(1).to({scaleX:1.83,scaleY:1.83,y:504.6},0).wait(1).to({scaleX:1.79,scaleY:1.79,y:505.9},0).wait(1).to({scaleX:1.75,scaleY:1.75,y:507.9},0).wait(1).to({scaleX:1.68,scaleY:1.68,y:510.5},0).wait(1).to({scaleX:1.6,scaleY:1.6,y:514},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:320.2,y:518.3},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:320.1,y:522.9},0).wait(1).to({scaleX:1.28,scaleY:1.28,y:527},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:530.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:320.2,y:533.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:320.1,y:535.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:536.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:320.2,y:537.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:320.1,y:538},0).wait(1).to({scaleX:1,scaleY:1,x:320.2,y:538.4},0).wait(1).to({scaleX:1,scaleY:1,x:320,y:538.5},0).wait(18).to({y:538.9},0).wait(1).to({y:540.2},0).wait(1).to({y:542.6},0).wait(1).to({y:546.3},0).wait(1).to({y:551.4},0).wait(1).to({y:558.3},0).wait(1).to({y:567.2},0).wait(1).to({y:578.2},0).wait(1).to({y:591.5},0).wait(1).to({y:606.5},0).wait(1).to({y:622.5},0).wait(1).to({y:638},0).wait(1).to({y:652.2},0).wait(1).to({y:664.5},0).wait(1).to({y:674.7},0).wait(1).to({y:683},0).wait(1).to({y:689.5},0).wait(1).to({y:694.7},0).wait(1).to({y:698.5},0).wait(1).to({y:701.3},0).wait(1).to({y:703.1},0).wait(1).to({y:704.2},0).wait(1).to({y:704.5},0).wait(20).to({y:703.1},0).wait(1).to({y:698.8},0).wait(1).to({y:691},0).wait(1).to({y:679.3},0).wait(1).to({y:663.2},0).wait(1).to({y:641.8},0).wait(1).to({y:614.3},0).wait(1).to({y:579.7},0).wait(1).to({y:536.8},0).wait(1).to({y:484.1},0).wait(1).to({y:420.7},0).wait(1).to({y:345.9},0).wait(1).to({y:260.9},0).wait(1).to({y:169.4},0).wait(1).to({y:76.7},0).wait(1).to({y:-11.2},0).wait(1).to({y:-90.5},0).wait(1).to({y:-159.7},0).wait(1).to({y:-218.7},0).wait(1).to({y:-268.4},0).wait(1).to({y:-310.1},0).wait(1).to({y:-344.7},0).wait(1).to({y:-373.3},0).wait(1).to({y:-396.7},0).wait(1).to({y:-415.6},0).wait(1).to({y:-430.5},0).wait(1).to({y:-442},0).wait(1).to({y:-450.3},0).wait(1).to({y:-456},0).wait(1).to({y:-459.2},0).wait(1).to({y:-460.3},0).to({_off:true},1).wait(1));

        // p1_10.png
        this.instance_16 = new lib.Symbol3();
        this.instance_16.setTransform(-91.5,508.5,1,1,0,0,0,140.5,312.5);
        this.instance_16._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(16).to({_off:false},0).wait(1).to({regX:135.1,regY:310.1,x:-96.3,y:506.1},0).wait(1).to({x:-94.4},0).wait(1).to({x:-91},0).wait(1).to({x:-86},0).wait(1).to({x:-79.2},0).wait(1).to({x:-70.4},0).wait(1).to({x:-59.6},0).wait(1).to({x:-46.6},0).wait(1).to({x:-31.6},0).wait(1).to({x:-14.9},0).wait(1).to({x:2.9},0).wait(1).to({x:21.2},0).wait(1).to({x:39.2},0).wait(1).to({x:56.2},0).wait(1).to({x:71.6},0).wait(1).to({x:85.3},0).wait(1).to({x:97.1},0).wait(1).to({x:107.1},0).wait(1).to({x:115.3},0).wait(1).to({x:121.8},0).wait(1).to({x:126.9},0).wait(1).to({x:130.7},0).wait(1).to({x:133.2},0).wait(1).to({x:134.7},0).wait(1).to({regX:140.5,regY:312.5,x:140.5,y:508.5},0).wait(54).to({regX:135.1,regY:310.1,x:135.1,y:504.7},0).wait(1).to({y:500.4},0).wait(1).to({y:492.6},0).wait(1).to({y:480.9},0).wait(1).to({y:464.8},0).wait(1).to({y:443.4},0).wait(1).to({y:415.9},0).wait(1).to({y:381.3},0).wait(1).to({y:338.4},0).wait(1).to({y:285.8},0).wait(1).to({y:222.3},0).wait(1).to({y:147.5},0).wait(1).to({y:62.6},0).wait(1).to({y:-29},0).wait(1).to({y:-121.7},0).wait(1).to({y:-209.6},0).wait(1).to({y:-288.9},0).wait(1).to({y:-358.1},0).wait(1).to({y:-417.1},0).wait(1).to({y:-466.8},0).wait(1).to({y:-508.5},0).wait(1).to({y:-543.1},0).wait(1).to({y:-571.7},0).wait(1).to({y:-595.1},0).wait(1).to({y:-614},0).wait(1).to({y:-628.9},0).wait(1).to({y:-640.4},0).wait(1).to({y:-648.7},0).wait(1).to({y:-654.4},0).wait(1).to({y:-657.6},0).wait(1).to({regX:140.5,regY:312.5,x:140.5,y:-656.3},0).to({_off:true},1).wait(1));

        // Layer 5
        this.instance_17 = new lib.Symbol2();
        this.instance_17.setTransform(320,491,1,1,0,0,0,320,111);

        this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:0.012},16).wait(79).to({y:489.6},0).wait(1).to({y:485.3},0).wait(1).to({y:477.5},0).wait(1).to({y:465.8},0).wait(1).to({y:449.7},0).wait(1).to({y:428.3},0).wait(1).to({y:400.8},0).wait(1).to({y:366.2},0).wait(1).to({y:323.3},0).wait(1).to({y:270.6},0).wait(1).to({y:207.2},0).wait(1).to({y:132.4},0).wait(1).to({y:47.5},0).wait(1).to({y:-44.1},0).wait(1).to({y:-136.8},0).wait(1).to({y:-224.7},0).wait(1).to({y:-304},0).wait(1).to({y:-373.2},0).wait(1).to({y:-432.2},0).wait(1).to({y:-481.9},0).wait(1).to({y:-523.6},0).wait(1).to({y:-558.2},0).wait(1).to({y:-586.8},0).wait(1).to({y:-610.2},0).wait(1).to({y:-629.1},0).wait(1).to({y:-644},0).wait(1).to({y:-655.5},0).wait(1).to({y:-663.8},0).wait(1).to({y:-669.5},0).wait(1).to({y:-672.7},0).wait(1).to({y:-673.8},0).to({_off:true},1).wait(1));

        // Layer 2
        this.instance_18 = new lib.Symbol18();
        this.instance_18.setTransform(320,524,1,1,0,0,0,320,524);

        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(95).to({y:522.7},0).wait(1).to({y:518.3},0).wait(1).to({y:510.5},0).wait(1).to({y:498.9},0).wait(1).to({y:482.7},0).wait(1).to({y:461.4},0).wait(1).to({y:433.9},0).wait(1).to({y:399.3},0).wait(1).to({y:356.3},0).wait(1).to({y:303.7},0).wait(1).to({y:240.2},0).wait(1).to({y:165.4},0).wait(1).to({y:80.5},0).wait(1).to({y:-11.1},0).wait(1).to({y:-103.8},0).wait(1).to({y:-191.7},0).wait(1).to({y:-271},0).wait(1).to({y:-340.2},0).wait(1).to({y:-399.2},0).wait(1).to({y:-448.9},0).wait(1).to({y:-490.6},0).wait(1).to({y:-525.2},0).wait(1).to({y:-553.8},0).wait(1).to({y:-577.2},0).wait(1).to({y:-596.1},0).wait(1).to({y:-611},0).wait(1).to({y:-622.5},0).wait(1).to({y:-630.8},0).wait(1).to({y:-636.5},0).wait(1).to({y:-639.7},0).wait(1).to({y:-640.8},0).to({_off:true},1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-280,-536,1237,1584);


// stage content:



    (lib.skin = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // holder
        this.holder_mc = new lib.holder();
        this.holder_mc.setTransform(65,88,1,1,0,0,0,65,88);

        this.timeline.addTween(cjs.Tween.get(this.holder_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(40,-12,1237,5718);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;