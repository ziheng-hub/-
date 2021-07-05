//FUJITA LABのフォント色を変換.
class Change_fujita {
  a_fujita_lab_color() {
    const a_fujita_lab_element = document.querySelector("#fujita-lab");
    a_fujita_lab_element.style.webkitTextStroke = `0.15vw rgb(${
      Math.random() * 255
    },${Math.random() * 255},${Math.random() * 255})`;
  }
}

//Click Meボタンのイベント処理
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
const box = new Create_box();
const shape = new Box_shape();

//ループ処理とイベント処理呼び出し.
window.setInterval(box.create_span, 100);
window.setInterval(title.a_fujita_lab_color, 1000);
shape.a_click_me.addEventListener("click", shape.change_shape);
