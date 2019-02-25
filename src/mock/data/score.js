import Mock from 'mockjs'; // 导入mockjs 模块

let awardArray=[]
for(let i=0;i<10;i++){
    awardArray.push(
        Mock.mock({
            id:i,
            name:"香喷喷奶茶*1杯"+i,
            'score|100-300': 200,
            img:"./src/assets/img.jpg",
            show:true,
            'ifvalid|1-2': true,
            detail:"1. 最高兑换金额请不要超过20元喔2. 兑换后微信发给「柿子」就可以等待实现啦"
        })
    )
}

let ranklist=[]
for(let i=0;i<10;i++){
    ranklist.push({
        headshot:"./src/assets/headshot.jpg",
        nickname:"请不要吃好吗",
        score:233
    })
}

let scoreRecordArray=[{
    icon:"./src/assets/temp.png",
    title:"奖励兑换 - 香喷喷奶茶*1杯",
    time:"2019年2月4日",
    cost:-200
},{
    icon:"./src/assets/temp.png",
    title:"项目效果 - 阅读量超5k",
    time:"2019年2月4日",
    cost:+10
},{
    icon:"./src/assets/temp.png",
    title:"微信组 - 日常工作",
    time:"2019年2月4日",
    cost:+10
}]

let rankRecordArray=[{
    time:1549718579503,
    score:211,
    rank:3
},{
    time:1547126579503,
    score:30,
    rank:14
},{
    time:1544534579503,
    score:80,
    rank:7
},
]

let myAwardArray=[{
    name:"香喷喷奶茶*1杯",
    'score|100-300': 200,
    img:"./src/assets/img.jpg",
    status:"valid",//valid,wait,uesd
    detail:"这里是奶茶券详情"
},{
    name:"香喷喷奶茶*1杯",
    'score|100-300': 200,
    img:"./src/assets/img.jpg",
    status:"wait",//valid,wait,uesd
    detail:"这里是奶茶券详情"
},{
    name:"贼长贼长贼长香喷喷奶茶*1杯",
    'score|100-300': 200,
    img:"./src/assets/img.jpg",
    status:"uesd",//valid,wait,uesd
    detail:"这里是奶茶券详情"
}
]
export { // 导出列表数据
    awardArray,
    ranklist,
    scoreRecordArray,
    rankRecordArray,
    myAwardArray
};

