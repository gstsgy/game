/*
 * 全局变量
 *
 */
let arr = [];
let score = 0;
let td = document.getElementsByTagName("td");

function init() {
    arr = [];
    score = 0;
    for (let i = 0; i < 4; i++) {
        arr.push([]);
        for (let j = 0; j < 4; j++) {
            arr[i].push(new number());
        }
    }
    let index = getRandTd(arr);
    arr[parseInt(index / 4)][index % 4].value = parseInt(Math.random() * 2 + 1) * 2;
    draw(td, arr);
}


init();
document.onkeydown = function (e) {
    let score_tmp = 0;
    console.log(e.keyCode)
    //alert(e.keyCode);
    if (e.keyCode === 37 || e.keyCode === 65 || e.keyCode === 100) {
        for (let i = 0; i < 4; i++) {
            let score_tmp1 = 0;
            for (let j = 1; j <4; j++) {
                score_tmp1 += arr[i][j].crash(arr[i][j - 1]);
            }
            score_tmp += score_tmp1;
            while (score_tmp1 > 0) {
                score_tmp1 = 0;
                for (let j = 1; j <4; j++) {
                    score_tmp1 += arr[i][j].crash(arr[i][j - 1]);
                }
            }

        }
    } else if (e.keyCode === 39 || e.keyCode === 68 || e.keyCode === 102) {
        for (let i = 0; i < 4; i++) {
            let score_tmp1 = 0;
            for (let j = 2; j >-1; j--) {
                score_tmp1 += arr[i][j].crash(arr[i][j + 1]);
            }
            score_tmp += score_tmp1;
            while (score_tmp1 > 0) {
                score_tmp1 = 0;
                for (let j = 2; j >-1; j--) {
                    score_tmp1 += arr[i][j].crash(arr[i][j + 1]);
                }
            }
        }
    } else if (e.keyCode === 38 || e.keyCode === 87 || e.keyCode === 104) {
        for (let i = 0; i < 4; i++) {
            let score_tmp1 = 0;

            for (let j = 1; j <4; j++) {
                score_tmp1 += arr[j][i].crash(arr[j - 1][i]);
            }
            score_tmp += score_tmp1;
            while (score_tmp1 > 0) {
                score_tmp1 = 0;
                for (let j = 1; j <4; j++) {
                    score_tmp1 += arr[j][i].crash(arr[j - 1][i]);
                }
            }
        }
    } else if (e.keyCode === 83 || e.keyCode === 98 || e.keyCode === 40) {
        for (let i = 0; i < 4; i++) {
            let score_tmp1 = 0;
            for (let j = 2; j >-1; j--) {
                score_tmp1 += arr[j][i].crash(arr[j + 1][i]);
            }
            score_tmp += score_tmp1;
            while (score_tmp1 > 0) {
                score_tmp1 = 0;
                for (let j = 2; j >-1; j--) {
                    score_tmp1 += arr[j][i].crash(arr[j + 1][i]);
                }
            }
        }
    } else {
        return;
    }

    console.log(score_tmp)
    let index = getRandTd(arr);
    if (isNaN(index)) {
        alert("小伙子，不错呀，来继续！");
        init();
        return;
    }
    if (score_tmp > 0) {
        arr[parseInt(index / 4)][index % 4].value = parseInt(Math.random() * 2 + 1) * 2;
    }
    refresh(arr);
    draw(td, arr);
}


