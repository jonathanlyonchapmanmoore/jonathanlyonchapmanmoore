function TextEditor(n,t){var d=this,r=$(n),ot=!1,u=!1,p=!1,st="",s="",v=!1,b=!1,o=null,f="",wt;t=t||defaultEditorConfig;var w=!1,g="",c,l,h,a,nt,tt,it,rt,ut,bt=function(){function n(n){n.preventDefault();n.stopPropagation();r.addClass("dragover")}function u(n){n.preventDefault();n.stopPropagation();r.removeClass("dragover")}function f(n){n.preventDefault();n.stopPropagation()}function e(n){for(n.preventDefault(),n.stopPropagation(),i=0;i<n.dataTransfer.files.length;i++)if(n.dataTransfer.files[i].type.indexOf("image")!==-1){var u=n.dataTransfer.files[i],t=new FileReader;t.onload=function(n){yt(n.target.result)};t.readAsDataURL(u)}r.removeClass("dragover")}if(t.AllowImagePaste&&"draggable"in document.createElement("span")){(function(n){var t=n.ajaxSettings.xhr;n.ajaxSetup({progress:function(){},xhr:function(){var n=t(),i=this;return n&&typeof n.addEventListener=="function"&&n.upload.addEventListener("progress",function(n){i.progress(n)},!1),n}})})(jQuery);r.on("dragenter",n);r.on("dragleave",u);r[0].addEventListener("dragover",f,!1);r[0].addEventListener("drop",e,!1)}},ei=function(n){if(!n)return null;if(!$.support.opacity)return n;var t=$("<div/>").html(n).text().trim();return t=t.replace(/\</gi,"&lt;"),t.replace(/\r\n\r\n\r\n\r\n/,"\r\n\r\n")},k=function(){var n=navigator.userAgent.toLowerCase();return n.indexOf("msie")!==-1?parseInt(n.split("msie")[1]):!1},ft=function(n){return n&&/^((ht|f)tps?\:\/\/|www\.)([^ \n\t]*)$/i.test(n)},et=function(){if(!t.IgnoreHtmlId)return!1;var n=$("#"+t.IgnoreHtmlId);return n.length>0&&n[0].checked},ht=function(){if(!t.AllowMarkdownId)return!1;var n=$("#"+t.AllowMarkdownId);return n.length>0&&n[0].checked},ct=function(n){return n.replace(/\r\n\r\n/gm,"\r\n")},oi=function(n){return n.replace(/\r\n/g,"\n").replace(/\n/g,"<br>")},si=function(n){var t=new RegExp("<(/?)(html|body|base|basefont|head|meta|xmp|script|noscript|isindex|src|bdo|xml|plaintext|object|applet|embed|bgsound|marquee|title|form|input|button|select|option|textarea|optgroup|label|frame|frameset|iframe|noframes)","gi");return n.replace(t,"&lt;$1$2")},kt=function(n){return n.replace(/(<([^>]+)>)/ig,"")},dt=function(){var r=!et(),n=null,u,t,f,i,e;if(typeof document.selection!="undefined"&&document.selection.createRange)document.selection.type==="Text"&&(u=document.selection.createRange(),n=r?u.htmlText:u.text);else if(typeof getSelection!="undefined")if(t=window.getSelection(),r&&t.rangeCount){for(f=document.createElement("div"),i=0,e=t.rangeCount;i<e;++i)f.appendChild(t.getRangeAt(i).cloneContents());n=f.innerHTML}else n=window.getSelection().toString();return n&&(r&&(n=n.replace(/<br[^>]*?>/igm,"")),n=n.replace(/<img[^>]*alt=[^\|]*\|\s([^"]*)[^>]*>/igm,"$1")),n},hi=function(n,t){if(u||n.length<=0)return!1;var f="<"+n+(t?" "+t:t)+">",e="<\/"+n+">",i=r.getSelectedText(!0);return i=i.substr(0,f.length)===f&&i.substr(i.length-e.length)===e?i.substr(f.length,i.length-f.length-e.length):f+i+e,r.replaceSelectedText(i),!1},gt=function(n,i,u){var e=new $.Deferred,f={},o,c,h,s;if(f.offset=0,f.html=n?n:i,f.titleLength=f.html.length,n.length>2048)return e.resolve(f),e.promise();if(i||(i=n),i=$.trim(i),o=i.toLowerCase(),c=!1,ft(o))if(r.isCursorInsideOpenTag()||r.isCursorInsideTag("a"))f.html=i,f.titleLength=i.length;else if(o.substr(0,5)!=="http:"&&o.substr(0,4)!=="ftp:"&&o.substr(0,6)!=="https:"&&(i="http://"+i),n)f=lt(n,i,ht(),u);else for(h=0;h<t.GetTitlePaths.length;h++)if(s=t.GetTitlePaths[h],s.path===null||o.substr(0,s.path.length)===s.path){$.ajax({type:"GET",timeout:t.GetTitleTimeoutMs,url:s.url,data:s.param+"="+i,async:!0}).done(function(t){t&&t.length>0?(t.length>250&&(t=t.substring(0,250)),n=t.htmlEncode()):n=i;f=lt(n,i,ht(),u);e.resolve(f)}).fail(function(){e.resolve(f)});c=!0;break}return c||e.resolve(f),e.promise()},lt=function(n,t,i,r){var u={},f="";return i?(f="[",u.offset=f.length,u.titleLength=n.length,u.html=f+n+"]("+t+")"):(f='<a href="'+t+'">',u.offset=f.length,u.titleLength=n.length,u.html=f+n+"<\/a>",r&&(u.html+='[<a href="'+t+'" target="_blank" title="New Window">^<\/a>]')),u},ni=function(n,t){switch(t){case"Sentence":return n.toSentenceCase();case"Title":return n.toTitleCase();case"Lowercase":return n.toLowerCase();case"Uppercase":return n.toUpperCase()}},y=function(n){while(n.indexOf("\r\n")>=0)n=n.replace(/\r\n/g,String.fromCharCode(1));var i=document.createElement("div"),t=document.createTextNode(n);for(i.appendChild(t),t=i.innerHTML;t.indexOf(String.fromCharCode(1))>=0;)t=t.replace(String.fromCharCode(1),"\r\n");return t},ti=function(){if(!r)return!0;if(r.val(r.val().trim()),t.LongMsgWarning)if(r.val().length>1e4){if(!confirm("This message is extremely long. Long messages increase download times for those with slow connections. Are you sure you want to risk the wrath of other users by posting a message this long?"))return!1}else if(r.val().length>4e3&&!confirm("This message is very long. Long messages increase download times for those with slow connections. Are you sure you want to post a message this long?"))return!1;return t.LocalLinksWarning&&r.val().match(/<a href=("|')?http:\/\/localhost/gi)&&!confirm("You have included a link to your local machine, not a remote machine. Is this intended?")?!1:r.val().length===0?(alert("Please enter a message"),r.focus(),!1):!0},at=function(){b=!0;r.addClass("disabled");var n=$(".container-editor")[0];return new Spinner({lines:13,length:28,width:8,radius:23,scale:.4,corners:1,opacity:.5,rotate:0,direction:1,speed:1,trail:60,color:"#666",fadeColor:"transparent"}).spin(n)},vt=function(n){b=!1;n&&n.stop();r.removeClass("disabled")},ii=function(){if(!u&&!ot&&r.length!==0)return r.val()!==st?"You will lose any unsaved text. Is this OK?":void 0},e=function(n){return $("#"+t.PasteSettingElmId+" input[value="+n+"]").parent().parent()},ri=function(n,i,u){if(u){s="html";i?s="code":i=y(u);c=u;l=i;n?e("code").hide():e("code").show();u===y(u)?(t.InitialPasteMode==="text"?(e("html").hide(),e("encoded").hide(),(s==="html"||s==="encoded")&&(s="text")):e("text").hide(),t.InitialPasteMode==="encoded"?(e("html").hide(),e("text").hide(),(s==="html"||s==="text")&&(s="encoded")):e("encoded").hide()):(e("text").show(),e("encoded").show(),e("html").show());d.previewPaste(d.getPasteSetting(),!1);f=r.val();var o=$("#"+t.PasteDialogId);t.PastePreviewOverEditor?o.css("left",(r.width()-o.width()).toString()+"px"):o.css("left",r.width().toString()+"px");t.ShowPastePreviewWindow?$("#"+t.PasteDialogId+" .expando").show():$("#"+t.PasteDialogId+" .expando").hide();$("#"+t.PasteDialogId).fadeIn("fast");p=!0}},yt=function(n){var i=JSON.stringify({imageSource:n}),u=at();$.ajax({type:"POST",cache:!1,data:i,timeout:t.UploadImageTimeoutMs,async:!0,dataType:"json",contentType:"application/json; charset=utf-8",url:t.ImageUploadServiceUrl}).done(function(n){n&&n.d&&n.d.Source&&(console.log("result is "+n.d.Source+" ("+n.d.Width+"x"+n.d.Height+")"),n.d.ShrunkWidth>0?r.insertText("<a href='"+n.d.Source+"' target=_blank><img src='"+n.d.ShrunkSource+"' width='"+n.d.ShrunkWidth+"px' height='"+n.d.ShrunkHeight+"px' /><\/a>"):r.insertText("<img src='"+n.d.Source+"' width='"+n.d.Width+"px' height='"+n.d.Height+"px' />"))}).fail(function(n,t,i){alert("We ran out of time trying to upload that image. Sorry.");console.log("Upload error: "+i)}).always(function(){vt(u)})},ui=function(n){var o,u,e,i,c,s;if(f=r.val(),o=r.getSelectionBounds(),h=o.start,a=o.end,t.AllowImagePaste&&(u=n.clipboardData||n.originalEvent.clipboardData,u&&u.items))for(e=u.items,i=0;i<e.length;i++)if(e[i].type.indexOf("image")!==-1)return c=e[i].getAsFile(),s=new FileReader,s.onload=function(n){yt(n.target.result)},s.readAsDataURL(c),n.preventDefault(),!1;w=!0;setTimeout(pt,300)},fi=function(n){if(b)return n&&(n.preventDefault(),n.stopPropagation()),!1},pt=function(n){var u,o,i,e;if(b)return n&&(n.preventDefault(),n.stopPropagation()),!1;if(v||!p||w||r.val()===f||($("#"+t.PasteDialogId).fadeOut("fast"),p=!1),v||!w)return n||(n=window.event),n&&(n.returnValue=!0),!0;if(h<0||a<0||a<h)return!0;if(u=r.val(),g=f,o=u.length-1-(f.length-1-a),i=u.substring(h,o),ft(i))i=y(i),r.val(f),r.selectText(h,a),d.inLinkErAte(i,!0);else{nt=tt=it=rt=ut=null;var s=r.isCursorInsideTag("pre",i.length),l=r.isCursorInsideOpenTag(i.length),c="";c="<pre>"+i+"<\/pre>";et()||l||s&&i===y(i)?(e=ct(i),r.val(f.substring(0,h)+e+f.substring(a,f.length)),r.setCaretPosition(h+e.length)):ri(s,c,i)}return f=r.val(),w?(w=!1,!1):void 0};jQuery.fn.getSelectionBounds=function(){var r,f,n,e,o;if(this.length===0)return null;var t=this[0],i=0,u=0;return typeof t.selectionStart!="number"&&document.selection?(r=document.selection.createRange(),r&&r.htmlText?(n=t.createTextRange(),n&&(f=n.duplicate()),n&&f&&(f.moveToBookmark(r.getBookmark()),n.setEndPoint("EndToStart",f),e=r.text.replace(/[\r\n]/g,"."),o=t.value.replace(/[\r\n]/g,"."),i=o.indexOf(e,n.text.length),u=i+e.length)):i=u=this.getCaretPosition()):(i=t.selectionStart,u=t.selectionEnd),{start:i,end:u}};jQuery.fn.getCaretPosition=function(){var n,t,i;if(this.length===0)return null;n=this[0];try{if(t=0,typeof n.selectionStart!="number"&&document.selection){if(n.focus(),i=document.selection.createRange(),!i)return 0;i.moveStart("character",-n.value.length);t=i.text.length}else typeof n.selectionStart!="undefined"&&(t=n.selectionStart);return t}catch(r){return 0}};jQuery.fn.setCaretPosition=function(n){var i,t,f;if(this.length===0)return this;i=this[0];try{if(i.setSelectionRange)i.focus(),i.setSelectionRange(n,n);else if(i.createTextRange)t=i.createTextRange(),t.move("character",n),t.select();else if(window.getSelection){f=window.getSelection();t=document.createRange();for(var e=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,null,!1),u=n,r=i;e.nextNode();)if(r=e.currentNode,u>r.value.length)u-=r.value.length;else break;r=r.firstChild;t.setStart(r,u);t.setEnd(r,u);f.removeAllRanges();f.addRange(t)}else document.selection&&(t=document.body.createTextRange(),t.moveToElementText(i),t.setEndPoint("EndToEnd",t),t.moveStart("character",n),t.moveEnd("character",n-i.innerText.length),t.select())}catch(o){}return this};jQuery.fn.getSelectedText=function(){if(this.length===0)return null;var t=this[0],n=this.getSelectionBounds();return n?t.value.substring(n.start,n.end):""};jQuery.fn.replaceSelectedText=function(n,t,i){var u,r,f;if(this.length===0)return this;if(u=this[0],v=!0,r=this.getSelectionBounds(),r){if(f=u.value,t){while(f.substr(r.start,1)===" "&&r.start<f.length)r.start++;while(r.end>0&&f.substr(r.end-1,1)===" ")r.end--;this.selectText(r.start,r.end)}this.val(u.value.substring(0,r.start)+n+u.value.substring(r.end,u.value.length));i&&i>0?this.setCaretPosition(r.start+i):this.setCaretPosition(r.start)}return v=!1,this};jQuery.fn.insertText=function(n){var t,f,e,i;return u||!n||this.length===0?!1:(t=this[0],v=!0,this[0].scrollTop&&(f=this[0].scrollTop),r.focus(),i=this.getSelectionBounds(),i&&i.start>=0?(e=i.start+n.length,this.val(t.value.substring(0,i.start)+n+t.value.substring(i.start,t.value.length))):(r.val(t.value+n),e=t.value.length),this.setCaretPosition(e),f&&(this[0].scrollTop=f),v=!1,!1)};wt=function(){o&&o.select&&o.select();o=null};jQuery.fn.selectText=function(n,t){if(this.length===0)return this;var i=this[0];return typeof i.selectionStart!="number"&&document.selection&&document.selection.createRange?(o=i.createTextRange(),o.move("character",n),o.moveStart("character",0),o.moveEnd("character",t-n+1),o=o.duplicate(),setTimeout(wt,0)):(i.selectionStart=n,i.selectionEnd=t),this};jQuery.fn.expandSelectionToLines=function(){if(this.length===0)return this;for(var n=this.getSelectionBounds();n.start>0&&this.val().substring(n.start-1,n.start)!=="\n";)n.start--;for(this.val().substring(n.start,n.start+1)==="\n"&&n.start<this.val().length&&n.start++;n.end<this.val().length&&this.val().substring(n.end,n.end+1)!=="\n";)n.end++;return this.selectText(n.start,n.end),this};jQuery.fn.isCursorInsideTag=function(n,t){var r,i;if(this.length===0)return null;if(r=!1,i=this.getCaretPosition(),t&&i&&(i-=t),i&&i>0){var u=this[0].value.substr(0,i),o=new RegExp("<"+n+"(s)*","gi"),s=new RegExp("<\/"+n+">","gi"),f=u.match(o),e=u.match(s);f&&(e?f.length>e.length&&(r=!0):r=!0)}return r};jQuery.fn.isCursorInsideOpenTag=function(n){var i,t;if(this.length===0)return null;if(i=!1,t=this.getCaretPosition(),n&&t&&(t-=n),t&&t>0){var u=this[0].value.substr(0,t),f=new RegExp("<[a-z]+\\s+[^>]*$","mi"),r=u.match(f);i=r!==null&&r.length>0}return i};String.prototype.htmlEncode=function(){var n=document.createElement("div"),t=document.createTextNode(this);return n.appendChild(t),n.innerHTML};String.prototype.toTitleCase=function(n,t){if(this===null||this.length<0)return"";n=n?n:["a","an","the","and","but","or","for","nor","as","at","by","for","from","in","into","near","of","on","onto","to","with"];t=t?t:["I","ASP.NET",".NET","C#","C++","VB","VB.NET","SQL","F#"];for(var r=this.split(" "),u="",i=0;i<r.length;i++)u.length>0&&(u+=" "),u+=n.indexOf(r[i].toLowerCase())<0?t.indexOf(r[i].toUpperCase())<0?r[i].length>1?r[i].substring(0,1).ToUpper()+r[i].substring(1).ToUpper():r[i]:r[i].toUpperCase():r[i].toLowerCase();return u};String.prototype.toSentenceCase=function(n,t){if(this===null||this.length<0)return"";n=n?n:["a","an","the","and","but","or","for","nor","as","at","by","for","from","in","into","near","of","on","onto","to","with"];t=t?t:["I","ASP.NET",".NET","C#","C++","VB","VB.NET","SQL","F#","MVC"];for(var r=this.split(" "),u="",i=0;i<r.length;i++)u.length>0&&(u+=" "),u+=n.indexOf(r[i].toLowerCase())<0?t.indexOf(r[i].toUpperCase())<0?r[i]:r[i].toUpperCase():r[i].toLowerCase();return u.substring(0,1).toUpperCase()+u.substring(1)};this.toggleWrapSelection=function(n,t){if(u||n.length<=0)return!1;t||(t="");var f="<"+n+(t.length>0?" "+t:t)+">",e="<\/"+n+">",i=r.getSelectedText();return i.substr(0,f.length)===f&&i.substr(i.length-e.length)===e?(i=i.substr(f.length,i.length-f.length-e.length),r.replaceSelectedText(i)):(i=f+$.trim(i)+e,r.replaceSelectedText(i,!0,f.length)),!1};this.insertText=function(n){return r.insertText(n),!1};this.getPasteSetting=function(){var i=$("#"+t.PasteSettingElmId+" input[type=radio]"),n;if(!i)return"auto";for(n=0;n<i.length;n++)if(i[n].checked)return i[n].value};this.getSanitisedMesssageHtml=function(n,i,r,u,f,e,o,s){var h=null,c={JSON:!0,AllowImages:n,Content:i,Signature:r,WysiwygEditorUsed:u,IgnoreHtml:f,AllowMarkdown:e};return $.ajax({type:"POST",async:o,cache:!1,dataType:"json",data:c,timeout:500,url:t.SanitiseHtmlUrl}).done(function(n){h=n&&n.html!==undefined?decodeURIComponent(n.html):"An unexpected error occurred.";s&&s(h)}).fail(function(n,t,i){i}),h};this.previewPaste=function(n,i){var o="#"+t.PasteDialogId+" .paste-preview",u,e,v;if(!c||!c.trim()){$(o).html("");return}u="";e=null;n==="auto"&&(n=s);n==="text"?(u=kt(c),e=nt):n==="encoded"?(u=y(c),e=tt):n==="html"?(u=c,e=it):n==="quote"?(u='<blockquote class="quote"><div class="op">Quote:<\/div>'+c+"<\/blockquote>",e=rt):n==="code"&&(k()&&k()<=9&&(l=ct(l)),l.indexOf("<pre")<0&&(l="<pre>"+l+"<\/pre>"),u=l,e=ut);t.ShowPastePreviewWindow&&(e===null?this.getSanitisedMesssageHtml(!1,u,"",n==="html",n==="encoded",!1,!0,function(t){$(o).html(t);n==="text"?nt=t:n==="encoded"?tt=t:n==="html"?it=t:n==="quote"?rt=t:n==="code"&&(ut=t)}):$(o).html(e));i||(v=g.substring(0,h)+u+g.substring(a),r.val(v),f=v,r.setCaretPosition(h+u.length))};this.inLinkErAte=function(n,t){var i,f;return u?!1:(i=r.getSelectedText(),n||(n=i),ft(n)||(n=null),r.focus(),n?(f=at(),gt(i,n,t).done(function(n){if(n.html.length>0){var t=r.getSelectionBounds();r.replaceSelectedText(n.html,!0);r.selectText(t.start+n.offset,t.start+n.offset+n.titleLength)}}).always(function(){vt(f)})):t?r.insertText('<a href=""><\/a>[<a href="" target="_blank">^<\/a>]'):r.insertText('<a href=""><\/a>'),!1)};this.encoderate=function(){if(u)return!1;var n=r.getSelectedText(),t=y(n);if(n!==t)return r.replaceSelectedText(t),!1};this.fixCase=function(){if(u)return!1;var n=r.getSelectedText(),t=ni(n,"Sentence");if(n!==t)return r.replaceSelectedText(t),!1};this.untab=function(){var i,f,s;if(u)return!1;var t="",o=r.getSelectedText(),e=4,n=e;for(i=0;i<o.length;i++)if(f=o.substring(i,i+1),f==="\t"){for(s=0;s<n;s++)t+=" ";n=e}else f==="\n"?(t+=f,n=e):(t+=f,n--,n<=0&&(n=e));if(o!==t)return r.replaceSelectedText(t),!1};this.adjustLeading=function(n){if(u)return!1;var i,e=r.expandSelectionToLines().getSelectionBounds(),f=r.getSelectedText(),t;if(n<0?(i=/^(\t| {1,4})/gim,t=f.replace(i,"")):(i=k()&&k()<=9?/^[^\n]?/gim:/^/gim,t=f.replace(i,"    ")),f!==t)return r.replaceSelectedText(t),r.selectText(e.start,e.start+t.length),!1};this.quoteText=function(n){var e=!et(),u,f,i;if(t.QuoteableElmId!==""){if(u=document.getElementById(t.QuoteableElmId),document.all)if(document.selection&&document.selection.createRange){for(elm=document.selection.createRange().parentElement();elm&&elm!==u&&elm.parentElement;)elm=elm.parentElement;if(elm!==u)return!1}else return;else if(window.getSelection){for(elm=window.getSelection().anchorNode;elm&&elm!==u;)elm=elm.parentNode;if(!elm)return!1}else return!1;return f=dt(),f&&f!==""?(i="",r.val()!==""&&(i+="\n"),e&&(i+='<blockquote class="quote"><div class="op">'),i+=n+" wrote:",i+=e?"<\/div>":"\n",i+=f,i+=e?"<\/blockquote>":"\n",i+="\n",r.insertText(i)):alert("You did not select any text to quote"),!1}};this.cancelMsg=function(){return r.val()&&!confirm("You're about to abandon this post. If you hit 'OK' you'll lose your work.")?!1:(ot=!0,history.back(-1),!1)};this.onEditorSubmit=function(){return t.EnsureContentValidation&&!ti()?!1:t.OnSubmit&&!t.OnSubmit()?!1:(u=!0,!0)};this.signalPostingInProgress=function(){u=!0};this.signalPostingEnded=function(){u=!1};this.isPostingInProgress=function(){return u};this.initialise=function(){var n=window.onbeforeunload;window.onbeforeunload=function(){var t=ii();return n&&n(),t};r.length<=0?r=null:st=r.val();r.on("keydown",fi);r.on("keyup",pt);r.on("paste",ui);r.on("click",function(){return $("#"+t.PasteDialogId).stop(!0,!0).fadeOut("fast"),p=!1,!1});$("#"+t.PasteDialogId+" a.close-notify").click(function(){return $("#"+t.PasteDialogId).stop(!0,!0).fadeOut("fast"),p=!1,!1});bt()}}var defaultEditorConfig={InitialPasteMode:"text",ShowPastePreviewWindow:!1,PastePreviewOverEditor:!1,LongMsgWarning:!0,LocalLinksWarning:!0,AllowImagePaste:!1,ImageUploadUrl:null,EnsureContentValidation:!0,PasteDialogId:"",IgnoreHtmlId:"",AllowMarkdownId:"",QuoteableElmId:"",PasteSettingElmId:"",OnSubmit:null,SniffCodeUrl:null,SniffCodeParameter:null,SanitiseHtmlUrl:null,UploadImageTimeoutMs:1e4,GetTitleTimeoutMs:5e3,GetTitlePaths:[]};