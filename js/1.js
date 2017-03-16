$(document).ready(function() {
	new WOW().init();
	$(".clickme").click(function(){
		$("header nav div.navbar-toi").toggleClass("hien");
	});
	$(window).scroll(function(){
		var t = $(window).scrollTop();
		if(t>66)
		{
			$("header nav.navbar.navbar-light.bg-faded").addClass("bura");
		}
		else{
			$("header nav.navbar.navbar-light.bg-faded").removeClass("bura");
		}
	});
	$("header nav.navbar.navbar-light.bg-faded ul.nav.navbar-nav li.nav-item a").click(function(){
		var r = $(this).attr("href");
		var t=$(r).offset().top;
		t=t+500;
		$(window).animate({top:t},function(){

		});
	});
});