$(document).ready(function() {
	//js for web ca nhan

	new WOW().init();
	$(".clickme").click(function(){
		$("header nav div.navbar-toi").toggleClass("hien");
	});
	$(window).scroll(function(){
		var t = $(window).scrollTop();
		if(t>64)
		{
			$("header nav.navbar.navbar-light.bg-faded").addClass("bura");
		}
		else{
			$("header nav.navbar.navbar-light.bg-faded").removeClass("bura");
		}
	});
	$("header nav.navbar.navbar-light.bg-faded ul.nav.navbar-nav li.nav-item a.nav-link").click(function(){
		var target = $( $(this).attr('href') );
        $('.body').animate({
            scrollTop:target
        },2000);
	});
	//js cho web tin tuc
	//scroll chuot

			// for trangnhat2
		$('#scroll-trangnhat2').enscroll({
		    horizontalScrolling: true,
		    verticalTrackClass: 'vertical-track1',
		    verticalHandleClass: 'vertical-handle1',
    	});

    	//for khuenmai
    	$('#scroll-khuyenmai').enscroll({
		    horizontalScrolling: true,
		    verticalTrackClass: 'vertical-track2',
		    verticalHandleClass: 'vertical-handle2',
    	});
    //menu reponsive
    $("header button.navbar-toggler-right.left").click(function(){
    	$("#my-menu").toggleClass("hienra");
    });
});