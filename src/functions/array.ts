
// делит массив на подчасти, например [1,2,3,4,5,6] => [[1,2,3],[4,5,6]];
export function splitArrayIntoSubarrays(array: any[], size: number) {

    let subArray = [];
    for (let i = 0; i < Math.ceil((array.length) / size); i++) {
        subArray.push(array.slice((i * size), (i * size) + size))
    }
    return subArray;
}