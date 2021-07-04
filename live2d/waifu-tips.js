window.live2d_settings = Array(); /*

    // く__,.ヘヽ.　　　　/　,ー､ 〉
    // 　　　　　＼ ', !-─‐-i　/　/´
    // 　　　 　 ／｀ｰ'　　　 L/／｀ヽ､            Live2D 看板娘 参数设置
    // 　　 　 /　 ／,　 /|　 ,　 ,　　　 ',                                           Version 1.4.2
    // 　　　ｲ 　/ /-‐/　ｉ　L_ ﾊ ヽ!　 i                            Update 2018.11.12
    // 　　　 ﾚ ﾍ 7ｲ｀ﾄ　 ﾚ'ｧ-ﾄ､!ハ|　 |
    // 　　　　 !,/7 '0'　　 ´0iソ| 　 |　　　
    // 　　　　 |.从"　　_　　 ,,,, / |./ 　 |             网页添加 Live2D 看板娘
    // 　　　　 ﾚ'| i＞.､,,__　_,.イ / 　.i 　|                    https://www.fghrsh.net/post/123.html
    // 　　　　　 ﾚ'| | / k_７_/ﾚ'ヽ,　ﾊ.　|
    // 　　　　　　 | |/i 〈|/　 i　,.ﾍ |　i　|    Thanks
    // 　　　　　　.|/ /　ｉ： 　 ﾍ!　　＼　|          journey-ad / https://github.com/journey-ad/live2d_src
    // 　　　 　 　 kヽ>､ﾊ 　 _,.ﾍ､ 　 /､!            xiazeyu / https://github.com/xiazeyu/live2d-widget.js
    // 　　　　　　 !'〈//｀Ｔ´', ＼ ｀'7'ｰr'          Live2d Cubism SDK WebGL 2.1 Projrct & All model authors.
    // 　　　　　　 ﾚ'ヽL__|___i,___,ンﾚ|ノ
    // 　　　　　 　　　ﾄ-,/　|___./
    // 　　　　　 　　　'ｰ'　　!_,.:*********************************************************************************/


// 后端接口
live2d_settings['modelAPI']             = '//live2d.fghrsh.net/api/';   // 自建 API 修改这里

// 默认模型
live2d_settings['modelId']              = 1;            // 默认模型 ID，可在 F12 控制台找到
live2d_settings['modelTexturesId']      = 6;           // 默认材质 ID，可在 F12 控制台找到

// 模型切换模式
live2d_settings['modelStorage']         = false;         // 记录 ID (刷新后恢复)，可选 true(真), false(假)

//看板娘样式设置
live2d_settings['waifuSize']            = '600x535';    // 看板娘大小，例如 '280x250', '600x535'
live2d_settings['waifuTipsSize']        = '200x70';     // 提示框大小，例如 '250x70', '570x150'
live2d_settings['waifuFontSize']        = '17px';       // 提示框字体，例如 '12px', '30px'
live2d_settings['waifuToolFont']        = '30px';       // 工具栏字体，例如 '14px', '36px'
live2d_settings['waifuToolLine']        = '36px';       // 工具栏行高，例如 '20px', '36px'
live2d_settings['waifuToolTop']         = '0px'         // 工具栏顶部边距，例如 '0px', '-60px'
live2d_settings['waifuMinWidth']        = '768px';      // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
live2d_settings['waifuEdgeSide']        = 'right:65';     // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
live2d_settings['waifuDraggable']       = 'unlimited';    // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
live2d_settings['waifuDraggableRevert'] = false;         // 松开鼠标还原拖拽位置，可选 true(真), false(假)

function hideMessage(timeout) {
    $('.waifu-tips').stop().css('opacity',1);
    if (timeout === undefined) timeout = 5000;
    window.setTimeout(function() {sessionStorage.removeItem('waifu-text')}, timeout);
    $('.waifu-tips').delay(timeout).fadeTo(200, 0);
}

function initModel(waifuPath, type) {
    /* console welcome message */
    eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('8.d(" ");8.d("\\U,.\\y\\5.\\1\\1\\1\\1/\\1,\\u\\2 \\H\\n\\1\\1\\1\\1\\1\\b \', !-\\r\\j-i\\1/\\1/\\g\\n\\1\\1\\1 \\1 \\a\\4\\f\'\\1\\1\\1 L/\\a\\4\\5\\2\\n\\1\\1 \\1 /\\1 \\a,\\1 /|\\1 ,\\1 ,\\1\\1\\1 \',\\n\\1\\1\\1\\q \\1/ /-\\j/\\1\\h\\E \\9 \\5!\\1 i\\n\\1\\1\\1 \\3 \\6 7\\q\\4\\c\\1 \\3\'\\s-\\c\\2!\\t|\\1 |\\n\\1\\1\\1\\1 !,/7 \'0\'\\1\\1 \\X\\w| \\1 |\\1\\1\\1\\n\\1\\1\\1\\1 |.\\x\\"\\1\\l\\1\\1 ,,,, / |./ \\1 |\\n\\1\\1\\1\\1 \\3\'| i\\z.\\2,,A\\l,.\\B / \\1.i \\1|\\n\\1\\1\\1\\1\\1 \\3\'| | / C\\D/\\3\'\\5,\\1\\9.\\1|\\n\\1\\1\\1\\1\\1\\1 | |/i \\m|/\\1 i\\1,.\\6 |\\F\\1|\\n\\1\\1\\1\\1\\1\\1.|/ /\\1\\h\\G \\1 \\6!\\1\\1\\b\\1|\\n\\1\\1\\1 \\1 \\1 k\\5>\\2\\9 \\1 o,.\\6\\2 \\1 /\\2!\\n\\1\\1\\1\\1\\1\\1 !\'\\m//\\4\\I\\g\', \\b \\4\'7\'\\J\'\\n\\1\\1\\1\\1\\1\\1 \\3\'\\K|M,p,\\O\\3|\\P\\n\\1\\1\\1\\1\\1 \\1\\1\\1\\c-,/\\1|p./\\n\\1\\1\\1\\1\\1 \\1\\1\\1\'\\f\'\\1\\1!o,.:\\Q \\R\\S\\T v"+e.V+" / W "+e.N);8.d(" ");',60,60,'|u3000|uff64|uff9a|uff40|u30fd|uff8d||console|uff8a|uff0f|uff3c|uff84|log|live2d_settings|uff70|u00b4|uff49||u2010||u3000_|u3008||_|___|uff72|u2500|uff67|u30cf|u30fc||u30bd|u4ece|u30d8|uff1e|__|u30a4|k_|uff17_|u3000L_|u3000i|uff1a|u3009|uff34|uff70r|u30fdL__||___i|l2dVerDate|u30f3|u30ce|nLive2D|u770b|u677f|u5a18|u304f__|l2dVersion|FGHRSH|u00b40i'.split('|'),0,{}));

    /* 判断 JQuery */
    if (typeof($.ajax) != 'function') typeof(jQuery.ajax) == 'function' ? window.$ = jQuery : console.log('[Error] JQuery is not defined.');

    /* 加载看板娘样式 */
    live2d_settings.waifuSize = live2d_settings.waifuSize.split('x');
    live2d_settings.waifuTipsSize = live2d_settings.waifuTipsSize.split('x');
    live2d_settings.waifuEdgeSide = live2d_settings.waifuEdgeSide.split(':');

    $("#live2d").attr("width",live2d_settings.waifuSize[0]);
    $("#live2d").attr("height",live2d_settings.waifuSize[1]);
    $(".waifu-tips").width(live2d_settings.waifuTipsSize[0]);
    $(".waifu-tips").height(live2d_settings.waifuTipsSize[1]);
    $(".waifu-tips").css("top",live2d_settings.waifuToolTop);
    $(".waifu-tips").css("font-size",live2d_settings.waifuFontSize);
    $(".waifu-tool").css("font-size",live2d_settings.waifuToolFont);
    $(".waifu-tool span").css("line-height",live2d_settings.waifuToolLine);

    if (live2d_settings.waifuEdgeSide[0] == 'left') $(".waifu").css("left",live2d_settings.waifuEdgeSide[1]+'px');
    else if (live2d_settings.waifuEdgeSide[0] == 'right') $(".waifu").css("right",live2d_settings.waifuEdgeSide[1]+'px');

    try {
        if (live2d_settings.waifuDraggable == 'axis-x') $(".waifu").draggable({ axis: "x", revert: live2d_settings.waifuDraggableRevert });
        else if (live2d_settings.waifuDraggable == 'unlimited') $(".waifu").draggable({ revert: live2d_settings.waifuDraggableRevert });
        else $(".waifu").css("transition", 'all .3s ease-in-out');
    } catch(err) { console.log('[Error] JQuery UI is not defined.') }

    if (waifuPath === undefined) waifuPath = '';
    var modelId = localStorage.getItem('modelId');
    var modelTexturesId = localStorage.getItem('modelTexturesId');

    if (!live2d_settings.modelStorage || modelId == null) {
        var modelId = live2d_settings.modelId;
        var modelTexturesId = live2d_settings.modelTexturesId;
    } loadModel(modelId, modelTexturesId);
}

function loadModel(modelId, modelTexturesId=0) {
    if (live2d_settings.modelStorage) {
        localStorage.setItem('modelId', modelId);
        localStorage.setItem('modelTexturesId', modelTexturesId);
    } else {
        sessionStorage.setItem('modelId', modelId);
        sessionStorage.setItem('modelTexturesId', modelTexturesId);
    } loadlive2d('live2d', live2d_settings.modelAPI+'get/?id='+modelId+'-'+modelTexturesId, (live2d_settings.showF12Status ? console.log('[Status]','live2d','模型',modelId+'-'+modelTexturesId,'加载完成'):null));
}

function loadTipsMessage(result) {

    function loadOtherModel() {
        var modelId = modelStorageGetItem('modelId');
        var modelRandMode = live2d_settings.modelRandMode;

        $.ajax({
            cache: modelRandMode == 'switch' ? true : false,
            url: live2d_settings.modelAPI+modelRandMode+'/?id='+modelId,
            dataType: "json",
            success: function(result) {
                loadModel(result.model['id']);
                var message = result.model['message'];
                $.each(waifu_tips.model_message, function(i,val) {if (i==result.model['id']) message = getRandText(val)});
                showMessage(message, 3000, true);
            }
        });
    }

}
