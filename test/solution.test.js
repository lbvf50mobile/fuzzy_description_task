var solution = require('./../lib/solution.js');

test("Need to solve the solution ",()=>{
    var array = ['aa','bbb','cccc','ddd', 'x', 'y'];
    var n = 7;
    expect(solution.run(array,n)).toBe(2);
});