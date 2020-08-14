$(function () {
    
    // 送信
    $('form').submit(function () {
      var customername = document.getElementById("input_customername").value;
      var hearing = document.getElementById("input_hearing").value;
      var memo = document.getElementById("input_memo").value;
    
      var element = document.getElementById( "myForm" ) ;
      var radioNodeList = element.category ;
      var category = radioNodeList.value ;
        
      if(customername === ''){
          if(hearing === ''){
              if(memo === ''){
                  if(category === ''){
                      alert('メモ入力が何もありません');
                      return false;
                  }
              }
          }
      }
      //var memodata = category;

      
      //gaspost(memodata)  ;
        
      var inputdata = "登録しました" + "\n" + "【顧客名】" + "\n" + customername + "\n" + "【ヒヤリング内容】" + "\n" + hearing + "\n";
      inputdata = inputdata + "【メモ】" + "\n"　+ memo + "\n" + "【メモ分類】" + "\n" + category;
        
      
        sendText(inputdata);//To LINE 送信

        return false;
    });
    //
    /*
    function gaspost(memodata) {
        $.post( 'https://script.google.com/macros/s/AKfycbw6elowD1ut9p7iUxwcG9i8ov3ONKYCMeQ4mjei7ZsPytppZrmr/exec', memodata) )
 
        //サーバーからの返信を受け取る
        .done( function(data) {  } )
 
        //通信エラーの場合
        .fail( function() {  } )
 
       //通信が終了した場合
       always ( function() {  } )
    }
    */
});
