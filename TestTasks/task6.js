function bubleSort(arr) {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            wasSwap = true;
        }
    }
    if (!wasSwap) break;
  }
  return arr;
}

const arr = [5, 2, 7, 0, 3, 1];
const sortedArr = bubleSort(arr);
console.log(sortedArr);