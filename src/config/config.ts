import * as dotenv from 'dotenv';
import { environments, Env} from './environments';

dotenv.config({quiet: true});
const env = (process.env.ENV ?? 'qa') as Env;

if(!environments[env]){
    throw new Error(`Unknown ENV "${env}".Use one of: ${Object.keys(environments).join(', ')}`);
}

function required(name: string): string{
    const value = process.env[name];
    if(!value) throw new Error(`Missing ${name} in .env`);
    return value;
}

function requiredNumber(name: string): number{
    const value = Number(required(name));
    if(Number.isNaN(value)) throw new Error(`${name} must be a number`);
    return value;
}

export const config = {
    env,
    ...environments[env],
    username: required('APP_USERNAME'),
    password: required('APP_PASSWORD'),
    headless: process.env.HEADLESS !== 'false',
    timeout: requiredNumber('TIMEOUT')
};