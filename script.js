 var swiper = new Swiper('.swiper-container', {
			      effect: 'coverflow',
			      grabCursor: true,
			      keyboard:true,
			      centeredSlides: true,
			      slideToClickedSlide:true,
			      slidesPerView: 'auto',
			      initialSlide:'3',
			      coverflowEffect: {
			        rotate: 50,
			        stretch: 0,
			        depth: 100,
			        modifier: 1,
			        slideShadows : true,
			      },
			      pagination: {
			        el: '.swiper-pagination',
			      },
			    });


document.getElementById("date").innerHTML = Date();

$(function(){
  $(".vote").click(function(){
    var count = parseInt($("~ .count", this).text());
    
    if($(this).hasClass("up")) {
      var count = count + 1;
      
       $("~ .count", this).text(count);
    } else {
      var count = count - 1;
       $("~ .count", this).text(count);     
    }
    
    
  });
});
