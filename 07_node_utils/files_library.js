const {writeFile, readFile, unlink} = require("fs").promises;

const writeDataInFile = async (fileName, data) => {
    
    const dataFile = await writeFile(fileName, data, (err) => {
        if(err) throw err
    })
    console.log(`-- Created ${fileName} with this data: ${data}`);
    return dataFile;
}



const readDataFile = async (file, enc) => {

    const data = await readFile(file, enc, (err, data) => {
        if(err) throw err
    });
    console.log(`-- Readed data from ${file}: ${data}`);
    return data;
}

const deleteFile = async (file) => {
    console.log(`-- Deleted ${file}`);
    return await unlink(file, (err) => {
        if(err) throw err
    });
}
    



module.exports = {writeDataInFile, readDataFile, deleteFile};