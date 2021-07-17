let eto = [
  "rat",
  "ox",
  "tiger",
  "rabbit",
  "dragon",
  "snake",
  "horse",
  "sheep",
  "monkey",
  "cock",
  "dog",
  "pig",

  "rat",
  "ox",
  "tiger",
  "rabbit",
  "dragon",
  "snake",
  "horse",
  "sheep",
  "monkey",
  "cock",
  "dog",
  "pig",
  //"ネズミ","牛","トラ","ウサギ","リュウ","ヘビ","ウマ","ヒツジ","サル","ニワトリ","イヌ","イノシシ"
];

let color = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Purple",
  "rose", //バラ
  "sunflower",//ひまわり
  "tulip",//チューリップ
  "lavender",//ラベンダー
  "cosmos",//コスモス
  "cherry blossom",//桜

  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Purple",
  "rose",
  "sunflower",
  "tulip",
  "lavender",
  "cosmos",
  "cherry blossom",
];

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "	September",
  "October",
  "November",
  "December",
  
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "	September",
  "October",
  "November",
  "December",
];

let birthstone = [
  "garnet(1)",
  "amethyst(2)",
  "aquamarine(3)",
  "diamond(4)",
  "emerald(5)",
  "pearl(6)",
  "ruby(7)",
  "peridot(8)",
  "sapphire(9)",
  "opal(10)",
  "topaz(11)",
  "turquoise(12)",

  "garnet(1)",
  "amethyst(2)",
  "aquamarine(3)",
  "diamond(4)",
  "emerald(5)",
  "pearl(6)",
  "ruby(7)",
  "peridot(8)",
  "sapphire(9)",
  "opal(10)",
  "topaz(11)",
  "turquoise(12)",
];



let siken = ["a", "b", "c", "a", "b","c"];

let cards =  card(eto, color, month);
let setumei = document.getElementById("setumei");
setumei.innerText = "今回のカードのお題は：" + setumeibun(cards);

function setumeibun(cards) {
  if (cards == siken) return "試験用の説明文\n改行しました！";
    //********修正箇所******** 説明文追加した
  else if (cards == eto)
    return "十二支(japaneze Zodiac)についてです。  「十二支」の文化は元々海外にないため、\n十二支と同じ12の数字が用いられている「Zodiac （黄道十二星座）」をもじって、「Chinese Zodiac」もしくは「Japanese Zodiac」と表現されます。\nrat：ネズミ/　ox：ウシ/　rabbit:ウサギ/　titiger：トラ/　dragon：リュウ/　snake：ヘビ\nhorse：ウマ/　sheep：ヒツジ/　monkey：サル/　cock：トリ/　og：イヌ/　pig：イノシシ";
  else if (cards == color)
    return "色(color)と花(flower)についてです。\nred：赤/　　green：緑/　　blue：青/　　yellow：黄色/　　orange：オレンジ/　　purple：紫　\nrose : バラ　　/　　sunflower ：ひまわり  /　tulip：チューリップ/　　lavender：ラベンダー/　　cosmos：コスモス/　　cherry blossom：サクラ";
  else if (cards == month)
    return "月（month）についてです。\n１月：January/　２月：February/　３月：March/　４月：April/　５月：May/　６月：June\n７月：July/　８月：August/　９月：September/　１０月：October/　１１月：November/　１２月：December/";
  //********修正箇所********　新しく誕生石の配列を追加
  else if (cards == birthstone)
    return "誕生石(birthstone)についてです。カードの（数字）は誕生月を表しています。\n１月：garnet(ガーネット)/２月： amethyst(アメシスト)/ ３月：aquamarine(アクアマリン)/４月： diamond(ダイヤモンド)/ ５月：emerald(エメラルド)/ ６月：pearl(パール・真珠)\n７月：ruby(ルビー)/８月： peridot(ペリドット)/ ９月：sapphire(サファイア)/ １０月：opal(オパール)/ １１月：topaz(トパーズ)/ １２月：turquoise(ターコイズ)/";
}

function card(eto, color, month) {
  let r = rand(0, 3);
  if (r == 0) return eto;
  else if (r == 1) return color;
  else if (r == 2) return month;
  else if (r == 3) return birthstone;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = cards.length - 1; i > 0; i--) {
  let r = rand(0, i);
  let tmp = cards[i];
  cards[i] = cards[r];
  cards[r] = tmp;
}

let field = document.getElementById("field");

for (let i = 0; i < cards.length; i++) {
  let elm = document.createElement("div");
  //********修正箇所********
  let span = document.createElement("span");
  elm.className = "card";
  span.innerHTML = "";
  span.index = i;
  span.onclick = click;
  field.appendChild(elm);
  //********修正箇所********
  elm.appendChild(span);
}

let first = null;
let second = null;
let timer = null;
let cnt = 0;
let mekuri = 0;
let clear = document.getElementById("clear");
let count = document.getElementById("count");

function click(e) {
  if (timer) {
    clearTimeout(timer);
    judge();
  }
  //********修正箇所********
  let elm = e.target;
  console.log(elm);
  //********修正箇所********
  elm.innerHTML = cards[elm.index];

  if (!first) {
    first = elm;
  } else if (first.index == elm.index) {
    return;
  } else {
    second = elm;
    timer = setTimeout(judge, 1000);
  }
}

//ジャッジする関数
function judge() {
  if (first.innerHTML == second.innerHTML) {
    //********修正箇所********
    first.parentElement.style.display = "none";
    //********修正箇所********
    second.parentElement.style.display = "none";
    mekuri += 2;
    if (mekuri == cards.length) {
      clear.innerText = "congratulations!!　game clear";
      setumei.style.visibility = "hidden";
    }
  } else {
    first.innerHTML = "";
    second.innerHTML = "";
    count.innerText = "失敗した回数：" + ++cnt;
  }
  first = null;
  second = null;
  timer = null;
}
