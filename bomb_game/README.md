# 爆弾解除ゲーム
未完成(7/05現在)
  
[リアルタイム進捗状況](yomayoi.com/minigame.com)
  
# やること
* cssデザイン
    * スタート画面
    * 暗記表
    * リザルト画面
    * 遊び方画面
  
# 問題点
* 文字の大きさをvwに指定しているのでsafariだと崩れる->知らん~~macbookにもchrome入れられるやろ~~
* タイマーの効果音にラグがある -> onloadでmediaファイル内の効果音の読み込みができてないらしい-> ~~気にせん気にせん~~
  
# 構造
    bombGame
    ┣ css
    ┃  ┣ bombstyle.css
    ┃  ┗ load.css
    ┣ font
    ┃  ┣ azuki.ttf
    ┃  ┣ PixelMplus12-Regular.ttf
    ┃  ┗ POCKC__.TTF
    ┣ images
    ┃  ┣ bomb.png
    ┃  ┣ diamond-plate.jpg
    ┃  ┣ favicon.ico
    ┃  ┗ metal-doted.jpg
    ┣ media
    ┃  ┣ beep.mp3
    ┃  ┣ bomb.mp3
    ┃  ┣ btn.mp3
    ┃  ┣ clear.mp3
    ┃  ┣ OK.mp3
    ┃  ┣ timer.mp3
    ┃  ┗ timer2.mp3
    ┣ script
    ┃  ┣ bombdate.js
    ┃  ┗ setting.js
    ┣ bomb.html
    ┗ minigame.html
    
  from km
