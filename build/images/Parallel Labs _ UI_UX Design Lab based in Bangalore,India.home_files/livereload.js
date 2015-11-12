!function(){var e,t={},o={},n={},i={},r={},s={},l={},c={};e={bind:function(e,t,o){if(e.addEventListener)return e.addEventListener(t,o,!1);if(e.attachEvent)return e[t]=1,e.attachEvent("onpropertychange",function(e){return e.propertyName===t?o():void 0});throw new Error("Attempt to attach custom event "+t+" to something which isn't a DOMElement")},fire:function(e,t){var o;if(e.addEventListener)return o=document.createEvent("HTMLEvents"),o.initEvent(t,!0,!0),document.dispatchEvent(o);if(!e.attachEvent)throw new Error("Attempt to fire custom event "+t+" on something which isn't a DOMElement");return e[t]?e[t]++:void 0}},t.bind=e.bind,t.fire=e.fire;var a,h,u,d,p=Array.prototype.indexOf||function(e){for(var t=0,o=this.length;o>t;t++)if(this[t]===e)return t;return-1};o.PROTOCOL_6=a="http://livereload.com/protocols/official-6",o.PROTOCOL_7=h="http://livereload.com/protocols/official-7",o.ProtocolError=d=function(){function e(e,t){this.message="LiveReload protocol error ("+e+') after receiving data: "'+t+'".'}return e}(),o.Parser=u=function(){function e(e){this.handlers=e,this.reset()}return e.prototype.reset=function(){return this.protocol=null},e.prototype.process=function(e){var t,o,n,i;try{if(null==this.protocol){if(e.match(/^!!ver:([\d.]+)$/))this.protocol=6;else if(o=this._parseMessage(e,["hello"])){if(!o.protocols.length)throw new d("no protocols specified in handshake message");if(p.call(o.protocols,h)>=0)this.protocol=7;else{if(!(p.call(o.protocols,a)>=0))throw new d("no supported protocols found");this.protocol=6}}return this.handlers.connected(this.protocol)}if(6===this.protocol){if(o=JSON.parse(e),!o.length)throw new d("protocol 6 messages must be arrays");if(t=o[0],n=o[1],"refresh"!==t)throw new d("unknown protocol 6 command");return this.handlers.message({command:"reload",path:n.path,liveCSS:null!=(i=n.apply_css_live)?i:!0})}return o=this._parseMessage(e,["reload","alert"]),this.handlers.message(o)}catch(r){if(r instanceof d)return this.handlers.error(r);throw r}},e.prototype._parseMessage=function(e,t){var o,n;try{o=JSON.parse(e)}catch(i){throw new d("unparsable JSON",e)}if(!o.command)throw new d('missing "command" key',e);if(n=o.command,p.call(t,n)<0)throw new d("invalid command '"+o.command+"', only valid commands are: "+t.join(", ")+")",e);return o},e}();var f,a,h,u,m,g;g=o,u=g.Parser,a=g.PROTOCOL_6,h=g.PROTOCOL_7,m="2.0.8",n.Connector=f=function(){function e(e,t,o,n){var i=this;this.options=e,this.WebSocket=t,this.Timer=o,this.handlers=n,this._uri="ws://"+this.options.host+":"+this.options.port+"/livereload",this._nextDelay=this.options.mindelay,this._connectionDesired=!1,this.protocol=0,this.protocolParser=new u({connected:function(e){return i.protocol=e,i._handshakeTimeout.stop(),i._nextDelay=i.options.mindelay,i._disconnectionReason="broken",i.handlers.connected(e)},error:function(e){return i.handlers.error(e),i._closeOnError()},message:function(e){return i.handlers.message(e)}}),this._handshakeTimeout=new o(function(){return i._isSocketConnected()?(i._disconnectionReason="handshake-timeout",i.socket.close()):void 0}),this._reconnectTimer=new o(function(){return i._connectionDesired?i.connect():void 0}),this.connect()}return e.prototype._isSocketConnected=function(){return this.socket&&this.socket.readyState===this.WebSocket.OPEN},e.prototype.connect=function(){var e=this;return this._connectionDesired=!0,this._isSocketConnected()?void 0:(this._reconnectTimer.stop(),this._disconnectionReason="cannot-connect",this.protocolParser.reset(),this.handlers.connecting(),this.socket=new this.WebSocket(this._uri),this.socket.onopen=function(t){return e._onopen(t)},this.socket.onclose=function(t){return e._onclose(t)},this.socket.onmessage=function(t){return e._onmessage(t)},this.socket.onerror=function(t){return e._onerror(t)})},e.prototype.disconnect=function(){return this._connectionDesired=!1,this._reconnectTimer.stop(),this._isSocketConnected()?(this._disconnectionReason="manual",this.socket.close()):void 0},e.prototype._scheduleReconnection=function(){return this._connectionDesired?this._reconnectTimer.running?void 0:(this._reconnectTimer.start(this._nextDelay),this._nextDelay=Math.min(this.options.maxdelay,2*this._nextDelay)):void 0},e.prototype.sendCommand=function(e){return null!=this.protocol?this._sendCommand(e):void 0},e.prototype._sendCommand=function(e){return this.socket.send(JSON.stringify(e))},e.prototype._closeOnError=function(){return this._handshakeTimeout.stop(),this._disconnectionReason="error",this.socket.close()},e.prototype._onopen=function(e){var t;return this.handlers.socketConnected(),this._disconnectionReason="handshake-failed",t={command:"hello",protocols:[a,h]},t.ver=m,this.options.ext&&(t.ext=this.options.ext),this.options.extver&&(t.extver=this.options.extver),this.options.snipver&&(t.snipver=this.options.snipver),this._sendCommand(t),this._handshakeTimeout.start(this.options.handshake_timeout)},e.prototype._onclose=function(e){return this.protocol=0,this.handlers.disconnected(this._disconnectionReason,this._nextDelay),this._scheduleReconnection()},e.prototype._onerror=function(e){},e.prototype._onmessage=function(e){return this.protocolParser.process(e.data)},e}();var v,y=function(e,t){return function(){return e.apply(t,arguments)}};i.Timer=v=function(){function e(e){this.func=e,this.running=!1,this.id=null,this._handler=y(function(){return this.running=!1,this.id=null,this.func()},this)}return e.prototype.start=function(e){return this.running&&clearTimeout(this.id),this.id=setTimeout(this._handler,e),this.running=!0},e.prototype.stop=function(){return this.running?(clearTimeout(this.id),this.running=!1,this.id=null):void 0},e}(),v.start=function(e,t){return setTimeout(t,e)};var w;r.Options=w=function(){function e(){this.host=null,this.port=RACK_LIVERELOAD_PORT,this.snipver=null,this.ext=null,this.extver=null,this.mindelay=1e3,this.maxdelay=6e4,this.handshake_timeout=5e3}return e.prototype.set=function(e,t){switch(typeof this[e]){case"undefined":break;case"number":return this[e]=+t;default:return this[e]=t}},e}(),w.extract=function(e){var t,o,n,i,r,s,l,c,a,h,u,d,p;for(d=e.getElementsByTagName("script"),c=0,h=d.length;h>c;c++)if(t=d[c],(l=t.src)&&(n=l.match(/^[^:]+:\/\/(.*)\/z?livereload\.js(?:\?(.*))?$/))){if(r=new w,(i=n[1].match(/^([^\/:]+)(?::(\d+))?$/))&&(r.host=i[1],i[2]&&(r.port=parseInt(i[2],10))),n[2])for(p=n[2].split("&"),a=0,u=p.length;u>a;a++)s=p[a],(o=s.split("=")).length>1&&r.set(o[0].replace(/-/g,"_"),o.slice(1).join("="));return r}return null},function(){var e,t,o,n,i,r,l;l=function(e){var t,o,n;return(o=e.indexOf("#"))>=0?(t=e.slice(o),e=e.slice(0,o)):t="",(o=e.indexOf("?"))>=0?(n=e.slice(o),e=e.slice(0,o)):n="",{url:e,params:n,hash:t}},n=function(e){var t;return e=l(e).url,t=0===e.indexOf("file://")?e.replace(/^file:\/\/(localhost)?/,""):e.replace(/^([^:]+:)?\/\/([^:\/]+)(:\d*)?\//,"/"),decodeURIComponent(t)},r=function(e,t,n){var i,r,s,l,c;for(i={score:0},l=0,c=t.length;c>l;l++)r=t[l],s=o(e,n(r)),s>i.score&&(i={object:r,score:s});return i.score>0?i:null},o=function(e,t){var o,n,i,r;if(e=e.replace(/^\/+/,"").toLowerCase(),t=t.replace(/^\/+/,"").toLowerCase(),e===t)return 1e4;for(o=e.split("/").reverse(),n=t.split("/").reverse(),r=Math.min(o.length,n.length),i=0;r>i&&o[i]===n[i];)++i;return i},i=function(e,t){return o(e,t)>0},e=[{selector:"background",styleNames:["backgroundImage"]},{selector:"border",styleNames:["borderImage","webkitBorderImage","MozBorderImage"]}],s.Reloader=t=function(){function t(e,t,o){this.window=e,this.console=t,this.Timer=o,this.document=this.window.document,this.importCacheWaitPeriod=200,this.plugins=[]}return t.name="Reloader",t.prototype.addPlugin=function(e){return this.plugins.push(e)},t.prototype.analyze=function(e){return results},t.prototype.reload=function(e,t){var o,n,i,r,s;for(this.options=t,null==(n=this.options).stylesheetReloadTimeout&&(n.stylesheetReloadTimeout=15e3),s=this.plugins,i=0,r=s.length;r>i;i++)if(o=s[i],o.reload&&o.reload(e,t))return;return t.liveCSS&&e.match(/\.css$/i)&&this.reloadStylesheet(e)?void 0:t.liveImg&&e.match(/\.(jpe?g|png|gif)$/i)?void this.reloadImages(e):this.reloadPage()},t.prototype.reloadPage=function(){return this.window.document.location.reload()},t.prototype.reloadImages=function(t){var o,r,s,l,c,a,h,u,d,p,f,m,g,v,y,w,_,R;for(o=this.generateUniqueString(),v=this.document.images,a=0,p=v.length;p>a;a++)r=v[a],i(t,n(r.src))&&(r.src=this.generateCacheBustUrl(r.src,o));if(this.document.querySelectorAll)for(h=0,f=e.length;f>h;h++)for(y=e[h],s=y.selector,l=y.styleNames,w=this.document.querySelectorAll("[style*="+s+"]"),u=0,m=w.length;m>u;u++)r=w[u],this.reloadStyleImages(r.style,l,t,o);if(this.document.styleSheets){for(_=this.document.styleSheets,R=[],d=0,g=_.length;g>d;d++)c=_[d],R.push(this.reloadStylesheetImages(c,t,o));return R}},t.prototype.reloadStylesheetImages=function(t,o,n){var i,r,s,l,c,a,h;try{r=null!=t?t.cssRules:void 0}catch(u){}if(r)for(l=0,a=r.length;a>l;l++)switch(i=r[l],i.type){case CSSRule.IMPORT_RULE:this.reloadStylesheetImages(i.styleSheet,o,n);break;case CSSRule.STYLE_RULE:for(c=0,h=e.length;h>c;c++)s=e[c].styleNames,this.reloadStyleImages(i.style,s,o,n);break;case CSSRule.MEDIA_RULE:this.reloadStylesheetImages(i,o,n)}},t.prototype.reloadStyleImages=function(e,t,o,r){var s,l,c,a,h,u=this;for(a=0,h=t.length;h>a;a++)l=t[a],c=e[l],"string"==typeof c&&(s=c.replace(/\burl\s*\(([^)]*)\)/,function(e,t){return i(o,n(t))?"url("+u.generateCacheBustUrl(t,r)+")":e}),s!==c&&(e[l]=s))},t.prototype.reloadStylesheet=function(e){var t,o,i,s,l,c,a,h,u,d,p,f,m,g,v,y=this;for(i=function(){var e,t,n,i;for(n=this.document.getElementsByTagName("link"),i=[],e=0,t=n.length;t>e;e++)o=n[e],"stylesheet"!==o.rel||o.__LiveReload_pendingRemoval||i.push(o);return i}.call(this),t=[],g=this.document.getElementsByTagName("style"),c=0,d=g.length;d>c;c++)l=g[c],l.sheet&&this.collectImportedStylesheets(l,l.sheet,t);for(a=0,p=i.length;p>a;a++)o=i[a],this.collectImportedStylesheets(o,o.sheet,t);if(this.window.StyleFix&&this.document.querySelectorAll)for(v=this.document.querySelectorAll("style[data-href]"),h=0,f=v.length;f>h;h++)l=v[h],i.push(l);if(this.console.log("LiveReload found "+i.length+" LINKed stylesheets, "+t.length+" @imported stylesheets"),s=r(e,i.concat(t),function(e){return n(y.linkHref(e))}))s.object.rule?(this.console.log("LiveReload is reloading imported stylesheet: "+s.object.href),this.reattachImportedRule(s.object)):(this.console.log("LiveReload is reloading stylesheet: "+this.linkHref(s.object)),this.reattachStylesheetLink(s.object));else for(this.console.log("LiveReload will reload all stylesheets because path '"+e+"' did not match any specific one"),u=0,m=i.length;m>u;u++)o=i[u],this.reattachStylesheetLink(o);return!0},t.prototype.collectImportedStylesheets=function(e,t,o){var n,i,r,s,l;try{r=null!=t?t.cssRules:void 0}catch(c){}if(r&&r.length)for(n=s=0,l=r.length;l>s;n=++s)switch(i=r[n],i.type){case CSSRule.CHARSET_RULE:continue;case CSSRule.IMPORT_RULE:o.push({link:e,rule:i,index:n,href:i.href}),this.collectImportedStylesheets(e,i.styleSheet,o)}},t.prototype.waitUntilCssLoads=function(e,t){var o,n,i,r=this;return o=!1,n=function(){return o?void 0:(o=!0,t())},e.onload=function(){return console.log("onload!"),r.knownToSupportCssOnLoad=!0,n()},this.knownToSupportCssOnLoad||(i=function(){return e.sheet?(console.log("polling!"),n()):r.Timer.start(50,i)})(),this.Timer.start(this.options.stylesheetReloadTimeout,n)},t.prototype.linkHref=function(e){return e.href||e.getAttribute("data-href")},t.prototype.reattachStylesheetLink=function(e){var t,o,n=this;if(!e.__LiveReload_pendingRemoval)return e.__LiveReload_pendingRemoval=!0,"STYLE"===e.tagName?(t=this.document.createElement("link"),t.rel="stylesheet",t.media=e.media,t.disabled=e.disabled):t=e.cloneNode(!1),t.href=this.generateCacheBustUrl(this.linkHref(e)),o=e.parentNode,o.lastChild===e?o.appendChild(t):o.insertBefore(t,e.nextSibling),this.waitUntilCssLoads(t,function(){var o;return o=/AppleWebKit/.test(navigator.userAgent)?5:200,n.Timer.start(o,function(){var o;if(e.parentNode)return e.parentNode.removeChild(e),t.onreadystatechange=null,null!=(o=n.window.StyleFix)?o.link(t):void 0})})},t.prototype.reattachImportedRule=function(e){var t,o,n,i,r,s,l,c,a=this;return l=e.rule,o=e.index,n=e.link,s=l.parentStyleSheet,t=this.generateCacheBustUrl(l.href),i=l.media.length?[].join.call(l.media,", "):"",r='@import url("'+t+'") '+i+";",l.__LiveReload_newHref=t,c=this.document.createElement("link"),c.rel="stylesheet",c.href=t,c.__LiveReload_pendingRemoval=!0,n.parentNode&&n.parentNode.insertBefore(c,n),this.Timer.start(this.importCacheWaitPeriod,function(){return c.parentNode&&c.parentNode.removeChild(c),l.__LiveReload_newHref===t?(s.insertRule(r,o),s.deleteRule(o+1),l=s.cssRules[o],l.__LiveReload_newHref=t,a.Timer.start(a.importCacheWaitPeriod,function(){return l.__LiveReload_newHref===t?(s.insertRule(r,o),s.deleteRule(o+1)):void 0})):void 0})},t.prototype.generateUniqueString=function(){return"livereload="+Date.now()},t.prototype.generateCacheBustUrl=function(e,t){var o,n,i,r;return null==t&&(t=this.generateUniqueString()),r=l(e),e=r.url,o=r.hash,n=r.params,this.options.overrideURL&&e.indexOf(this.options.serverURL)<0&&(e=this.options.serverURL+this.options.overrideURL+"?url="+encodeURIComponent(e)),i=n.replace(/(\?|&)livereload=(\d+)/,function(e,o){return""+o+t}),i===n&&(i=0===n.length?"?"+t:""+n+"&"+t),e+i+o},t}()}.call(this);var f,_,w,R,v;f=n.Connector,v=i.Timer,w=r.Options,R=s.Reloader,l.LiveReload=_=function(){function e(e){var t=this;return this.window=e,this.listeners={},this.plugins=[],this.pluginIdentifiers={},this.console=this.window.location.href.match(/LR-verbose/)&&this.window.console&&this.window.console.log&&this.window.console.error?this.window.console:{log:function(){},error:function(){}},(this.WebSocket=this.window.WebSocket||this.window.MozWebSocket)?(this.options=w.extract(this.window.document))?(this.reloader=new R(this.window,this.console,v),void(this.connector=new f(this.options,this.WebSocket,v,{connecting:function(){},socketConnected:function(){},connected:function(e){var o;return"function"==typeof(o=t.listeners).connect&&o.connect(),t.log("LiveReload is connected to "+t.options.host+":"+t.options.port+" (protocol v"+e+")."),t.analyze()},error:function(e){return e instanceof d?console.log(""+e.message+"."):console.log("LiveReload internal error: "+e.message)},disconnected:function(e,o){var n;switch("function"==typeof(n=t.listeners).disconnect&&n.disconnect(),e){case"cannot-connect":return t.log("LiveReload cannot connect to "+t.options.host+":"+t.options.port+", will retry in "+o+" sec.");case"broken":return t.log("LiveReload disconnected from "+t.options.host+":"+t.options.port+", reconnecting in "+o+" sec.");case"handshake-timeout":return t.log("LiveReload cannot connect to "+t.options.host+":"+t.options.port+" (handshake timeout), will retry in "+o+" sec.");case"handshake-failed":return t.log("LiveReload cannot connect to "+t.options.host+":"+t.options.port+" (handshake failed), will retry in "+o+" sec.");case"manual":break;case"error":break;default:return t.log("LiveReload disconnected from "+t.options.host+":"+t.options.port+" ("+e+"), reconnecting in "+o+" sec.")}},message:function(e){switch(e.command){case"reload":return t.performReload(e);case"alert":return t.performAlert(e)}}}))):void console.error("LiveReload disabled because it could not find its own <SCRIPT> tag"):void console.error("LiveReload disabled because the browser does not seem to support web sockets")}return e.prototype.on=function(e,t){return this.listeners[e]=t},e.prototype.log=function(e){return this.console.log(""+e)},e.prototype.performReload=function(e){var t,o;return this.log("LiveReload received reload request for "+e.path+"."),this.reloader.reload(e.path,{liveCSS:null!=(t=e.liveCSS)?t:!0,liveImg:null!=(o=e.liveImg)?o:!0,originalPath:e.originalPath||"",overrideURL:e.overrideURL||"",serverURL:"http://"+this.options.host+":"+this.options.port})},e.prototype.performAlert=function(e){return alert(e.message)},e.prototype.shutDown=function(){var e;return this.connector.disconnect(),this.log("LiveReload disconnected."),"function"==typeof(e=this.listeners).shutdown?e.shutdown():void 0},e.prototype.hasPlugin=function(e){return!!this.pluginIdentifiers[e]},e.prototype.addPlugin=function(e){var t,o=this;this.hasPlugin(e.identifier)||(this.pluginIdentifiers[e.identifier]=!0,t=new e(this.window,{_livereload:this,_reloader:this.reloader,_connector:this.connector,console:this.console,Timer:v,generateCacheBustUrl:function(e){return o.reloader.generateCacheBustUrl(e)}}),this.plugins.push(t),this.reloader.addPlugin(t))},e.prototype.analyze=function(){var e,t,o,n,i,r;if(this.connector.protocol>=7){for(o={},r=this.plugins,n=0,i=r.length;i>n;n++)e=r[n],o[e.constructor.identifier]=t=("function"==typeof e.analyze?e.analyze():void 0)||{},t.version=e.constructor.version;this.connector.sendCommand({command:"info",plugins:o,url:this.window.location.href})}},e}();var S;c=S=function(){function e(e,t){this.window=e,this.host=t}return e.identifier="less",e.version="1.0",e.prototype.reload=function(e,t){if(this.window.less&&this.window.less.refresh){if(e.match(/\.less$/i))return this.reloadLess(e);if(t.originalPath.match(/\.less$/i))return this.reloadLess(t.originalPath)}return!1},e.prototype.reloadLess=function(e){var t,o,n,i;if(o=function(){var e,o,n,i;for(n=document.getElementsByTagName("link"),i=[],e=0,o=n.length;o>e;e++)t=n[e],(t.href&&"stylesheet/less"===t.rel||t.rel.match(/stylesheet/)&&t.type.match(/^text\/(x-)?less$/))&&i.push(t);return i}(),0===o.length)return!1;for(n=0,i=o.length;i>n;n++)t=o[n],t.href=this.host.generateCacheBustUrl(t.href);return this.host.console.log("LiveReload is asking LESS to recompile all stylesheets"),this.window.less.refresh(!0),!0},e.prototype.analyze=function(){return{disable:!(!this.window.less||!this.window.less.refresh)}},e}();var e,_,L;e=t,_=window.LiveReload=new l.LiveReload(window);for(L in window)L.match(/^LiveReloadPlugin/)&&_.addPlugin(window[L]);_.addPlugin(c),_.on("shutdown",function(){return delete window.LiveReload}),_.on("connect",function(){return e.fire(document,"LiveReloadConnect")}),_.on("disconnect",function(){return e.fire(document,"LiveReloadDisconnect")}),e.bind(document,"LiveReloadShutDown",function(){return _.shutDown()})}();