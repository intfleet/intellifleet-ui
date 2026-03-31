import CONSTANTS from './appConstants'
import FORM_CONSTANTS from './formConstants';
import APIConstants from './apiConatants';

const { VALIDATOR_TYPE_REQUIRED, VALIDATOR_TYPE_OPTIONAL, FIELD_TYPES, SELECT_DEFAULT_INVALID_OPTION_VALUE } = FORM_CONSTANTS;

const LIST_VIEW = {}
const FORM = {};


LIST_VIEW[CONSTANTS.OBJECTS.USER_DETAILS] = [
    { dataField: 'id', text: 'Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'role', text: 'Role', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'firstName', text: 'First Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'lastName', text: 'Last Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'aadharNo', text: 'Aadhar No', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'address', text: 'Address', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'contactNo', text: 'Contact Number', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'emailId', text: 'Email', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.EMPLOYEE_DETAILS] = [
    { dataField: 'id', text: 'Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'employeeCode', text: 'Employee Code', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: true },
    { dataField: 'firstName', text: 'First Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'middleName', text: 'Middle Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'lastName', text: 'Last Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'emailId', text: 'Email', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'bloodGroup', text: 'Blood Group', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'state', text: 'State', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'country', text: 'Country', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'dateOfBirth', text: 'Date Of Birth', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'contactNo', text: 'Contact Number', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'homeContact', text: 'Home Contact', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'address', text: 'Address', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'gender', text: 'Gender', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'qualification', text: 'Qualification', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'fatherName', text: `Father's Name`, type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'motherName', text: `Mother's Name`, type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'maritalStatus', text: 'Marital Status', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'spouseName', text: 'Spouse Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'child', text: 'Child', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'aadharNo', text: 'Aadhar Card No', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'panCardNo', text: 'Pan Card No', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'dateOfJoining', text: 'Date Of Joining', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'post', text: 'Post', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'employeeType', text: 'Employee Type', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'salary', text: 'Salary', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'dateOfResign', text: 'Date Of Resign', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'releaseDate', text: 'Release Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.DOCUMENTS] = [
    { dataField: 'id', text: 'Employee Doc Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'type', text: 'Type', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'title', text: 'Title', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'fileDownlod', text: 'File', type: FIELD_TYPES.FILE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.BANK_DETAILS] = [
    { dataField: 'id', text: 'Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'refId', text: 'Ref Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'name', text: 'Bank Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'branch', text: 'Branch', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'accountNo', text: 'Account No', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'IFSCcode', text: 'IFSC Code', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'type', text: 'Account Type', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'isActive', text: 'Is Active', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.BIOMETRIC_ATTENDANCE] = [
    { dataField: 'id', text: 'Employee Doc Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'title', text: 'Title', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'processDate', text: 'Process Date', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'status', text: 'Status', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'fileDownlod', text: 'File', type: FIELD_TYPES.FILE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.EMPLOYEE_ATTENDENCE] = [
    { dataField: 'id', text: 'Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'employeeCode', text: 'Employee Code', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'empName', text: 'Employee Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'month', text: 'Month', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'presentDate', text: 'Present Date', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false, style: { width: 500, } },
    { dataField: 'salaryStatus', text: 'Salary Status', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false},
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.EMPLOYEE_SALARY] = [
    { dataField: 'id', text: 'Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'empId', text: 'Employee Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'employeeCode', text: 'Employee Code', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: true },
    { dataField: 'empName', text: 'Employee name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'grossSalary', text: 'Gross Salary', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'netSalary', text: 'Net Salary', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'isActive', text: 'Is Active', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    // { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    // { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.EMPLOYEE_SALARY_DETAILS] = [
    { dataField: 'id', text: 'Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'empId', text: 'Employee Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'category', text: 'Category', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'type', text: 'Type', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'amount', text: 'Amount', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.EMPLOYEE_MONTHLY_PAYABLE_SALARY] = [
    { dataField: 'id', text: 'Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'empId', text: 'Employee Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'employeeCode', text: 'Employee Code', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: true },
    { dataField: 'empName', text: 'Employee name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'payableMonth', text: 'Payable Month', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'amount', text: 'Amount', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'daysPresent', text: 'Days Present', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'daysLeaves', text: 'Days Leaves', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'oneDaySalary', text: 'One Day Salary', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'daysAbsent', text: 'Days Absent', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'fileDownlod', text: 'File', type: FIELD_TYPES.FILE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS] = [
    { dataField: 'id', text: 'Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'payableSalaryId', text: 'Payable Salary Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'empId', text: 'Employee Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'payableMonth', text: 'Payable Month', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'category', text: 'Category', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'type', text: 'Type', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'amount', text: 'Amount', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.NUMBER, hidden: false, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.EMPLOYEE_LEAVES] = [
    { dataField: 'id', text: 'Employee Leave Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'empId', text: 'Employee Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'type', text: 'Type', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: true },
    { dataField: 'note', text: 'Note', type: FIELD_TYPES.HTML_TEXT, hidden: false, isDetailView: false, style: { width: 300, } },
    { dataField: 'totalDays', text: 'Total Days', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'status', text: 'Status', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'empName', text: 'Employee Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: true, isDetailView: false }
]

LIST_VIEW[CONSTANTS.OBJECTS.EMPLOYEE_LEAVES_DETAILS] = [
    { dataField: 'id', text: 'Employee Leave Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'empId', text: 'Employee Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'empLeaveId', text: 'Employee Leave Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'type', text: 'Type', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'date', text: 'Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false, style: { width: 300, } },
    { dataField: 'status', text: 'Status', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: true, isDetailView: false }
]

LIST_VIEW[CONSTANTS.OBJECTS.MACHINE_DETAILS] = [
    { dataField: 'id', text: 'Employee Doc Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'empId', text: 'Employee Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'ipAddress', text: 'IP Address', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'macAddress', text: 'MAC Address', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'deviceName', text: 'Device Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'processor', text: 'Processor', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'ram', text: 'RAM', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'productId', text: 'Product Id', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'systemType', text: 'System Type', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'ownOrRented', text: 'Own/Rented', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'cpu', text: 'CPU', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'keyboard', text: 'Keyboard', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'mouse', text: 'Mouse', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'ups', text: 'UPS', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'edition', text: 'Edition', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'purchaseDate', text: 'Purchase Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false }
];

LIST_VIEW[CONSTANTS.OBJECTS.EMP_MACHINE_DETAILS] = [
    { dataField: 'id', text: 'Employee Doc Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'machineDetailsId', text: 'Machine Details Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'empName', text: 'Employee Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'macAddress', text: 'Mac Address', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'deviceName', text: 'Device Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'assignDate', text: 'Assign Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'releaseDate', text: 'Release Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
]

LIST_VIEW[CONSTANTS.OBJECTS.ENTITY_DETAILS] = [
    { dataField: 'id', text: 'Employee Doc Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'name', text: 'Session Name', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'fromDate', text: 'From Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'toDate', text: 'To Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'isActive', text: 'Is Active', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
]

LIST_VIEW[CONSTANTS.OBJECTS.M_DESIGNATED_HOLIDAYS] = [
    { dataField: 'id', text: 'Holiday Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'date', text: 'Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'description', text: 'Description', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
]

LIST_VIEW[CONSTANTS.OBJECTS.M_EMPLOYEE_LEAVES] = [
    { dataField: 'id', text: 'Employee Leave Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'type', text: 'Type', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'days', text: 'Days', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: false, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: true, isDetailView: false }
]

LIST_VIEW[CONSTANTS.OBJECTS.ORG_DETAILS] = [
    { dataField: 'id', text: 'Employee Leave Id', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'name', text: 'Name', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'owner', text: 'Owner', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },   
    { dataField: 'address', text: 'Address', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },    
    { dataField: 'district', text: 'District', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'pinCode', text: 'Pin Code', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'country', text: 'Country', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },    
    { dataField: 'contactNo1', text: 'Contact No 1', type: FIELD_TYPES.PHONE, hidden: false, isDetailView: false },
    { dataField: 'contactNo2', text: 'Contact No 2', type: FIELD_TYPES.PHONE, hidden: false, isDetailView: false },
    { dataField: 'email', text: 'Email', type: FIELD_TYPES.EMAIL, hidden: false, isDetailView: false },
    { dataField: 'website', text: 'Website', type: FIELD_TYPES.TEXT, hidden: false, isDetailView: false },
    { dataField: 'createdByName', text: 'Created By', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'createdDate', text: 'Created Date', type: FIELD_TYPES.DATE, hidden: true, isDetailView: false },
    { dataField: 'modifiedByName', text: 'Modified By', type: FIELD_TYPES.TEXT, hidden: true, isDetailView: false },
    { dataField: 'modifiedDate', text: 'Modified Date', type: FIELD_TYPES.DATE, hidden: true, isDetailView: false }
]


// =============================== Form starts from here    ===============================

const OPTIONS = {
    EMPLOYEE_DETAILS_TYPE: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },        
        { value: 'PROBATION', text: 'PROBATION' },
        { value: 'PERMANENT', text: 'Parmanent' },
        { value: 'TEMPORARY', text: 'Temporary' },
    ],
    EMPLOYEE_LEAVES_TYPE: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'CL', text: 'CL' },
        { value: 'PL', text: 'PL' },
    ],
    MACHINE_DETAILS_OWN_OR_RENTED: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'OWN', text: 'Own' },
        { value: 'RENTED', text: 'Rented' },
    ],
    MARITAL_STATUS: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'Married', text: 'Married' },
        { value: 'Unmarried', text: 'Unmarried' },
    ],
    GENDER: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
        { value: 'Others', text: 'Others' },
    ],
    COUNTRY: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'INDIA', text: 'India' },
    ],
    STATES: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'AN', text: 'Andaman and Nicobar Islands' },
        { value: 'AP', text: 'Andhra Pradesh' },
        { value: 'AR', text: 'Arunachal Pradesh' },
        { value: 'AS', text: 'Assam' },
        { value: 'BR', text: 'Bihar' },
        { value: 'CH', text: 'Chandigarh' },
        { value: 'CT', text: 'Chhattisgarh' },
        { value: 'DN', text: 'Dadra and Nagar Haveli' },
        { value: 'DD', text: 'Daman and Diu' },
        { value: 'DL', text: 'Delhi' },
        { value: 'GA', text: 'Goa' },
        { value: 'GJ', text: 'Gujarat' },
        { value: 'HR', text: 'Haryana' },
        { value: 'HP', text: 'Himachal Pradesh' },
        { value: 'JK', text: 'Jammu and Kashmir' },
        { value: 'JH', text: 'Jharkhand' },
        { value: 'KA', text: 'Karnataka' },
        { value: 'KL', text: 'Kerala' },
        { value: 'LA', text: 'Ladakh' },
        { value: 'LD', text: 'Lakshadweep' },
        { value: 'MP', text: 'Madhya Pradesh' },
        { value: 'MH', text: 'Maharashtra' },
        { value: 'MN', text: 'Manipur' },
        { value: 'ML', text: 'Meghalaya' },
        { value: 'MZ', text: 'Mizoram' },
        { value: 'NL', text: 'Nagaland' },
        { value: 'OR', text: 'Odisha' },
        { value: 'PY', text: 'Puducherry' },
        { value: 'PB', text: 'Punjab' },
        { value: 'RJ', text: 'Rajasthan' },
        { value: 'SK', text: 'Sikkim' },
        { value: 'TN', text: 'Tamil Nadu' },
        { value: 'TG', text: 'Telangana' },
        { value: 'TR', text: 'Tripura' },
        { value: 'UP', text: 'Uttar Pradesh' },
        { value: 'UT', text: 'Uttarakhand' },
        { value: 'WB', text: 'West Bengal' }
    ],
    BLOOD_GROUP: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'A+', text: 'A+' },
        { value: 'A-', text: 'A-' },
        { value: 'B+', text: 'B+' },
        { value: 'B-', text: 'B-' },
        { value: 'AB+', text: 'AB+' },
        { value: 'AB-', text: 'AB-' },
        { value: 'O+', text: 'O+' },
        { value: 'O-', text: 'O-' }
    ],
    USER_ROLE: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'USER', text: 'USER' },
        { value: 'ADMIN', text: 'ADMIN' },
        { value: 'FOUNDER', text: 'FOUNDER' },
        { value: 'CEO', text: 'CEO' },
        { value: 'GENERAL_MANAGER', text: 'GENERAL-MANAGER' },
        { value: 'BRANCH_HEAD', text: 'BRANCH-HEAD' },
        { value: 'HEAD_OF_OPERATION_AND_LOGISTICS', text: 'HEAD-OF-OPERATION-AND-LOGISTICS' },
        { value: 'OPERATION_MANAGER', text: 'OPERATION-MANAGER' },
        { value: 'ASSISTANT_OPERATION_MANAGER', text: 'ASSISTANT-OPERATION-MANAGER' },
        { value: 'BUSINESS_DEVELOPER_AND_PROJECT_MANAGER', text: 'BUSINESS-DEVELOPER-AND-CUSTOMER-MANAGER' },
        { value: 'FLOOR_MANAGER', text: 'FLOOR-MANAGER' },
        { value: 'ASSISTANT_FLOOR_MANAGER', text: 'ASSISTANT-FLOOR-MANAGER' },
        { value: 'SUPERVISOR', text: 'SUPERVISOR' },
        { value: 'ASSISTANT_SUPERVISOR', text: 'ASSISTANT-SUPERVISOR' },
        { value: 'SOFTWARE_DEVELOPER', text: 'SOFTWARE-DEVELOPER' },
        { value: 'QC_HEAD', text: 'QC-HEAD' },
        { value: 'SENIOR_QC', text: 'SENIOR-QC' },
        { value: 'INTERMEDIATE_QC', text: 'INTERMEDIATE-QC' },
        { value: 'QC', text: 'QC' },
        { value: 'SENIOR_DATA_ANALYST', text: 'SENIOR-DATA-ANALYST' },
        { value: 'INTERMEDIATE_DATA_ANALYST', text: 'INTERMEDIATE-DATA-ANALYST' },
        { value: 'DATA_ANALYST', text: 'DATA-ANALYST' },
        { value: 'TRANSPORTATION_STAFF', text: 'TRANSPORTATION-STAFF' },
        { value: 'MAINTENANCE_STAFF', text: 'MAINTENANCE-STAFF' }
    ],
    BANK_CATEGORY: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'EMPLOYEE', text: 'EMPLOYEE' },
        { value: 'VENDOR', text: 'VENDOR' },
        { value: 'ORGANISATION', text: 'ORGANISATION' }
    ], 
    BANK_ACCOUNT_TYPE: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'SAVINGS', text: 'SAVINGS' },
        { value: 'CURRENT', text: 'CURRENT' }
    ],  
    EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS_TYPE: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'BONUS', text: 'BONUS' },
        { value: 'INCREMENT', text: 'INCREMENT' },
        { value: 'LOAN', text: 'LOAN' }
    ],
    EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS_CATEGORY: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'EARNINGS', text: 'EARNINGS' },
        { value: 'DEDUCTIONS', text: 'DEDUCTIONS' }
    ],
    EMPLOYEE_DOCUMENTS_TYPE: [
        { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
        { value: 'CERTIFICATE', text: 'CERTIFICATE' },
        { value: 'LETTER', text: 'LETTER' }
    ],
}

FORM[CONSTANTS.OBJECTS.USER_DETAILS] = [
    { name: 'role', label: 'Role', type: "LIST", defaultValue: "USER", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: OPTIONS.USER_ROLE
    },
    { name: 'firstName', label: 'First Name', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'lastName', label: 'Last Name', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'aadharNo', label: 'Aadhar No', type: FIELD_TYPES.AADHAAR_NUMBER, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'contactNo', label: 'Contact Number', type: FIELD_TYPES.PHONE, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'emailId', label: 'Email', type: FIELD_TYPES.EMAIL, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'address', label: 'Address', type: FIELD_TYPES.LONG_TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
]

FORM[CONSTANTS.OBJECTS.EMPLOYEE_DETAILS] = [
    { name: 'employeeCode', label: 'Employee Code', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    {
        name: 'employeeType', label: 'Employee Type', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: OPTIONS.EMPLOYEE_DETAILS_TYPE
    },
    { name: 'firstName', label: 'First Name', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'middleName', label: 'Middle Name', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'lastName', label: 'Last Name', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'aadharNo', label: 'Aadhar Card No', type: FIELD_TYPES.AADHAAR_NUMBER, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'panCardNo', label: 'Pan Card No', type: FIELD_TYPES.PAN_NUMBER, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'emailId', label: 'Email', type: FIELD_TYPES.EMAIL, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    {
        name: 'bloodGroup', label: 'Blood Group', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL,
        options: OPTIONS.BLOOD_GROUP
    },
    { name: 'dateOfBirth', label: 'Date Of Birth', type: FIELD_TYPES.DATE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { 
        name: 'gender', label: 'Gender', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: OPTIONS.GENDER
    },
    {
        name: 'maritalStatus', label: 'Marital Status', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL,
        options: OPTIONS.MARITAL_STATUS
    },
    { name: 'contactNo', label: 'Contact Number', type: FIELD_TYPES.PHONE, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'homeContact', label: 'Home Contact', type: FIELD_TYPES.PHONE, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'fatherName', label: `Father's Name`, type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'motherName', label: `Mother's Name`, type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'spouseName', label: 'Spouse Name', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'child', label: 'Child', type: FIELD_TYPES.NUMBER, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'address', label: 'Address', type: FIELD_TYPES.LONG_TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'post', label: 'Post', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'qualification', label: 'Qualification', type: FIELD_TYPES.LONG_TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'dateOfJoining', label: 'Date Of Joining', type: FIELD_TYPES.DATE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { 
        name: 'country', label: 'Country', type: FIELD_TYPES.LIST, defaultValue: "INDIA", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL,
        options: OPTIONS.COUNTRY
    },
    { 
        name: 'state', label: 'State', type: FIELD_TYPES.LIST, defaultValue: "WB", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL,
        options: OPTIONS.STATES
    },
    
];

FORM[CONSTANTS.OBJECTS.DOCUMENTS] = [
    {
        name: 'type', label: 'Type', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: OPTIONS.EMPLOYEE_DOCUMENTS_TYPE,
    },
    { name: 'title', label: 'Title', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'srcPath', label: 'Upload Doc', type: FIELD_TYPES.FILE, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
];
FORM[CONSTANTS.OBJECTS.BIOMETRIC_ATTENDANCE] = [
    { name: 'title', label: 'Title', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'srcPath', label: 'Upload Doc', type: FIELD_TYPES.FILE, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
];

FORM[CONSTANTS.OBJECTS.EMPLOYEE_SALARY] = [
    { 
        name: 'empId', label: 'Employee', type: FIELD_TYPES.LIST, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: [],
        onLoadEventProps: { 
            apiUrl: APIConstants.EMPLOYEE_DETAILS_GET_LIST_VIEW, 
            reqParams: {}, 
            fieldNames: ["id", "employeeCode","firstName","lastName"],
            format: "$1 [$2 $3]"
        } 
    },
    { 
        name: 'type', label: 'Type', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED, 
        options: []
    },
    { name: 'amount', label: 'Amount', type: FIELD_TYPES.NUMBER, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
]

FORM[CONSTANTS.OBJECTS.ENTITY_DETAILS] = [
    { name: 'name', label: 'Session Name', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'fromDate', label: 'From Date', type: FIELD_TYPES.DATE, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'toDate', label: 'To Date', type: FIELD_TYPES.DATE, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
]

FORM[CONSTANTS.OBJECTS.BANK_DETAILS] = [
    /*{ name: 'parentObject', label: 'Objects', type: FIELD_TYPES.LIST_OBJECT, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: [
            { value: SELECT_DEFAULT_INVALID_OPTION_VALUE, text: '------------SELECT-------------' },
            { value: CONSTANTS.OBJECTS.USER_DETAILS, text: CONSTANTS.OBJECTS_LABEL[CONSTANTS.OBJECTS.USER_DETAILS] },
            { value: CONSTANTS.OBJECTS.EMPLOYEE_DETAILS, text: CONSTANTS.OBJECTS_LABEL[CONSTANTS.OBJECTS.EMPLOYEE_DETAILS] }
        ],
        onChangeLoadAnotherFieldOptions: {
            targetFieldName: "parentRecordId",
            fieldNames: ["id", "text"],
        }
    },
    { name: 'parentRecordId', label: 'Parent Record', type: FIELD_TYPES.LIST, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: []
    },*/
    { name: 'category', label: 'Category', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: OPTIONS.BANK_CATEGORY,
    },
    { name: 'name', label: 'Name', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'branch', label: 'Branch Name', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'accountNo', label: 'Account Number', type: FIELD_TYPES.NUMBER, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'IFSCcode', label: 'IFSC Code', type: FIELD_TYPES.TEXT, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'type', label: 'Type', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: OPTIONS.BANK_ACCOUNT_TYPE,
    },
];

FORM[CONSTANTS.OBJECTS.MACHINE_DETAILS] = [
    { name: 'ipAddress', label: 'IP Address', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'macAddress', label: 'MAC Address', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'deviceName', label: 'Device Name', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'processor', label: 'Processor', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'ram', label: 'RAM', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'productId', label: 'Product Id', type: FIELD_TYPES.NUMBER, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'systemType', label: 'System Type', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { 
        name: 'ownOrRented', label: 'Own/Rented', type: FIELD_TYPES.LIST, defaultValue:SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: OPTIONS.MACHINE_DETAILS_OWN_OR_RENTED
    },
    { name: 'cpu', label: 'CPU', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'keyboard', label: 'Keyboard', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'mouse', label: 'Mouse', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'ups', label: 'UPS', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'edition', label: 'Edition', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
    { name: 'purchaseDate', label: 'Purchase Date', type: FIELD_TYPES.DATE, isHidden: true, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_OPTIONAL },
];

FORM[CONSTANTS.OBJECTS.EMP_MACHINE_DETAILS] = [
    { 
        name: 'machineDetailsId', label: 'Mac Id', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: [],
        onLoadEventProps: { 
            apiUrl: APIConstants.MACHINE_DETAILS_GET_LIST, 
            reqParams: {selectFields: [{ dataField: "id" }, { dataField: "macAddress" }, { dataField: "deviceName" }]}, 
            fieldNames: ["id", "deviceName", "macAddress"],
            format: "$1 [$2]"
         },
             
    },
    {
        name: 'empId', label: 'Employee', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: [],
        onLoadEventProps: { 
            apiUrl: APIConstants.EMPLOYEE_DETAILS_GET_LIST, 
            reqParams: {selectFields: [{ dataField: "id" }, { dataField: "employeeCode" }, { dataField: "firstName" }, { dataField: "lastName" }]}, 
            fieldNames: ["id", "employeeCode", "firstName","lastName"],
            format: "$1 [$2 $3]" 
        }
    },
]
/*
FORM[CONSTANTS.OBJECTS.EMPLOYEE_LEAVES] = [
    {
        name: 'type', label: 'Type', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: OPTIONS.EMPLOYEE_LEAVES_TYPE,
    },
    { name: 'note', label: 'Reason', type: FIELD_TYPES.LONG_TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'dates', label: 'Days', type: FIELD_TYPES.DATE, isHidden: true, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
]*/

FORM[CONSTANTS.OBJECTS.M_DESIGNATED_HOLIDAYS] = [
    { name: 'date', label: 'Date', type: FIELD_TYPES.DATE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'description', label: 'Description', type: FIELD_TYPES.TEXT, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
]

FORM[CONSTANTS.OBJECTS.M_EMPLOYEE_LEAVES] = [
    {
        name: 'type', label: 'Type', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED,
        options: OPTIONS.EMPLOYEE_LEAVES_TYPE,
    },
    { name: 'days', label: 'Days', type: FIELD_TYPES.NUMBER, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
]

FORM[CONSTANTS.OBJECTS.ORG_DETAILS] = [
    { name: 'name', label: 'Name', type: FIELD_TYPES.TEXT, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'owner', label: 'Owner', type: FIELD_TYPES.TEXT, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },   
    { name: 'address', label: 'Address', type: FIELD_TYPES.LONG_TEXT, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },    
    { name: 'district', label: 'District', type: FIELD_TYPES.TEXT, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'pinCode', label: 'Pin Code', type: FIELD_TYPES.NUMBER, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'country', label: 'Country', type: FIELD_TYPES.TEXT, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },    
    { name: 'contactNo1', label: 'Contact No 1', type: FIELD_TYPES.PHONE, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'contactNo2', label: 'Contact No 2', type: FIELD_TYPES.PHONE, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'email', label: 'Email', type: FIELD_TYPES.EMAIL, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
    { name: 'website', label: 'Website', type: FIELD_TYPES.TEXT, isheaden: false, isDetailView: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
]

FORM[CONSTANTS.OBJECTS.EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS] = [
    { 
        name: 'category', label: 'Category', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED, 
        options: OPTIONS.EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS_CATEGORY
    },
    { 
        name: 'type', label: 'Type', type: FIELD_TYPES.LIST, defaultValue: SELECT_DEFAULT_INVALID_OPTION_VALUE, isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED, 
        options: OPTIONS.EMPLOYEE_MONTHLY_PAYABLE_SALARY_DETAILS_TYPE
    },
    { name: 'amount', label: 'Amount', type: FIELD_TYPES.NUMBER, defaultValue: "", isHidden: false, validationType: FORM_CONSTANTS.VALIDATOR_TYPE_REQUIRED },
]


const FIELD_CONSTANTS = {
    LISTVIEW: LIST_VIEW,
    FORM: FORM
}

export default FIELD_CONSTANTS;