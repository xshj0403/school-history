$(window).on('scroll', function () {
  let value = $(this).scrollTop();

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

  $('#mask').css('filter', `hue-rotate(${hueRotate}deg)`);

  //背景亮度
  let targetTop = $('.bgdark').offset().top;
  let targetHeight = $('.bgdark').outerHeight();

  // 若滑動進入該區塊
  if (scrollY + $(window).height() > targetTop && scrollY < targetTop + targetHeight) {
    $('.bg-video').css('filter', 'brightness(0.2)');
  } else {
    $('.bg-video').css('filter', 'brightness(0.8)');
  }
  // 頁面底部
  let windowHeight = $(window).height();               // 視窗高度
  let documentHeight = $(document).height();           // 整份頁面高度

  if (value + windowHeight >= documentHeight - 5) {  // 到底部（可微調5避免卡住）
    $('.bg-video').css('filter', 'brightness(0.2)');
  }
});
