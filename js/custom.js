$('.floating-top-btn').fadeOut();
$(window).scroll(function(){
    var wscroll = $(this).scrollTop();
	if(wscroll > 50){
	 $(".navbar").removeClass("fade-nav");
	}
	else{
	  $(".navbar").addClass("fade-nav");
	}
	// if ($(this).scrollTop()) {
    //     $('.floating-top-btn').fadeIn();
    // } else {
    //     $('.floating-top-btn').fadeOut();
    // }
});








