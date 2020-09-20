$(function () {
    
    // 送信
    $('form').submit(function () {
      
      var customername = document.getElementById("input_customername").value;
      var hearing = document.getElementById("input_hearing").value;
      var memo = document.getElementById("input_memo").value;
    
      var element = document.getElementById( "myForm" ) ;
      var radioNodeList = element.category ;
      var category = radioNodeList.value ;
      var actionselect = element.action;
      var robohonaction = actionselect.value;
      var songselect = element.song;
      var robohonsong = songselect.value;
      var danceselect = element.dance;
      var robohondance = danceselect.value;
        
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
     
      var inputdata = "【タイトル】" + "\n" + customername + "\n" + "【事の背景経緯】" + "\n" + hearing + "\n";
      inputdata = inputdata + "【メモ】" + "\n"　+ memo + "\n" + "【メモ分類】" + "\n" + category + "\n" + "【RoBoHoNアクション】" + "\n" + robohonaction  ;
      //var inputdata = "【タイトル】" + "\n" + customername + "\n";
      //inputdata = inputdata + "\n" + "【RoBoHoNアクション】" + "\n" + robohonaction "\n" + "【RoBoHoNソング】" + "\n" + robohonsong "\n" + "【RoBoHoNダンス】" + "\n" + robohondance  ;	    
      
      
      //postより先にsendtextしてGASスプレッドシートにLINE表示名を設定する。  
      //sendText(inputdata);//To LINE 送信
      
      const datecurrent = new Date();
      const nowdate = datecurrent.getFullYear() + "年" + 
				(datecurrent.getMonth() + 1)  + "月" + 
				datecurrent.getDate() + "日" + 
				datecurrent.getHours() + "時" + 
				datecurrent.getMinutes() + "分" + 
				datecurrent.getSeconds() + "秒";
        
      //var url = 'https://script.google.com/macros/s/AKfycbw6elowD1ut9p7iUxwcG9i8ov3ONKYCMeQ4mjei7ZsPytppZrmr/exec';
      var url = 'https://script.google.com/macros/s/AKfycbyZCPemsZEO01buDDevsEWfs8LbvTIIJdGBHMyNi-HW9l9sK4E/exec'
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
	      
     //スピナー表示
     //インジケータ表示
     // Loading 画像を表示
     //dispLoading("データ暗号化処理中...");

           
     $.post(url,
      JSONdata,
      function(dt){
         //console.log(dt);liff.closeWindow();
	          //インジケータ除去
	          // Loading 画像を消す
                  //removeLoading();
	          if(dt.message == 'success!')
		  {
			  sendText(inputdata);//To LINE 送信
			  liff.closeWindow(); 
		  }else
		  {
			window.alert("他の人が操作中です、少し待って再実行して下さい");  
		  }
	 
         
	     
	 
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
