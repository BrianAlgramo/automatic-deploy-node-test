declare function require(name: string): any;

const dotenv: any = require('dotenv');

dotenv.config();

export const PORT: string = process.env.PORT!;