import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://systemjs.1688.com', // api
    timeout: 100000,
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
});

//请求拦截  设置统一header
Axios.interceptors.request.use(config => {
    // console.log(config);

    return config
}, error => {
    return Promise.reject(error)
});

//响应拦截  401 过期处理
Axios.interceptors.response.use(response => {

    return response
}, error => {
    console.log(error.response);

    const { status } = error.response;  //响应错误状态
    const { data } = error.response;  //响应错误详情

    // 错误提醒
    console.log(status, data.message)

    return Promise.reject(error)
});

export default Axios;