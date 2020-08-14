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
        data = {
        gassenddata:"gassenddata"
        customername: customername,
        hearing: hearing,
        memo: memo,
        category: category,
        }
        
        
        var gassenddata = "gassenddata" + "," + customername + "," + hearing + "," + memo + "," + category
        gassend(data);//Gasへデータ引き渡し
        
        sendText(inputdata);//To LINE 送信
        
        

        return false;
    });
    
    //
    function gassend(value) {
 
    var form = document.createElement('form');
    var request = document.createElement('input');
 
    form.method = 'POST';
    form.action = 'https://script.google.com/macros/s/AKfycbyYeIad_7xrWIA5QBA9aLj9xPF6_WMgPIDAErHdw6rPea1ZuAa5/exec';
 
    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;
 
    form.appendChild(request);
    document.body.appendChild(form);
 
    form.submit();
 
}
});
