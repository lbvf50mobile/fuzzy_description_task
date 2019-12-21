arrgen = require('./../lib/arrgen.js');

test("Need to generate array ",()=>{
    for(var i = 1; i <= 11; i++){
        let ans = arrgen.arr(i,1,10);
        expect(ans.length).toBe(i)
        correct = ans.every(x => x.match(/[a-z]+/) && 1 <= x.length  && x.length <= 10)
        expect(correct).toBeTruthy()
    }
});