/*--変数宣言部分--*
 *--変数宣言部分--*/

//クイズの選択肢部分のカウント
let que_count = 0;
//ユーザの点数を記録する変数
let userScore = 0;

//---要素取得部分---

//スタートボタンのelementの取得
const startBtn = document.querySelector(".startButton button");

//アプリの説明部分のelementの取得
const informationBox = document.querySelector(".descriptionBox");

//アプリ説明部分の戻るボタンのelementを取得
const exitBtn = document.querySelector(".return");

//アプリ説明部分の次に進むボタンのelementを取得
const continueBtn = document.querySelector(".restartBtn");

//アプリのクイズ部分のelementの取得
const quizBox = document.querySelector(".quizBox");

//選択肢の親要素のelementの取得
const optionList = document.querySelector(".listOption");

//選択肢問題部分の問題に出る単語のelementの取得
const wordQuestion = document.querySelector(".quiz");

//クイズ選択部分の各選択肢要素を取得するための変数.
let option = null;

//クイズ結果部分のelementを取得
const scoreBox = document.querySelector(".scoreBox");
//クイズ結果部分のボタンelementを取得
const restartBtnQuiz = scoreBox.querySelector(".restartBtn");

const topBtn = document.querySelector(".topBtn");
//クイズの点数を表示するelementを取得
const userText = scoreBox.querySelector(".score_text");

//クイズの選択肢部分の次の問題へ部分のelementを取得
const nextBtn = document.querySelector(".nextQuizBtn");

/*---イベント登録部分---*
 *---イベント登録部分---*/

//スタートボタンが押された時のイベント
startBtn.addEventListener("click", () => {
  informationBox.classList.add("active");
});
exitBtn.addEventListener("click", () => {
  informationBox.classList.remove("active");
});
//次に進むボタンが押された時のイベント
continueBtn.addEventListener("click", () => {
  informationBox.classList.remove("active");
  quizBox.classList.add("active");
  questionShow(0);
});

//クイズ結果部分のもう一度やるボタンのイベント
restartBtnQuiz.addEventListener("click", () => {
  window.location.reload();
});

topBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});

//クイズの選択肢部分の次の問題へ部分のイベント
nextBtn.addEventListener("click", () => {
  que_count++;
  if (que_count < questions.length) {
    questionShow(que_count);
    //選択肢をクリックした後に、次の問題への表示をリセットする.
    nextBtn.style.display = "none";
  } else {
    scoreBoxShow();
  }
});
