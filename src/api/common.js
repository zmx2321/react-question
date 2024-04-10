/**
 *  用以请求接口数据
 */

import axios from './axios'

/**
 * common
 */
// 上传图片
export const get1688Data = () => {
    return axios({
        url: `/krump/schema/1352.json`,
        method: 'get',
    });
};