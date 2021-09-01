searchWord = function(){
  var searchResult,
      searchText = $(this).val(), // 検索ボックスに入力された値
      targetText;
  // 検索結果を格納するための配列を用意
  searchResult = [];
  // 検索結果エリアの表示を空にする
  $('#search-result__list').empty();
  // 検索ボックスに値が入ってる場合
  if (searchText != '') {
  $('.keyword').each(function() {
      targetText = $(this).text();
      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(searchText) != -1) {
        // 存在する場合はそのリストのテキストを用意した配列に格納
        searchResult.push(targetText);
      }
    });
    // 検索結果をページに出力
  for (var i = 0; i < searchResult.length; i ++) {
      // .boxを隠す
    $('.box').hide();
      //searchResultとそれに合った画像を挿入
    // $('<div>').text(searchResult[i]).appendTo('#search-result__list');
    if (searchResult[i] == "アメリカンショートヘアー") {
    $('<div class="box"><img src="./images/american.png" alt="アメショー" width="450" height="300"><p>キーワード</p><div class="keyword">アメリカンショートヘアー</div></div>').appendTo('#search-result__list');
      } else if (searchResult[i] == "ブリティッシュショートヘアー") {
        $('<div class="box"><img src="./images/british.png" alt="ブリティッシュ" width="450" height="300"><p>キーワード</p><div class="keyword">ブリティッシュショートヘアー</div></div>').appendTo('#search-result__list');
      } else if (searchResult[i] == "エキゾチックショートヘアー") {
        $('<div class="box"><img src="./images/exotic.png" alt="エキゾチック" width="450" height="300"><p>キーワード</p><div class="keyword">エキゾチックショートヘアー</div></div>').appendTo('#search-result__list');
      } else if (searchResult[i] == "メインクーン") {
        $('<div class="box"><img src="./images/mainecoon.png" alt="メインクーン" width="450" height="300"><p>キーワード</p><div class="keyword">メインクーン</div></div>').appendTo('#search-result__list');
      } else if (searchResult[i] == "ミヌエット") {
        $('<div class="box"><img src="./images/min.png" alt="ミヌエット" width="450" height="300"><p>キーワード</p><div class="keyword">ミヌエット</div></div>').appendTo('#search-result__list');
      } else if (searchResult[i] == "マンチカン") {
        $('<div class="box"><img src="./images/munchkin.png" alt="マンチカン" width="450" height="300"><p>キーワード</p><div class="keyword">マンチカン</div></div>').appendTo('#search-result__list');
      } else if (searchResult[i] == "ペルシャ") {
        $('<div class="box"><img src="./images/persian.png" alt="ペルシャ" width="450" height="300"><p>キーワード</p><div class="keyword">ペルシャ</div></div>').appendTo('#search-result__list');
      } else if (searchResult[i] == "ロシアンブルー") {
        $('<div class="box"><img src="./images/russian.png" alt="ロシアン" width="450" height="300"><p>キーワード</p><div class="keyword">ロシアンブルー</div></div>').appendTo('#search-result__list');
      } else if (searchResult[i] == "スコティッシュフォールド") {
        $('<div class="box"><img src="./images/scotish.png" alt="スコティッシュ" width="450" height="300"><p>キーワード</p><div class="keyword">スコティッシュフォールド</div></div>').appendTo('#search-result__list');
      } else {
        $('<div class="box"><img src="./images/selkirk.png" alt="セルカーク" width="450" height="300"><p>キーワード</p><div class="keyword">セルカークレックス</div></div>').appendTo('#search-result__list');
      }
    }
  } else {
    // 検索バーがemptyの時は.boxを表示
    $('.box').show();
  }
};
// searchWordの実行
$('#fluffy').on('input', searchWord);
  
 
  // console.log(cats.filter((pic) => pic.includes("ア")));
  // console.log(cats.filter((pic) => pic.includes("アメ")));
  
  // console.log(cats.find((pic) => pic.includes("ア")));
  // console.log(cats.find((pic) => pic.includes("ブ")));
  // console.log(cats.find((pic) => pic.includes("エ")));
  // console.log(cats.find((pic) => pic.includes("メイン")));
  // console.log(cats.find((pic) => pic.includes("ミ")));
  // console.log(cats.find((pic) => pic.includes("マ")));
  // console.log(cats.find((pic) => pic.includes("ペ")));
  // console.log(cats.find((pic) => pic.includes("ロ")));
  // console.log(cats.find((pic) => pic.includes("ス")));
  // console.log(cats.find((pic) => pic.includes("セ")));
