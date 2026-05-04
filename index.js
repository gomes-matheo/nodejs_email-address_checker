import chalk from 'chalk';
import validator from 'validator';

function validateEmail(email) {
	if(validator.isEmail(email)) {
		return console.log(chalk.green("${email} est valide"));
	} else {
		console.log(chalk.red("${email} est mal formaté"));
	}
}


validateEmail("this@javascript.com");
validateEmail("that.javascript.fr");
validateEmail("semicolon;");
