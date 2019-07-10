const insertionSort = (array) => {
    for(let index=1; index < array.length; index++) {
        let val = index - 1;
        let temp = array[index];

        while(val >= 0 && array[val] > temp) {
            array[val + 1] = array[val];
            val--;
        }
        array[val + 1] = temp;
    }

    return array;
};

console.log(insertionSort([2,1,34,5,6,75,7,88,6,886,5,445,4,33]));