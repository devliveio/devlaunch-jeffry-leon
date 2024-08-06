import promptSync from 'prompt-sync';

const prompt = promptSync();

const name: string = prompt('How many more times? ');

console.log(`Hello, ${name}!`);