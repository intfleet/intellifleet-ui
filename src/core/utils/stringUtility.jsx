
const StringUtility = {
    format: (str, ...args) => {
        let i = 0;
        return str.replace(/{[^}]*}/g, () => args[i++]);
    }
}

export default StringUtility;