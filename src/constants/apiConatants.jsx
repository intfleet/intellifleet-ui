
const APIConstants =  {
    //HOST: "http://192.168.29.112:8080",
    //HOST: "http://54.150.237.74:8080",
    HOST: "http://192.168.100.251:30084",
    // HOST: "http://localhost:8080",

    APP_LOGIN: "/api/authenticate",

    FORM_POST: "/api/form",
    FORM_GET: "/api/form/{id}",
    FORM_DELETE: "/api/form/{id}",
    FORM_LISTVIEW_GET: "/api/form/listview",
    FORM_BUILDER_INFO_GET_POST: "/api/form/{id}/form-builder-info",
    FORM_INFO_GET: "/api/form/{id}/form-info",
    FORM_TABLE_FIELDS: "/api/form/{tableName}/fields",

    QUERY_GET: "/api/query/{id}/form-dropdown",
    QUERY_BUILDER_INFO_GET: "/api/query/builder-info/{formId}",


    ADMIN: "/api/admin",
    ADMIN_FORM: "/api/admin/form",
    ADMIN_DATA: "/api/admin/data",
    ADMIN_GROUP_LIST: "/api/admin/group/list/get",
    ADMIN_GROUP_CHILD_LIST: "/api/admin/group-child/list/get/",
    ADMIN_CUSTOMER_LIST_BY_GROUP_ID: "/api/admin/customer/list/get/",

    RECORD_GET: "/api/record/{formId}/{id}",
    RECORD_GET_LISTVIEW: "/api/record/listview",
    RECORD_POST: "/api/record",


    GPS_DATA_GET: "/api/gps-data",




    DASHBOARD_MONTHLY_APPROVAL_LEAVES_GET:"/api/dashboard/leaves/approved/get",
    
    ORG_DETAILS_GET_LIST: "/api/org_details/list/get",
    ORG_DETAILS_CREATE_OR_UPDATE:"/api/org_details/create_or_update",
    ORG_DETAILS_DELETE_BATCH:"/api/org_details/delete/batch",
    ORG_DETAILS_DOWNLOAD: "/api/org_details/download/",
    ORG_DETAILS_LOGO_UPLOAD:"/api/org_details/LOGO/upload/",
    ORG_DETAILS_LOGO_GET:"/api/org_details/LOGO/get/",

    USER_DETAILS_GET_LIST:"/api/user-details/list/get",
    USER_DETAILS_CREATE_OR_UPDATE:"/api/user_details/create_or_update",
    USER_DETAILS_DELETE_BATCH:"/api/user_details/delete/batch",
    USER_DETAILS_PROFILE_PICTURE_UPLOAD:"/api/user_details/profile_picture/upload",
    USER_DETAILS_PROFILE_PICTURE_GET:"/api/user_details/profile_picture/get",
    USER_DETAILS_SIGNATURE_UPLOAD : "/api/user_details/signature/upload",
    USER_DETAILS_SIGNATURE_GET : "/api/user_details/signature/get",
    USER_DETAILS_LIST_ONLY_USER : "/api/user_details/list/only-user",
    USER_DETAILS_UPDATE_ONLY_USER_ROLE : "/api/user_details/update/only-user-role",
    USER_DETAILS_REMOVE_ROLE: "/api/user_details/remove/user-role/",
    USER_DETAILS_DOWNLOAD: "/api/user_details/download/",
    USER_DETAILS_UPDATE_PASSWORD: "/api/user_details/update_password",

    USER_DETAILS_ROLE_PERMISSION_GET: "/api/user_details/user-role-permission/get",
    USER_DETAILS_ROLE_PERMISSION_GET_BY_OBJECT_ROLE: "/api/user_details/user-role-permission/get/",
    USER_DETAILS_ROLE_PERMISSION_CREATE_OR_UPDATE: "/api/user_details/user-role-permission/create_or_update",

    EMPLOYEE_DETAILS_CREATE_OR_UPDATE:"/api/employee_details/create_or_update",
    EMPLOYEE_DETAILS_GET_LIST:"/api/employee_details/list/get",
    EMPLOYEE_DETAILS_DELETE_BATCH:"/api/employee_details/delete/batch",
    EMPLOYEE_DETAILS_DOWNLOAD: "/api/employee_details/download/",

    BIOMETRIC_ATTENDANCE_CREATE_OR_UPDATE:"/api/biometric_attendance/create_or_update",
    BIOMETRIC_ATTENDANCE_GET_FILE_BY_ID:"/api/biometric_attendance/get_file/",
    BIOMETRIC_ATTENDANCE_POST_PROCESS_ATTENDANCE_BY_ID:"/api/biometric_attendance/process_attendance/",
    
    EMPLOYEE_ATTENDENCE_CREATE_OR_UPDATE:"/api/employee_attendence/create_or_update",
    EMPLOYEE_ATTENDENCE_DELETE_BATCH:"/api/employee_attendence/delete/batch",
    EMPLOYEE_ATTENDENCE_DOWNLOAD: "/api/employee_attendence/download/",
    EMPLOYEE_ATTENDENCE_GET_BY_EMP_ID:"/api/employee_attendence/details/get/",
    EMPLOYEE_ATTENDENCE_ENABLED_DISABLE_CREATE:"/api/employee_attendence/enable/",
    EMPLOYEE_ATTENDENCE_IS_ENABLED_GET:"/api/employee_attendence/isEnable",
    EMPLOYEE_ATTENDENCE_PROCESS_SALARY:"/api/employee_attendence/process_salary",

    DOCUMENTS_CREATE_OR_UPDATE:"/api/documents/create_or_update",
    DOCUMENTS_DELETE_BATCH:"/api/documents/delete/batch",
    DOCUMENTS_GET_FILE_BY_ID:"/api/documents/get_file/",
    DOCUMENTS_DOWNLOAD: "/api/documents/download/",

    EMPLOYEE_LEAVES_CREATE_OR_UPDATE:"/api/employee_leaves/create_or_update",
    EMPLOYEE_LEAVES_DELETE_BATCH:"/api/employee_leaves/delete/batch",
    EMPLOYEE_LEAVES_UPDATE_STATUS_BY_ID:"/api/employee_leaves/update_status/",
    EMPLOYEE_LEAVES_DOWNLOAD: "/api/employee_leaves/download/",
    EMPLOYEE_LEAVES_BY_STATUS: "/api/employee_leaves/get/status/",

    EMPLOYEE_LEAVES_DETAILS_GET_BY_EMP_ID:"/api/employee_leaves/details/get/",
    EMPLOYEE_LEAVES_DETAILS_DELETE_BATCH:"/api/employee_leaves/details/delete/batch",
    EMPLOYEE_LEAVES_DETAILS_DOWNLOAD: "/api/employee_leaves_details/download/",

    EMPLOYEE_LETTERS_CREATE_OR_UPDATE:"/api/employee_letters/create_or_update",
    EMPLOYEE_LETTERS_DELETE_BATCH:"/api/employee_letters/delete/batch",
    EMPLOYEE_LETTERS_GET_FILE_BY_ID:"/api/employee_letters/get_file/",
    EMPLOYEE_LETTERS_DETAILS_DOWNLOAD: "/api/employee_letters/download/",

    EMPLOYEE_SALARY_CREATE_OR_UPDATE:"/api/employee_salary/create_or_update",
    EMPLOYEE_SALARY_DELETE_BATCH:"/api/employee_salary/delete/batch",
    EMPLOYEE_SALARY_DOWNLOAD: "/api/employee_salary/download/",
    EMPLOYEE_SALARY_ACTIVE_RECORDS_GET:"/api/employee_salary/active_records/get/",
    EMPLOYEE_SALARY_ACTIVE_OR_DEACTIVE_PATCH:"/api/employee_salary/active_deactive/",

    EMPLOYEE_SALARY_DETAILS_DELETE_BATCH:"/api/employee_salary_details/delete/batch",
    EMPLOYEE_SALARY_DETAILS_DOWNLOAD: "/api/employee_salary_details/download/",

    EMPLOYEE_MONTHLY_PAYABLE_SALARY_CREATE_OR_UPDATE:"/api/employee_monthly_payable_salary/create_or_update",
    EMPLOYEE_MONTHLY_PAYABLE_SALARY_DELETE_BATCH:"/api/employee_monthly_payable_salary/delete/batch",
    EMPLOYEE_MONTHLY_PAYABLE_SALARY_DOWNLOAD: "/api/employee_monthly_payable_salary/download/",

    EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS_CREATE_OR_UPDATE:"/api/employee_monthly_payable_salary_details/create_or_update",
    EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS_DELETE_BATCH:"/api/employee_monthly_payable_salary_details/delete/batch",
    EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS_DOWNLOAD: "/api/employee_monthly_payable_salary_details/download/",

    BANK_DETAILS_CREATE_OR_UPDATE:"/api/bank_details/create_or_update",
    BANK_DETAILS_DELETE_BATCH:"/api/bank_details/delete/batch",
    BANK_DETAILS_DOWNLOAD: "/api/bank_details/download/",
    BANK_DETAILS_ACTIVE_OR_DEACTIVE_PATCH:"/api/bank_details/active_deactive/",

    MACHINE_DETAILS_CREATE_OR_UPDATE:"/api/machine_details/create_or_update",
    MACHINE_DETAILS_GET_LIST: "/api/machine-details/list/get",
    MACHINE_DETAILS_DELETE_BATCH:"/api/machine_details/delete/batch",
    MACHINE_DETAILS_DOWNLOAD: "/api/machine_details/download/",

    EMPLOYEE_MACHINE_DETAILS_CREATE_OR_UPDATE:"/api/emp_machine_details/create_or_update",
    EMPLOYEE_MACHINE_DETAILS_DELETE_BATCH:"/api/emp_machine_details/delete/batch",
    EMPLOYEE_MACHINE_DETAILS_DOWNLOAD: "/api/emp_machine_details/download/",

    SESSION_DETAILS_CREATE_OR_UPDATE:"/api/session_details/create_or_update",
    SESSION_DETAILS_DELETE_BATCH:"/api/session_details/delete/batch",
    SESSION_DETAILS_DOWNLOAD: "/api/session_details/download/",
    SESSION_DETAILS_UPDATE_STATUS_BY_ID:"/api/session_details/update_status/",

    MASTER_DESIGNATED_HOLIDAYS_CREATE_OR_UPDATE:"/api/m_designated_holidays/create_or_update",
    MASTER_DESIGNATED_HOLIDAYS_DELETE_BATCH:"/api/m_designated_holidays/delete/batch",
    MASTER_DESIGNATED_HOLIDAYS_DOWNLOAD: "/api/m_designated_holidays/download/",

    MASTER_EMPLOYEE_LEAVES_CREATE_OR_UPDATE:"/api/m_employee_leaves/create_or_update",
    MASTER_EMPLOYEE_LEAVES_DELETE_BATCH:"/api/m_employee_leaves/delete/batch",
    MASTER_EMPLOYEE_LEAVES_DOWNLOAD: "/api/m_employee_leaves/download/",

    NOTES_LIST_VIEW_GET: "/api/notes/list_view/get",
    NOTES_CREATE_OR_UPDATE: "/api/notes/create_or_update",
    NOTES_GET: "/api/notes/get/",
    NOTES_DELETE: '/api/notes/delete/',

    DOCU_SIGN_USERS_GET_LIST:"/api/docu-sign-users/list/get",
    DOCU_SIGN_USERS_CREATE_OR_UPDATE: "/api/docu-sign-users/create_or_update",
}

export default {
    ...APIConstants,
};