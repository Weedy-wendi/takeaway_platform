import { defineStore } from "pinia";

interface foodItem{
    pic:string,
    title:string,
    num:number,
    price:number,
    id:number,
    totalprice:number
}
interface inputItem{
    pic:string,
    title:string,
    num:number,
    price:number,
    id:number,
    add:boolean
}

export const useAddCart=defineStore('store',{
    actions:{
        addCartUpdater(inputitem:inputItem){
            const isExsitId=this.totalItems.findIndex(item=>item.id===inputitem.id)
            if(isExsitId!==-1){
                this.totalItems[isExsitId].num+=inputitem.num
                this.totalItems[isExsitId].totalprice=this.totalItems[isExsitId].num*inputitem.price
            }else{
                const extendeddata={...inputitem,totalprice:inputitem.num*inputitem.price}
                this.totalItems.push(extendeddata)
            }
        },
        addAddress(content:any){
            console.log(content)
            const isExsitId=this.userAddress.findIndex(item=>item.id===content.id)
            if(isExsitId){
                Object.assign(this.userAddress[isExsitId],content)
            }else{
                this.userAddress.push(content)
            }
        },
        sum(){
            console.log(11+33)
        }
    },
    state(){
        return{
            totalItems:[] as foodItem[],
            allTotalprice:0,
            allTotalcount:0,
            ids:[] as number[],
            userAddress:[
                {
                    id:1001,
                    name:"weedy",
                    tel:"1145141919810",
                    province:"广东省",
                    city:"广州市",
                    county:"白云区",
                    addressDetail:"嘉禾望岗",
                    isDefault:true,
                    areaCode:"110101"
                },
                {
                    id:1002,
                    name:"dqwdasd",
                    tel:"1072107210721",
                    province:"广东省",
                    city:"广州市",
                    county:"番禺区",
                    addressDetail:"大石",
                    isDefault:false,
                    areaCode:"110101"
                }
            ],
            OrderItems:[] as foodItem[]
        }
    },
    getters:{
        total(){
            this.allTotalprice=this.totalItems.reduce((sum,item)=>sum+item.totalprice,0)
            this.allTotalcount=this.totalItems.reduce((count,item)=>count+item.num,0)
        },
        defaultAddress:(state)=>{
            return state.userAddress.find(item=>item.isDefault)||null
        }
    }
})