const quickSort = (array) => {
    if(array.length < 2) return array;

    let left = [];
    let right = [];
    let sortedArray = [];
    let pivot = array.pop();
    let length = array.length;

    for(let i=0; i < length; i++) {
        if(array[i] <= pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return sortedArray.concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([2,3,2,3,4,5,64,445,554,56,56,654,545,78,897]))