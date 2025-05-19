$(window).on('scroll', function () {
  //滾動卷軸的高度數值
  let value = $(this).scrollTop();

  // 開門動畫
  $('#title').css('margin-top', value * 2.0 + 'px');
  $('#tree-left').css('left', value * -0.5 + 'px');
  $('#tree-right').css('left', value * 0.7 + 'px');
  $('#gate-left').css('left', value * -0.8 + 'px');
  $('#gate-right').css('left', value * 0.8 + 'px');

  // title透明度
  let opacity = 1 - value / 650;
  opacity = Math.max(0, Math.min(1, opacity));
  $('#title').css('opacity', opacity);

  // 根據透明度控制h1是否能hover
  if (opacity < 0.05) {
    $('#title').css('pointer-events', 'none');
  } else {
    $('#title').css('pointer-events', 'auto');
  }

  //漸層背景動畫
  let hueRotate = value % 360;
  // 頁面底部
  let windowHeight = $(window).height();               // 視窗高度
  let documentHeight = $(document).height();           // 整份頁面高度
  //背景亮度
  let targetTop = $('.bgdark').offset().top;
  let targetHeight = $('.bgdark').outerHeight();

  $('#mask').css('filter', `hue-rotate(${hueRotate}deg)`);


  // 若滑動進入該區塊，調整背景影片亮度
  if (value + $(window).height() > targetTop && value < targetTop + targetHeight) {
    $('.bg-video').css('filter', 'brightness(0.1)');
  } else {
    $('.bg-video').css('filter', 'brightness(0.5)');
  }

  if (value + windowHeight >= documentHeight - 200) {
    // 到底部時變成黑色遮罩
    $('#mask').css({
      'filter': 'brightness(0.1)',
      'background': 'rgba(0, 0, 0,0.8)',
      'mix-blend-mode': 'normal',
      'opacity': '1'
    });
  } else {
    // 平時保持 hue-rotate 漸層遮罩
    $('#mask').css({
      'filter': `hue-rotate(${hueRotate}deg)`,
      'background': 'linear-gradient(135deg, #00ffff, #ff00ff)',
      'mix-blend-mode': 'screen',
      'opacity': '0.3'
    });
  }
});
