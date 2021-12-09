let arr = [80, 2, 6, 7, 100, 15, 7]

// способ 1
for (let i=0; i < arr.length; i++) {
    for (let j=i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let max = arr[i];
            arr[i] = arr[j];
            arr[j] = max;
        }
    }
}
// console.log(arr)

// способ 2
let sortArr1 = []
while (arr.length) {
    // let minElement = arr.reduce((acc, el) => acc > el ? el : acc)
    let minElement = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i]
        }
    }
    sortArr1.push(minElement);
    arr.splice(arr.indexOf(minElement),1) // splice(index, deleteCount)
    // arr = arr.filter((f, index) => index !== arr.indexOf(minElement))
}
console.log(arr);
console.log(sortArr1)

// sposob 3
let arr1 = [80, 2, 6, 7, 100, 15, 7]

const sortArray = (array) => {
    let newArray = []
    while(array.length) newArray = [...newArray, ...array.splice(array.indexOf(Math.min(...array)),1)]
    return newArray
}
console.log(sortArray(arr1))

//sposob 4
function helloSort(arr){
    return arr.reduce((acc, el) => {
        let idx = 0;
        while(idx < acc.length && el < acc[idx]) idx++;
        acc.splice(idx, 0, el);
        return acc;
    }, []);
}

console.log((helloSort([1,9,2,74,2,73,12,3,7,6,4,5,5])));

//sposob 5
function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let helpIndex = Math.floor(array.length / 2)
    let helpItem = array[helpIndex]
    let less = []
    let greatest = []
    for (let index = 0; index < array.length; index++) {
        if (index === helpIndex) continue
        if (array[index] < helpItem) {
            less.push(array[index])
        } else {
            greatest.push(array[index])
        }
    }
    return [...quickSort(less), helpItem, ...quickSort(greatest)]
}
console.log(quickSort(arr))

// №6
let sortArr = []
for (let i=0; arr.length; i++) {
    // let minElement = Math.min(...arr)
    let minElement = arr.reduce((acc, el) => acc > el ? el : acc)
    sortArr.push(minElement);
    // arr.splice(arr.indexOf(minElement),1)
    arr = arr.filter((f, i) => i !== arr.indexOf(minElement))
    // arr = arr.filter((f, i) => f !== minElement)
}
console.log(sortArr)







