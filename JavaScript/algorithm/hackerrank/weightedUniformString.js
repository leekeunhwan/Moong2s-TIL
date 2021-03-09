// https://www.hackerrank.com/challenges/weighted-uniform-string/problem
// 이미지가 많아서 가서 문제를 보는게 좋을 것 같아 링크로 대체합니다.

function weightedUniformStrings(s, queries) {
    const answer = [];
    let prevStr = '';
    let tempAcc = 0;

    for (let i = 0; i < s.length; i++) {
        const strValue = s[i].charCodeAt() - 96;
        if (prevStr != '') {
            if (prevStr === s[i]) {
                tempAcc += strValue;
                answer.push(tempAcc);
            } else {
                tempAcc = 0;
                answer.push(strValue);
                tempAcc += strValue;
            }
        } else {
            answer.push(strValue);
            tempAcc += strValue;
        }


        prevStr = s[i];
    }

    return queries.map(query => answer.includes(query) ? 'Yes' : 'No');
}