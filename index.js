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
        
        gassend(inputdata);
        sendText(inputdata);

        return false;
    });
    function gassend(inputdata) {
        alert(inputdata);
    }
});
