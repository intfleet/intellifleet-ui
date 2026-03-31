import forge from 'node-forge';

const generateUniqueId = () => {
    const randomPart = forge.util.encode64(forge.random.getBytesSync(8))
        .replace(/[^a-zA-Z0-9]/g, '')
        .substring(0, 6); // random part
    const timePart = Date.now().toString(36).substring(0, 4); // time-based part
    return (randomPart + timePart).substring(0, 10);
}


export default {
    generateUniqueId
}