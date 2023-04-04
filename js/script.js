$(document).ready(function(){
      const container = document.querySelector(".main-page-txt-container");

      // main-txt-effect
      document.body.addEventListener("mousemove", e => {
            const x = e.clientX;
            const y = e.clientY -200;
                  gsap.to(container, {
                  y: y
            });
            gsap.to(".main-page-txt-mask", {
                  y: -y
            });
      });


      const loader = $('.loading-page');
      const html = $('html');
      html.css({'overflow' : 'hidden'}); //로딩 중 스크롤 방지

      $(window).on('load', ()=>{
      setTimeout(() => { //  <-* 로딩속도 구현
      loader.fadeOut(200);  
      }, 1500);  //  <-* 로딩속도 구현

      })


      // contact
      $('.thd-btn').click(function(){
            $('.contact-pop-up-bg').addClass('on');
      });

      $('.contact-pop-up-bg').click(function(e){
            if(e.target == e.currentTarget){
            $('.contact-pop-up-bg').removeClass('on');
            }
            // $('.contact-pop-up-bg').removeClass('on');
      });
      $('.close-btn').click(function(){
            $('.contact-pop-up-bg').removeClass('on');
      });

      // loading

      $('.dark-mode-btn').click(function(){
            $(this).addClass('off');
            $('.light-mode-btn').addClass('on');
            $('body').addClass('dark');
            $('.header-wrap').addClass('hd-dark');
            $('.main-page-txt-wrap').addClass('main-wrap-dark');
            $('.main-page-txt').addClass('main-txt-dark');
            $('.main-page-btn-wrap').addClass('main-btn-dark');
            $('.main-page-btn-wrap div').addClass('main-div-dark');
            $('.contact-pop-up').addClass('contact-dark');
      });
      
      $('.light-mode-btn').click(function(){
            $(this).removeClass('on');
            $('.dark-mode-btn').removeClass('off');
            $('body').removeClass('dark');
            $('.header-wrap').removeClass('hd-dark');
            $('.main-page-txt-wrap').removeClass('main-wrap-dark');
            $('.main-page-txt').removeClass('main-txt-dark');
            $('.main-page-btn-wrap').removeClass('main-btn-dark');
            $('.main-page-btn-wrap div').removeClass('main-div-dark');
            $('.contact-pop-up').removeClass('contact-dark');
      });




});
