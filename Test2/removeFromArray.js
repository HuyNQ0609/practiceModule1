function tryRemoveFromArray(array) {
    let n = array.length;
    let arrNew = [];
    for( let index = 0; index < n; index++) {
        if( index === (n - 3)) {
            arrNew = array.splice( index, 1);
            return arrNew;
        } else {
            return array;
        }
    }
}
tryRemoveFromArray([1, 2, 4, 5, 7, 9, 10, 12, 20]);