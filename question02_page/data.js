//外部からJSONファイルを取得
function fetch_json() {
  return (
    //JSONファイルをJSONオブジェクト化
    fetch(
      "https://raw.githubusercontent.com/ziheng-hub/data_json/main/data02.json"
    )
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

//選択肢問題の配列
let questions = [];

async function data_render() {
  //JSONデータを取得
  const json_data = await fetch_json();
  questions.push(json_data);
}

for (let index = 0; index < 10; index++) {
  data_render();
}
