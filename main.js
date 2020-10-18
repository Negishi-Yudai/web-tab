/**
 * selectorに該当するタブを表示する
 */
const showTab = (selector) => {
  // 引数selectorの中身をコンソールで確認する
  console.log(selector);

  // 一度すべての.tabs-menu liからactiveクラスを削除する
  $('.tabs-menu div').removeClass('active');
  // 一度すべての.tabs-content > sectionを非表示にする
  $('.tabs-content div').hide();
  
  if (selector === 'tab-menu-a') {
    $('#tab-menu-a').addClass('active');
    $('#tabs-a').show();
  }
  if (selector === 'tab-menu-b') {
    $('#tab-menu-b').addClass('active');
    $('#tabs-b').show();
  }
  if (selector === 'tab-menu-c') {
    $('#tab-menu-c').addClass('active');
    $('#tabs-c').show();
  }
 
 
};

// タブがクリックされたらコンテンツを表示
$('.tabs-menu div').on('click', (e) => {

  const selector = $(e.target).attr('id');
  showTab(selector);
});

// 初期状態として1番目のタブを表示
showTab('tab-menu-a');