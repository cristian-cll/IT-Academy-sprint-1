// Ejercicio 1
// Creu una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer de l'exercici inicial.

const {readFile, writeFile, unlink} = require("fs").promises;
const {encoder, aes192cbcEncrypt, aes192cbcDecrypt, decoder} = require("./library")

const hexAndBase64Encoder = async (file) =>{
    console.log(`********************* Initializing hexAndBase64Encoder with ${file}`);
    // Reading file data
    const dataFile = await readFile(file, "utf8", (err, data) => {
        if(err) throw err
        return data;
    });

    // Converting string into buffer
    const buff = Buffer.from(dataFile, 'utf8');

    console.log(`-- Encoding to Hex and Base 64. Creating two files... enc_hex_${file} and enc_base64_${file}`);
    const hexData = encoder(buff, "hex")
    const base64Data = encoder(buff, "base64")

    
    // Writing Hex data encoded in a file
    await writeFile(`enc_hex_${file}`, hexData, (err) => {
        if(err) throw err
    });
    
    // Writing Base64 data encoded in a file
    await writeFile(`enc_base64_${file}`, base64Data, (err) => {
        if(err) throw err
    });

    
    // Deleting initial file
    console.log(`-- Deleting ${file}`);
    await unlink(file, (err) => {
        if(err) throw err
    });
}


// Creu una funció que guardi en disc els fitxers del punt anterior encriptats amb algorisme aes-192-cbc, i esborri els fitxers inicials.


const encrypt = async (file) => {

    console.log(`********************* Initializing encrypt with ${file}`);

    // Reading file data
    const fileData = await readFile(file, "utf8", (err, data) => {
        if (err) throw err
        return data;
    });


    // Converting string into buffer
    const buff = Buffer.from(fileData, 'utf8');

    console.log("Buffer: ", buff);

    const aes192cbcBuff = aes192cbcEncrypt(buff);
    console.log(`-- Cyphering to aes192cbc. Buffer: ${aes192cbcBuff.toString("utf8")}`);
    console.log(`-- Creating encrypt_${file}`);

    // Writing encrypted data in file
    await writeFile(`encrypt_${file}`, aes192cbcBuff, (err) => {
        if (err) throw err
    });

    // Deleting initial file
    console.log(`-- Deleting ${file}`);
    await unlink(file, (err) => {
        if (err) throw err
    });
}



// Creu una altra funció que desencripti i descodifiqui els fitxers finals tornant a generar els inicials.


const decrypt = async (file, encoding) => {
    console.log(`********************* Initializing decrypt with ${file}`);
        
    // Reading file data
    const fileData = await readFile(file, "binary", (err, data) => {
        if (err) throw err
        return data;
    });


    // Converting string into buffer
    const buff = Buffer.from(fileData, 'binary');

    console.log("Buffer: ", buff);
    console.log(`-- Decyphering from aes192cbc... `);
    const aes192cbcBuff = aes192cbcDecrypt(buff);
    

    // Converting buffer to string
    const str = Buffer.from(aes192cbcBuff, encoding).toString('utf8')

    console.log(`-- Decrypted data: ${str}`);
    console.log(`-- Decoding from ${encoding}. Creating decrypt_${file}`);
    const dec = decoder(str, encoding, "utf8");


    // Writing encrypted data in file
    await writeFile(`decrypt_${file}`, dec, "utf8", (err) => {
        if (err) throw err
    });

    // Deleting initial file
    await unlink(file, (err) => {
        if (err) throw err
    });
}




const init = async () =>{
    
    await hexAndBase64Encoder("test.txt");
    await encrypt("enc_hex_test.txt");
    await encrypt("enc_base64_test.txt");
    await decrypt("encrypt_enc_hex_test.txt", "hex");
    await decrypt("encrypt_enc_base64_test.txt", "base64");
}

init();