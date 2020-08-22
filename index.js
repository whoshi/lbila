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
     
      var inputdata = "【顧客名】" + "\n" + customername + "\n" + "【ヒヤリング内容】" + "\n" + hearing + "\n";
      inputdata = inputdata + "【メモ】" + "\n"　+ memo + "\n" + "【メモ分類】" + "\n" + category;
      
      //postより先にsendtextしてGASスプレッドシートにLINE表示名を設定する。  
      sendText(inputdata);//To LINE 送信
      
      const datecurrent = new Date();
      const nowdate = datecurrent.getFullYear() + "年" + 
				(datecurrent.getMonth() + 1)  + "月" + 
				datecurrent.getDate() + "日" + 
				datecurrent.getHours() + "時" + 
				datecurrent.getMinutes() + "分" + 
				datecurrent.getSeconds() + "秒";
        
      var url = 'https://script.google.com/macros/s/AKfycbw6elowD1ut9p7iUxwcG9i8ov3ONKYCMeQ4mjei7ZsPytppZrmr/exec';
      
      //var dispname = document.getElementById('id_linedisp');
      //alert(dispname);
      liff.getProfile().then(profile => {

      // プロフィール名
      const name = profile.displayName
      var JSONdata = {
                    nowdate:nowdate,
	            dispname:name,
                    customername: customername,
                    hearing: hearing,
                    memo: memo ,
                    category: category 
       };

     //alert(JSON.stringify(JSONdata));
     // {"cd":"100", "name":"Taro"},
     $.post(url,
      JSONdata,
      function(dt){
         //console.log(dt);
         
	 window.alert(dt.message);
     }
     );
     
      });
      /*	   
      var JSONdata = {
                    nowdate:nowdate,
                    customername: customername,
                    hearing: hearing,
                    memo: memo ,
                    category: category 
       };

     //alert(JSON.stringify(JSONdata));
     // {"cd":"100", "name":"Taro"},
     $.post(url,
      JSONdata,
      function(dt){
         //console.log(dt);
         //alert(dt);
     }
     );
     */
        //sendText(inputdata);//To LINE 送信
      
        return false;
    });
});
