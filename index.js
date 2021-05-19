
function initGridDesign() {
	var iso2 = new Isotope('#gridDesign', {
		// options
		itemSelector: '.grid-item',
		layoutMode: 'masonry'
	});
	window.dispatchEvent(new Event('resize'));
}

function initGridIlustration() {
	var iso = new Isotope("#gridIlustration", {
		// options
		itemSelector: '.grid-item',
		layoutMode: 'masonry'
	});
	window.dispatchEvent(new Event('resize'));
}


let modal = new bootstrap.Modal(document.getElementById("modal-7"));

function openModal() {
	modal.show();
}

let imagesAnimateTime = 0150;
let fadeInOutTime = 300;

$(".category1").hover(function () {
	$(".category1").animate({ "width": "105%" }, imagesAnimateTime);
	$(".category2").animate({ "width": "95%" }, imagesAnimateTime);
}
);

$(".category2").hover(function () {
	$(".category2").animate({ "width": "105%" }, imagesAnimateTime);
	$(".category1").animate({ "width": "95%" }, imagesAnimateTime);
}
);

$(".category1").mouseout(function () {
	$(".category2").animate({ "width": "100%" }, imagesAnimateTime);
	$(".category1").animate({ "width": "100%" }, imagesAnimateTime);
});

$(".category2").mouseout(function () {
	$(".category2").animate({ "width": "100%" }, imagesAnimateTime);
	$(".category1").animate({ "width": "100%" }, imagesAnimateTime);
});

$(".category1").click(function () {
	$(".menu").hide();
	initGridDesign();
	$(".gallery1").fadeIn(fadeInOutTime);
})

$(".category2").click(function () {
	$(".menu").hide();
	initGridIlustration();
	$(".gallery2").fadeIn(fadeInOutTime);
})

function showMenu() {
	$(".gallery1").hide();
	$(".gallery2").hide();
	$(".menu").fadeIn(fadeInOutTime);
}