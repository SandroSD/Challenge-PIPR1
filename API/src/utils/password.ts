import * as bcrypt from 'bcrypt';

export async function  encryptPassword(inputPassword: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const passwordEncrypted = await bcrypt.hash(inputPassword, salt);

    return passwordEncrypted;
}

export async function comparePassword(inputPassword: string, userPassword: string): Promise<boolean> {
    return await bcrypt.compare(inputPassword, userPassword);
}