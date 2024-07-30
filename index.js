

// import {greet} from './greet.js';
// import {yo} from './yo.js';
// import chalk from 'chalk';

// import cowsay from 'cowsay';
// import figlet from 'figlet';

// figlet('Hello, Ntombi!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

// console.log(chalk.bgBlueBright)

// const cowMessage = cowsay.say {

// }

//let name = "Ntombi";

//name = "Lihle";

// const styledMessage = chalk.bgRed.whiteBright(greet('Xola'));
// console.log(chalk.bgRed.whiteBright(greet('Xola')));

//console.log(greet('Ntombi'));

//console.log(yo('Ntombi'));

import cowsay from 'cowsay';
import figlet from 'figlet';
import chalk from "chalk";

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));


figlet('Hello, Ntombi!', function(err, data) {
    if (err) {
        console.log('Something went wrong');
        console.dir(err);
        return;
    }
    console.log(data);
});

console.log(chalk.bgBlue.white(cowsay.say({
    text: "Hello, Kopano!"
})));

const styledMessage = chalk.bgGreen.whiteBright(greet('Xola'));
console.log(styledMessage)


