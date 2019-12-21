function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomChar(){

     return String.fromCharCode(98 + getRandomInt(26));

}


exports.str = x => Array.from({length: x}, ()=> randomChar()).join('');