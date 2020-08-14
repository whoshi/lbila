$(function () {
    
    // 送信
    $('form').submit(function () {
        //var date = $('input[name="date"]').val();
        //var number = $('input[name="number"]:checked').val();
        //var names = '';
        //$('#form-name').children().each(function (i, elm) {
        //    names += $(elm).val() + '、';
        //})
        //names = names.slice(0, -1);

        //var msg = `希望日：${date}\n人数：${number}\n氏名：${names}`;
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
        
        //sendText('登録しました');
        
        gassend(customername, hearing,memo,category);//Gasへデータ引き渡し
        sendText(inputdata);//To LINE 送信

        return false;
    });
    function gassend(customername, hearing,memo,category){
        
        data = {
        customername: customername,
        hearing: hearing,
        category: category,
        }
        //ajax(data);
    }
    //ajax
    /*
    function ajax(data) {
        var url = 'https://script.google.com/macros/s/AKfycbyYeIad_7xrWIA5QBA9aLj9xPF6_WMgPIDAErHdw6rPea1ZuAa5/exec'; // Change here: Your GAS URL here
        $.ajax({
             url: url,
             type:'POST',
             data: data
        }).done(function(res){
             if(res.response != "success") {
                 //console.log(JSON.stringify(res.error));
                 alert('送信失敗'); 
                 return;
        }
        alert('送信完了');
    
    
    }
    });
    */
});
