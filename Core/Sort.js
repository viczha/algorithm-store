/**
 * Created by taozhang on 2014/10/8.
 */

/*冒泡排序*/
function bubbleSort(arr) {
    var i = 0, len = arr.length, j, temp;

    for (; i < len - 1; i++) {
        for (j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

/*快速排序*/
function qSort(arr, left, right) {
    var i = left, j = right, flag = arr[left], temp;

    if (i > j) {
        return;
    }

    while (i < j) {
        while (flag <= arr[j] && i < j) {
            j--;
        }

        while (flag >= arr[i] && i < j) {
            i++;
        }

        if (i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }

    arr[left] = arr[i];
    arr[i] = flag;

    qSort(arr, left, i - 1);
    qSort(arr, i + 1, right);
}