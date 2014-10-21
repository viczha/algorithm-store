/**
 * Created by taozhang on 2014/10/20.
 */

//堆
function CreateHeapShiftUp(arr) {
    var rect = [];

    function shiftup(idx) {
        if (idx === 0) {
            return;
        }

        var pIdx;
        while (idx !== 0) {
            pIdx = Math.floor(idx / 2);
            if (rect[pIdx] > rect[idx]) {
                swap(pIdx, idx);
                idx = pIdx;
            } else {
                return;
            }

        }
    }

    function swap(n, m) {
        var temp = rect[n];
        rect[n] = rect[m];
        rect[m] = temp;
    }

    var i = 0, len = arr.length;

    for (; i < len; i++) {
        rect[i] = arr[i];
        shiftup(i)
    }


    return rect;
}

function CreateHeapShiftDown(arr) {
    var len = arr.length, i = Math.floor(len / 2), j, k, flag;

    for (; i > 0; i--) {
        k = j = i;
        while (2 * j < len) {
            if(arr[2 * i - 1] < arr[i - 1]) {
                k = 2 * j;
            } else {
                k = j;
            }

            if((2 * i + 1) < len && arr[2 * i] < arr[k - 1]) {
                k = 2 * i + 1;
            }

            if(k !== j) {
                swap(k - 1, j - 1);
                j = k;
            } else {
                break;
            }

        }
    }

    function swap(n, m) {
        var temp = arr[n];
        arr[n] = arr[m];
        arr[m] = temp;
    }

    return arr;

}