const crypto = require('crypto');
const password = "Your key here";


const aes192cbcEncrypt = (buff) =>{

    const ENCRYPTION_KEY = crypto.scryptSync(password, 'salt', 24);
    const IV_LENGTH = 16; // For AES, this is always 16
    const iv = crypto.randomBytes(IV_LENGTH);
    // Encrypting data to aes-192-cbc algorithm
    const cipher = crypto.createCipheriv('aes-192-cbc', ENCRYPTION_KEY, iv);

    const dataEncrypted = cipher.update(buff);
    return Buffer.concat([iv, dataEncrypted, cipher.final()]);
}


const aes192cbcDecrypt = (buff) =>{

    const ENCRYPTION_KEY = crypto.scryptSync(password, 'salt', 24);
    const IV_LENGTH = 16; // For AES, this is always 16
    const iv = buff.slice(0, IV_LENGTH);
    const buf = buff.slice(IV_LENGTH);
    
    // Decrypting data to aes-192-cbc algorithm
    const decipher = crypto.createDecipheriv('aes-192-cbc', ENCRYPTION_KEY, iv);
    let decrypted = decipher.update(buf);
  
    return Buffer.concat([decrypted, decipher.final()]);
}


const encoder = (buff, toEnc) => {
    // Converting the buffer into string encoding parameter
    return buff.toString(toEnc);
}

const decoder = (buff, fromEnc, toEnc) => {
    // Converting the buffer into string encoding parameter
    return Buffer.from(buff, fromEnc).toString(toEnc);
}

module.exports = {encoder, aes192cbcEncrypt, aes192cbcDecrypt, decoder}