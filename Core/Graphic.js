/**
 * Created by taozhang on 2014/10/8.
 */
/*
 DFS求1到n的全排列
 */
function getPosibleRect(n) {
    var used = [], result = [];

    function dfs(step) {
        if (step === n) {
            print();
            return;
        }

        for (var i = 1; i <= n; i++) {
            if (used[i] !== 1) {
                result[step] = i;
                used[i] = 1;
                dfs(step + 1);
                used[i] = 0;
            }
        }
    }

    function print() {
        console.log(result.join(', '));
    }

    dfs(0);

}

/*dfs迷宫求解*/
function getShortedPath(arr, src, tar) {
    var used = {}, path = [], minStep = -1, minPath = [], n = arr.length, m = arr[0].length,
        next = [
            [1, 0],//右
            [-1, 0],//左
            [0, 1],//上
            [0, -1]//下
        ];

    function dfs(x, y, step) {
        path.push([x, y]);
        if (x === tar[0] && y === tar[1]) {//已达终点
            if (minStep === -1 || step < minStep) {
                minStep = step;
                minPath = path;
            }
            path = [];
            return;
        }

        for (var i = 0; i < 3; i++) {
            var nx = next[i][0] + x,
                ny = next[i][1] + y,
                key = nx + '_' + ny;

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] !== 1 && used[key] !== 1) {//在范围内且无障碍物且未走过
                used[key] = 1;
                dfs(nx, ny, step + 1);
                used[key] = 0;
            }
        }


    }

    dfs(src[0], src[1], 0);

    console.log('min step is: ' + minStep);

    var rect = [];
    for(var i = 0; i < minPath.length; i++) {
        rect.push(minPath[i].join(','));
    }

    console.log('shorted path:' + rect.join(' -> '));
}

/*
 //用例
 var arr = [
 [0, 0, 1, 0],
 [0, 0, 0, 0],
 [0, 0, 1, 0],
 [0, 1, 0, 0],
 [0, 0, 0, 1]
 ];

 getShortPath(arr, [0, 0], [4, 2]);

 */


/*BFS遍历图*/

function bfsGraphic(arr){
    var len = arr.length, queue = [], book = [];

    function bfs(step){
        queue.push(step);

        while(queue.length){
            var cur = queue.shift();
            visit(cur);//访问节点
            book[cur] = 1;

            for(var i = 0; i < len; i++){//把邻接节点入队
                if(step !== i && arr[step][i] === 1 && book[i] !== 1){
                    queue.push(i);
                }
            }
        }
    }

    function visit(cur){
        console.log(cur);
    }


    for(var i = 0; i < len; i++) {
        if(book[i] !== 1) {
            bfs(i);
        }
    }

}

/*
 //用例
 var arr = [
 [0, 1, 0, 1],
 [0, 0, 1, 1],
 [0, 0, 0, 0],
 [0, 0, 0, 0]
 ];

 bfsGraphic(arr);

 */


/*dijkstra求最短路径*/

function dijkstar(arr) {
    var len = arr[0].length, dis = [], book = [], i = 0, j, min, u;

    for(i = 0; i < len; i++) {
        dis[i] = arr[0][i];
    }

    book[0] = 1;

    for(i = 1; i < len; i++) {

        min = -1;
        for(j = 1; j < len; j++){
            if(book[j] !== 1 && (min === -1 || min > dis[j])){
                min = dis[j];
                u = j;
            }
        }

        book[u] = 1;
        dis[u] = min;

        for(j = 1; j < len; j++) {
            if(arr[u][j] !== -1){
                if(dis[j] === -1 || dis[j] > dis[u] + arr[u][j]) {
                    dis[j] = dis[u] + arr[u][j];
                }
            }
        }
    }

    console.log(dis.join(' , '));


}