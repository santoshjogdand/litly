const generateShotCode = () =>{
    let shortCode = "";
    let alphaNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for(let i = 0; i<10; i++){
        shortCode+=alphaNum[Math.floor(Math.random() * ((27+27)-0) - 0)]
    }
    return shortCode;
}

export default generateShotCode;