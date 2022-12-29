// T=O(n^2) , S=O(1)
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        const temp = array[i]
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j]
            j--;
        }
        array[j + 1] = temp
    }
    return array
}

console.log(insertionSort([1, 2, 5, 4, 6, 3]))