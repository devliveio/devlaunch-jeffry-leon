const prompt = require('prompt-sync')();

const radius = prompt('What is the radius? ');
const height = prompt('What is the height ');

const volume = Match.PI * Match.pow(radius ,2) * height

console.log(`The Volume of the cylinder is' ${volume}`);