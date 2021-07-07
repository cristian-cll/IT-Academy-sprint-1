// Ejercicio 1
// Creu una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer de l'exercici inicial.

const {encoder, aes192cbcEncrypt, aes192cbcDecrypt, decoder} = require("./crypto_library");
const {writeDataInFile, readDataFile, deleteFile} = require("././files_library");

const hexAndBase64Encoder = async (file, encoding) =>{
    console.log(`********************* Initializing hexAndBase64Encoder with ${file}  *********************`);
    
    // Reading file data
    const dataFile = await readDataFile(file, encoding)

    // Converting string into buffer
    const buff = Buffer.from(dataFile, 'utf8');

    // Encoding Buffer to Hex and Base64
    console.log(`-- Encoding to Hex and Base 64. Creating two files... enc_hex_${file} & enc_base64_${file}`);
    const hexData = encoder(buff, "hex")
    const base64Data = encoder(buff, "base64")

    // Writing Hex data encoded in a file
    await writeDataInFile(`enc_hex_${file}`, hexData);
    
    // Writing Base64 data encoded in a file
    await writeDataInFile(`enc_base64_${file}`, base64Data);
    
    // Deleting initial file
    await deleteFile(file);
}


// Creu una funció que guardi en disc els fitxers del punt anterior encriptats amb algorisme aes-192-cbc, i esborri els fitxers inicials.


const encrypt = async (file, encoding) => {

    console.log(`********************* Initializing encrypt with ${file} *********************`);

    // Reading file data
    const dataFile = await readDataFile(file, encoding);

    // Converting string into buffer
    const buff = Buffer.from(dataFile, 'utf8');

    const aes192cbcBuff = aes192cbcEncrypt(buff);
    console.log(`-- Cyphering to aes192cbc. Buffer: ${aes192cbcBuff.toString("utf8")}`);
    console.log(`-- Creating encrypt_${file}`);

    // Writing encrypted data in file
    await writeDataInFile(`encrypt_${file}`, aes192cbcBuff);

    // Deleting initial file
    await deleteFile(file);
}


// Creu una altra funció que desencripti i descodifiqui els fitxers finals tornant a generar els inicials.


const decrypt = async (file, encFile, encoding) => {
    console.log(`********************* Initializing decrypt with ${file} *********************`);
        
    // Reading file data
    const dataFile = await readDataFile(file, encFile);

    // Converting string into buffer
    const buff = Buffer.from(dataFile, 'binary');


    console.log(`-- Decyphering from aes192cbc... `);
    const aes192cbcBuff = aes192cbcDecrypt(buff);

    // Converting buffer to string
    const str = Buffer.from(aes192cbcBuff, encoding).toString('utf8')

    //console.log(`-- Decrypted data: ${str}`);
    console.log(`-- Decoding from ${encoding}. Creating decrypt_${file}`);
    const dec = decoder(str, encoding, "utf8");

    // Writing encrypted data in file
    await writeDataInFile(`decrypt_${file}`, dec);

    // Deleting initial file
    await deleteFile(file);
}


const init = async () =>{
    
    await writeDataInFile("test.txt", "Cristian Cullell Ortega")
    await hexAndBase64Encoder("test.txt", "utf8");
    await encrypt("enc_hex_test.txt", "utf8");
    await encrypt("enc_base64_test.txt", "utf8");
    await decrypt("encrypt_enc_hex_test.txt", "binary", "hex");
    await decrypt("encrypt_enc_base64_test.txt", "binary","base64");
}

init();