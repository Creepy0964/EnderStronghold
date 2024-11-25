const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let angle1, angle2, direction1, direction2;

console.log('Welcome! This script will help you to calculate the distance to the Ender Stronghold.');
console.log('NOTE: it is HIGHLY RECOMMENDED to read README.md before entering any data.');

rl.question('Enter first angle: ', (answer) => {
    if(isNaN(parseFloat(answer))) {
        console.log(`Uh oh! Data type of answer isn't float. Exiting...`);
        process.exit();
    }
    answer.includes(',') ? angle1 = answer.replace(',', '.') : angle1 = answer;
    rl.question('Enter second angle: ', (answer) => {
        if(isNaN(parseFloat(answer))) {
            console.log(`Uh oh! Data type of answer isn't float. Exiting...`);
            process.exit();
        }
        answer.includes(',') ? angle2 = answer.replace(',', '.') : angle2 = answer;
        rl.question('Enter direction [-X/+X/-Z/+Z]: ', (answer) => {
            direction1 = answer;
            switch(direction1) {
                case "-X":
                    direction2 = '+Z';
                    break;
                case "+X":
                    direction2 = '-Z';
                    break;
                case "-Z":
                    direction2 = '+X';
                    break;
                case "+Z":
                    direction2 = '-X';
                    break;
            }
            rl.close();
            let angle3 = Math.round((Math.abs(angle1 - angle2)) * 10) / 10;
            let distance = 40 / (Math.sin(angle3 * (Math.PI / 180)));
            console.log(`Done! Straight distance: ${Math.round(distance)}. Distance in blocks: ${Math.abs(Math.round(distance * Math.sin(angle2 * (Math.PI / 180))))}. Move more ${Math.abs(Math.round((distance * Math.sin(angle2 * (Math.PI / 180))) * Math.cos(angle2 * (Math.PI / 180))))} blocks in ${direction1}, then move ${Math.abs(Math.round((distance * Math.sin(angle2 * (Math.PI / 180))) * Math.sin(angle2 * (Math.PI / 180))))} blocks in ${direction2}.`);
        });
    });
});
