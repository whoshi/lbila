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
        
      var url = 'https://script.google.com/macros/s/AKfycbw6elowD1ut9p7iUxwcG9i8ov3ONKYCMeQ4mjei7ZsPytppZrmr/exec';

      var JSONdata = {
                    customername: customername,
                    hearing: hearing     
       };

     alert(JSON.stringify(JSONdata));
    //JSONにエンコード
    var json_text = JSON.stringify(JSONdata);
 
    var xmlHttpRequest = new XMLHttpRequest();
    /*
    xmlHttpRequest.onreadystatechange = function()
    {
        var READYSTATE_COMPLETED = 4;
        var HTTP_STATUS_OK = 200;
 
        if( this.readyState == READYSTATE_COMPLETED
         && this.status == HTTP_STATUS_OK )
        {
            // レスポンスの表示
            alert( this.responseText );
            
        }
    }
    */ 
    xmlHttpRequest.open( 'POST', 'https://script.google.com/macros/s/AKfycbw6elowD1ut9p7iUxwcG9i8ov3ONKYCMeQ4mjei7ZsPytppZrmr/exec',false );
 
    // サーバに対して解析方法を指定する
    xmlHttpRequest.setRequestHeader( 'Content-Type', 'application/json');
 
    // データをリクエスト ボディに含めて送信する
    //xmlHttpRequest.send(json_text);
           
     
      sendText(inputdata);//To LINE 送信

        return false;
    });
});
