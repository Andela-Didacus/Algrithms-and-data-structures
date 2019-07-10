const fibb = (n) => {
    let array = [];
    if(n === 1 || n === 2) {
        return array;
    }
    array.push((fib(n-1)) + fib(n-2));
    return array;
}

console.log(fibb(10))

function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
        let value = arr[i - 2] + arr[i -1]
        arr.push(value)
        console.log(value);
    }
        return arr
}

console.log(fib(20))