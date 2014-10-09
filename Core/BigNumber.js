/**
 * Created by taozhang on 2014/10/8.
 *
 * n, m 必须为正整数对应的字符串
 */

var BigNmuber = {
    add: function (n, m) {
        var rect = [], a = 0;//进位
        n = n.split('');
        m = m.split('');

        while (n.length > 0 && m.length > 0) {
            a = parseInt(n.pop()) + parseInt(m.pop()) + a;
            rect.push(a % 10);
            a = Math.floor(a / 10);
        }

        while (n.length > 0) {
            a = parseInt(n.pop()) + a;
            rect.push(a % 10);
            a = Math.floor(a / 10);
        }

        while (m.length > 0) {
            a = parseInt(m.pop()) + a;
            rect.push(a % 10);
            a = Math.floor(a / 10);
        }

        if(a > 0){
            rect.push(a);
        }

        rect = rect.reverse().join('');

        return rect;
    },
    minus: function (n, m) {
        var rect = [],
            a = 0,//借位
            flag = '',
            nArr = n.split(''),
            mArr = m.split('');

        if (nArr.length < mArr.length) {//判断结果正负
            flag = '-'
        } else if (nArr.length === mArr.length) {
            for (var i = nArr.length - 1; i >= 0; i--) {
                if (nArr[i] - mArr[i] < 0) {
                    flag = '-';
                    break;
                }
            }
        }

        if (flag === '-') {//结果为负，进行 m-n
            return '-' + this.minus(m, n);
        }

        while (nArr.length > 0 && mArr.length > 0) {
            a = parseInt(nArr.pop()) - parseInt(mArr.pop()) + a;
            if (a < 0) {
                rect.push(a + 10);
                a = -1;
            } else {
                rect.push(a);
                a = 0;
            }
        }

        while (nArr.length > 0) {
            a = parseInt(nArr.pop()) + a;
            if (a < 0) {
                rect.push(a + 10);
                a = -1;
            } else {
                rect.push(a);
                a = 0;
            }
        }

        rect = rect.reverse().join('');
        return rect;
    },
    multi: function (n, m) {
        var nArr = n.split('').reverse(),
            mArr = m.split('').reverse(),
            i = 0, j = 0, nLen = nArr.length, mLen = mArr.length, rect = [], len, t;

        for (; i < nLen; i++) {//按位相乘
            for (j = 0; j < mLen; j++) {
                rect[i + j] = rect[i + j] || 0;
                rect[i + j] += parseInt(nArr[i]) * parseInt(mArr[j]);
            }
        }

        len = rect.length;

        for (i = 0; i < len; i++) {//处理进位
            t = rect[i];
            rect[i] = t % 10;
            t = Math.floor(t / 10);
            if (t > 0) {
                if (i === len - 1) {
                    rect[i + 1] = 0;
                }
                rect[i + 1] += t;
            }
        }

        rect = rect.reverse().join('');

        return rect;
    }
};
