const NULL = null;
const UNDEFINED = undefined;
const NAN = NaN;

const isValidParam = (value) => {
    if (value === NULL || value === UNDEFINED || value === NAN) {
        return false;
    }
    return true;
}

const getStringParam = (value) => {
    try {
        if (isValidParam(value)) {
            return value
        }
    } catch (e) {
        console.error(e)
    }
    return "";
}

const parseInteger = (value) => {
    let val = 0;
    try {
        if (isValidParam(value)) {
            val = parseInt(value)
        }
        if (isValidParam(val)) {
            return val;
        } else {
            val = 0;
        }
    } catch (e) {
        console.error(e)
    }
    return val;
}

const parseFloatValue = (value) => {
    let val = 0;
    try {
        if (isValidParam(value)) {
            val = parseFloat(value)
        }
        if (isValidParam(val)) {
            return val;
        } else {
            val = 0;
        }
    } catch (e) {
        console.error(e)
    }
    return val;
}


const parseBoolean = (input) => {
    let val = false;
    try {
        val = String(input).toLowerCase() === "true";
    } catch (e) {
        console.error(e);
    }
    return val;
}

export default {
    isValidParam,
    getStringParam,
    parseInteger,
    parseFloatValue,
    parseBoolean
}