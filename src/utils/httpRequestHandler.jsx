import axios, { AxiosError } from 'axios';
import APIConstants from '../constants/apiConatants';
import { HttpReqHandlerError } from './customError';
import LocalStorageHandler from './localStorageHandler';
import HttpStatus from '../core/utils/httpStatus';

class HttpRequestHandler {

    constructor(baseURL) {
        this.axios = axios.create({
            baseURL: baseURL,
            headers: { 'Content-Type': 'application/json' }
        });

        this.axios.interceptors.request.use(function (config) {
            const token = LocalStorageHandler.getToken();
            config.headers.Authorization = token ? `Bearer ${token}` : '';
            config.headers['is-entity-list-required'] = token ? false : true;

            const entityId = LocalStorageHandler.getEntityId();
            config.headers['entity-id'] = entityId ? entityId : '';
            return config;
        });

        this.axios.defaults.validateStatus = (status) => {
            return status >= HttpStatus.OK && status < HttpStatus.MULTIPLE_CHOICES; // ✅ default behavior
          };
    }

    setDefaultProps = () => {
        // Alter defaults after instance has been created
        //this.axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        this.axios.defaults.headers.post['Content-Type'] = 'application/json';
    }

    postData = (url, data) => {
        return new Promise((resolve, reject) => {
            this.axios.post(url, data)
                .then((response) => {
                    this.processApiResponse(response, resolve);
                })
                .catch((error) => {
                    this.processApiResponse(error, reject);
                });
        });

    }

    getData = (url, data = {}) => {
        let params = new URLSearchParams({ params: JSON.stringify(data) });
        return new Promise((resolve, reject) => {
            this.axios.get(url, { params: params })
                .then((response) => {
                    this.processApiResponse(response, resolve);
                })
                .catch((error, param) => {
                    this.processApiResponse(error, reject);
                });
        });

    }

    deleteData = (url, data) => {
        return new Promise((resolve, reject) => {
            this.axios.delete(url, { data: data })
                .then((response) => {
                    this.processApiResponse(response, resolve);
                })
                .catch((error) => {
                    this.processApiResponse(error, reject);
                });
        });

    }

    patchData = (url, data) => {
        return new Promise((resolve, reject) => {
            this.axios.patch(url, data)
                .then((response) => {
                    this.processApiResponse(response, resolve);
                })
                .catch((error) => {
                    this.processApiResponse(error, reject);
                });
        });

    }

    putData = (url, data) => {
        return new Promise((resolve, reject) => {
            this.axios.put(url, data)
                .then((response) => {
                    this.processApiResponse(response, resolve);
                })
                .catch((error) => {
                    this.processApiResponse(error, reject);
                });
        });

    }

    downloadFile = (url, data) => {
        return new Promise((resolve, reject) => {
            this.axios.get(url, {
                params: { params: JSON.stringify(data) },
                responseType: 'arraybuffer'
            })
                .then((response) => {
                    const uint8Array = new Uint8Array(response.data);
                    if(uint8Array && uint8Array.length > 0) {
                        try {
                            const jsonString = new TextDecoder().decode(uint8Array);
                            response.data = JSON.parse(jsonString);
                        } catch (error) {
                            response.data = {
                                statusCode: 100,
                                data:{
                                    url: URL.createObjectURL(new Blob([response.data], {type: response.headers['content-type']})),
                                    filename: response.headers["content-disposition"] ? response.headers["content-disposition"].split('filename=')[1].replaceAll('"', '') : "Empty"
                                },
                                message: ""
                            }
                        }
                        this.processApiResponse(response, resolve);
                    } else {
                        response.response = {status: 500};
                        response.message = 'API or File not found!';
                        response.status = 500;
                        this.processApiResponse(response, resolve);
                    }
                })
                .catch((error, param) => {
                    this.processApiResponse(error, reject);
                });
        });

    }

    downloadPdfFile = (url, data) => {
        return new Promise((resolve, reject) => {
            this.axios.get(url, {
                params: { params: JSON.stringify(data) },
                responseType: 'arraybuffer'
            })
                .then((response) => {

                    var blob = new window.Blob([response.data], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(blob);
                    window.open(fileURL, "_blank");
                })
                .catch((error, param) => {
                    this.processApiResponse(error, reject);
                });
        });

    }

    downloadZipFile = (url, data) => {
        return new Promise((resolve, reject) => {
            this.axios.get(url, {
                params: { params: JSON.stringify(data) },
                responseType: 'arraybuffer'
            })
                .then((response) => {
                    let filename = response.headers["content-disposition"].split('filename=')[1].replaceAll('"', '');

                    var blob = new window.Blob([response.data], { type: 'application/zip' });
                    var fileURL = URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = fileURL;
                    a.download = filename;
                    a.click();
                })
                .catch((error, param) => {
                    this.processApiResponse(error, reject);
                });
        });

    }

    uploadFile = (url, file, params) => {
        return new Promise((resolve, reject) => {
            let formData = new FormData();
            formData.append('file', file);
            if(params) {
                formData.append('params', JSON.stringify(params));
            }
            this.axios.post(url, formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            })
                .then((response) => {
                    this.processApiResponse(response, resolve);
                })
                .catch((error) => {
                    this.processApiResponse(error, reject);
                })
        })
    }

    getImgFileUrl = (url) => {
        return new Promise((resolve, reject) => {
            this.axios.get(url, {
                responseType: 'arraybuffer'
            })
                .then((response) => {
                    response.data = {
                        statusCode: 100,
                        data: (response.data.byteLength !== 0) ? URL.createObjectURL(new Blob([response.data], { type: 'image/jpeg' })) : null,
                        message: ""
                    }
                    this.processApiResponse(response, resolve);
                })
                .catch((error) => {
                    this.processApiResponse(error, reject);
                })
        })
    }

    processApiResponse = (response, callback) => {
        let { status, data, message, code } = response;
        if (response instanceof HttpReqHandlerError) {
            console.error(response, response.props);
            callback(response.props);
        } else if (response instanceof AxiosError) {
            if (code === "ERR_NETWORK") {
                console.error(response, response.props);
                callback({ httpStatusCode: 401, message: message });
            } else if (code === "ERR_BAD_RESPONSE" && response.response && response.response.status === 500) {
                //this.goToLoginPage();
                console.error(response, response.response.data);
                callback({ httpStatusCode: response.response.status, message: response.response.data.message });
            } else if (code === "ERR_BAD_REQUEST" && response.response && response.response.status === 401) {
                this.goToLoginPage();
                callback({ httpStatusCode: response.response.status, message: message });
            } else {
                console.error(response, response.props);
                callback({ httpStatusCode: response.response.status, message: message });
            }
        } else {
            if (status && status >= HttpStatus.OK && status < HttpStatus.BAD_REQUEST) {
                console.log(response);
                callback(data);
            } else {
                console.error(message);
                throw new HttpReqHandlerError("HttpReqHandlerError", { httpStatusCode: response.response.status, message: message });
            }
        }

    }

    goToLoginPage = () => {
        LocalStorageHandler.removeIndex();
        window.location.assign(window.location.origin + "/login");
    }

}

let inst = new HttpRequestHandler(APIConstants.HOST);


export default {
    postData: inst.postData,
    getData: inst.getData,
    deleteData: inst.deleteData,
    patchData: inst.patchData,
    putData: inst.putData,
    downloadFile: inst.downloadFile,
    downloadPdfFile: inst.downloadPdfFile,
    downloadZipFile: inst.downloadZipFile,
    uploadFile: inst.uploadFile,
    getImgFileUrl: inst.getImgFileUrl
}




        // let promise = AxiosApi.postData(APIConstants.USER_DETAILS_CREATE_OR_UPDATE, data);
        // promise.then((response) => {
        //     console.log(response.data);
        //     getListViewData();
        //     enqueueSnackbar('This is a success message!', { variant: "success" });
        // }, (error) => {
        //     console.log(error.message);
        //     enqueueSnackbar(error.message, { variant: "error" });
        // });