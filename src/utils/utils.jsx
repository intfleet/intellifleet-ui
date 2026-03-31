
import CONSTANSTS from "../constants/appConstants";
import APIConstants from '../constants/apiConatants';
import LocalStorageHandler from "./localStorageHandler";
const { OBJECTS } = CONSTANSTS;

const getFormPOSTApiUrl = (object) => {
    if(object === OBJECTS.USER_DETAILS) {
        return APIConstants.USER_DETAILS_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.EMPLOYEE_DETAILS) {
        return APIConstants.EMPLOYEE_DETAILS_CREATE_OR_UPDATE
    } else if(object === OBJECTS.DOCUMENTS) {
        return APIConstants.DOCUMENTS_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.EMPLOYEE_SALARY) {
        return APIConstants.EMPLOYEE_SALARY_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.BANK_DETAILS) {
        return APIConstants.BANK_DETAILS_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.EMP_MACHINE_DETAILS) {
        return APIConstants.EMPLOYEE_MACHINE_DETAILS_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.MACHINE_DETAILS) {
        return APIConstants.MACHINE_DETAILS_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.ENTITY_DETAILS) {
        return APIConstants.SESSION_DETAILS_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.EMPLOYEE_ATTENDENCE) {
        return APIConstants.EMPLOYEE_ATTENDENCE_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.EMPLOYEE_LEAVES) {
        return APIConstants.EMPLOYEE_LEAVES_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.M_DESIGNATED_HOLIDAYS) {
        return APIConstants.MASTER_DESIGNATED_HOLIDAYS_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.M_EMPLOYEE_LEAVES) {
        return APIConstants.MASTER_EMPLOYEE_LEAVES_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.ORG_DETAILS) {
        return APIConstants.ORG_DETAILS_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.BIOMETRIC_ATTENDANCE) {
        return APIConstants.BIOMETRIC_ATTENDANCE_CREATE_OR_UPDATE;
    } else if(object === OBJECTS.EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS) {
        return APIConstants.EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS_CREATE_OR_UPDATE;
    }
}

const getCommonDownloadApiUrl = (object) => {
    if(object === OBJECTS.USER_DETAILS) {
        return APIConstants.USER_DETAILS_DOWNLOAD;
    } else if(object === OBJECTS.EMPLOYEE_DETAILS) {
        return APIConstants.EMPLOYEE_DETAILS_DOWNLOAD;
    } else if(object === OBJECTS.DOCUMENTS) {
        return APIConstants.DOCUMENTS_DOWNLOAD;
    } else if(object === OBJECTS.EMPLOYEE_SALARY) {
        return APIConstants.EMPLOYEE_SALARY_DOWNLOAD;
    } else if(object === OBJECTS.EMPLOYEE_SALARY_DETAILS) {
        return APIConstants.EMPLOYEE_SALARY_DETAILS_DOWNLOAD;
    } else if(object === OBJECTS.EMPLOYEE_MONTHLY_PAYABLE_SALARY) {
        return APIConstants.EMPLOYEE_MONTHLY_PAYABLE_SALARY_DOWNLOAD;
    } else if(object === OBJECTS.EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS) {
        return APIConstants.EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS_DOWNLOAD;
    } else if(object === OBJECTS.BANK_DETAILS) {
        return APIConstants.BANK_DETAILS_DOWNLOAD;
    } else if(object === OBJECTS.MACHINE_DETAILS) {
        return APIConstants.MACHINE_DETAILS_DOWNLOAD;
    } else if(object === OBJECTS.EMP_MACHINE_DETAILS) {
        return APIConstants.EMPLOYEE_MACHINE_DETAILS_DOWNLOAD;
    } else if(object === OBJECTS.ENTITY_DETAILS) {
        return APIConstants.SESSION_DETAILS_DOWNLOAD;
    } else if(object === OBJECTS.EMPLOYEE_LEAVES) {
        return APIConstants.EMPLOYEE_LEAVES_DOWNLOAD;
    } else if(object === OBJECTS.M_DESIGNATED_HOLIDAYS) {
        return APIConstants.MASTER_DESIGNATED_HOLIDAYS_DOWNLOAD;
    } else if(object === OBJECTS.M_EMPLOYEE_LEAVES) {
        return APIConstants.MASTER_EMPLOYEE_LEAVES_DOWNLOAD;
    } else if(object === OBJECTS.ORG_DETAILS) {
        return APIConstants.ORG_DETAILS_DOWNLOAD;
    }
}

const isPermission = (object, permissionType) => {
    let role = LocalStorageHandler.getUserRole();
    if(role && role === CONSTANSTS.USER_ROLE.SADMIN) {
        return [
            CONSTANSTS.USER_PERMISSION.ADD, 
            CONSTANSTS.USER_PERMISSION.VIEW, 
            CONSTANSTS.USER_PERMISSION.EDIT,
            CONSTANSTS.USER_PERMISSION.DELETE
        ]
    }
    let permission = LocalStorageHandler.getPermission();
    permission = object && permission &&  permission[object]? permission[object] : [];
    return permissionType ? permission.includes(permissionType) : false;
}

const objectPermissions = (object) => {
    let role = LocalStorageHandler.getUserRole();
    if(role && role === CONSTANSTS.USER_ROLE.SADMIN) {
        return [
            CONSTANSTS.USER_PERMISSION.ADD, 
            CONSTANSTS.USER_PERMISSION.VIEW, 
            CONSTANSTS.USER_PERMISSION.EDIT,
            CONSTANSTS.USER_PERMISSION.DELETE
        ]
    }
    let permission = LocalStorageHandler.getPermission();
    permission = object && permission &&  permission[object]? permission[object] : [];
    return permission;
}

const getUserRole = () => {
    return LocalStorageHandler.getUserRole();
}

const isSAdmin = () => {
    return LocalStorageHandler.getUserRole() === CONSTANSTS.USER_ROLE.SADMIN;
}


// const isDetailView = () => {
//     const { pathname } = useLocation();
//     let index = pathname.split("/").indexOf("detail_view");
//     return index >= 0 ? true : false;
// }

const removeAllHtmlTag = (text) => {
    return text.replace(/(<([^>]+)>)/gi, '');
}

const getObjectBasedOnUserCategory = () => {
    let category = LocalStorageHandler.getUserCategory();
    if("EMPLOYEE" === category) {
        return OBJECTS.EMPLOYEE_DETAILS;
    } else if("ORGANISATION" === category) {
        // Need to do....
    } else if("VENDOR" === category) {
        // Need to do....
    } else if("USER" === category) {
        // Need to do....
    }
    return null;
}

const Utils = {
    // getObjectNameFromUrl,
    // getChildObjectsByObject,
    // isDetailView,
    // downloadCSVFile,
    // getForienKeyFieldName,
    getFormPOSTApiUrl,
    isPermission,
    objectPermissions,
    getUserRole,
    isSAdmin,
    getCommonDownloadApiUrl,
    removeAllHtmlTag,
    getObjectBasedOnUserCategory
}

export default Utils;