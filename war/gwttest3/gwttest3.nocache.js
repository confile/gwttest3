function gwttest3(){var bb='',$=' top: -1000px;',yb='" for "gwt:onLoadErrorFn"',wb='" for "gwt:onPropertyErrorFn"',hb='");',zb='#',fc='.cache.js',Bb='/',Hb='//',Yb='1026DE8C1FD7963CE0B201DB40914099',dc='70CF941740D31309D167B5538E3FF956',ec=':',Zb=':1',$b=':2',_b=':3',ac=':4',bc=':5',cc=':6',qb='::',mc=':moduleBase',ab='<!doctype html>',cb='<html><head><\/head><body><\/body><\/html>',tb='=',Ab='?',vb='Bad handler "',_='CSS1Compat',fb='Chrome',eb='DOMContentLoaded',V='DUMMY',lc='Ignoring non-whitelisted Dev Mode URL: ',kc='__gwtDevModeHook:gwttest3',Jb='android',Lb='android_tablet',Gb='base',Eb='baseUrl',Q='begin',Rb='blackberry',W='body',P='bootstrap',Db='clear.cache.gif',sb='content',Sb='desktop',hc='end',gb='eval("',jc='file:',R='gwt.codesvr.gwttest3=',S='gwt.codesvr=',xb='gwt:onLoadErrorFn',ub='gwt:onPropertyErrorFn',rb='gwt:property',T='gwttest3',Xb='gwttest3.devmode.js',Fb='gwttest3.nocache.js',pb='gwttest3::',mb='head',ic='http:',X='iframe',Cb='img',Mb='ipad',Nb='ipad_retina',Ob='iphone',Pb='ipod',jb='javascript',Y='javascript:""',gc='loadExternalRefs',nb='meta',Ib='mgwt.os',Kb='mobile',Tb='mobile.user.agent',Ub='mobilesafari',lb='moduleRequested',kb='moduleStartup',ob='name',Vb='not_mobile',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',Qb='retina',ib='script',Wb='selectingPermutation',U='startup',db='undefined';var o=window;var p=document;r(P,Q);function q(){var a=o.location.search;return a.indexOf(R)!=-1||a.indexOf(S)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:T,sessionId:o.__gwtStatsSessionId,subSystem:U,evtGroup:a,millis:(new Date).getTime(),type:b})}}
gwttest3.__sendStats=r;gwttest3.__moduleName=T;gwttest3.__errFn=null;gwttest3.__moduleBase=V;gwttest3.__softPermutationId=0;gwttest3.__computePropValue=null;gwttest3.__getPropMap=null;gwttest3.__gwtInstallCode=function(){};gwttest3.__gwtStartLoadingFragment=function(){return null};var s=function(){return false};var t=function(){return null};__propertyErrorFunction=null;var u=o.__gwt_activeModules=o.__gwt_activeModules||{};u[T]={moduleName:T};var v;function w(){B();return v}
function A(){B();return v.getElementsByTagName(W)[0]}
function B(){if(v){return}var a=p.createElement(X);a.src=Y;a.id=T;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);v=a.contentDocument;if(!v){v=a.contentWindow.document}v.open();var b=document.compatMode==_?ab:bb;v.write(b+cb);v.close()}
function C(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){if(b()){d()}},50)}
function m(c){function d(a,b){a.removeChild(b)}
var e=A();var f=w();var g;if(navigator.userAgent.indexOf(fb)>-1&&window.JSON){var h=f.createDocumentFragment();h.appendChild(f.createTextNode(gb));for(var i=0;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(f.createTextNode(j.substring(1,j.length-1)))}h.appendChild(f.createTextNode(hb));g=f.createElement(ib);g.language=jb;g.appendChild(h);e.appendChild(g);d(e,g)}else{for(var i=0;i<c.length;i++){g=f.createElement(ib);g.language=jb;g.text=c[i];e.appendChild(g);d(e,g)}}}
gwttest3.onScriptDownloaded=function(a){l(function(){m(a)})};r(kb,lb);var n=p.createElement(ib);n.src=k;p.getElementsByTagName(mb)[0].appendChild(n)}
gwttest3.__startLoadingFragment=function(a){return G(a)};gwttest3.__installRunAsyncCode=function(a){var b=A();var c=w().createElement(ib);c.language=jb;c.text=a;b.appendChild(c);b.removeChild(c)};function D(){var c={};var d;var e;var f=p.getElementsByTagName(nb);for(var g=0,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(ob),k;if(j){j=j.replace(pb,bb);if(j.indexOf(qb)>=0){continue}if(j==rb){k=i.getAttribute(sb);if(k){var l,m=k.indexOf(tb);if(m>=0){j=k.substring(0,m);l=k.substring(m+1)}else{j=k;l=bb}c[j]=l}}else if(j==ub){k=i.getAttribute(sb);if(k){try{d=eval(k)}catch(a){alert(vb+k+wb)}}}else if(j==xb){k=i.getAttribute(sb);if(k){try{e=eval(k)}catch(a){alert(vb+k+yb)}}}}}t=function(a){var b=c[a];return b==null?null:b};__propertyErrorFunction=d;gwttest3.__errFn=e}
function F(){function e(a){var b=a.lastIndexOf(zb);if(b==-1){b=a.length}var c=a.indexOf(Ab);if(c==-1){c=a.length}var d=a.lastIndexOf(Bb,Math.min(c,b));return d>=0?a.substring(0,d+1):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Cb);b.src=a+Db;a=e(b.src)}return a}
function g(){var a=t(Eb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(ib);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(Fb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Gb);if(a.length>0){return a[a.length-1].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Hb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function G(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return gwttest3.__moduleBase+a}
function H(){var f=[];var g;function h(a,b){var c=f;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(__propertyErrorFunc){__propertyErrorFunc(a,d,b)}throw null}
j[Ib]=function(){{var b=function(){var a=window.navigator.userAgent.toLowerCase();if(a.indexOf(Jb)!=-1){if(a.indexOf(Kb)!=-1){return Jb}else{return Lb}}if(a.indexOf(Mb)!=-1){if(window.devicePixelRatio>=2){return Nb}return Mb}if(a.indexOf(Ob)!=-1||a.indexOf(Pb)!=-1){if(window.devicePixelRatio>=2){return Qb}return Ob}if(a.indexOf(Rb)!=-1){return Rb}return Sb}();return b}};i[Ib]={android:0,android_tablet:1,blackberry:2,desktop:3,ipad:4,ipad_retina:5,iphone:6,retina:7};j[Tb]=function(){return /(android|iphone|ipod|ipad)/i.test(window.navigator.userAgent)?Ub:Vb};i[Tb]={mobilesafari:0,not_mobile:1};s=function(a,b){return b in i[a]};gwttest3.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};gwttest3.__computePropValue=k;o.__gwt_activeModules[T].bindings=gwttest3.__getPropMap;r(P,Wb);if(q()){return G(Xb)}var l;try{h([Jb,Vb],Yb);h([Sb,Ub],Yb);h([Sb,Vb],Yb);h([Ob,Ub],Yb);h([Ob,Vb],Yb);h([Qb,Ub],Yb);h([Qb,Vb],Yb);h([Jb,Vb],Yb+Zb);h([Sb,Ub],Yb+Zb);h([Sb,Vb],Yb+Zb);h([Ob,Ub],Yb+Zb);h([Ob,Vb],Yb+Zb);h([Qb,Ub],Yb+Zb);h([Qb,Vb],Yb+Zb);h([Jb,Vb],Yb+$b);h([Sb,Ub],Yb+$b);h([Sb,Vb],Yb+$b);h([Ob,Ub],Yb+$b);h([Ob,Vb],Yb+$b);h([Qb,Ub],Yb+$b);h([Qb,Vb],Yb+$b);h([Jb,Vb],Yb+_b);h([Sb,Ub],Yb+_b);h([Sb,Vb],Yb+_b);h([Ob,Ub],Yb+_b);h([Ob,Vb],Yb+_b);h([Qb,Ub],Yb+_b);h([Qb,Vb],Yb+_b);h([Jb,Vb],Yb+ac);h([Sb,Ub],Yb+ac);h([Sb,Vb],Yb+ac);h([Ob,Ub],Yb+ac);h([Ob,Vb],Yb+ac);h([Qb,Ub],Yb+ac);h([Qb,Vb],Yb+ac);h([Jb,Vb],Yb+bc);h([Sb,Ub],Yb+bc);h([Sb,Vb],Yb+bc);h([Ob,Ub],Yb+bc);h([Ob,Vb],Yb+bc);h([Qb,Ub],Yb+bc);h([Qb,Vb],Yb+bc);h([Jb,Vb],Yb+cc);h([Sb,Ub],Yb+cc);h([Sb,Vb],Yb+cc);h([Ob,Ub],Yb+cc);h([Ob,Vb],Yb+cc);h([Qb,Ub],Yb+cc);h([Qb,Vb],Yb+cc);h([Jb,Ub],dc);l=f[k(Ib)][k(Tb)];var m=l.indexOf(ec);if(m!=-1){g=parseInt(l.substring(m+1),10);l=l.substring(0,m)}}catch(a){}gwttest3.__softPermutationId=g;return G(l+fc)}
function I(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(gc,Q);r(gc,hc)}
D();gwttest3.__moduleBase=F();u[T].moduleBase=gwttest3.__moduleBase;var J=H();if(o){var K=!!(o.location.protocol==ic||o.location.protocol==jc);o.__gwt_activeModules[T].canRedirect=K;if(K){var L=kc;var M=o.sessionStorage[L];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(M)){if(M&&(window.console&&console.log)){console.log(lc+M)}M=bb}if(M&&!o[L]){o[L]=true;o[L+mc]=F();var N=p.createElement(ib);N.src=M;var O=p.getElementsByTagName(mb)[0];O.insertBefore(N,O.firstElementChild||O.children[0]);return false}}}I();r(P,hc);C(J);return true}
gwttest3.succeeded=gwttest3();