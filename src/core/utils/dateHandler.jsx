//https://javascript.info/date
//https://momentjs.com/timezone/docs/
import moment from 'moment-timezone';

const ALL_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DEFAULT_DATE_FORMAT = "DD-MM-YYYY";
const DEFAULT_TIME_FORMAT = "HH:mm:ss";
const DEFAULT_DATE_TIME_FORMAT = "DD-MM-YYYY HH:mm:ss";

const DATE_PICKER_FORMAT = "YYYY-MM-DD";
const TIME_PICKER_FORMAT = "HH:mm";
const DATE_TIME_PICKER_FORMAT = "YYYY-MM-DD HH:mm";

const DATE_TIME_FORMAT = {
    DEFAULT_DATE_TIME_FORMAT,

    DEFAULT_DATE_FORMAT,
    DATE_FORMAT_MMM_COMMA_YYYY: "MMM, yyyy",
    DATE_FORMAT_MM_COMMA_YYYY: "MM, yyyy",
    DATE_FORMAT_MMM_HEIGHPHEN_YYYY: "MMM-yyyy",
    DATE_FORMAT_MM_HEIGHPHEN_YYYY: "MM-yyyy",


    DEFAULT_TIME_FORMAT,
}

const TIME_ZONE_KOLKATA = "Asia/Kolkata";
const mdate = () => moment().tz(TIME_ZONE_KOLKATA);

const getFormattedDate = (format, mdateInput) => {
    try {
        if (!format || format === "") {
            format = DEFAULT_DATE_FORMAT;
        }

        if (!mdateInput) {
            return mdate().format(format);
        }

        if (!moment.isMoment(mdateInput)) {
            console.warn("moment date instance not found.")
            return "";
        }

        return mdate().format(format);
    } catch (error) {
        console.error(error);
    }
}


const getFormattedTime = (format, mdateInput) => {
    try {
        if (!format || format === "") {
            format = DEFAULT_TIME_FORMAT;
        }

        if (!mdateInput) {
            return mdate().format(format);
        }

        if (!moment.isMoment(mdateInput)) {
            console.warn("moment date instance not found.")
            return "";
        }

        return mdate().format(format);
    } catch (error) {
        console.error(error);
    }
}

const getFormattedDateTime = (format, mdateInput) => {
    try {
        if (!format || format === "") {
            format = DEFAULT_DATE_TIME_FORMAT;
        }

        if (!mdateInput) {
            return mdate().format(format);
        }

        if (!moment.isMoment(mdateInput)) {
            console.warn("moment date instance not found.")
            return "";
        }

        return mdate().format(format);
    } catch (error) {
        console.error(error);
    }
}

const getDateForDatePicker = (mdateInput) => {
    return getFormattedDate(DATE_PICKER_FORMAT, mdateInput);
}

const getTimeForTimePicker = (mdateInput) => {
    return getFormattedTime(TIME_PICKER_FORMAT, mdateInput);
}

const getDateTimeForDateTimePicker = (mdateInput) => {
    console.log(getFormattedDateTime(DATE_TIME_PICKER_FORMAT, mdateInput));
    return getFormattedDateTime(DATE_TIME_PICKER_FORMAT, mdateInput);
}

const formatStringDDMMYYYYDate = (date, format) => {
    if (date) {
        let arr = [];
        if (date.search(",") >= 0) {
            arr = date.split(',');
        } else if (date.search("-") >= 0) {
            arr = date.split("-");
        } else if (date.search(" ") >= 0) {
            arr = date.split(" ");
        }


        if (format) {
            let rtnDate = format;

            if (format.search("dd") >= 0) {
                rtnDate = rtnDate.replace("dd", arr[0]);
            }

            if (format.search("MMM") >= 0) {
                rtnDate = rtnDate.replace("MMM", ALL_MONTHS[parseInt(arr[1])]);
            } else if (format.search("MM") >= 0) {
                rtnDate = rtnDate.replace("MM", parseInt(arr[1]));
            }

            if (format.search("yyyy") >= 0) {
                rtnDate = rtnDate.replace("yyyy", arr[2]);
            }
            return rtnDate;
        }
    }
    return "";
}

const convertDatePickerDateToAPIDate = (strDate) => {
    return strDate ? moment(strDate, DATE_PICKER_FORMAT).format(DEFAULT_DATE_FORMAT) : null;
}

const convertTimePickerTimeToAPITime = (strDate) => {
    return strDate ? moment(strDate, TIME_PICKER_FORMAT).format(DEFAULT_TIME_FORMAT) : null;
}

const convertDateTimePickerDateTimeToAPIDateTime = (strDate) => {
    return strDate ? moment(strDate, DATE_TIME_PICKER_FORMAT).format(DEFAULT_DATE_TIME_FORMAT) : null;
}

///==================================================================================



const convertAPIDateToDatePickerDate = (strDate) => {
    let cnvrtDt = null;
    if (strDate && strDate !== "") {
        let arr = strDate.split("-");
        let date = new Date(arr[2] + "-" + arr[1] + "-" + arr[0]);
        cnvrtDt = getFormattedDate(DATE_PICKER_FORMAT, date);
    }
    return cnvrtDt;
}

const parseAPIDate = (strDate) => {
    let date = null;
    if (strDate && strDate !== "") {
        let arr = strDate.split("-");
        date = new Date(arr[2] + "-" + arr[1] + "-" + arr[0]);
    }
    return date;
}

const parseDate = (stringDate, format = DEFAULT_DATE_FORMAT) => {
    return moment(stringDate, format);
}

const addMonthToDate = (date, monthsToAdd) => {
    const newDate = new Date(date); // Create a copy of the original date
    newDate.setMonth(newDate.getMonth() + monthsToAdd); // Add the specified number of months
    return newDate;
}

const addMonthToStringDate = (stringDate, format = DEFAULT_DATE_FORMAT, monthsToAdd) => {
    const newDate = new Date(parseDate(stringDate, DEFAULT_DATE_FORMAT)); // Create a copy of the original date
    newDate.setMonth(newDate.getMonth() + monthsToAdd); // Add the specified number of months
    return newDate;
}



export {
    DATE_TIME_FORMAT,
    getFormattedDate,
    getFormattedTime,
    getFormattedDateTime,
    getDateForDatePicker,
    getTimeForTimePicker,
    getDateTimeForDateTimePicker,
    formatStringDDMMYYYYDate,
    convertAPIDateToDatePickerDate,
    parseAPIDate,
    convertDatePickerDateToAPIDate,
    convertTimePickerTimeToAPITime,
    convertDateTimePickerDateTimeToAPIDateTime,
    parseDate,
    addMonthToDate,
    addMonthToStringDate
}