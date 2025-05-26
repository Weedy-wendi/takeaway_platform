import axios from './request';
//首页数据接口
export const getApiHomedata=(param?:any)=>{
    return axios.request({
        url:'/home/getHomedata',
        method:'get',
        data:param
    })
}

export const getApiStoredata=(param?:any)=>{
    return axios.request({
        url:'/home/getStoredata',
        method:'get',
        data:param
    })
}