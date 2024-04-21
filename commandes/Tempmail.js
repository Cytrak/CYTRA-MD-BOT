"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "tempmail", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*FLASH-MD* Temporary emails,Powered by *France King* \n\n ' + "Click the links below to create unlimited TEMPORARY Emails. Powered by *CYTRA-MD.*\n\n";
    let d = ' 1️⃣ https://tempumail.com\n\n 2️⃣ https://etempmail.com\n\n 3️⃣ https://ghostmail.one\n\n 4️⃣ https://tempmailid.com\n\n 5️⃣ https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://temp-mail.org/en/&ved=2ahUKEwiC_Pai89OFAxXMg_0HHUB3AW8QFnoECAYQAQ&usg=AOvVaw3z0rGMHgGrudTDmROkgggU';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/6238d670a279057951ba5.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
