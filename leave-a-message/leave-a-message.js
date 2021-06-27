/*自适应屏幕*/
//得到手机屏幕的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
console.log('htmlWidth',htmlWidth)
//得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0];
//获取通知框的ID
var msg = document.getElementById('msg');
//获取header来整体下调输入框
var header = document.getElementById('header');
//获取body的背景图
var img = document.getElementById('_1');
if(htmlWidth>640){//超过640大小的，字体根部都是16px
    msg.style.marginLeft="258px";//PC端通知框距离右边距258px刚好
    htmlWidth=640;
    console.log('htmlWidth-true',htmlWidth);
    htmlDom.style.fontSize = htmlWidth /40+ 'px';//修改整体字体
}
//小于640执行
if(htmlWidth<640){
    msg.style.marginLeft="6px";//通知框距离左边距6px
    msg.style.width="230px";//修改通知框宽度为230px
    msg.style.paddingLeft="25px"//通知框占位符位置
    header.style.height="40vh";//整体下调40vh
    htmlDom.style.fontSize = htmlWidth /20+ 'px';//修改整体字体
    img.style.backgroundPositionX = "-1100px";//设置body背景图位置
}

/*通知输入框限制条件判断*/
function tz(){
    var a=document.getElementById('msg').value;
    if(!a){
        alert("请先下方留言后在用此框,输入名称用逗号分隔,逗号后面就是你要发的内容,请勿频繁使用,请先输入您的名字,和要通知的内容哦(*￣▽￣),请勿输入无意义内容23333");
    } else{
        alert("点击确定则通知成功（＾∀＾●）博主马上到");
    }
}

/*状态栏*/
var LOCAL = {
    path: "图表/",
    favicon: {show: "✧(≖ ◡ ≖✿)已恢复正常", hide: "´･∀･)乂(･∀･｀失连中..."},
    search: {placeholder: "文章搜索", empty: "关于 「 ${query} 」，什么也没搜到", stats: "${time} ms 内找到 ${hits} 条结果"},
    valine: !0,
    fancybox: !0,
    copyright: '复制成功，转载请遵守 <i class="ic i-creative-commons"></i>BY-NC-SA 协议。',
    ignores: [function (e) {
        return e.includes("#")
    }, function (e) {
        return new RegExp(LOCAL.path + "$").test(e)
    }]}
