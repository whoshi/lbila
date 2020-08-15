$(document).ready(function () {
    // liffId: LIFF URL "https://liff.line.me/xxx"のxxxに該当する箇所
    // LINE DevelopersのLIFF画面より確認可能
    var liffId = "1654689972-a3rzGmrE";
    initializeLiff(liffId);
    liff.getProfile().then(profile => {

      // プロフィール名
      const name = profile.displayName

     // HTMLに挿入
      document.linedispform.linedispname.value = name;
      });
    
    
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            // Webブラウザからアクセスされた場合は、LINEにログインする
            if (!liff.isInClient() && !liff.isLoggedIn()) {
                window.alert("LINEアカウントにログインしてください。");
                liff.login({redirectUri: location.href});
            }
        })
        .catch((err) => {
            window.alert('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
    if (!liff.isInClient()) {
        shareTargetPicker(text);
    } else {
        sendMessages(text);
    }
}

// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {
        //liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

function getprofile(){
    
    liff.getProfile()
    .then(profile => {
      
	    
      // HTMLに挿入
      document.querySelector("#name").innerText = profile.displayName;
    })
    .catch((err) => {
      window.alert('getprofile error', err);
    })
   
}


// Webブラウザからメッセージ送信
function shareTargetPicker(text) {
    liff.shareTargetPicker([{
        'type': 'text',
        'text': text
    }]).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
