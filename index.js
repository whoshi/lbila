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
                'memo': memo
                'category': category
            }
        ];
     
    //JSONにエンコード
    var json_text = JSON.stringify(json_asocc);
 
    //データを送信
    xhr = new XMLHttpRequest;       //インスタンス作成
    xhr.onload = function(){        //レスポンスを受け取った時の処理（非同期）
        var res = xhr.responseText;
        if (res.length>0) alert(res);
    };
    xhr.onerror = function(){       //エラーが起きた時の処理（非同期）
        alert("error!");
    }
    xhr.open('post', "api_sendjson.php", true);    //(1)
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json_text);    //送信実行
        
      
        
      sendText(inputdata);//To LINE 送信

        return false;
    });
});
