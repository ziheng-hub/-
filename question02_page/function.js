//---関数定義部分---

//--問題の選択肢を表示する関数---
function questionShow(index) {
  wordQuestion.innerHTML = `<span>${questions[index].question}</span>`;

  //選択問題部分の選択肢のelementの取得
  let choicesElement = ` <div class=\"option\"><span>${questions[index].options[0]}</span></div>
    <div class=\"option\"><span>${questions[index].options[1]}</span></div>
    <div class=\"option\"><span>${questions[index].options[2]}</span></div>
    <div class=\"option\"><span>${questions[index].options[3]}</span></div>`;

  //選択肢問題部分に選択肢を追加する.
  optionList.innerHTML = choicesElement;

  //クイズ選択部分の各要素の取得
  option = document.querySelectorAll(".option");

  judgmentQuestion();
}
//--正解か不正かの判定を行う関数--(選択された選択肢が正解か不正解を判定する.不正解であれば正解を表示する)
function judgmentQuestion() {
  //クイズ選択部分の各要素に属性を付加.
  for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", function () {
      let userAnser = this.textContent;
      let correctAnser = questions[que_count].answer;
      //選択肢をクリックした後に、次の問題へが出現する.
      nextBtn.style.display = "block";
      //正解不正解判定を行う.
      if (userAnser === correctAnser) {
        this.classList.add("ture");
        //ユーザが正解すれば点数を加算する.
        userScore++;
      } else {
        this.classList.add("false");
        //不正解を押した場合は、正解の選択肢も表示させる.
        option.forEach((element) => {
          if (element.textContent == correctAnser) {
            element.classList.add("ture");
          }
        });
      }
      //選択肢を選択したあとは、他の選択肢をクリックできなくする.
      option.forEach((element) => {
        element.classList.add("notouch");
      });
    });
  }
}

//--クイズの結果を表示する部分関数--
function scoreBoxShow() {
  informationBox.classList.remove("active");
  quizBox.classList.remove("active");
  scoreBox.classList.add("active");

  userText.innerHTML = `<span>${userScore}\/${questions.length}</span>`;
}
