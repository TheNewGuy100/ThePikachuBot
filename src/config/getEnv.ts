import { resolve } from 'path';
import { existsSync } from 'fs';
import { config } from 'dotenv';
import chalk from 'chalk';

export function setENV() {
	try {
		const getEnvironment = resolve(__dirname, '..', '..', '..', '.env');

		if (existsSync(getEnvironment)) {
			config({
				path: getEnvironment,
			});

			return console.log(chalk.green(`ENV ATUAL: ${process.env.NODE_STATUS_ENV}`));
		} else {
			return console.log(chalk.red(`ENV NÃO CARREGADA`));
		}
		
	} catch (error) {
		console.log(chalk.red(error));
	}
}
