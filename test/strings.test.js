strgen = require('./../lib/strgen.js');
test('first test', ()=> expect(true).toBe(true));

test('String of N elements must be generated correctly',()=>{
    for(var i = 1 ; i <= 10; i++){
        let ans = strgen.str(i);
        expect(ans.length).toBe(i);
        expect(ans).toMatch(/[a-z]+/);
    }
});