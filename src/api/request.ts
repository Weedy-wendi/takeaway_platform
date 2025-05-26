import axios from 'axios'
const baseUrl=''
class HttpRequest{
    baseUrl:string
    constructor(baseUrl:any){
        this.baseUrl=baseUrl
    }
    getInsideConfig(){
        const config={
            baseUrl:this.baseUrl,
            header:{}

        }
        return config
    }
    interceptors(axios:any){
        axios.interceptors.request.use(function(config:any){
            return config
        },function(error:any){
            return Promise.reject(error)
        })
        axios.interceptors.response.use(function(response:any){
            const {data,code}=response.data
            if(code===200){
                return data
            }else{

            }
            return response
        },function(error:any){
            return Promise.reject(error)
        })
    }
    request(options:any){
        const instance=axios.create()
        options={...this.getInsideConfig(),...options}
        this.interceptors(instance)
        return instance(options)
    }
}
export default new HttpRequest(baseUrl)