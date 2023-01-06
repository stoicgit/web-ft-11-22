const array = [2, 1, 5, 2, 3, 3, 4];

const findDuplicates = (array) => {
    let sortedArray = array.slice().sort();
    let sorted = [];

    for (let index = 0; index < sortedArray.length -1; index++) {
        if (sortedArray [index + 1] === sortedArray[index]) {
            sorted.push(sortedArray[index]);
        }
    }
    return sorted;
}
console.log(sorted);