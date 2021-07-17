class Change_fujita {
  a_fujita_lab_color() {
    const a_fujita_lab_element = document.querySelectorAll(".fujita-lab");
    a_fujita_lab_element.forEach((element) => {
      element.style.webkitTextStroke = `0.15vw rgb(${Math.random() * 255},${
        Math.random() * 255
      },${Math.random() * 255})`;
    });
  }
}

class Box_shape {
  constructor() {
    this.a_click_me = document.querySelector("#click-me");
  }
  change_shape() {
    const span_cricle = document.querySelectorAll("#cricle");

    span_cricle.forEach((item) => {
      item.id = "box";
      item.style.borderRadius = "0px";
    });
  }
}

//円形のボックスを作成
class Create_box {
  create_span() {
    const section_top_element = document.querySelector("#top");
    const span_element = document.createElement("span");
    span_element.id = "cricle";

    let size = Math.random() * 50 + 10;
    span_element.style.width = `${size}px`;
    span_element.style.height = `${size}px`;

    span_element.style.top = `${Math.random() * window.innerHeight}px`;
    span_element.style.left = `${Math.random() * window.innerWidth}px`;
    span_element.style.background = `rgb(${Math.random() * 255},${
      Math.random() * 255
    },${Math.random() * 255})`;
    section_top_element.appendChild(span_element);

    window.setTimeout(
      function () {
        this.remove();
      }.bind(span_element),
      8000
    );
  }
}

//各種機能初期化
const title = new Change_fujita();

//ループ処理とイベント処理呼び出し.
window.setInterval(title.a_fujita_lab_color, 1000);
