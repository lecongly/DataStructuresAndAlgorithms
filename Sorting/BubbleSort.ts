// T=O(n^2) , S=O(1)
const bubbleSort = (array: number[]) => {
    let sorted = false;
    let counter = 0;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - counter; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i)
                sorted = false
            }

        }
        counter++
    }
    return array
}
const swap = (array, i) => {
    let temp = array[i]
    array[i] = array[i + 1]
    array[i + 1] = temp
}

console.log(bubbleSort([1, 4, 2, 5, 7, 6, 3]))