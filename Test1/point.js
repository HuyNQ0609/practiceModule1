function listPoint(point) {
    let maxFirst = point[0];
    for( let i = 0; i < point.length; i++) {
        if (point[i] > maxFirst) {
            maxFirst = point[i];
        }
        let pointNew1 = point.splice(i, 1);
        for( let j = 0; j < pointNew1.length; j++) {
            let max2nd = pointNew1[0];
            if (max2nd < pointNew1[j]) {
                max2nd = pointNew1[j];
            }
            let pointNew2 = pointNew1.splice(j, 1);
            for (let k = 0; k < pointNew2.length; k++) {
                let max3rd = pointNew2[0];
                if (max3rd < pointNew2[k]) {
                    max3rd = pointNew2[k];
                    return max3rd;
                }
            }
        }
    }
}
console.log(listPoint([3, 5, 5, 2, 5, 6, 8, 9, 11, 7, 6, 8, 99]));

