'use strict';

$(() => {

/*=================================================
  スマホでの100vhの見え方の違いを調節（#main-visual)
  ===================================================*/
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  /*=================================================
  無料体験ボタン
  ===================================================*/
  
  let experienceButtonSmall = $('.experience-button-sm');
  let experienceButtonLarge = $('.experience-button-lg');
  let windowSm = 768;

  experienceButtonSmall.hide();
  experienceButtonLarge.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300 && $(this).width() <= windowSm) {
        experienceButtonSmall.fadeIn();
      } else {
        experienceButtonSmall.fadeOut();
     }
   });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300 && $(this).width() > windowSm) {
        experienceButtonLarge.fadeIn();
      } else {
        experienceButtonLarge.fadeOut();
     }
   });

  /*=================================================
  ハンバーガ―メニュー共通処理
  ===================================================*/
  $('.hamburger').on('click', function() {
    hamburger();
  });

  $('#navi a').on('click', function() {
    hamburger();
  });
/*=================================================
  ハンバーガ―メニュー
===================================================*/

function hamburger() {
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    $('#navi').addClass('active');
    $('.hamburger > p').text('CLOSE');
  } else {
    $('#navi').removeClass('active');
    $('.hamburger > p').text('MENU');
  }
}

/*=================================================
  スムーススクロール
  ===================================================*/
  
  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");

    let target = $(href == "#" || href == "" ? 'html' : href);

    let position = target.offset().top;
    
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

   /*=================================================
  交差監視API
  ===================================================*/

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');
 

  targets.forEach(target => {
    observer.observe(target);
  });

  /*=================================================
  Google Form
  ===================================================*/

  $(document).ready(function () {

    $('#mG61Hd').submit(function (event) {
      var formData = $('#mG61Hd').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRJmJBrRmiyxaRd2_n_LKvzHu_WrAkRY20uOF_AcUhDv-qQA/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".end-message").slideDown();
            $(".submit-btn").fadeOut();
            window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });

});