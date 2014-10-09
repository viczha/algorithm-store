/**
 * Created by taozhang on 2014/10/8.
 */

function add(n, m) {
    var rect = [], a = 0;
    n = n.split('');
    m = m.split('');

    while (n.length > 0 && m.length > 0) {
        a = parseInt(n.pop()) + parseInt(m.pop()) + a;
        rect.push(a % 10);
        a = Math.floor(a / 10);
    }

    while (n.length > 0){
        a = parseInt(n.pop()) + a;
        rect.push(a % 10);
        a = Math.floor(a / 10);
    }

    while(m.length > 0) {
        a = parseInt(m.pop()) + a;
        rect.push(a % 10);
        a = Math.floor(a / 10);
    }

    rect = rect.reverse().join('');

    return rect;
}
