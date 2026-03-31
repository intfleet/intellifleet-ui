//Library used from cdn Link: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
//reference https://www.tutorialspoint.com/What-is-JavaScript-AES-Encryption

// import CryptoJS from "custom-crypto-js";
//import { encryptText, decryptText } from './custom-crypto-js/cryptoNative.jsx';

//Reference:    https://www.npmjs.com/package/node-forge
import forge from 'node-forge';

const BROWSER_ID_LENGTH = 64;


// Encryption function
const encrypt = (text, secretKey) => {
    try {
        const salt = forge.random.getBytesSync(16);
        const key = forge.pkcs5.pbkdf2(secretKey, salt, 1000, 16);
        const iv = forge.random.getBytesSync(16);

        const cipher = forge.cipher.createCipher('AES-CBC', key);
        cipher.start({ iv });
        cipher.update(forge.util.createBuffer(text, 'utf8'));
        cipher.finish();

        const encrypted = cipher.output.getBytes();
        const combined = forge.util.encode64(salt + iv + encrypted);
        return combined;
    } catch (error) {
        console.error("Failed Encryption: ", error);
    }
    return "";
}

// Decryption function
const decrypt = (encryptedBase64, secretKey) => {
    try {
        const combined = forge.util.decode64(encryptedBase64);
        const salt = combined.slice(0, 16);
        const iv = combined.slice(16, 32);
        const encrypted = combined.slice(32);

        const key = forge.pkcs5.pbkdf2(secretKey, salt, 1000, 16);

        const decipher = forge.cipher.createDecipher('AES-CBC', key);
        decipher.start({ iv });
        decipher.update(forge.util.createBuffer(encrypted));
        const result = decipher.finish();

        if (!result) throw new Error("Decryption failed");
        return decipher.output.toString('utf8');
    } catch (error) {
        throw new Error("Decryption failed: ", error);
    }
}

const generateSecretKey = (charsetLength = 32) => {
    //hex = actual char * 2 means always double
    // const byteLength = charsetLength / 2; 
    // const bytes = forge.random.getBytesSync(byteLength);
    // const secretKey = forge.util.encode64(bytes);

    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let secretKey = '';

    while (secretKey.length < charsetLength) {
        const byte = forge.random.getBytesSync(1);
        const charCode = byte.charCodeAt(0);

        // Use only values that safely map to charset indices
        if (charCode < 256) {
            const index = charCode % charset.length;
            secretKey += charset[index];
        }
    }

    // Output
    console.log('Secret Key:', secretKey);
    console.log('Length:', secretKey.length);


    return secretKey;
}

  const generateBrowserId = () => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const plugins = Array.from(navigator.plugins).map((plugin) => plugin.name).join(',');
    const fingerprintString = userAgent + platform + plugins;

    const md = forge.md.sha256.create();
    md.update(fingerprintString, 'utf8');
    const browserId = md.digest().toHex(); // 64-character SHA-256 hex

    return browserId;
}

const createIndex = async (prefix, appInfo) => {
    const browserId = generateBrowserId();

    let index = prefix+"_"+browserId;
    console.log("browserId: ", browserId);
    console.log("index: ", index);
    if(!Object.keys(localStorage).find( f => f.indexOf(index) == 0)) {
        localStorage.setItem(index, JSON.stringify(appInfo))
    }   
}


const CryptoService = {
    encrypt,
    decrypt,
    generateSecretKey,
    generateBrowserId,
    createIndex,
    BROWSER_ID_LENGTH
}
export default CryptoService;