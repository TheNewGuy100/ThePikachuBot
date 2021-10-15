import { resolve } from 'path';
import { existsSync } from 'fs';
import { config } from 'dotenv';
import chalk from 'chalk';

export function setENV() {
	const getEnvironment = resolve(__dirname, '..', '..', '.env');

	if (existsSync(getEnvironment)) {
		config({
			path: getEnvironment,
		});
	}
	console.log(chalk.green(`ENV ATUAL: ${process.env.NODE_STATUS_ENV}`));
}
