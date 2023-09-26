const chalk = require('chalk');
const validator = require('validator');

var email = 'muskan.consultadd.com';
var auth = validator.isEmail(email);
console.log(auth ? chalk.green.inverse('Email verified!') : chalk.red.inverse('Verification failed!'));
console.log(chalk.blue.inverse('Hi there! Good to see you:)'));
