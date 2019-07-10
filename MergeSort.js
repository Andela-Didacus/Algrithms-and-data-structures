const mergeSort = (array) => {
    if(array.length < 2) return array;

    let mid = parseInt(array.length/2);
    let left = array.slice(0, mid);
    let right = array.slice(mid)

    return merge( mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let sortedArray = [];

    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }

    while(left.length) {
        sortedArray.push(left.shift());
    }

    while(right.length) {
        sortedArray.push(right.shift());
    }

    return sortedArray;
}

console.log(mergeSort([1,2,3,45,32,3,43,2,223,32,3,44,64,75,8,665,7,677]));