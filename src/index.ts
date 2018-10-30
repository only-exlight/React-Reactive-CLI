import chalk from 'chalk';
import { HELLO } from './const/messages';
const log = console.log;

log(chalk.green(HELLO));
log(process.argv);
log(__dirname);