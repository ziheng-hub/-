console.log("main.js: loaded");

function func() {
  str = document.Form1.Text1.value;
  res1 = res2 = checkflag = 0;

  //入力された単語の判定
  if (endflag == 1) {
    window.alert("正解しています");
    checkflag = 1;
  } else if (endflag == 2) {
    window.alert("ゲームオーバーです");
    checkflag = 1;
  } else {
    if (str != 0 && str.length == 4) {
      //同じアルファベットを含んでいる場合
      loop: for (var n = 0; n < 4; n++) {
        for (var j = 0; j < n; j++) {
          if (str[n] == str[j]) {
            window.alert("同じ文字は2つ以上含めません");
            checkflag = 1;
            break loop;
          }
        }
      }

      //アルファベット（小文字）以外を含んでいる場合
      let letters = /^[a-z]+$/;

      if (!str.match(letters)) {
        window.alert("アルファベットの小文字を入力してください");
        checkflag = 1;
      }
    } else {
      window.alert("4文字の単語を入力してください");
      checkflag = 1;
    }
  }

  //ゲームオーバー判定
  if (str == x0) {
    res1 = res2 = "<font color=red><b>正解！</b></font>";
    document.all.D00.innerHTML = x0;
    endflag = 1;
  } else if (i < 15) {
    if (str.charAt(0) == x1) {
      res1 += 1;
    } else if (
      str.charAt(0) == x2 ||
      str.charAt(0) == x3 ||
      str.charAt(0) == x4
    ) {
      res2 += 1;
    }
    if (str.charAt(1) == x2) {
      res1 += 1;
    } else if (
      str.charAt(1) == x1 ||
      str.charAt(1) == x3 ||
      str.charAt(1) == x4
    ) {
      res2 += 1;
    }
    if (str.charAt(2) == x3) {
      res1 += 1;
    } else if (
      str.charAt(2) == x1 ||
      str.charAt(2) == x2 ||
      str.charAt(2) == x4
    ) {
      res2 += 1;
    }
    if (str.charAt(3) == x4) {
      res1 += 1;
    } else if (
      str.charAt(3) == x1 ||
      str.charAt(3) == x2 ||
      str.charAt(3) == x3
    ) {
      res2 += 1;
    }
  } else {
    res1 = res2 = "<font color=red><b>残念！</b></font>";
    document.all.D00.innerHTML = x0;
    endflag = 2;
  }

  //テーブルへの表示
  if (i == 1 && checkflag == 0) {
    document.all.D01.innerHTML = str;
    document.all.E01.innerHTML = res1;
    document.all.F01.innerHTML = res2;
  } else if (i == 2 && checkflag == 0) {
    document.all.D02.innerHTML = str;
    document.all.E02.innerHTML = res1;
    document.all.F02.innerHTML = res2;
  } else if (i == 3 && checkflag == 0) {
    document.all.D03.innerHTML = str;
    document.all.E03.innerHTML = res1;
    document.all.F03.innerHTML = res2;
  } else if (i == 4 && checkflag == 0) {
    document.all.D04.innerHTML = str;
    document.all.E04.innerHTML = res1;
    document.all.F04.innerHTML = res2;
  } else if (i == 5 && checkflag == 0) {
    document.all.D05.innerHTML = str;
    document.all.E05.innerHTML = res1;
    document.all.F05.innerHTML = res2;
  } else if (i == 6 && checkflag == 0) {
    document.all.D06.innerHTML = str;
    document.all.E06.innerHTML = res1;
    document.all.F06.innerHTML = res2;
  } else if (i == 7 && checkflag == 0) {
    document.all.D07.innerHTML = str;
    document.all.E07.innerHTML = res1;
    document.all.F07.innerHTML = res2;
  } else if (i == 8 && checkflag == 0) {
    document.all.D08.innerHTML = str;
    document.all.E08.innerHTML = res1;
    document.all.F08.innerHTML = res2;
  } else if (i == 9 && checkflag == 0) {
    document.all.D09.innerHTML = str;
    document.all.E09.innerHTML = res1;
    document.all.F09.innerHTML = res2;
  } else if (i == 10 && checkflag == 0) {
    document.all.D10.innerHTML = str;
    document.all.E10.innerHTML = res1;
    document.all.F10.innerHTML = res2;
  } else if (i == 11 && checkflag == 0) {
    document.all.D11.innerHTML = str;
    document.all.E11.innerHTML = res1;
    document.all.F11.innerHTML = res2;
  } else if (i == 12 && checkflag == 0) {
    document.all.D12.innerHTML = str;
    document.all.E12.innerHTML = res1;
    document.all.F12.innerHTML = res2;
  } else if (i == 13 && checkflag == 0) {
    document.all.D13.innerHTML = str;
    document.all.E13.innerHTML = res1;
    document.all.F13.innerHTML = res2;
  } else if (i == 14 && checkflag == 0) {
    document.all.D14.innerHTML = str;
    document.all.E14.innerHTML = res1;
    document.all.F14.innerHTML = res2;
  } else if (i == 15 && checkflag == 0) {
    document.all.D15.innerHTML = str;
    document.all.E15.innerHTML = res1;
    document.all.F15.innerHTML = res2;
  }

  if (checkflag == 0) {
    i++;
  }
  document.Form1.Text1.value = "";
}
