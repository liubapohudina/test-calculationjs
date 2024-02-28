
/*------------------тут набір чисел-------------------------*/
const numbers = '142, 140, kj, 98, pl, 65, 60, 58, 1, 2, 3, 4, -87, -86, 52, 51, 50, 49, 50, 51, 52, 53, 54, 55'; 
/*----------------якщо з файлу, то встановити node.js----------*/
// const fs = require('fs');

// /*---------- Функція для зчитування чисел з файлу і використовувати ці дані----------------*/
// function readNumbersFromFile(filename) {
//      return const fileContent = fs.readFileSync(filename, 'utf8');
//  
// }
let arrOfNumbers = []

if (typeof numbers !== Array) {
    /*----------------перетворення в масив і перевірка на NaN----------------*/
    const changeToArr = numbers.split(',').filter(item => !isNaN(item.trim())).map(Number);
    if (changeToArr.length > 0) {
        arrOfNumbers = changeToArr;
    } else {
        console.log("This array has NaN!");
    }   
} else {
    arrOfNumbers = numbers;
}


/*------------task 1 -------------*/
function maxNumber(arr) {
    //console.log(Math.max(...arr));
    return Math.max(...arr);
}
maxNumber(arrOfNumbers);

/*-------------task 2-----------*/
function minNumber (arr) {
    //console.log(Math.min(...arr))
    return Math.min(...arr)
}
minNumber(arrOfNumbers)
/*----------task 3---------------*/
function getMedian(arr) {
    const arrSort = arr.sort((a, b) => a - b);
    const lengthArr = arrSort.length;
    if (lengthArr % 2 === 0) {
        const arrIndexAverage = lengthArr / 2;
        const middleValue1 = arrSort[Math.floor(arrIndexAverage - 1)]; 
        const middleValue2 = arrSort[Math.ceil(arrIndexAverage)];
        const median = (middleValue1 + middleValue2) * 0.5;
        return median;
    } else {
        const mid = Math.floor(lengthArr / 2);
        console.log('This array doesn`t have even length! Please check the array! Median for this array is impossible to define')
        return arrSort[mid];
    }
}

getMedian(arrOfNumbers);

/*----------------task 4--------------*/
function getAverageNumber(arr) {
    const sumAllNumbers = arr.reduce((acc, elem) => acc + elem, 0);
    return sumAllNumbers / arr.length;
}

getAverageNumber(arrOfNumbers)

/*--------------task 5-----------------*/
function findIncreasingSequenceBigValue(arr) {
    let increasingSequence = [];
    let currentNumb = [arr[0]];
    //console.log([arr[0]])
    for (let i = 0; i < arr.length; i += 1) {
        if (i === 0 || arr[i] > arr[i - 1]) {
            currentNumb.push(arr[i])
        }
        else {
            increasingSequence.push(currentNumb);
            currentNumb = [arr[i]];
        }
    }
    increasingSequence.push(currentNumb);
    let longestSequence = increasingSequence.reduce((acc, elem) => elem.length > acc.length ? elem : acc, [])
    console.log(`The increasing sequence has length: ${longestSequence.length} `)
    return longestSequence.length;
}

findIncreasingSequenceBigValue(arrOfNumbers);

/*----------------------task 6-------------------*/
function findIncreasingSequenceSmallValue(arr) {
   let increasingSequence = [];
    let currentNumb = [arr[0]];
    for (let i = 0; i < arr.length; i += 1) {
        if (i === 0 || arr[i] < arr[i - 1]) {
            currentNumb.push(arr[i])
        }
        else {
            increasingSequence.push(currentNumb);
            currentNumb = [arr[i]];
        }
    }
    increasingSequence.push(currentNumb);
    let longestSequence = increasingSequence.reduce((acc, elem) => elem.length > acc.length ? elem : acc, [])
    console.log(`The increasing sequence has length: ${longestSequence.length}`)
    return longestSequence.length;
}

findIncreasingSequenceSmallValue(arrOfNumbers)


console.log('The biggest number:', maxNumber(arrOfNumbers));
console.log('The smallest number:', minNumber(arrOfNumbers));
console.log('The median:', getMedian(arrOfNumbers));
console.log('The average of numbers:', getAverageNumber(arrOfNumbers));