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
      

      var inputdata = "登録しました" + "\n" + "【顧客名】" + "\n" + customername + "\n" + "【ヒヤリング内容】" + "\n" + hearing + "\n";
      inputdata = inputdata + "【メモ】" + "\n"　+ memo + "\n" + "【メモ分類】" + "\n" + category;
      
      var json_asocc = 
        [
            {
                'customername': customername,
                'hearing': hearing,
                'memo': memo,
                'category': category
            }
        ];
      /*
    $.ajax({
        type:"post",                // method = "POST"
        url:"https://script.google.com/macros/s/AKfycbw6elowD1ut9p7iUxwcG9i8ov3ONKYCMeQ4mjei7ZsPytppZrmr/exec",        // POST送信先のURL
        data:JSON.stringify(json_asocc),  // JSONデータ本体
        contentType: 'application/json', // リクエストの Content-Type
        dataType: "json",           // レスポンスをJSONとしてパースする
        success: function(json_data) {   // 200 OK時
            // JSON Arrayの先頭が成功フラグ、失敗の場合2番目がエラーメッセージ
            if (!json_data[0]) {    // サーバが失敗を返した場合
                alert("Transaction error. " + json_data[1]);
                return;
            }
            // 成功時処理
            location.reload();
        },
        error: function() {         // HTTPエラー時
            alert("Server Error. Pleasy try again later.");
        },
        complete: function() {      // 成功・失敗に関わらず通信が終了した際の処理
            button.attr("disabled", false);  // ボタンを再び enableにする
        }
    });
      */
        
      sendText(inputdata);//To LINE 送信

        return false;
    });
});
