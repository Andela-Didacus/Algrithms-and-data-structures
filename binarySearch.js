const binarySearch = (array, value) => {
    let min = 0;
    let max = array.length - 1;

    while( min <= max) {
        let mid = Math.floor((max+min)/2);

        if(array[mid] === value) return mid;

        if(array[mid] > value) {
            max = mid - 1;
        } else {
            min = mid + 1
        }
    }

    return "Not Found";
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 7));