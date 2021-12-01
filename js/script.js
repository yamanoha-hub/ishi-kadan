'use stript';

$(function() {

  // ハンバーガー サイドバー
  $(".hamburger").click(function() {
    $(this).toggleClass('hamburger__active');
    if($('.hamburger').hasClass('hamburger__active')) {
      $('.header__nav').show();
      $('.sub-header__nav').show();
    } else {
      $('.header__nav').hide();
      $('.sub-header__nav').hide();
    }
  });

  // モーダル
  $('.btn-modal').click(function() {
    $('.modal').show();
    return false;
  });
  $('.modal__contact__close').click(function() {
    $('.modal').hide();
    return false;
  });


  // ヘッダー表示
  $(window).scroll(function () {
    // .mv__textの高さを取得してheader_showに代入
    var Header_show = $('#header-show').offset();

    // header_showより、スクロールされていたら
    if ($(this).scrollTop() > Header_show.top) {
      $('header').fadeIn();
    } else {
      $('header').fadeOut(); 
    }
  });

  // タブをクリック
  $('.news__tab li').click(function() {

    // タブのボーダー削除
    $('.news__tab li').removeClass('tab-active');
    // クリックしたタブにボーダーをつける
    $(this).addClass('tab-active');

    // クリックした要素のIDを取得
    var IDname = $(this).attr('id');
    // 確認
    // console.log(IDname);

    // 全てのタグを削除
    $('.news__contents a').hide();

    // IDnameとnews__contents aのhrefがあっていたら表示
    if(IDname == 'date-info') {
      $('.news__contents a[href = "#date-info"]').show();
    } else if(IDname == 'others') {
      $('.news__contents a[href = "#others"]').show();
    } else {
      $(".news__contents a").show();
    }

    return false;
  });
});

