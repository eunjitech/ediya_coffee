$(function () {
  // menu twodepth
  $('.main_gnb>li').hover(function () {
    $('.nav_bg').stop().slideDown(400);
    $('ul.dep').stop().slideDown(400);
    $(this).find('>a').toggleClass('long');
  }, function () {
    $('.nav_bg').stop().slideUp(400);
    $('ul.dep').stop().slideUp(400);
    $(this).find('>a').toggleClass('long');
  });

  // 슬라이드
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    calculateHeight:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  new Swiper('.swiper-container');

  //모바일 메뉴
  $('.main_mob_gnb>.dep li').hide();
  $('.main_mob_gnb>ul>li').click(function () {
    if ($(this).find('li').is(":visible") != true) {
      $(this).find('li').slideDown();
    } else {
      $(this).find('li').slideUp();
    }
  });
  $('.nav_btn a').click(function () {
    $('.mob_gnb').css({ right: 0 });
    $('.mob_gnb_wrap').animate({ right: 0 }, 300);
    $('.nav_close').show();
  });
  $('.nav_close').click(function () {
    $('.mob_gnb').css({ right: -100 + '%' });
    $('.mob_gnb_wrap').animate({ right: -100 + '%' }, 300);
    $('.nav_close').hide();
  });

  //사이즈 커지면 모바일 메뉴 사라지기
  var t = 0;
  $(window).resize(function () {
    windowResizeFn();
  });

  function windowResizeFn() {
    if ($(window).innerWidth() > 1090) {
      if (t == 0) {
        t = 1;
        $('.nav_close').trigger('click');
      }
    } else {
      t = 0;
    }
  }

  //scroll내리면 헤더 고정
  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop() || $(this).pageYOffset;
    var wwidth = $(window).width();
    if (scrollTop > 20 && wwidth > 1179) {
      $('#header').css({ "position": "fixed", "background": "#fff", "top": "-70px", "z-index": "99", "border": "1px solid #ddd" });
    }else if(scrollTop > 20){
        $('#header').css({ "position": "fixed", "background": "#fff", "top": "-32px", "z-index": "99" });
    } else {
      $('#header').css({ "position": "relative", "background": "none", "top": "0" });
    }
  });

  //scroll내리면 culture box 올라오게 하기
  $(window).scroll(function () {
    culturebox = $('.culture .block_wrap ul li');
    sct = $(window).scrollTop();
    cultureHeight = $('.culture').offset();

    if (sct > cultureHeight.top - 300) {
      culturebox.filter(':nth-child(2)').stop().animate({ opacity: 1, top: 0 }, 1000);
      culturebox.filter(':nth-child(1)').delay(600).animate({ opacity: 1, top: 0 }, 1000);
      culturebox.filter(':nth-child(3)').delay(1200).animate({ opacity: 1, top: 0 }, 1000);
    }


    //scroll내리면 coffee_box 올라오게 하기
    coffeeHeight = $('.coffee_lab').offset();

    if (sct > coffeeHeight.top - 300) {
      $('.coffee_box1').stop().animate({ opacity: 1, top: 0 }, 1000);
      $('.coffee_box2').delay(600).animate({ opacity: 1, top: 0 }, 1000);
    }
  });

});