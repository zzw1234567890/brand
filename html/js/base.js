
$(function() {
  // 搜索框
  $('span.nav-search-icon').find('img').click(function() {
    $(this).prev('input').fadeToggle(300);
  });
  // 移动端导航栏显示隐藏
  $('span.nav-menu-icon').click(function() {
    $('ul.main-nav-list').fadeToggle(300);
  })
})
