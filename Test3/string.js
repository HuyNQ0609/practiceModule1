function testString(str1, str2, k) {
    for( let i = 0; i < str2.length; i++ ) {
        for( let j = 0; j < str1.length; j++ ) {
            if( str1[j] === str2[i + j]) {
                continue;
            } else {
                break;
            }
        }
        if( k === str1.length) {
            return true;
        }
    }
    return false;
}
console.log(testString("CodeGym", "C1122H1 CodeGym", 7))