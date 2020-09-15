
class number {

    constructor(v = 0) {
        this.value = v;
        this.merge = false;
    }
    crash(n) {
        if(this.value === 0) {
            return 0;
        } else if(n.value === 0) {
            n.value = this.value;
            n.merge = this.merge;
            this.value = 0;
            return 1;
        } else if(this.value === n.value&&!this.merge) {
            n.merge = true;
            n.value += this.value;
            this.value = 0;
            return 2;
        }else{
            return 0;
        }
    }
}

function getRandTd(arr) {
    if(!judge(arr)) {
        let num = parseInt(Math.random() * 16);
        while(arr[parseInt(num / 4)][num % 4].value !== 0) {
            num = parseInt(Math.random() * 16);
        }
        return num;
    }
}

function judge(arr) {
    let bo = true;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(arr[i][j].value === 0) {
                bo = false;
            }
        }
    }
    return bo;
}

function draw(td,arr) {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            td[i * 4 + j].innerHTML="";
            if(arr[i][j].value !== 0) {
                td[i * 4 + j].innerHTML = arr[i][j].value;
            }
        }
    }
}

function refresh(arr) {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
           arr[i][j].merge = false;
        }
    }
}