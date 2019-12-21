var _ = require('lodash');
var solution = require('./lib/solution.js');
var arrgen = require('./lib/arrgen.js');

fuzzy_task = (array,n) => {
    answer = 0;

    for(var i=1; i<=n; i+=1){
        let tmp = _.chunk(array,i);
        valid = x => x[0].length == i && x.every(z => z.join('').length <= n);

        if(valid(tmp)) answer += 1;
        else break;
        
    }

    return answer;
};

test("Static test 01 ",()=>{
    var array = ['aa','bbb','cccc','ddd', 'x', 'y'];
    var n = 7;
    expect(fuzzy_task(array,n)).toBe(2);
});

test("Solve fuzzy task test 01 ",()=>{
    var array = arrgen.arr(100,1,5);
    var n = 7;
    var current_solutions =  fuzzy_task(array,n)
    var test_solutions = solution.run(array,n)
    expect(current_solutions == test_solutions).toBe(true);
});

