// Complete the countingSort function below.
function countingSort(arr) {
    const result = Array.from({ length: 100 }, a => 0);

    arr.forEach((number) => {
        result[number] = result[number] + 1;    
    })

    return result
}
