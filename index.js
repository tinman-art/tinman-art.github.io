
var imagesAnimateTime = 0150;
var fadeInOutTime = 300;

$(".category1").hover(function() {
        $(".category1").animate({"width":"105%"}, imagesAnimateTime);
        $(".category2").animate({"width":"95%"}, imagesAnimateTime);
    }
);

$(".category2").hover(function() {
        $(".category2").animate({"width":"105%"}, imagesAnimateTime);
        $(".category1").animate({"width":"95%"}, imagesAnimateTime);
    }
);

$(".category1").mouseout(function() { 
    $(".category2").animate({"width":"100%"}, imagesAnimateTime);
    $(".category1").animate({"width":"100%"}, imagesAnimateTime);
});

$(".category2").mouseout(function() { 
    $(".category2").animate({"width":"100%"}, imagesAnimateTime);
    $(".category1").animate({"width":"100%"}, imagesAnimateTime);
});

$(".category1").click(function() {
    $(".menu").fadeOut(fadeInOutTime);
    $(".gallery1").fadeIn(fadeInOutTime);
})

$(".category2").click(function() {
    $(".menu").fadeOut(fadeInOutTime);
    $(".gallery2").fadeIn(fadeInOutTime);
})