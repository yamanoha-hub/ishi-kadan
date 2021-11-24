'use stript';

$(function() {

  // ファーストビューアニメーション
  



  // タブをクリック
  $('.news__tab li').click(function() {

    // タブのボーダー削除
    $('.news__tab li').removeClass('tab-active');
    // クリックしたタブにボーダーをつける
    $(this).addClass('tab-active');
    
    // 全てのコンテンツ非表示
    // $(".news__contents__item").hide();

    // クリックした要素のIDを取得
    var IDname = $(this).attr('id');
    // 確認
    console.log(IDname);
    

    // $('.news__contents a[href != "#"]').hide();
    $('.news__contents a').hide();

    // $('.news__contents a[href = "#others"]').show();

    // IDnameとnews__contents aのhrefがあっていたら
    if(IDname = 'date-info') {
      $('.news__contents a[href = "#date-info"]').show();
    } else if(IDname = 'others') {
      $('.news__contents a[href = "#others"]').show();
    } else {
      $(".news__contents a").show();
    }

    return false;
  });
});

