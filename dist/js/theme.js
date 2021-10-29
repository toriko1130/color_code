/*  =====================  init  ========================  */

$(document).ready(function() {

	$(window).resize(function(){
		imgResize();
		// ProductSwiper();
		console.log("BBBBB",$('.rImg').width(),$('.rImg').height())
	});


	ProductSwiper();// 輪播設置
	imgResize();// 圖框正方形
	console.log("AAAAA",$('.rImg').width(),$('.rImg').height())
});


/*  =================  function  ================  */

//輪播設置
function ProductSwiper() {
	var productSwiper  = new Swiper ('.product-swiper',{

		slidesPerView: 5,
		centeredSlides: true,
		loop: true,
		pagination: {
	      el: '.swiper-pagination',
	    },
	    navigation: {
	      nextEl: '.button-next',
	      prevEl: '.button-prev',
	    },
	    autoplay: {
            delay: 5000,
        },
        breakpoints:{
			767: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3,
			},
        },
		// breakpoints: {
		//     320: {  //当屏幕宽度小于等于320
		//       slidesPerView: 1,
		//       // spaceBetween: 15
		//     },
		//     767: {  //当屏幕宽度小于等于768
		//       slidesPerView: 2,
		//       // spaceBetween: 20
		//     },
		//     1280: {  //当屏幕宽度小于等于1280
		//       slidesPerView: 4,
		//       // spaceBetween: 30
		//     }
		// }

	})

}




// 圖框正方形
function imgResize(){

    var ary = ($('.rImg'));
    for (var i = 0; i < ary.length; i++) {

        var num = $(ary[i]).width();
        $(ary[i]).css("height",num);

    }


}
