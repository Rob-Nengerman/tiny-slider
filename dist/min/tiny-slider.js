var tns=function(){var t=window,Hi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Ri=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Wi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function zi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function qi(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function ji(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Fi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Qi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Vi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Xi(t){return("insertRule"in t?t.cssRules:t.rules).length}function Yi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Ki=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Ui=i?function(t,e){Ki(t,e)||t.classList.add(e)}:function(t,e){Ki(t,e)||(t.className+=" "+e)},Gi=i?function(t,e){Ki(t,e)&&t.classList.remove(e)}:function(t,e){Ki(t,e)&&(t.className=t.className.replace(e,""))};function Ji(t,e){return t.hasAttribute(e)}function _i(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function Zi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function $i(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function ta(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function ea(t,e){"none"!==t.style.display&&(t.style.display="none")}function na(t,e){"none"===t.style.display&&(t.style.display="")}function ia(t){return"none"!==window.getComputedStyle(t).display}function aa(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function ra(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function oa(t,e){for(var n in e)t.addEventListener(n,e[n],!1)}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var u=!!a&&{passive:!0};function ua(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&u;t.removeEventListener(n,e[n],i)}}function sa(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var la=function(h){h=Wi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:"auto",freezable:!0,onInit:!1,useLocalStorage:!0},h||{});var S=document,m=window,u=13,s=32,l=33,c=34,f=35,d=36,v=37,p=38,y=39,g=40,e={},n=h.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=m.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var a,r,o,x,b,w,C,M=e.tC?zi(e.tC):qi(e,"tC",function(){var t=document,e=ji(),n=Fi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],s=0;s<3;s++)if(r=u[s],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Qi(e,n):i.remove(),a}(),n),A=e.tPL?zi(e.tPL):qi(e,"tPL",function(){var t,e=document,n=ji(),i=Fi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Qi(n,i):a.remove(),t}(),n),D=e.tMQ?zi(e.tMQ):qi(e,"tMQ",(r=document,o=ji(),x=Fi(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?Qi(o,x):b.remove(),"absolute"===a),n),T=e.tTf?zi(e.tTf):qi(e,"tTf",aa("transform"),n),E=e.t3D?zi(e.t3D):qi(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=ji(),a=Fi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Qi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),B=e.tTDu?zi(e.tTDu):qi(e,"tTDu",aa("transitionDuration"),n),k=e.tTDe?zi(e.tTDe):qi(e,"tTDe",aa("transitionDelay"),n),N=e.tADu?zi(e.tADu):qi(e,"tADu",aa("animationDuration"),n),L=e.tADe?zi(e.tADe):qi(e,"tADe",aa("animationDelay"),n),O=e.tTE?zi(e.tTE):qi(e,"tTE",ra(B,"Transition"),n),I=e.tAE?zi(e.tAE):qi(e,"tAE",ra(N,"Animation"),n),P=m.console&&"function"==typeof m.console.warn,H=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],R={};if(H.forEach(function(t){if("string"==typeof h[t]){var e=h[t],n=S.querySelector(e);if(R[t]=e,!n||!n.nodeName)return void(P&&console.warn("Can't find",h[t]));h[t]=n}}),!(h.container.children.length<1)){var W=h.responsive,z=h.nested,q="carousel"===h.mode;if(W){0 in W&&(h=Wi(h,W[0]),delete W[0]);var j={};for(var F in W){var Q=W[F];Q="number"==typeof Q?{items:Q}:Q,j[F]=Q}W=j,j=null}if(q||function t(e){for(var n in e)q||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(h),!q){h.axis="horizontal",h.slideBy="page",h.edgePadding=!1;var V=h.animateIn,X=h.animateOut,Y=h.animateDelay,K=h.animateNormal}var U,G="horizontal"===h.axis,J=S.createElement("div"),_=S.createElement("div"),Z=h.container,$=Z.parentNode,tt=Z.outerHTML,et=Z.children,nt=et.length,it=mn(),at=!1;W&&Hn();var rt,ot,ut,st,lt,ct,ft,dt=h.autoWidth,vt=bn("fixedWidth"),pt=bn("edgePadding"),ht=bn("gutter"),mt=gn(),yt=bn("center"),gt=dt?1:Math.floor(bn("items")),xt=bn("slideBy"),bt=h.viewportMax||h.fixedWidthViewportWidth,wt=bn("arrowKeys"),Ct=bn("speed"),Mt=h.rewind,At=!Mt&&h.loop,Tt=bn("autoHeight"),Et=bn("controls"),Bt=bn("controlsText"),kt=bn("nav"),Nt=bn("touch"),Lt=bn("mouseDrag"),St=bn("autoplay"),Dt=bn("autoplayTimeout"),Ot=bn("autoplayText"),It=bn("autoplayHoverPause"),Pt=bn("autoplayResetOnVisibility"),Ht=(ft=document.createElement("style"),ct&&ft.setAttribute("media",ct),document.querySelector("head").appendChild(ft),ft.sheet?ft.sheet:ft.styleSheet),Rt=h.lazyload,Wt=(h.lazyloadSelector,[]),zt=At?(st=function(){{if(dt||vt&&!bt)return nt-1;var t=vt?"fixedWidth":"items",e=[];if((vt||h[t]<nt)&&e.push(h[t]),W)for(var n in W){var i=W[n][t];i&&(vt||i<nt)&&e.push(i)}return e.length||e.push(0),Math.ceil(vt?bt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),lt=q?Math.ceil((5*st-nt)/2):4*st-nt,lt=Math.max(st,lt),xn("edgePadding")?lt+1:lt):0,qt=q?nt+2*zt:nt+zt,jt=!(!vt&&!dt||At),Ft=vt?ui():null,Qt=!q||!At,Vt=G?"left":"top",Xt="",Yt="",Kt=vt?function(){return Math.ceil(-Ft/(vt+ht))}:dt?function(){for(var t=qt;t--;)if(rt[t]>-Ft)return t}:function(){return yt&&q&&!At?nt-1:At||q?Math.max(0,qt-Math.ceil(gt)):qt-1},Ut=vn(bn("startIndex")),Gt=Ut,Jt=(dn(),0),_t=dt?null:Kt(),Zt=h.preventActionWhenRunning,$t=h.swipeAngle,te=!$t||"?",ee=!1,ne=h.onInit,ie=new sa,ae=" tns-slider tns-"+h.mode,re=Z.id||(ut=window.tnsId,window.tnsId=ut?ut+1:1,"tns"+window.tnsId),oe=bn("disable"),ue=!1,se=h.freezable,le=!(!se||dt)&&Pn(),ce=!1,fe={click:mi,keydown:function(t){switch((t=Ai(t)).keyCode){case v:case p:case l:De.disabled||mi(t,-1);break;case y:case g:case c:Oe.disabled||mi(t,1);break;case d:hi("first",t);break;case f:hi("last",t)}}},de={click:function(t){if(ee){if(Zt)return;pi()}var e,n=(t=Ai(t)).target||t.srcElement;for(;n!==Re&&!Ji(n,"data-nav");)n=n.parentNode;Ji(n,"data-nav")&&(hi(e=je=[].indexOf.call(He,n),t),Fe===e&&(Ue&&wi(),je=-1))},keydown:function(t){var e=S.activeElement;if(!Ji(e,"data-nav"))return;var n=(t=Ai(t)).keyCode,i=[].indexOf.call(He,e),a=ze.length,r=ze.indexOf(i);h.navContainer&&(a=nt,r=i);function o(t){return h.navContainer?t:ze[t]}switch(n){case v:case l:0<r&&Mi(He[o(r-1)]);break;case p:case d:0<r&&Mi(He[o(0)]);break;case y:case c:r<a-1&&Mi(He[o(r+1)]);break;case g:case f:r<a-1&&Mi(He[o(a-1)]);break;case u:case s:hi(je=i,t)}}},ve={mouseover:function(){Ue&&(gi(),Ge=!0)},mouseout:function(){Ge&&(yi(),Ge=!1)}},pe={visibilitychange:function(){S.hidden?Ue&&(gi(),_e=!0):_e&&(yi(),_e=!1)}},he={keydown:function(t){switch((t=Ai(t)).keyCode){case v:mi(t,-1);break;case y:mi(t,1)}}},me={touchstart:Ni,touchmove:Li,touchend:Si,touchcancel:Si},ye={mousedown:Ni,mousemove:Li,mouseup:Si,mouseleave:Si},ge=xn("controls"),xe=xn("nav"),be=!!dt||h.navAsThumbnails,we=xn("autoplay"),Ce=xn("touch"),Me=xn("mouseDrag"),Ae="tns-slide-active",Te="tns-complete",Ee={load:function(t){Qn(Ti(t))},error:function(t){Vn(Ti(t))}},Be="force"===h.preventScrollOnTouch;if(ge)var ke,Ne,Le=h.controlsContainer,Se=h.controlsContainer?h.controlsContainer.outerHTML:"",De=h.prevButton,Oe=h.nextButton,Ie=h.prevButton?h.prevButton.outerHTML:"",Pe=h.nextButton?h.nextButton.outerHTML:"";if(xe)var He,Re=h.navContainer,We=h.navContainer?h.navContainer.outerHTML:"",ze=Oi(),qe=[],je=-1,Fe=hn(),Qe=Fe,Ve="tns-nav-active",Xe="Carousel Page ",Ye=" (Current Slide)";if(we)var Ke,Ue,Ge,Je,_e,Ze="forward"===h.autoplayDirection?1:-1,$e=h.autoplayButton,tn=h.autoplayButton?h.autoplayButton.outerHTML:"",en=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ce||Me)var nn,an,rn={},on={},un=!1,sn=G?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};dt||fn(oe||le),T&&(Vt=T,Xt="translate",E?(Xt+=G?"3d(":"3d(0px, ",Yt=G?", 0px, 0px)":", 0px)"):(Xt+=G?"X(":"Y(",Yt=")")),function(){W&&Hn();!function(){xn("gutter");J.className="tns-outer",_.className="tns-inner",J.id=re+"-ow",_.id=re+"-iw",Tt&&(_.className+=" tns-ah");""===Z.id&&(Z.id=re);ae+=A||dt?" tns-subpixel":" tns-no-subpixel",ae+=M?" tns-calc":" tns-no-calc",dt&&(ae+=" tns-autowidth");if(ae+=" tns-"+h.axis,Z.className+=ae,q){var t=S.createElement("div");t.className="tns-ovh",J.appendChild(t),t.appendChild(_)}else J.appendChild(_);$.insertBefore(J,Z),_.appendChild(Z)}();for(var t=0;t<nt;t++){var e=et[t];e.id||(e.id=re+"-item"+t),Ui(e,"tns-item"),!q&&K&&Ui(e,K),Zi(e,{"aria-hidden":"true",tabindex:"-1"})}if(zt){for(var n=S.createDocumentFragment(),i=S.createDocumentFragment(),a=zt;a--;){var r=a%nt,o=et[r].cloneNode(!0);if($i(o,"id"),i.insertBefore(o,i.firstChild),q){var u=et[nt-1-r].cloneNode(!0);$i(u,"id"),n.appendChild(u)}}Z.insertBefore(n,Z.firstChild),Z.appendChild(i),et=Z.children}(function(){for(var t=Ut,e=Ut+Math.min(nt,gt);t<e;t++){var n=et[t];Zi(n,{"aria-hidden":"false"}),$i(n,["tabindex"]),Ui(n,Ae),q||(n.style.left=100*(t-Ut)/gt+"%",Ui(n,V),Gi(n,K))}G&&(A||dt?(Vi(Ht,"#"+re+" > .tns-item","font-size:"+m.getComputedStyle(et[0]).fontSize+";",Xi(Ht)),Vi(Ht,"#"+re,"font-size:0;",Xi(Ht))):q&&Yi(et,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+qt+")":100*n/qt+"%")}));if(D){var i=wn(h.edgePadding,h.gutter,h.fixedWidth,h.speed,h.autoHeight);Vi(Ht,"#"+re+"-iw",i,Xi(Ht)),q&&(i=G&&!dt?"width:"+Cn(h.fixedWidth,h.gutter,h.items)+";":"",B&&(i+=En(Ct)),Vi(Ht,"#"+re,i,Xi(Ht))),i=G&&!dt?Mn(h.fixedWidth,h.gutter,h.items):"",h.gutter&&(i+=An(h.gutter)),q||(B&&(i+=En(Ct)),N&&(i+=Bn(Ct))),i&&Vi(Ht,"#"+re+" > .tns-item",i,Xi(Ht))}else{_.style.cssText=wn(pt,ht,vt,Tt),q&&G&&!dt&&(Z.style.width=Cn(vt,ht,gt));var i=G&&!dt?Mn(vt,ht,gt):"";ht&&(i+=An(ht)),i&&Vi(Ht,"#"+re+" > .tns-item",i,Xi(Ht))}if(W&&D)for(var a in W){a=parseInt(a);var r=W[a],i="",o="",u="",s="",l=dt?null:bn("items",a),c=bn("fixedWidth",a),f=bn("speed",a),d=bn("edgePadding",a),v=bn("autoHeight",a),p=bn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+re+"-iw{"+wn(d,p,c,f,v)+"}"),q&&G&&!dt&&("fixedWidth"in r||"items"in r||vt&&"gutter"in r)&&(u="width:"+Cn(c,p,l)+";"),B&&"speed"in r&&(u+=En(f)),u&&(u="#"+re+"{"+u+"}"),("fixedWidth"in r||vt&&"gutter"in r||!q&&"items"in r)&&(s+=Mn(c,p,l)),"gutter"in r&&(s+=An(p)),!q&&"speed"in r&&(B&&(s+=En(f)),N&&(s+=Bn(f))),s&&(s="#"+re+" > .tns-item{"+s+"}"),(i=o+u+s)&&Ht.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Ht.cssRules.length)}})(),kn()}();var ln=At?q?function(){var t=Jt,e=_t;t+=xt,e-=xt,pt?(t+=1,e-=1):vt&&(mt+ht)%(vt+ht)&&(e-=1),zt&&(e<Ut?Ut-=nt:Ut<t&&(Ut+=nt))}:function(){if(_t<Ut)for(;Jt+nt<=Ut;)Ut-=nt;else if(Ut<Jt)for(;Ut<=_t-nt;)Ut+=nt}:function(){Ut=Math.max(Jt,Math.min(_t,Ut))},cn=q?function(){var e,n,i,a,t,r,o,u,s,l,c;ri(Z,""),B||!Ct?(ci(),Ct&&ia(Z)||pi()):(e=Z,n=Vt,i=Xt,a=Yt,t=si(),r=Ct,o=pi,u=Math.min(r,10),s=0<=t.indexOf("%")?"%":"px",t=t.replace(s,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(s,"")),c=(t-l)/r*u,setTimeout(function t(){r-=u,l+=c,e.style[n]=i+l+s+a,0<r?setTimeout(t,u):o()},u)),G||Di()}:function(){Wt=[];var t={};t[O]=t[I]=pi,ua(et[Gt],t),oa(et[Ut],t),fi(Gt,V,X,!0),fi(Ut,K,V),O&&I&&Ct&&ia(Z)||pi()};return{version:"2.8.8",getInfo:Pi,events:ie,goTo:hi,play:function(){St&&!Ue&&(bi(),Je=!1)},pause:function(){Ue&&(wi(),Je=!0)},isOn:at,updateSliderHeight:Zn,refresh:kn,destroy:function(){if(Ht.disabled=!0,Ht.ownerNode&&Ht.ownerNode.remove(),ua(m,{resize:On}),wt&&ua(S,he),Le&&ua(Le,fe),Re&&ua(Re,de),ua(Z,ve),ua(Z,pe),$e&&ua($e,{click:Ci}),St&&clearInterval(Ke),q&&O){var t={};t[O]=pi,ua(Z,t)}Nt&&ua(Z,me),Lt&&ua(Z,ye);var r=[tt,Se,Ie,Pe,We,tn];for(var e in H.forEach(function(t,e){var n="container"===t?J:h[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],h[t]=i?i.nextElementSibling:a.firstElementChild}}),H=V=X=Y=K=G=J=_=Z=$=tt=et=nt=U=it=dt=vt=pt=ht=mt=gt=xt=bt=wt=Ct=Mt=At=Tt=Ht=Rt=rt=Wt=zt=qt=jt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=$t=te=ee=ne=ie=ae=re=oe=ue=se=le=ce=fe=de=ve=pe=he=me=ye=ge=xe=be=we=Ce=Me=Ae=Te=Ee=ot=Et=Bt=Le=Se=De=Oe=ke=Ne=kt=Re=We=He=ze=qe=je=Fe=Qe=Ve=Xe=Ye=St=Dt=Ze=Ot=It=$e=tn=Pt=en=Ke=Ue=Ge=Je=_e=rn=on=nn=un=an=sn=Nt=Lt=null,this)"rebuild"!==e&&(this[e]=null);at=!1},rebuild:function(){return la(Wi(h,R))}}}function fn(t){t&&(Et=kt=Nt=Lt=wt=St=It=Pt=!1)}function dn(){for(var t=q?Ut-zt:Ut;t<0;)t+=nt;return t%nt+1}function vn(t){return t=t?Math.max(0,Math.min(At?nt-1:nt-gt,t)):0,q?t+zt:t}function pn(t){for(null==t&&(t=Ut),q&&(t-=zt);t<0;)t+=nt;return Math.floor(t%nt)}function hn(){var n,i=pn();return be?i:(ze.forEach(function(t,e){t<=i&&(n=t)}),!At&&q&&Ut===_t&&(n=ze[ze.length-1]),n)}function mn(){return m.innerWidth||S.documentElement.clientWidth||S.body.clientWidth}function yn(t){return"top"===t?"afterbegin":"beforeend"}function gn(){var t=pt?2*pt-ht:0;return function t(e){var n,i,a=S.createElement("div");return e.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||t(e.parentNode)}($)-t}function xn(t){if(h[t])return!0;if(W)for(var e in W)if(W[e][t])return!0;return!1}function bn(t,e){if(null==e&&(e=it),"items"===t&&vt)return Math.floor((mt+ht)/(vt+ht))||1;var n=h[t];if(W)for(var i in W)e>=parseInt(i)&&t in W[i]&&(n=W[i][t]);return"slideBy"===t&&"page"===n&&(n=bn("items")),q||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function wn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=G?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(G?u+" 0 0":"0 "+u+" 0")+";"}return a&&B&&i&&(r+=En(i)),r}function Cn(t,e,n){return t?(t+e)*qt+"px":M?M+"("+100*qt+"% / "+n+")":100*qt/n+"%"}function Mn(t,e,n){var i;if(t)i=t+e+"px";else{q||(n=Math.floor(n));var a=q?qt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==z?i+";":i+" !important;"}function An(t){var e="";!1!==t&&(e=(G?"padding-":"margin-")+(G?"right":"bottom")+": "+t+"px;");return e}function Tn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function En(t){return Tn(B,18)+"transition-duration:"+t/1e3+"s;"}function Bn(t){return Tn(N,17)+"animation-duration:"+t/1e3+"s;"}function kn(){if(xn("autoHeight")||dt||!G){var t=Z.querySelectorAll("img");Yi(t,function(t){var e=t.src;e.indexOf("data:image")<0?(oa(t,Ee),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e,Ui(t,"loading"),Yn(t)):Rt||Qn(t)}),Hi(function(){Gn(ta(t),function(){ot=!0})}),!dt&&G&&(t=Kn(Ut,gt)),Rt?Nn():Hi(function(){Gn(ta(t),Nn)})}else q&&li(),Sn(),Dn()}function Nn(){if(dt){var e=At?Ut:nt-1;!function t(){et[e-1].getBoundingClientRect().right.toFixed(2)===et[e].getBoundingClientRect().left.toFixed(2)?Ln():setTimeout(function(){t()},16)}()}else Ln()}function Ln(){G&&!dt||($n(),dt?(Ft=ui(),se&&(le=Pn()),_t=Kt(),fn(oe||le)):Di()),q&&li(),Sn(),Dn()}function Sn(){if(J.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true"></div>'),J.querySelector(".tns-liveregion"),we){var t=St?"stop":"start";$e?Zi($e,{"data-action":t}):h.autoplayButtonOutput&&(J.insertAdjacentHTML(yn(h.autoplayPosition),'<button data-action="'+t+'" type="button">'+en[0]+t+en[1]+Ot[0]+"</button>"),$e=J.querySelector("[data-action]")),$e&&oa($e,{click:Ci}),St&&(bi(),It&&oa(Z,ve),Pt&&oa(Z,pe))}if(xe){if(Re)Zi(Re,{"aria-label":"Carousel Pagination","aria-controls":re}),Yi(He=Re.children,function(t,e){Zi(t,{"data-nav":e,tabindex:"-1","aria-label":Xe+(e+1)})});else{for(var e="",n=be?"":'style="display:none"',i=0;i<nt;i++)e+='<button data-nav="'+i+'" tabindex="-1" '+n+' type="button" aria-label="'+Xe+(i+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination" aria-controls="'+re+'">'+e+"</div>",J.insertAdjacentHTML(yn(h.navPosition),e),Re=J.querySelector(".tns-nav"),He=Re.children}if(Ii(),B){var a=B.substring(0,B.length-18).toLowerCase(),r="transition: all "+Ct/1e3+"s";a&&(r="-"+a+"-"+r),Vi(Ht,"[aria-controls^="+re+"-item]",r,Xi(Ht))}Zi(He[Fe],{tabindex:"0","aria-label":Xe+(Fe+1)+Ye}),Ui(He[Fe],Ve),oa(Re,de)}ge&&(Le||De&&Oe||(J.insertAdjacentHTML(yn(h.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+re+'" type="button">'+Bt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+re+'" type="button">'+Bt[1]+"</button></div>"),Le=J.querySelector(".tns-controls")),De&&Oe||(De=Le.children[0],Oe=Le.children[1]),h.controlsContainer&&Zi(Le,{"aria-label":"Carousel Navigation",tabindex:"0"}),(h.controlsContainer||h.prevButton&&h.nextButton)&&Zi([De,Oe],{"aria-controls":re,tabindex:"-1"}),(h.controlsContainer||h.prevButton&&h.nextButton)&&(Zi(De,{"data-controls":"prev"}),Zi(Oe,{"data-controls":"next"})),ke=ei(De),Ne=ei(Oe),ai(),Le?oa(Le,fe):(oa(De,fe),oa(Oe,fe))),Rn()}function Dn(){if(q&&O){var t={};t[O]=pi,oa(Z,t)}Nt&&oa(Z,me),Lt&&oa(Z,ye),wt&&oa(S,he),"inner"===z?ie.on("outerResized",function(){In(),ie.emit("innerLoaded",Pi())}):(W||vt||dt||Tt||!G)&&oa(m,{resize:On}),Tt&&("outer"===z?ie.on("innerLoaded",Un):oe||Un()),Fn(),oe?qn():le&&zn(),ie.on("indexChanged",Jn),"inner"===z&&ie.emit("innerLoaded",Pi()),"function"==typeof ne&&ne(Pi()),at=!0}function On(t){Hi(function(){In(Ai(t))})}function In(t){if(at){"outer"===z&&ie.emit("outerResized",Pi(t)),it=mn();var e,n=U,i=!1;W&&(Hn(),(e=n!==U)&&ie.emit("newBreakpointStart",Pi(t)));var a,r,o,u,s=gt,l=oe,c=le,f=wt,d=Et,v=kt,p=Nt,h=Lt,m=St,y=It,g=Pt,x=Ut;if(e){var b=vt,w=Tt,C=Bt,M=yt,A=Ot;if(!D)var T=ht,E=pt}if(wt=bn("arrowKeys"),Et=bn("controls"),kt=bn("nav"),Nt=bn("touch"),yt=bn("center"),Lt=bn("mouseDrag"),St=bn("autoplay"),It=bn("autoplayHoverPause"),Pt=bn("autoplayResetOnVisibility"),e&&(oe=bn("disable"),vt=bn("fixedWidth"),Ct=bn("speed"),Tt=bn("autoHeight"),Bt=bn("controlsText"),Ot=bn("autoplayText"),Dt=bn("autoplayTimeout"),D||(pt=bn("edgePadding"),ht=bn("gutter"))),fn(oe),mt=gn(),G&&!dt||oe||($n(),G||(Di(),i=!0)),(vt||dt)&&(Ft=ui(),_t=Kt()),(e||vt)&&(gt=bn("items"),xt=bn("slideBy"),(r=gt!==s)&&(vt||dt||(_t=Kt()),ln())),e&&oe!==l&&(oe?qn():function(){if(!ue)return;if(Ht.disabled=!1,Z.className+=ae,li(),At)for(var t=zt;t--;)q&&na(et[t]),na(et[qt-t-1]);if(!q)for(var e=Ut,n=Ut+nt;e<n;e++){var i=et[e],a=e<Ut+gt?V:K;i.style.left=100*(e-Ut)/gt+"%",Ui(i,a)}Wn(),ue=!1}()),se&&(e||vt||dt)&&(le=Pn())!==c&&(le?(ci(si(vn(0))),zn()):(!function(){if(!ce)return;pt&&D&&(_.style.margin="");if(zt)for(var t="tns-transparent",e=zt;e--;)q&&Gi(et[e],t),Gi(et[qt-e-1],t);Wn(),ce=!1}(),i=!0)),fn(oe||le),St||(It=Pt=!1),wt!==f&&(wt?oa(S,he):ua(S,he)),Et!==d&&(Et?Le?na(Le):(De&&na(De),Oe&&na(Oe)):Le?ea(Le):(De&&ea(De),Oe&&ea(Oe))),kt!==v&&(kt?(na(Re),Ii()):ea(Re)),Nt!==p&&(Nt?oa(Z,me):ua(Z,me)),Lt!==h&&(Lt?oa(Z,ye):ua(Z,ye)),St!==m&&(St?($e&&na($e),Ue||Je||bi()):($e&&ea($e),Ue&&wi())),It!==y&&(It?oa(Z,ve):ua(Z,ve)),Pt!==g&&(Pt?oa(S,pe):ua(S,pe)),e){if(vt===b&&yt===M||(i=!0),Tt!==w&&(Tt||(_.style.height="")),Et&&Bt!==C&&(De.innerHTML=Bt[0],Oe.innerHTML=Bt[1]),$e&&Ot!==A){var B=St?1:0,k=$e.innerHTML,N=k.length-A[B].length;k.substring(N)===A[B]&&($e.innerHTML=k.substring(0,N)+Ot[B])}}else yt&&(vt||dt)&&(i=!0);if((a=Ut!==x)&&(ie.emit("indexChanged",Pi()),i=!0),r&&(ze=Oi(),Ii(),a||Jn(),q||function(){for(var t=Ut+Math.min(nt,gt),e=qt;e--;){var n=et[e];Ut<=e&&e<t?(Ui(n,"tns-moving"),n.style.left=100*(e-Ut)/gt+"%",Ui(n,V),Gi(n,K)):n.style.left&&(n.style.left="",Ui(n,K),Gi(n,V)),Gi(n,X)}setTimeout(function(){Yi(et,function(t){Gi(t,"tns-moving")})},300)}()),!oe&&!le){if(e&&!D&&(pt===E&&ht===T||(_.style.cssText=wn(pt,ht,vt,Ct,Tt)),G)){q&&(Z.style.width=Cn(vt,ht,gt));var L=Mn(vt,ht,gt)+An(ht);u=Xi(o=Ht)-1,"deleteRule"in o?o.deleteRule(u):o.removeRule(u),Vi(Ht,"#"+re+" > .tns-item",L,Xi(Ht))}Tt&&Un(),i&&(li(),Gt=Ut)}e&&ie.emit("newBreakpointEnd",Pi(t))}}function Pn(){return vt||dt?(vt?(vt+ht)*nt:At?rt[nt]:oi())<=mt+2*pt:nt<=gt}function Hn(){for(var t in U=0,W)(t=parseInt(t))<=it&&(U=t)}function Rn(){!St&&$e&&ea($e),!kt&&Re&&ea(Re),Et||(Le?ea(Le):(De&&ea(De),Oe&&ea(Oe)))}function Wn(){St&&$e&&na($e),kt&&Re&&na(Re),Et&&(Le?na(Le):(De&&na(De),Oe&&na(Oe)))}function zn(){if(!ce){if(pt&&(_.style.margin="0px"),zt)for(var t="tns-transparent",e=zt;e--;)q&&Ui(et[e],t),Ui(et[qt-e-1],t);Rn(),ce=!0}}function qn(){if(!ue){if(Ht.disabled=!0,Z.className=Z.className.replace(ae.substring(1),""),$i(Z,["style"]),At)for(var t=zt;t--;)q&&ea(et[t]),ea(et[qt-t-1]);if(G&&q||$i(_,["style"]),!q)for(var e=Ut,n=Ut+nt;e<n;e++){var i=et[e];$i(i,["style"]),Gi(i,V),Gi(i,K)}Rn(),ue=!0}}function jn(){var n,i,a,r=Ut;if(yt||pt?(dt||vt)&&(i=-(parseFloat(si().replace(/%|px/,""))+pt),a=i+mt+2*pt):dt&&(i=rt[Ut]),dt)yt||pt||(a=i+mt),rt.forEach(function(t,e){(yt||pt)&&t<=i&&(r=e),t<a&&(n=e)});else if(yt||pt)if(vt){var t=vt+ht;r=Math.floor(Math.max(i/t,0)),n=Math.ceil(a/t-1)}else yt&&(r-=(gt-1)/2),pt&&(r-=pt*gt/mt),n=r+gt,pt&&(n+=(2*pt-ht)*gt/mt),r=Math.floor(Math.max(r,0)),n=Math.floor(n);else n=r+gt-1;return[r,n]}function Fn(){Rt&&!oe&&Kn.apply(null,jn()).forEach(function(t){if(!Ki(t,Te)){var e={};e[O]=function(t){t.stopPropagation()},oa(t,e),oa(t,Ee);var n=_i(t,"data-srcset");n&&(t.srcset=n),t.src=_i(t,"data-src"),Ui(t,"loading"),Yn(t)}})}function Qn(t){Ui(t,"loaded"),Xn(t)}function Vn(t){Ui(t,"failed"),Xn(t)}function Xn(t){Ui(t,"tns-complete"),Gi(t,"loading"),ua(t,Ee)}function Yn(t){t.complete&&(0!==t.naturalWidth?Qn(t):Vn(t))}function Kn(t,e){var n=[];for(e=Math.min(e,qt-1);t<=e;)Yi(et[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function Un(){var t=Kn.apply(null,jn());Hi(function(){Gn(t,Zn)})}function Gn(n,t){return ot?t():(n.forEach(function(t,e){Ki(t,Te)&&n.splice(e,1)}),n.length?void Hi(function(){Gn(n,t)}):t())}function Jn(){Fn(),function(){for(var t=Ut+Math.min(nt,gt),e=qt;e--;){var n=et[e];Ut<=e&&e<t?Ji(n,"tabindex")&&(Zi(n,{"aria-hidden":"false"}),$i(n,["tabindex"]),Ui(n,Ae)):(Ji(n,"tabindex")||Zi(n,{"aria-hidden":"true",tabindex:"-1"}),Ki(n,Ae)&&Gi(n,Ae))}}(),ai(),function(){if(kt&&(Fe=0<=je?je:hn(),je=-1,Fe!==Qe)){var t=He[Qe],e=He[Fe];Zi(t,{tabindex:"-1","aria-label":Xe+(Qe+1)}),Zi(e,{tabindex:"0","aria-label":Xe+(Fe+1)+Ye}),Gi(t,Ve),Ui(e,Ve),Qe=Fe}}()}function _n(t,e){for(var n=[],i=t,a=Math.min(t+e,qt);i<a;i++)n.push(et[i].offsetHeight);return Math.max.apply(null,n)}function Zn(){var t=Tt?_n(Ut,gt):_n(zt,nt);_.style.height!==t&&(_.style.height=t+"px")}function $n(){rt=[0];for(var t,e=G?"left":"top",n=et[0].getBoundingClientRect()[e],i=1;i<qt;i++)t=et[i].getBoundingClientRect()[e],rt.push(t-n)}function ti(t){return t.nodeName.toLowerCase()}function ei(t){return"button"===ti(t)}function ni(t){return"true"===t.getAttribute("aria-disabled")}function ii(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function ai(){if(Et&&!Mt&&!At){var t=ke?De.disabled:ni(De),e=Ne?Oe.disabled:ni(Oe),n=Ut<=Jt,i=!Mt&&_t<=Ut;n&&!t&&ii(ke,De,!0),!n&&t&&ii(ke,De,!1),i&&!e&&ii(Ne,Oe,!0),!i&&e&&ii(Ne,Oe,!1)}}function ri(t,e){B&&(t.style[B]=e)}function oi(){return vt?(vt+ht)*qt:rt[qt-1]+et[qt-1].getBoundingClientRect().width}function ui(){var t=mt+ht-oi();return yt&&(t-=vt?(mt-vt)/2:(mt-(et[qt-1].clientWidth-ht))/2),0<t&&(t=0),t}function si(t){var e;(null==t&&(t=Ut),G&&!dt)?vt?(e=-(vt+ht)*t,yt&&(e+=(mt-vt)/2)):(yt&&(t-=(gt-1)/2),e=100*-t/(T?qt:gt)):(e=-rt[t],yt&&G&&(e+=(mt-(et[t].offsetWidth-ht))/2));return jt&&(e=Math.max(e,Ft)),e+=!G||dt||vt?"px":"%"}function li(t){ri(Z,"0s"),ci(t)}function ci(t){null==t&&(t=si()),Z.style[Vt]=Xt+t+Yt}function fi(t,e,n,i){var a=t+gt;At||(a=Math.min(a,qt));for(var r=t;r<a;r++){var o=et[r];i||(o.style.left=100*(r-Ut)/gt+"%"),Y&&k&&(o.style[k]=o.style[L]=Y*(r-t)/1e3+"s"),Gi(o,e),Ui(o,n),i&&Wt.push(o)}}function di(t,e){Qt&&ln(),(Ut!==Gt||e)&&(ie.emit("indexChanged",Pi()),ie.emit("transitionStart",Pi()),Tt&&Un(),Ue&&t&&0<=["click","keydown"].indexOf(t.type)&&wi(),ee=!0,cn())}function vi(t){return t.toLowerCase().replace(/-/g,"")}function pi(t){if(q||ee){if(ie.emit("transitionEnd",Pi(t)),!q&&0<Wt.length)for(var e=0;e<Wt.length;e++){var n=Wt[e];n.style.left="",L&&k&&(n.style[L]="",n.style[k]=""),Gi(n,X),Ui(n,K)}if(!t||!q&&t.target.parentNode===Z||t.target===Z&&vi(t.propertyName)===vi(Vt)){if(!Qt){var i=Ut;ln(),Ut!==i&&(ie.emit("indexChanged",Pi()),li())}"inner"===z&&ie.emit("innerLoaded",Pi()),ee=!1,Gt=Ut}}}function hi(t,e){if(!le)if("prev"===t)mi(e,-1);else if("next"===t)mi(e,1);else{if(ee){if(Zt)return;pi()}var n=pn(),i=0;if("first"===t?i=-n:"last"===t?i=q?nt-gt-n:nt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(nt-1,t))),i=t-n)),!q&&i&&Math.abs(i)<gt){var a=0<i?1:-1;i+=Jt<=Ut+i-nt?nt*a:2*nt*a*-1}Ut+=i,q&&At&&(Ut<Jt&&(Ut+=nt),_t<Ut&&(Ut-=nt)),pn(Ut)!==pn(Gt)&&di(e)}}function mi(t,e){if(ee){if(Zt)return;pi()}var n;if(!e){for(var i=(t=Ai(t)).target||t.srcElement;i!==Le&&[De,Oe].indexOf(i)<0;)i=i.parentNode;var a=[De,Oe].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Mt){if(Ut===Jt&&-1===e)return void hi("last",t);if(Ut===_t&&1===e)return void hi("first",t)}e&&(Ut+=xt*e,dt&&(Ut=Math.floor(Ut)),di(n||t&&"keydown"===t.type?t:null))}function yi(){Ke=setInterval(function(){mi(null,Ze)},Dt),Ue=!0}function gi(){clearInterval(Ke),Ue=!1}function xi(t,e){Zi($e,{"data-action":t}),$e.innerHTML=en[0]+t+en[1]+e}function bi(){yi(),$e&&xi("stop",Ot[1])}function wi(){gi(),$e&&xi("start",Ot[0])}function Ci(){Ue?(wi(),Je=!0):(bi(),Je=!1)}function Mi(t){t.focus()}function Ai(t){return Ei(t=t||m.event)?t.changedTouches[0]:t}function Ti(t){return t.target||m.event.srcElement}function Ei(t){return 0<=t.type.indexOf("touch")}function Bi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function ki(){return a=on.y-rn.y,r=on.x-rn.x,t=Math.atan2(a,r)*(180/Math.PI),e=$t,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===h.axis;var t,e,n,i,a,r}function Ni(t){if(ee){if(Zt)return;pi()}St&&Ue&&gi(),un=!0,an&&(Ri(an),an=null);var e=Ai(t);ie.emit(Ei(t)?"touchStart":"dragStart",Pi(t)),!Ei(t)&&0<=["img","a"].indexOf(ti(Ti(t)))&&Bi(t),on.x=rn.x=parseInt(e.clientX),on.y=rn.y=parseInt(e.clientY),q&&(nn=parseFloat(Z.style[Vt].replace(Xt,"").replace(Yt,"")),ri(Z,"0s"))}function Li(t){if(un){var e=Ai(t);on.x=parseInt(e.clientX),on.y=parseInt(e.clientY),q?an||(an=Hi(function(){!function t(e){if(!te)return void(un=!1);Ri(an);un&&(an=Hi(function(){t(e)}));"?"===te&&(te=ki());if(te){!Be&&Ei(e)&&(Be=!0);try{e.type&&ie.emit(Ei(e)?"touchMove":"dragMove",Pi(e))}catch(t){}var n=nn,i=sn(on,rn);if(!G||vt||dt)n+=i,n+="px";else{var a=T?i*gt*100/((mt+ht)*qt):100*i/(mt+ht);n+=a,n+="%"}Z.style[Vt]=Xt+n+Yt}}(t)})):("?"===te&&(te=ki()),te&&(Be=!0)),Be&&t.preventDefault()}}function Si(i){if(un){an&&(Ri(an),an=null),q&&ri(Z,""),un=!1;var t=Ai(i);on.x=parseInt(t.clientX),on.y=parseInt(t.clientY);var a=sn(on,rn);if(Math.abs(a)){if(!Ei(i)){var n=Ti(i);oa(n,{click:function t(e){Bi(e),ua(n,{click:t})}})}q?an=Hi(function(){if(G&&!dt){var t=-a*gt/(mt+ht);t=0<a?Math.floor(t):Math.ceil(t),Ut+=t}else{var e=-(nn+a);if(e<=0)Ut=Jt;else if(e>=rt[rt.length-1])Ut=_t;else for(var n=0;n<qt&&e>=rt[n];)e>rt[Ut=n]&&a<0&&(Ut+=1),n++}di(i,a),ie.emit(Ei(i)?"touchEnd":"dragEnd",Pi(i))}):te&&mi(i,0<a?-1:1)}}"auto"===h.preventScrollOnTouch&&(Be=!1),$t&&(te="?"),St&&!Ue&&yi()}function Di(){_.style.height=rt[Ut+gt]-rt[Ut]+"px"}function Oi(){for(var t=[],e=0,n=Math.ceil(nt/gt);e<n;)t.push(e*gt),e++;return t}function Ii(){kt&&!be&&ze!==qe&&(Yi(He,function(t,e){ze.indexOf(e)<0?ea(t):na(t)}),qe=ze)}function Pi(t){return{container:Z,slideItems:et,navContainer:Re,navItems:He,controlsContainer:Le,hasControls:ge,prevButton:De,nextButton:Oe,items:gt,slideBy:xt,cloneCount:zt,slideCount:nt,slideCountNew:qt,index:Ut,indexCached:Gt,displayIndex:dn(),navCurrentIndex:Fe,navCurrentIndexCached:Qe,visibleNavIndexes:ze,visibleNavIndexesCached:qe,sheet:Ht,isOn:at,event:t||{}}}P&&console.warn("No slides found in",h.container)};return la}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
