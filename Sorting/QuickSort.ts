export {}

function swap(array: number[], i: number, j: number) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition(array: number[], start = 0, end = array.length - 1) {
    let middle = Math.floor((start + end) / 2);
    swap(array, start, middle);

    let pivot = array[start];
    let i = start + 1;
    let j = end;

    while (i <= j) {
        while (array[i] <= pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i < j) {
            swap(array, i, j);
        }
    }
    swap(array, start, j);
    return j;
}

function quickSort(array: number[], start = 0, end = array.length - 1) {
    if (start < end) {
        let pivotIdx = partition(array, start, end);
        quickSort(array, start, pivotIdx - 1);
        quickSort(array, pivotIdx + 1, end);
    }
    return array;
}


const array = [3, 1, 2, 4];

console.log(quickSort(array))

//1,2,3,4

// Recursively lower Sub array Space O(log n) ; log 4 = 2
// Call Recursively on both sides Space O(n) n=4