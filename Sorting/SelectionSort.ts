// T=O(n^2) , S=O(1)
const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallest]) {
                smallest = j
            }
        }
        if (i !== smallest) {
            let temp = array[i]
            array[i] = array[smallest]
            array[smallest] = temp
        }
    }
    return array
}

console.log(selectionSort([1, 2, 5, 4, 6, 3]))