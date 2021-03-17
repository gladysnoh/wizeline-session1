import dotenv from 'dotenv';
dotenv.config();

export const CREDENTIALS ={
    STANDARD_USERNAME: process.env.STANDARDUSERNAME,
    LOCKED_OUT_USERNAME: process.env.LOCKED_OUT_USERNAME,
    PASSWORD: process.env.PASSWORD,
    INVALID_PASSWORD: process.env.INVALID_PASSWORD,
    INVALID_USERNAME: process.env.INVALID_USERNAME
};

export const CHECKOUTINFORMATION ={
    FIRST_NAME: process.env.CHECKOUTFIRSTNAME,
    LAST_NAME: process.env.CHECKOUTLASTNAME,
    ZIP: process.env.CHECKOUTZIP
}
