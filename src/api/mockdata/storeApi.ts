export default{
    getStoredata:()=>{
        return {
            code:200,
            data:{
                title:"鱼儿酸菜鱼",
                img:"",
                storeData:[
                    {
                        name:"点菜",
                        data:{
                            content:"点菜",
                            items:[
                                {
                                    text:"热销套餐",
                                    children:[
                                        {
                                            pic:"#",
                                            title:"隆江猪脚饭",
                                            num:0,
                                            price:25.0,
                                            id:0,
                                            add:true,
                                        },
                                        {
                                            pic:"#",
                                            title:"猪脚饭",
                                            num:0,
                                            price:25.0,
                                            id:1,
                                            add:true,
                                        },
                                                                        {
                                            pic:"#",
                                            title:"江猪脚饭",
                                            num:0,
                                            price:25.0,
                                            id:2,
                                            add:true,
                                        }
                                    ]
                                },
                                {
                                    text:"超级折扣",
                                    children:[
                                        {
                                            pic:"#",
                                            title:"无骨酸菜鱼",
                                            num:0,
                                            price:26.0,
                                            id:5,
                                            add:true,
                                        },
                                                                        {
                                            pic:"#",
                                            title:"无骨酸菜鱼",
                                            num:0,
                                            price:26.0,
                                            id:5,
                                            add:true,
                                        },
                                                                        {
                                            pic:"#",
                                            title:"无骨酸菜鱼",
                                            num:0,
                                            price:26.0,
                                            id:5,
                                            add:true,
                                        },
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        name:"评价",
                        data:{
                            content:"评价"
                        }
                    },
                    {
                        name:"商家",
                        data:{
                            content:"商家",
                        }
                    }
                ]

            }
        }
    }
}