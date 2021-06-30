/*自适应屏幕*/
//得到手机屏幕的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
console.log('htmlWidth',htmlWidth)
//得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0];
//获取frameId
var frame = document.getElementById('frame');
var frame2 = document.getElementById('frame2');
var https = document.getElementById('https');
var https2 = document.getElementById('https2');
var con = document.getElementById('con');
var con2 = document.getElementById('con2');
//获取titleId
var title = document.getElementById('API');
//获取body的背景图
var img = document.getElementById('RandomImg');
if(htmlWidth>640){//超过640大小的，字体根部都是16px
    msg.style.marginLeft="258px";//PC端通知框距离右边距258px刚好
    htmlWidth=640;
    console.log('htmlWidth-true',htmlWidth);
    htmlDom.style.fontSize = htmlWidth /40+ 'px';//修改整体字体
}
//小于640执行
if(htmlWidth<640){
    img.style.backgroundPositionX = "-1100px";//设置body背景图位置
    frame.style.width="350px";
    frame.style.height="570px";
    frame.style.marginTop="-120px";
    frame.style.marginLeft="auto";
    title.style.fontSize="30px";
    title.style.marginLeft="25px";
    title.style.marginTop="2px";
    frame2.style.width="300px";
    frame2.style.height="430px";
    https.style.fontSize="23px";
    https.style.marginTop="15px";
    https2.style.fontSize="20px";
    con.style.color="rgba(255,57,102,0.89)";
    con2.style.color="rgba(255,0,58,0.89)";
    htmlDom.style.fontSize = htmlWidth /20+ 'px';//修改整体字体
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
