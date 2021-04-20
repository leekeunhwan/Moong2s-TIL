function counting_sort(arr) {

    const answer = [];
    const counter = new Map();

    for (let i = 0; i < arr.length; i++) {

        if (counter.has(`${arr[i]}`)) {
            counter.set(`${arr[i]}`, counter.get(`${arr[i]}`) + 1)
            continue;
        }

        counter.set(`${arr[i]}`, 1);
    }

    const sortedKeyArr = [...counter].sort((a, b) => a[0] - b[0])

    sortedKeyArr.forEach(result => {
        for (let i = 0; i < result[1]; i++) {
            answer.push(Number(result[0]))
        }
    })

    return answer;
}


const result = counting_sort([1, 3, 2, 5, 4, 3, 3, 4, 5, 1, 1, 2, 4])