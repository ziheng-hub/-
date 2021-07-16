/********【 グローバル変数 】********/
var clear_count = 0;//フラグ(4になったらオールクリア)
var flg_mo3_1 = 0;//モジュール3用フラグ
var flg_mo3_2 = 0;//モジュール3用フラグ
var module_count = 3;//モジュール数
var targetJp; //countの内部target
var targetEn; //countの外部target(value)
var ankitime = 20;//暗記時間(20sec)
var kaijotime = 80;//解除時間(80sec)
var soundtime = 10;//ﾋﾟｯﾋﾟｯタイム
var cotime =kaijotime-soundtime;
var strmemoTime; //暗記開始時刻
var startTime; //ゲーム開始の時刻
var nowTime; //現在の時刻
var tmr_timer; //タイマー用のタイマーID
var memo_timer; //単語表表示タイマー
var misscount = 0;//ミスの回数カウンタ
var Max_miss = 6;//ミス数制限
var EngList = [];
var JpnList = [];
var EngShuffleList = [];
var JpnShuffleList = [];
var JpList = [];
var EnList = [];
var khi = 0;//配列の順序付け用変数
var randDate=Math.floor(3 * Math.random());//問題選定用乱数
var randmod2 = Math.floor(8 * Math.random());//モジュール2の1/8抜き出し用乱数
var mo2len;//モジュール2の抜き出された単語数
var substrNum = 0;//文字数の数値まんま
var cr = false;
var datelen = dateEn.length - 7;
var l = Math.floor(datelen * Math.random());
var timerID;


/*------------------------------------------*/
/*              タイマー処理                 */
/*------------------------------------------*/
/*---------------暗記時間--------------------*/
function strTime(time)
{
    /*---- 経過時間を取得 ----*/
    nowTime = new Date().getTime();
    const cdtime = (nowTime - strmemoTime) / 1000;
    var f_str2 = (time - cdtime).toString();
    if (f_str2 > 0)
    {
        f_str2 = f_str2.substr(0, 5);
    } else if (f_str2 < 0)
    {
        clearInterval(memo_timer);
        document.getElementById("kaijoBtn").style.display = "block";
        var elem= document.getElementsByClassName("ankihyo");
        elem[0].style.display = "none";
        f_str2 = "制限時間 : "+kaijotime+"秒";
    }
    return f_str2;
}
/*---------------解除時間--------------------*/
function playTime(time)
{
    /*---- 経過時間を取得 ----*/
    nowTime = new Date().getTime();
    const cdtime = (nowTime - startTime) / 1000;
    var f_str = (time - cdtime).toString();
    /*---- 小数桁を1桁に揃える ----*/
    if (f_str > 0)
    {
        f_str = f_str.substr(0, 5);
    }else if (f_str < 0)
    {
        targetJp = 1;
        f_str = 0.000;
        Gameover();
        endGame(); //( ゲームを終了 )
    }
    return f_str;
}