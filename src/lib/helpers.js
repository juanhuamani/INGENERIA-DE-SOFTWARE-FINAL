const bcryptjs = require('bcryptjs')
const helpers = {};

helpers.encryptPassword = async(password) => {// Recibe la contraseña
    const salt = await bcryptjs.genSalt(10);// Cifra 10 veces
    const hash = await bcryptjs.hash(password, salt);// Devuelve la contraseña con el patron para cifrarlo
    return hash;
}

helpers.matchPassword = async(password, savedPasword) => {
    try{
        return await bcryptjs.compare(password, savedPasword);        
    }catch(e){
        console.log(e);
    }
};

module.exports = helpers;