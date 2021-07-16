//完成
//タイピング問題の初期化クラス
class DataSet {
  constructor() {
    //取得したいデータのurl
    this.url =
      "https://raw.githubusercontent.com/ziheng-hub/data_json/main/data.json";
    //入力の判定に使用
    this.correct = true;
    this.set = null;
    this.data = new Set();
    //問題の単語の要素を取得
    this.question_Element = document.querySelector(".question");
    //単語の意味がある要素を取得
    this.answer_Element = document.querySelector(".answer");
    //タイピング欄要素を取得
    this.input_Element = document.querySelector(".input");
    //スキップボタン要素の取得
    this.skip_Element = document.querySelector(".skip");
    //やめるボタンの取得
    this.return_Element = document.querySelector(".return");
    //ボタン達の親要素
    this.bottom_Element = document.querySelector(".bottom");
    //母体要素取得
    this.container_Element = document.querySelector(".container");
    //テキスト要素取得
    this.text_Element = document.querySelector(".text");
    this.typing_Element = document.querySelector(".typing");
  }
  removeElment(element) {
    element.remove();
  }
}

//タイピング問題の初期化
const dataSet = new DataSet();

//外部からJSONファイルを取得
function fetch_json() {
  return (
    //JSONファイルをJSONオブジェクト化
    fetch(dataSet.url)
      .then((response) => {
        return response.json();
      })
      //ランダムでJSONファイルのオブジェクトを取得
      .then((data) => {
        random_index = Math.floor(Math.random() * data.length);
        return data[random_index];
      })
  );
}

//タイピング問題呼び出し
async function data_render() {
  //JSONデータを取得
  const json_data = await fetch_json();
  //暫定的に保存
  dataSet.set = json_data["question"];
  //単語の問題を初期化
  dataSet.question_Element.innerHTML = "";
  //タイピング欄も初期化
  dataSet.input_Element.value = "";
  //単語の意味を追加
  dataSet.answer_Element.innerHTML = json_data["answer"];
  //単語の問題をspan要素に分割
  json_data["question"].split("").forEach((word) => {
    const create_span_element = document.createElement("span");
    create_span_element.innerHTML = word;
    dataSet.question_Element.appendChild(create_span_element);
  });
  //空白にする単語
  const question_Element_span =
    dataSet.question_Element.querySelectorAll("span");
  question_Element_span.forEach((element, index) => {
    if (index == 2 || index == question_Element_span.length - 1) {
      element.style.color = "transparent";
    }
  });
}

//タイピング問題呼び
data_render();

//タイピング判定
dataSet.input_Element.addEventListener("input", function () {
  //初期化
  dataSet.correct = true;
  //入力欄の文字列を配列化する
  const input_Element_array = dataSet.input_Element.value.split("");
  //分割した問題要素のspan要素を取得
  const span_elements = dataSet.question_Element.querySelectorAll("span");
  //分割したspanの文字列と分割した入力欄の文字をインデックス同士で比較
  span_elements.forEach((span_element, index) => {
    if (input_Element_array[index] == undefined) {
      span_element.classList.remove("incorrect");
      span_element.classList.remove("correct");
      dataSet.correct = false;
    } else if (input_Element_array[index] == span_element.innerHTML) {
      span_element.classList.add("correct");
      span_element.classList.remove("incorrect");
    } else {
      span_element.classList.add("incorrect");
      span_element.classList.remove("correct");
      dataSet.correct = false;
    }
  });
  //判定処理の確認 =>
  if (dataSet.correct) {
    data_render();
  }
});

//スキップボタンの動作

dataSet.skip_Element.addEventListener("click", () => {
  //スキップした単語を記録
  dataSet.data.add(dataSet.set);
  //スキップしたら次の単語へ
  data_render();
});

//終了ボタンの動作
dataSet.return_Element.addEventListener("click", () => {
  //要素削除
  dataSet.removeElment(dataSet.return_Element);
  dataSet.removeElment(dataSet.skip_Element);
  dataSet.removeElment(dataSet.typing_Element);
  dataSet.removeElment(dataSet.input_Element);
  dataSet.removeElment(dataSet.question_Element);
  dataSet.removeElment(dataSet.answer_Element);
  dataSet.removeElment(dataSet.bottom_Element);

  //要素生成
  if (dataSet.data.size != "0") {
    //要素生成;
    const ul_Element = document.createElement("ul");

    // const title_Element = document.createElement("li");
    // title_Element.textContent = "skip word";
    // title_Element.style.color = "#fff";
    // ul_Element.appendChild(title_Element);
    //ループで要素入れ
    dataSet.data.forEach((word) => {
      const li_Element = document.createElement("li");
      li_Element.innerHTML = word;
      ul_Element.appendChild(li_Element);
    });
    //親要素に入れる
    // dataSet.text_Element.appendChild(title_Element);
    dataSet.text_Element.appendChild(ul_Element);

    //スクロール化
    dataSet.container_Element.classList.add("size");
    // dataSet.bottom_Element.classList.add("size");
    dataSet.text_Element.classList.add("size");
  } else {
    dataSet.removeElment(dataSet.text_Element);
    dataSet.bottom_Element.classList.add("size");
  }
  //トップページに戻るボタン;
  const quit_Element = document.createElement("div");
  quit_Element.classList.add("quit");
  quit_Element.innerHTML = `<div class="top"></div><div class="bottom"></div>`;
  dataSet.container_Element.appendChild(quit_Element);
  dataSet.quit_Element = quit_Element;
  dataSet.quit_Element.addEventListener("click", () => {
    location.href = "../index.html";
  });
});
