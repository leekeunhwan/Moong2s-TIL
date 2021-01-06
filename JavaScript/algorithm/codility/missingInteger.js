// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, 
// returns the smallest positive integer(greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
    const sortedFilteredA =  A.sort((a, b) => a - b);
    
    let min = 1;
    
    for (let i in sortedFilteredA) {
        if (sortedFilteredA[i] > 0 && sortedFilteredA[i] == min) {
            min ++;
        }
    }
    
    return min;
}


// immutable하게 하는 행동과
// 보기좋게 값을 발라내는 행동도
// 다 시간복잡도임을 인지할 것!!