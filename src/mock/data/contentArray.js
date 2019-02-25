import Mock from 'mockjs'; // 导入mockjs 模块
const rumorTitleArray=["Rumor头条 | 这样的圣诞套路怎么可能难倒窝工学子！","Rumor头条 | 圣诞节，我该拿什么礼物送给TA呢？","Rumor头条 | 原来老师早已告诉了我们考试结果。","Rumor头条 | 被期末掏空身体？华工大保健中心有办法！","Rumor头条 | 就算是周杰伦，拿着奶茶都进不了窝工图书馆！","Rumor头条 | 如何优雅地在实验室体现出仙女气质？","Rumor头条 | 北湖成功晋级为北慕大三角"]
const chuangbianTitleArray=["军训终章 | 你不想忘记的都在这里","叮咚！华工冬训超实用指南等待你的签收~","Rumor占卜 | 你的2019会是什么样？","倒计时2018丨今年你见证了华工哪些大事件？","在你复习的时候，他们立下了这些flag","华工各学院最甜土味情话，今晚就撩到喜欢的Ta!","华工秀场Vol.4 | 颜值高的他们准备穿这样出去玩！"]

var Random = Mock.Random
Random.extend({
    randomRumorTitle: function() {
        return this.pick(rumorTitleArray)
    },
    randomChuangbianTitle: function() {
        return this.pick(chuangbianTitleArray)
    },
    randomAllTitle: function() {
        if(Math.random()>0.5)
            return this.pick(rumorTitleArray)
        return this.pick(chuangbianTitleArray)
    },
})

let rumorArray = []; // 定义我们需要的数据
for(let i=0;i<10;i++){
    rumorArray.push(
        Mock.mock({
            ifOpen:false,
            cover:"./src/assets/img.jpg",
            title:'@randomRumorTitle',
            'read|3000-4000': 1000,
            'zan|300-500': 100,
            'comment|5-20':5,
            'forward|5-20':5,
            readWeekRank:/[1-7]\/7/,
            zanWeekRank:/[1-7]\/7/,
            commentWeekRank:/[1-7]\/7/,
            forwardWeekRank:/[1-7]\/7/,
            readMonthRank:/[0-3][0-9]\/30/,
            zanMonthRank:/[0-3][0-9]\/30/,
            commentMonthRank:/[0-3][0-9]\/30/,
            forwardMonthRank:/[0-3][0-9]\/30/,
        }))
}
let chuangbianArray=[];
`
for(let i=0;i<10;i++){
    chuangbianArray.push(
        Mock.mock({
            ifOpen:false,
            cover:"./src/assets/img.jpg",
            title:'@randomChuangbianTitle',
            'read|2000-5000': 1000,
            'zan|300-500': 100,
            'comment|5-20':5,
            'forward|5-20':5,
            readWeekRank:/[1-7]\/7/,
            zanWeekRank:/[1-7]\/7/,
            commentWeekRank:/[1-7]\/7/,
            forwardWeekRank:/[1-7]\/7/,
            readMonthRank:/[0-3][0-9]\/30/,
            zanMonthRank:/[0-3][0-9]\/30/,
            commentMonthRank:/[0-3][0-9]\/30/,
            forwardMonthRank:/[0-3][0-9]\/30/,
        }))
}`
let allArray=[];
for(let i=0;i<10;i++){
    allArray.push(
        Mock.mock({
            ifOpen:false,
            cover:"./src/assets/img.jpg",
            title:'@randomAllTitle',
            'read|2000-5000': 1000,
            'zan|300-500': 100,
            'comment|5-20':5,
            'forward|5-20':5,
            readWeekRank:/[1-7]\/7/,
            zanWeekRank:/[1-7]\/7/,
            commentWeekRank:/[1-7]\/7/,
            forwardWeekRank:/[1-7]\/7/,
            readMonthRank:/[0-3][0-9]\/30/,
            zanMonthRank:/[0-3][0-9]\/30/,
            commentMonthRank:/[0-3][0-9]\/30/,
            forwardMonthRank:/[0-3][0-9]\/30/,
        }))
}
export { // 导出列表数据
    rumorArray,
    chuangbianArray,
    allArray
};