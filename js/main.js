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
  let freeExperience = $('.free-experience');
  freeExperience.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      freeExperience.fadeIn();

    } else {
      freeExperience.fadeOut();
    }
  });

  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  $('.hamburger').on('click', function() {
    hamburger();
  });

  $('#navi a').on('click', function() {
    hamburger();
  });
/*=================================================
  ハンバーガ―メニュー共通処理
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

});