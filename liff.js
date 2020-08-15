$(document).ready(function () {
    // liffId: LIFF URL "https://liff.line.me/xxx"のxxxに該当する箇所
    // LINE DevelopersのLIFF画面より確認可能
    var liffId = "1654689972-a3rzGmrE";
    initializeLiff(liffId);
    
})
var msg = "";
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
            console.log('LIFF Initialization failed ', err);
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
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

function getprofile(){
    
    liff.getProfile()
    .then(profile => {
      msg = profile.displayName;
      //window.alert(msg);
      //return profile.displayName;
    })
    .catch((err) => {
      window.alert('getprofile error', err);
    })
   
}
function getdisplayname(){
    
    return msg;
}
// setIntervalを使う方法
function mysleep(waitSec, callbackFunc) {
 
    // 経過時間（秒）
    var spanedSec = 0;
 
    // 1秒間隔で無名関数を実行
    var id = setInterval(function () {
 
        spanedSec++;
 
        // 経過時間 >= 待機時間の場合、待機終了。
        if (spanedSec >= waitSec) {
 
            // タイマー停止
            clearInterval(id);
 
            // 完了時、コールバック関数を実行
            if (callbackFunc) callbackFunc();
        }
    }, 1000);
 
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
