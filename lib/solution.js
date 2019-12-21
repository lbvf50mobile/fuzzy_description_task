var _ = require('lodash');

exports.run = (array,n) => {
    answer = 0;

    for(var i=1; i<=n; i+=1){
        let tmp = _.chunk(array,i);
        valid = x => x[0].length == i && x.every(z => z.join('').length <= n);

        if(valid(tmp)) answer += 1;
        else break;
        
    }

    return answer;
};