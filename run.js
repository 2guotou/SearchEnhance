// ==UserScript==
// @name         Search Enhance
// @namespace    https://github.com/2guotou
// @version      0.1
// @description  the Magic Moment for Google Search
// @author       刘东阳 Nuttycase
// @match        https://www.google.com.hk/search*
// @match        https://www.google.com.hk/webhp*
// @grant        none
// ==/UserScript==

setTimeout(function(){
    var formq  = document.querySelector('form[name=f]');
    var box = document.querySelector('div.hdtb-mn-cont');
    var select = document.createElement('select');
    select.innerHTML = [
        '<option value="allinanchor:"   >内链 & inanchor</option>',
        '<option value="inanchor:"      >内链 | inanchor</option>',
        '<option value="allintext:"     >页面 & intext</option>',
        '<option value="intext:"        >页面 | intext</option>',
        '<option value="allintitle:"    >标题 & intitle</option>',
        '<option value="intitle:"       >标题 | intitle</option>',
        '<option value="allinurl:"      >网址 & inurl</option>',
        '<option value="inurl:"         >网址 | inurl</option>',
        '<option value="site:stackoverflow.com">站内:stackoverflow.com</option>',
        '<option value="site:segmentfault.com" >站内:segmentfault.com</option>',
        '<option value="site:chiphell.com"     >站内:chiphell.com</option>',
        '<option value="site:wikipedia.org"    >站内:wikipad.com</option>',
        '<option value="site:youtube.com"      >站内:youtube.com</option>',
        '<option value="site:github.com"       >站内:github.com</option>',
        '<option value="site:douban.com"       >站内:douban.com</option>',
        '<option value="site:smzdm.com"        >站内:smzdm.com</option>',
        '<option value="site:zhihu.com"        >站内:zhihu.com</option>',
        '<option value="site:quora.com"        >站内:quora.com</option>',
        '<option value="site:v2ex.com"         >站内:v2ex.com</option>',
        '<option value="filetype:torrent">文件:torrent</option>',
        '<option value="filetype:pdf"    >文件:pdf</option>',
        '<option value="filetype:mkv"    >文件:mkv</option>',
        '<option value="filetype:txt"    >文件:txt</option>'
    ].join('');
    select.onchange = function(){
        var inputq = document.querySelector('input[name=q]');
        var content = inputq.value;
        inputq.value = this.value + ' ' + content.replace(/(site:\w+\.(com|org|cn)|(allinanchor|inanchor|allintext|intext|allintitle|intitle|allinurl|inurl):|filetype:\w+)/, '');
        if( content.length >= 1 ){
            formq.submit();
        }
    }
    box.appendChild(select);
}, 2000);
