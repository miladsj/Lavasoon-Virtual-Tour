// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: Mobile View.ggsk
// Generated Thu Aug 6 11:13:57 2015

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'Icons/left__o.png';
		preLoadImg.src=basePath + 'Icons/right__o.png';
		preLoadImg.src=basePath + 'Icons/up__o.png';
		preLoadImg.src=basePath + 'Icons/down__o.png';
		preLoadImg.src=basePath + 'Icons/zoom_in__o.png';
		preLoadImg.src=basePath + 'Icons/zoom_out__o.png';
		preLoadImg.src=basePath + 'Icons/auto_rotate__o.png';
		preLoadImg.src=basePath + 'Icons/stop_autorotation__o.png';
		preLoadImg.src=basePath + 'Icons/button_1__o.png';
		preLoadImg.src=basePath + 'Icons/button_3__o.png';
		preLoadImg.src=basePath + 'Icons/button_12__o.png';
		preLoadImg.src=basePath + 'Icons/gyro__o.png';
		preLoadImg.src=basePath + 'Icons/gyro__a.png';
		preLoadImg.src=basePath + 'Icons/button_8__o.png';
		preLoadImg.src=basePath + 'Icons/button_9__o.png';
		preLoadImg.src=basePath + 'Icons/button_2__o.png';
		preLoadImg.src=basePath + 'Icons/button_4__o.png';
		preLoadImg.src=basePath + 'Icons/button_5__o.png';
		preLoadImg.src=basePath + 'Icons/button_6__o.png';
		preLoadImg.src=basePath + 'Icons/button_7__o.png';
		preLoadImg.src=basePath + 'Icons/button_10__o.png';
		preLoadImg.src=basePath + 'Icons/button_11__o.png';
		preLoadImg.src=basePath + 'Icons/button_14__o.png';
		preLoadImg.src=basePath + 'Icons/button_15__o.png';
		preLoadImg.src=basePath + 'Icons/button_16__o.png';
		preLoadImg.src=basePath + 'Icons/button_17__o.png';
		preLoadImg.src=basePath + 'Icons/button_25__o.png';
		preLoadImg.src=basePath + 'Icons/button_13__o.png';
		preLoadImg.src=basePath + 'Icons/button_23__o.png';
		preLoadImg.src=basePath + 'Icons/button_24__o.png';
		preLoadImg.src=basePath + 'Icons/button_28__o.png';
		preLoadImg.src=basePath + 'Icons/button_29__o.png';
		preLoadImg.src=basePath + 'Icons/button_18__o.png';
		preLoadImg.src=basePath + 'Icons/button_19__o.png';
	}
	
	this.addSkin=function() {
		this._toolbar=document.createElement('div');
		this._toolbar.ggId="toolbar";
		this._toolbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toolbar.ggVisible=true;
		this._toolbar.className='ggskin ggskin_container';
		this._toolbar.ggType='container';
		this._toolbar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-181 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-81 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -181px;';
		hs+='top:  -81px;';
		hs+='width: 277px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.75;';
		hs+='visibility: inherit;';
		this._toolbar.setAttribute('style',hs);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_button';
		this._left.ggType='button';
		hs ='position:absolute;';
		hs+='left: -12px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_button';
		this._left__img.setAttribute('src',basePath + 'Icons/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._left__img.className='ggskin ggskin_button';
		this._left__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._left__img);
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'Icons/left__o.png';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'Icons/left.png';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._toolbar.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_button';
		this._right.ggType='button';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_button';
		this._right__img.setAttribute('src',basePath + 'Icons/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._right__img.className='ggskin ggskin_button';
		this._right__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._right__img);
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'Icons/right__o.png';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'Icons/right.png';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._toolbar.appendChild(this._right);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_button';
		this._up.ggType='button';
		hs ='position:absolute;';
		hs+='left: 88px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_button';
		this._up__img.setAttribute('src',basePath + 'Icons/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up__img.className='ggskin ggskin_button';
		this._up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up__img);
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'Icons/up__o.png';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'Icons/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._toolbar.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_button';
		this._down.ggType='button';
		hs ='position:absolute;';
		hs+='left: 138px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_button';
		this._down__img.setAttribute('src',basePath + 'Icons/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._down__img.className='ggskin ggskin_button';
		this._down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._down__img);
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'Icons/down__o.png';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'Icons/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._toolbar.appendChild(this._down);
		this._zoom_in=document.createElement('div');
		this._zoom_in.ggId="zoom in";
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_button';
		this._zoom_in.ggType='button';
		hs ='position:absolute;';
		hs+='left: 188px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoom_in.setAttribute('style',hs);
		this._zoom_in__img=document.createElement('img');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img.setAttribute('src',basePath + 'Icons/zoom_in.png');
		this._zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_in__img);
		this._zoom_in.appendChild(this._zoom_in__img);
		this._zoom_in.onmouseover=function () {
			me._zoom_in__img.src=basePath + 'Icons/zoom_in__o.png';
		}
		this._zoom_in.onmouseout=function () {
			me._zoom_in__img.src=basePath + 'Icons/zoom_in.png';
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.onmousedown=function () {
			me.elementMouseDown['zoom_in']=true;
		}
		this._zoom_in.onmouseup=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ontouchend=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._toolbar.appendChild(this._zoom_in);
		this._zoom_out=document.createElement('div');
		this._zoom_out.ggId="zoom out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_button';
		this._zoom_out.ggType='button';
		hs ='position:absolute;';
		hs+='left: 238px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img.setAttribute('src',basePath + 'Icons/zoom_out.png');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_out__img);
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out.onmouseover=function () {
			me._zoom_out__img.src=basePath + 'Icons/zoom_out__o.png';
		}
		this._zoom_out.onmouseout=function () {
			me._zoom_out__img.src=basePath + 'Icons/zoom_out.png';
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function () {
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._toolbar.appendChild(this._zoom_out);
		this._auto_rotate=document.createElement('div');
		this._auto_rotate.ggId="auto rotate";
		this._auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._auto_rotate.ggVisible=true;
		this._auto_rotate.className='ggskin ggskin_button';
		this._auto_rotate.ggType='button';
		hs ='position:absolute;';
		hs+='left: 288px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._auto_rotate.setAttribute('style',hs);
		this._auto_rotate__img=document.createElement('img');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img.setAttribute('src',basePath + 'Icons/auto_rotate.png');
		this._auto_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._auto_rotate__img);
		this._auto_rotate.appendChild(this._auto_rotate__img);
		this._auto_rotate.onclick=function () {
			me.player.startAutorotate(".1");
			me._stop_autorotation.style[domTransition]='none';
			me._stop_autorotation.style.visibility='inherit';
			me._stop_autorotation.ggVisible=true;
			me._auto_rotate.style[domTransition]='none';
			me._auto_rotate.style.visibility='hidden';
			me._auto_rotate.ggVisible=false;
		}
		this._auto_rotate.onmouseover=function () {
			me._auto_rotate__img.src=basePath + 'Icons/auto_rotate__o.png';
		}
		this._auto_rotate.onmouseout=function () {
			me._auto_rotate__img.src=basePath + 'Icons/auto_rotate.png';
		}
		this._toolbar.appendChild(this._auto_rotate);
		this._stop_autorotation=document.createElement('div');
		this._stop_autorotation.ggId="stop autorotation";
		this._stop_autorotation.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stop_autorotation.ggVisible=false;
		this._stop_autorotation.className='ggskin ggskin_button';
		this._stop_autorotation.ggType='button';
		hs ='position:absolute;';
		hs+='left: 288px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._stop_autorotation.setAttribute('style',hs);
		this._stop_autorotation__img=document.createElement('img');
		this._stop_autorotation__img.className='ggskin ggskin_button';
		this._stop_autorotation__img.setAttribute('src',basePath + 'Icons/stop_autorotation.png');
		this._stop_autorotation__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._stop_autorotation__img.className='ggskin ggskin_button';
		this._stop_autorotation__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._stop_autorotation__img);
		this._stop_autorotation.appendChild(this._stop_autorotation__img);
		this._stop_autorotation.onclick=function () {
			me.player.stopAutorotate();
			me._auto_rotate.style[domTransition]='none';
			me._auto_rotate.style.visibility='inherit';
			me._auto_rotate.ggVisible=true;
			me._stop_autorotation.style[domTransition]='none';
			me._stop_autorotation.style.visibility='hidden';
			me._stop_autorotation.ggVisible=false;
		}
		this._stop_autorotation.onmouseover=function () {
			me._stop_autorotation__img.src=basePath + 'Icons/stop_autorotation__o.png';
		}
		this._stop_autorotation.onmouseout=function () {
			me._stop_autorotation__img.src=basePath + 'Icons/stop_autorotation.png';
		}
		this._toolbar.appendChild(this._stop_autorotation);
		this._button_1=document.createElement('div');
		this._button_1.ggId="Button 1";
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button';
		this._button_1.ggType='button';
		hs ='position:absolute;';
		hs+='left: -62px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_1.setAttribute('style',hs);
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'Icons/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.onclick=function () {
			me._thumbnail.style[domTransition]='none';
			me._thumbnail.style.visibility='inherit';
			me._thumbnail.ggVisible=true;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='inherit';
			me._button_3.ggVisible=true;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='hidden';
			me._button_1.ggVisible=false;
			me._button_18.style[domTransition]='none';
			me._button_18.style.visibility='inherit';
			me._button_18.ggVisible=true;
			me._button_19.style[domTransition]='none';
			me._button_19.style.visibility='inherit';
			me._button_19.ggVisible=true;
		}
		this._button_1.onmouseover=function () {
			me._button_1__img.src=basePath + 'Icons/button_1__o.png';
		}
		this._button_1.onmouseout=function () {
			me._button_1__img.src=basePath + 'Icons/button_1.png';
		}
		this._toolbar.appendChild(this._button_1);
		this._button_3=document.createElement('div');
		this._button_3.ggId="Button 3";
		this._button_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_3.ggVisible=false;
		this._button_3.className='ggskin ggskin_button';
		this._button_3.ggType='button';
		hs ='position:absolute;';
		hs+='left: -62px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_3.setAttribute('style',hs);
		this._button_3__img=document.createElement('img');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img.setAttribute('src',basePath + 'Icons/button_3.png');
		this._button_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_3__img);
		this._button_3.appendChild(this._button_3__img);
		this._button_3.onclick=function () {
			me._thumbnail.style[domTransition]='none';
			me._thumbnail.style.visibility='hidden';
			me._thumbnail.ggVisible=false;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='inherit';
			me._button_1.ggVisible=true;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='hidden';
			me._button_3.ggVisible=false;
			me._button_18.style[domTransition]='none';
			me._button_18.style.visibility='hidden';
			me._button_18.ggVisible=false;
			me._button_19.style[domTransition]='none';
			me._button_19.style.visibility='hidden';
			me._button_19.ggVisible=false;
		}
		this._button_3.onmouseover=function () {
			me._button_3__img.src=basePath + 'Icons/button_3__o.png';
		}
		this._button_3.onmouseout=function () {
			me._button_3__img.src=basePath + 'Icons/button_3.png';
		}
		this._toolbar.appendChild(this._button_3);
		this._button_12=document.createElement('div');
		this._button_12.ggId="Button 12";
		this._button_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_12.ggVisible=true;
		this._button_12.className='ggskin ggskin_button';
		this._button_12.ggType='button';
		hs ='position:absolute;';
		hs+='left: 338px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_12.setAttribute('style',hs);
		this._button_12__img=document.createElement('img');
		this._button_12__img.className='ggskin ggskin_button';
		this._button_12__img.setAttribute('src',basePath + 'Icons/button_12.png');
		this._button_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_12__img.className='ggskin ggskin_button';
		this._button_12__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_12__img);
		this._button_12.appendChild(this._button_12__img);
		this._button_12.onmouseover=function () {
			me._button_12__img.src=basePath + 'Icons/button_12__o.png';
		}
		this._button_12.onmouseout=function () {
			me._button_12__img.src=basePath + 'Icons/button_12.png';
			me.elementMouseDown['button_12']=false;
		}
		this._button_12.onmousedown=function () {
			me.elementMouseDown['button_12']=true;
		}
		this._button_12.onmouseup=function () {
			me.elementMouseDown['button_12']=false;
		}
		this._button_12.ontouchend=function () {
			me.elementMouseDown['button_12']=false;
		}
		this._toolbar.appendChild(this._button_12);
		this._gyro=document.createElement('div');
		this._gyro.ggId="gyro";
		this._gyro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro.ggVisible=true;
		this._gyro.className='ggskin ggskin_button';
		this._gyro.ggType='button';
		hs ='position:absolute;';
		hs+='left: 388px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gyro.setAttribute('style',hs);
		this._gyro__img=document.createElement('img');
		this._gyro__img.className='ggskin ggskin_button';
		this._gyro__img.setAttribute('src',basePath + 'Icons/gyro.png');
		this._gyro__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gyro__img.className='ggskin ggskin_button';
		this._gyro__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gyro__img);
		this._gyro.appendChild(this._gyro__img);
		this._gyro.onclick=function () {
			gyro.toggle();
		}
		this._gyro.onmouseover=function () {
			me._gyro__img.src=basePath + 'Icons/gyro__o.png';
			me._gyro.ggIsOver=true;
		}
		this._gyro.onmouseout=function () {
			me._gyro__img.src=basePath + 'Icons/gyro.png';
			me._gyro.ggIsOver=false;
		}
		this._gyro.onmousedown=function () {
			me._gyro__img.src=basePath + 'Icons/gyro__a.png';
		}
		this._gyro.onmouseup=function () {
			if (me._gyro.ggIsOver) {
				me._gyro__img.src=basePath + 'Icons/gyro__o.png';
			} else {
				me._gyro__img.src=basePath + 'Icons/gyro.png';
			}
		}
		this._toolbar.appendChild(this._gyro);
		this.divSkin.appendChild(this._toolbar);
		this._button_8=document.createElement('div');
		this._button_8.ggId="Button 8";
		this._button_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_8.ggVisible=false;
		this._button_8.className='ggskin ggskin_button';
		this._button_8.ggType='button';
		this._button_8.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-10 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-25 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -10px;';
		hs+='top:  -25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.75;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_8.setAttribute('style',hs);
		this._button_8__img=document.createElement('img');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img.setAttribute('src',basePath + 'Icons/button_8.png');
		this._button_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_8__img);
		this._button_8.appendChild(this._button_8__img);
		this._button_8.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._toolbar.style[domTransition]='none';
			} else {
				me._toolbar.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._toolbar.ggParameter.rx=0;me._toolbar.ggParameter.ry=-5;
			me._toolbar.style[domTransform]=parameterToTransform(me._toolbar.ggParameter);
			me._button_9.style[domTransition]='none';
			me._button_9.style.visibility='inherit';
			me._button_9.ggVisible=true;
			me._button_8.style[domTransition]='none';
			me._button_8.style.visibility='hidden';
			me._button_8.ggVisible=false;
		}
		this._button_8.onmouseover=function () {
			me._button_8__img.src=basePath + 'Icons/button_8__o.png';
		}
		this._button_8.onmouseout=function () {
			me._button_8__img.src=basePath + 'Icons/button_8.png';
		}
		this.divSkin.appendChild(this._button_8);
		this._button_9=document.createElement('div');
		this._button_9.ggId="Button 9";
		this._button_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_9.ggVisible=true;
		this._button_9.className='ggskin ggskin_button';
		this._button_9.ggType='button';
		this._button_9.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-10 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-25 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -10px;';
		hs+='top:  -25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.75;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_9.setAttribute('style',hs);
		this._button_9__img=document.createElement('img');
		this._button_9__img.className='ggskin ggskin_button';
		this._button_9__img.setAttribute('src',basePath + 'Icons/button_9.png');
		this._button_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_9__img.className='ggskin ggskin_button';
		this._button_9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_9__img);
		this._button_9.appendChild(this._button_9__img);
		this._button_9.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._toolbar.style[domTransition]='none';
			} else {
				me._toolbar.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._toolbar.ggParameter.rx=0;me._toolbar.ggParameter.ry=110;
			me._toolbar.style[domTransform]=parameterToTransform(me._toolbar.ggParameter);
			me._button_8.style[domTransition]='none';
			me._button_8.style.visibility='inherit';
			me._button_8.ggVisible=true;
			me._button_9.style[domTransition]='none';
			me._button_9.style.visibility='hidden';
			me._button_9.ggVisible=false;
		}
		this._button_9.onmouseover=function () {
			me._button_9__img.src=basePath + 'Icons/button_9__o.png';
		}
		this._button_9.onmouseout=function () {
			me._button_9__img.src=basePath + 'Icons/button_9.png';
		}
		this.divSkin.appendChild(this._button_9);
		this._thumbnail=document.createElement('div');
		this._thumbnail.ggId="Thumbnail";
		this._thumbnail.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail.ggVisible=false;
		this._thumbnail.className='ggskin ggskin_container';
		this._thumbnail.ggType='container';
		this._thumbnail.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-242 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-230 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -242px;';
		hs+='top:  -230px;';
		hs+='width: 498px;';
		hs+='height: 129px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._thumbnail.setAttribute('style',hs);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle';
		this._rectangle_1.ggType='rectangle';
		this._rectangle_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-249 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -249px;';
		hs+='top:  -129px;';
		hs+='width: 2340px;';
		hs+='height: 129px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		this._rectangle_1.setAttribute('style',hs);
		this._button_2=document.createElement('div');
		this._button_2.ggId="Button 2";
		this._button_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2.ggVisible=true;
		this._button_2.className='ggskin ggskin_button';
		this._button_2.ggType='button';
		this._button_2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-1120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -1120px;';
		hs+='top:  -129px;';
		hs+='width: 100px;';
		hs+='height: 129px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_2.setAttribute('style',hs);
		this._button_2__img=document.createElement('img');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img.setAttribute('src',basePath + 'Icons/button_2.png');
		this._button_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2__img);
		this._button_2.appendChild(this._button_2__img);
		this._button_2.onmouseover=function () {
			me._button_2__img.src=basePath + 'Icons/button_2__o.png';
		}
		this._button_2.onmouseout=function () {
			me._button_2__img.src=basePath + 'Icons/button_2.png';
			me.elementMouseDown['button_2']=false;
		}
		this._button_2.onmousedown=function () {
			me.elementMouseDown['button_2']=true;
		}
		this._button_2.onmouseup=function () {
			me.elementMouseDown['button_2']=false;
		}
		this._button_2.ontouchend=function () {
			me.elementMouseDown['button_2']=false;
		}
		this._south_west=document.createElement('div');
		this._south_west__text=document.createElement('div');
		this._south_west.className='ggskin ggskin_textdiv';
		this._south_west.ggTextDiv=this._south_west__text;
		this._south_west.ggId="South West";
		this._south_west.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._south_west.ggVisible=true;
		this._south_west.className='ggskin ggskin_text';
		this._south_west.ggType='text';
		this._south_west.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-50 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-39 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  -39px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._south_west.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._south_west__text.setAttribute('style',hs);
		this._south_west.ggTextDiv.innerHTML="South West";
		this._south_west.appendChild(this._south_west__text);
		this._button_2.appendChild(this._south_west);
		this._rectangle_1.appendChild(this._button_2);
		this._button_4=document.createElement('div');
		this._button_4.ggId="Button 4";
		this._button_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_4.ggVisible=true;
		this._button_4.className='ggskin ggskin_button';
		this._button_4.ggType='button';
		this._button_4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-1010 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -1010px;';
		hs+='top:  -129px;';
		hs+='width: 100px;';
		hs+='height: 129px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_4.setAttribute('style',hs);
		this._button_4__img=document.createElement('img');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img.setAttribute('src',basePath + 'Icons/button_4.png');
		this._button_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_4__img);
		this._button_4.appendChild(this._button_4__img);
		this._button_4.onmouseover=function () {
			me._button_4__img.src=basePath + 'Icons/button_4__o.png';
		}
		this._button_4.onmouseout=function () {
			me._button_4__img.src=basePath + 'Icons/button_4.png';
			me.elementMouseDown['button_4']=false;
		}
		this._button_4.onmousedown=function () {
			me.elementMouseDown['button_4']=true;
		}
		this._button_4.onmouseup=function () {
			me.elementMouseDown['button_4']=false;
		}
		this._button_4.ontouchend=function () {
			me.elementMouseDown['button_4']=false;
		}
		this._north_west=document.createElement('div');
		this._north_west__text=document.createElement('div');
		this._north_west.className='ggskin ggskin_textdiv';
		this._north_west.ggTextDiv=this._north_west__text;
		this._north_west.ggId="North West";
		this._north_west.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._north_west.ggVisible=true;
		this._north_west.className='ggskin ggskin_text';
		this._north_west.ggType='text';
		this._north_west.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-50 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-39 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  -39px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._north_west.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._north_west__text.setAttribute('style',hs);
		this._north_west.ggTextDiv.innerHTML="North West";
		this._north_west.appendChild(this._north_west__text);
		this._button_4.appendChild(this._north_west);
		this._rectangle_1.appendChild(this._button_4);
		this._button_5=document.createElement('div');
		this._button_5.ggId="Button 5";
		this._button_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_5.ggVisible=true;
		this._button_5.className='ggskin ggskin_button';
		this._button_5.ggType='button';
		this._button_5.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-900 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -900px;';
		hs+='top:  -129px;';
		hs+='width: 100px;';
		hs+='height: 129px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_5.setAttribute('style',hs);
		this._button_5__img=document.createElement('img');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img.setAttribute('src',basePath + 'Icons/button_5.png');
		this._button_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_5__img);
		this._button_5.appendChild(this._button_5__img);
		this._button_5.onmouseover=function () {
			me._button_5__img.src=basePath + 'Icons/button_5__o.png';
		}
		this._button_5.onmouseout=function () {
			me._button_5__img.src=basePath + 'Icons/button_5.png';
			me.elementMouseDown['button_5']=false;
		}
		this._button_5.onmousedown=function () {
			me.elementMouseDown['button_5']=true;
		}
		this._button_5.onmouseup=function () {
			me.elementMouseDown['button_5']=false;
		}
		this._button_5.ontouchend=function () {
			me.elementMouseDown['button_5']=false;
		}
		this._south_east0=document.createElement('div');
		this._south_east0__text=document.createElement('div');
		this._south_east0.className='ggskin ggskin_textdiv';
		this._south_east0.ggTextDiv=this._south_east0__text;
		this._south_east0.ggId="South East";
		this._south_east0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._south_east0.ggVisible=true;
		this._south_east0.className='ggskin ggskin_text';
		this._south_east0.ggType='text';
		this._south_east0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-50 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-39 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  -39px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._south_east0.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._south_east0__text.setAttribute('style',hs);
		this._south_east0.ggTextDiv.innerHTML="South East";
		this._south_east0.appendChild(this._south_east0__text);
		this._button_5.appendChild(this._south_east0);
		this._rectangle_1.appendChild(this._button_5);
		this._button_6=document.createElement('div');
		this._button_6.ggId="Button 6";
		this._button_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_6.ggVisible=true;
		this._button_6.className='ggskin ggskin_button';
		this._button_6.ggType='button';
		this._button_6.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-790 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -790px;';
		hs+='top:  -129px;';
		hs+='width: 100px;';
		hs+='height: 129px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_6.setAttribute('style',hs);
		this._button_6__img=document.createElement('img');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img.setAttribute('src',basePath + 'Icons/button_6.png');
		this._button_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_6__img);
		this._button_6.appendChild(this._button_6__img);
		this._button_6.onmouseover=function () {
			me._button_6__img.src=basePath + 'Icons/button_6__o.png';
		}
		this._button_6.onmouseout=function () {
			me._button_6__img.src=basePath + 'Icons/button_6.png';
			me.elementMouseDown['button_6']=false;
		}
		this._button_6.onmousedown=function () {
			me.elementMouseDown['button_6']=true;
		}
		this._button_6.onmouseup=function () {
			me.elementMouseDown['button_6']=false;
		}
		this._button_6.ontouchend=function () {
			me.elementMouseDown['button_6']=false;
		}
		this._night_view=document.createElement('div');
		this._night_view__text=document.createElement('div');
		this._night_view.className='ggskin ggskin_textdiv';
		this._night_view.ggTextDiv=this._night_view__text;
		this._night_view.ggId="Night View";
		this._night_view.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._night_view.ggVisible=true;
		this._night_view.className='ggskin ggskin_text';
		this._night_view.ggType='text';
		this._night_view.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-50 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-39 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  -39px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._night_view.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._night_view__text.setAttribute('style',hs);
		this._night_view.ggTextDiv.innerHTML="Night View\t";
		this._night_view.appendChild(this._night_view__text);
		this._button_6.appendChild(this._night_view);
		this._rectangle_1.appendChild(this._button_6);
		this._button_7=document.createElement('div');
		this._button_7.ggId="Button 7";
		this._button_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_7.ggVisible=true;
		this._button_7.className='ggskin ggskin_button';
		this._button_7.ggType='button';
		this._button_7.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-680 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -680px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_7.setAttribute('style',hs);
		this._button_7__img=document.createElement('img');
		this._button_7__img.className='ggskin ggskin_button';
		this._button_7__img.setAttribute('src',basePath + 'Icons/button_7.png');
		this._button_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_7__img.className='ggskin ggskin_button';
		this._button_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_7__img);
		this._button_7.appendChild(this._button_7__img);
		this._button_7.onmouseover=function () {
			me._button_7__img.src=basePath + 'Icons/button_7__o.png';
		}
		this._button_7.onmouseout=function () {
			me._button_7__img.src=basePath + 'Icons/button_7.png';
			me.elementMouseDown['button_7']=false;
		}
		this._button_7.onmousedown=function () {
			me.elementMouseDown['button_7']=true;
		}
		this._button_7.onmouseup=function () {
			me.elementMouseDown['button_7']=false;
		}
		this._button_7.ontouchend=function () {
			me.elementMouseDown['button_7']=false;
		}
		this._lobby=document.createElement('div');
		this._lobby__text=document.createElement('div');
		this._lobby.className='ggskin ggskin_textdiv';
		this._lobby.ggTextDiv=this._lobby__text;
		this._lobby.ggId="Lobby";
		this._lobby.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._lobby.ggVisible=true;
		this._lobby.className='ggskin ggskin_text';
		this._lobby.ggType='text';
		this._lobby.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-65 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._lobby.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._lobby__text.setAttribute('style',hs);
		this._lobby.ggTextDiv.innerHTML="Lobby";
		this._lobby.appendChild(this._lobby__text);
		this._button_7.appendChild(this._lobby);
		this._rectangle_1.appendChild(this._button_7);
		this._button_10=document.createElement('div');
		this._button_10.ggId="Button 10";
		this._button_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_10.ggVisible=true;
		this._button_10.className='ggskin ggskin_button';
		this._button_10.ggType='button';
		this._button_10.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-540 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -540px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_10.setAttribute('style',hs);
		this._button_10__img=document.createElement('img');
		this._button_10__img.className='ggskin ggskin_button';
		this._button_10__img.setAttribute('src',basePath + 'Icons/button_10.png');
		this._button_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_10__img.className='ggskin ggskin_button';
		this._button_10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_10__img);
		this._button_10.appendChild(this._button_10__img);
		this._button_10.onmouseover=function () {
			me._button_10__img.src=basePath + 'Icons/button_10__o.png';
		}
		this._button_10.onmouseout=function () {
			me._button_10__img.src=basePath + 'Icons/button_10.png';
			me.elementMouseDown['button_10']=false;
		}
		this._button_10.onmousedown=function () {
			me.elementMouseDown['button_10']=true;
		}
		this._button_10.onmouseup=function () {
			me.elementMouseDown['button_10']=false;
		}
		this._button_10.ontouchend=function () {
			me.elementMouseDown['button_10']=false;
		}
		this._first_floor=document.createElement('div');
		this._first_floor__text=document.createElement('div');
		this._first_floor.className='ggskin ggskin_textdiv';
		this._first_floor.ggTextDiv=this._first_floor__text;
		this._first_floor.ggId="First Floor";
		this._first_floor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._first_floor.ggVisible=true;
		this._first_floor.className='ggskin ggskin_text';
		this._first_floor.ggType='text';
		this._first_floor.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-64 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._first_floor.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._first_floor__text.setAttribute('style',hs);
		this._first_floor.ggTextDiv.innerHTML="First Floor";
		this._first_floor.appendChild(this._first_floor__text);
		this._button_10.appendChild(this._first_floor);
		this._rectangle_1.appendChild(this._button_10);
		this._button_11=document.createElement('div');
		this._button_11.ggId="Button 11";
		this._button_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_11.ggVisible=true;
		this._button_11.className='ggskin ggskin_button';
		this._button_11.ggType='button';
		this._button_11.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-260 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -260px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_11.setAttribute('style',hs);
		this._button_11__img=document.createElement('img');
		this._button_11__img.className='ggskin ggskin_button';
		this._button_11__img.setAttribute('src',basePath + 'Icons/button_11.png');
		this._button_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_11__img.className='ggskin ggskin_button';
		this._button_11__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_11__img);
		this._button_11.appendChild(this._button_11__img);
		this._button_11.onmouseover=function () {
			me._button_11__img.src=basePath + 'Icons/button_11__o.png';
		}
		this._button_11.onmouseout=function () {
			me._button_11__img.src=basePath + 'Icons/button_11.png';
			me.elementMouseDown['button_11']=false;
		}
		this._button_11.onmousedown=function () {
			me.elementMouseDown['button_11']=true;
		}
		this._button_11.onmouseup=function () {
			me.elementMouseDown['button_11']=false;
		}
		this._button_11.ontouchend=function () {
			me.elementMouseDown['button_11']=false;
		}
		this._second_floor=document.createElement('div');
		this._second_floor__text=document.createElement('div');
		this._second_floor.className='ggskin ggskin_textdiv';
		this._second_floor.ggTextDiv=this._second_floor__text;
		this._second_floor.ggId="Second Floor";
		this._second_floor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._second_floor.ggVisible=true;
		this._second_floor.className='ggskin ggskin_text';
		this._second_floor.ggType='text';
		this._second_floor.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-64 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._second_floor.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._second_floor__text.setAttribute('style',hs);
		this._second_floor.ggTextDiv.innerHTML="Second Floor";
		this._second_floor.appendChild(this._second_floor__text);
		this._button_11.appendChild(this._second_floor);
		this._rectangle_1.appendChild(this._button_11);
		this._button_14=document.createElement('div');
		this._button_14.ggId="Button 14";
		this._button_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_14.ggVisible=true;
		this._button_14.className='ggskin ggskin_button';
		this._button_14.ggType='button';
		this._button_14.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(300 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 300px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_14.setAttribute('style',hs);
		this._button_14__img=document.createElement('img');
		this._button_14__img.className='ggskin ggskin_button';
		this._button_14__img.setAttribute('src',basePath + 'Icons/button_14.png');
		this._button_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_14__img.className='ggskin ggskin_button';
		this._button_14__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_14__img);
		this._button_14.appendChild(this._button_14__img);
		this._button_14.onmouseover=function () {
			me._button_14__img.src=basePath + 'Icons/button_14__o.png';
		}
		this._button_14.onmouseout=function () {
			me._button_14__img.src=basePath + 'Icons/button_14.png';
			me.elementMouseDown['button_14']=false;
		}
		this._button_14.onmousedown=function () {
			me.elementMouseDown['button_14']=true;
		}
		this._button_14.onmouseup=function () {
			me.elementMouseDown['button_14']=false;
		}
		this._button_14.ontouchend=function () {
			me.elementMouseDown['button_14']=false;
		}
		this._master_bedroom=document.createElement('div');
		this._master_bedroom__text=document.createElement('div');
		this._master_bedroom.className='ggskin ggskin_textdiv';
		this._master_bedroom.ggTextDiv=this._master_bedroom__text;
		this._master_bedroom.ggId="Master Bedroom";
		this._master_bedroom.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._master_bedroom.ggVisible=true;
		this._master_bedroom.className='ggskin ggskin_text';
		this._master_bedroom.ggType='text';
		this._master_bedroom.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-64 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._master_bedroom.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._master_bedroom__text.setAttribute('style',hs);
		this._master_bedroom.ggTextDiv.innerHTML="Master Bedroom";
		this._master_bedroom.appendChild(this._master_bedroom__text);
		this._button_14.appendChild(this._master_bedroom);
		this._rectangle_1.appendChild(this._button_14);
		this._button_15=document.createElement('div');
		this._button_15.ggId="Button 15";
		this._button_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_15.ggVisible=true;
		this._button_15.className='ggskin ggskin_button';
		this._button_15.ggType='button';
		this._button_15.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(440 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 440px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_15.setAttribute('style',hs);
		this._button_15__img=document.createElement('img');
		this._button_15__img.className='ggskin ggskin_button';
		this._button_15__img.setAttribute('src',basePath + 'Icons/button_15.png');
		this._button_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_15__img.className='ggskin ggskin_button';
		this._button_15__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_15__img);
		this._button_15.appendChild(this._button_15__img);
		this._button_15.onmouseover=function () {
			me._button_15__img.src=basePath + 'Icons/button_15__o.png';
		}
		this._button_15.onmouseout=function () {
			me._button_15__img.src=basePath + 'Icons/button_15.png';
			me.elementMouseDown['button_15']=false;
		}
		this._button_15.onmousedown=function () {
			me.elementMouseDown['button_15']=true;
		}
		this._button_15.onmouseup=function () {
			me.elementMouseDown['button_15']=false;
		}
		this._button_15.ontouchend=function () {
			me.elementMouseDown['button_15']=false;
		}
		this._bedroom_1=document.createElement('div');
		this._bedroom_1__text=document.createElement('div');
		this._bedroom_1.className='ggskin ggskin_textdiv';
		this._bedroom_1.ggTextDiv=this._bedroom_1__text;
		this._bedroom_1.ggId="Bedroom 1";
		this._bedroom_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bedroom_1.ggVisible=true;
		this._bedroom_1.className='ggskin ggskin_text';
		this._bedroom_1.ggType='text';
		this._bedroom_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-64 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._bedroom_1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._bedroom_1__text.setAttribute('style',hs);
		this._bedroom_1.ggTextDiv.innerHTML="Bedroom 1";
		this._bedroom_1.appendChild(this._bedroom_1__text);
		this._button_15.appendChild(this._bedroom_1);
		this._rectangle_1.appendChild(this._button_15);
		this._button_16=document.createElement('div');
		this._button_16.ggId="Button 16";
		this._button_16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_16.ggVisible=true;
		this._button_16.className='ggskin ggskin_button';
		this._button_16.ggType='button';
		this._button_16.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(580 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 580px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_16.setAttribute('style',hs);
		this._button_16__img=document.createElement('img');
		this._button_16__img.className='ggskin ggskin_button';
		this._button_16__img.setAttribute('src',basePath + 'Icons/button_16.png');
		this._button_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_16__img.className='ggskin ggskin_button';
		this._button_16__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_16__img);
		this._button_16.appendChild(this._button_16__img);
		this._button_16.onmouseover=function () {
			me._button_16__img.src=basePath + 'Icons/button_16__o.png';
		}
		this._button_16.onmouseout=function () {
			me._button_16__img.src=basePath + 'Icons/button_16.png';
			me.elementMouseDown['button_16']=false;
		}
		this._button_16.onmousedown=function () {
			me.elementMouseDown['button_16']=true;
		}
		this._button_16.onmouseup=function () {
			me.elementMouseDown['button_16']=false;
		}
		this._button_16.ontouchend=function () {
			me.elementMouseDown['button_16']=false;
		}
		this._bedroom_2=document.createElement('div');
		this._bedroom_2__text=document.createElement('div');
		this._bedroom_2.className='ggskin ggskin_textdiv';
		this._bedroom_2.ggTextDiv=this._bedroom_2__text;
		this._bedroom_2.ggId="Bedroom 2";
		this._bedroom_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bedroom_2.ggVisible=true;
		this._bedroom_2.className='ggskin ggskin_text';
		this._bedroom_2.ggType='text';
		this._bedroom_2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-64 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._bedroom_2.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._bedroom_2__text.setAttribute('style',hs);
		this._bedroom_2.ggTextDiv.innerHTML="Bedroom 2";
		this._bedroom_2.appendChild(this._bedroom_2__text);
		this._button_16.appendChild(this._bedroom_2);
		this._rectangle_1.appendChild(this._button_16);
		this._button_17=document.createElement('div');
		this._button_17.ggId="Button 17";
		this._button_17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_17.ggVisible=true;
		this._button_17.className='ggskin ggskin_button';
		this._button_17.ggType='button';
		this._button_17.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(720 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 720px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 138px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_17.setAttribute('style',hs);
		this._button_17__img=document.createElement('img');
		this._button_17__img.className='ggskin ggskin_button';
		this._button_17__img.setAttribute('src',basePath + 'Icons/button_17.png');
		this._button_17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_17__img.className='ggskin ggskin_button';
		this._button_17__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_17__img);
		this._button_17.appendChild(this._button_17__img);
		this._button_17.onmouseover=function () {
			me._button_17__img.src=basePath + 'Icons/button_17__o.png';
		}
		this._button_17.onmouseout=function () {
			me._button_17__img.src=basePath + 'Icons/button_17.png';
			me.elementMouseDown['button_17']=false;
		}
		this._button_17.onmousedown=function () {
			me.elementMouseDown['button_17']=true;
		}
		this._button_17.onmouseup=function () {
			me.elementMouseDown['button_17']=false;
		}
		this._button_17.ontouchend=function () {
			me.elementMouseDown['button_17']=false;
		}
		this._pool=document.createElement('div');
		this._pool__text=document.createElement('div');
		this._pool.className='ggskin ggskin_textdiv';
		this._pool.ggTextDiv=this._pool__text;
		this._pool.ggId="Pool";
		this._pool.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pool.ggVisible=true;
		this._pool.className='ggskin ggskin_text';
		this._pool.ggType='text';
		this._pool.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-64 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-48 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -48px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._pool.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pool__text.setAttribute('style',hs);
		this._pool.ggTextDiv.innerHTML="Pool";
		this._pool.appendChild(this._pool__text);
		this._button_17.appendChild(this._pool);
		this._rectangle_1.appendChild(this._button_17);
		this._button_25=document.createElement('div');
		this._button_25.ggId="Button 25";
		this._button_25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_25.ggVisible=true;
		this._button_25.className='ggskin ggskin_button';
		this._button_25.ggType='button';
		this._button_25.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-400 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -400px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_25.setAttribute('style',hs);
		this._button_25__img=document.createElement('img');
		this._button_25__img.className='ggskin ggskin_button';
		this._button_25__img.setAttribute('src',basePath + 'Icons/button_25.png');
		this._button_25__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_25__img.className='ggskin ggskin_button';
		this._button_25__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_25__img);
		this._button_25.appendChild(this._button_25__img);
		this._button_25.onmouseover=function () {
			me._button_25__img.src=basePath + 'Icons/button_25__o.png';
		}
		this._button_25.onmouseout=function () {
			me._button_25__img.src=basePath + 'Icons/button_25.png';
			me.elementMouseDown['button_25']=false;
		}
		this._button_25.onmousedown=function () {
			me.elementMouseDown['button_25']=true;
		}
		this._button_25.onmouseup=function () {
			me.elementMouseDown['button_25']=false;
		}
		this._button_25.ontouchend=function () {
			me.elementMouseDown['button_25']=false;
		}
		this._first_floor_family_room=document.createElement('div');
		this._first_floor_family_room__text=document.createElement('div');
		this._first_floor_family_room.className='ggskin ggskin_textdiv';
		this._first_floor_family_room.ggTextDiv=this._first_floor_family_room__text;
		this._first_floor_family_room.ggId="First Floor Family Room";
		this._first_floor_family_room.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._first_floor_family_room.ggVisible=true;
		this._first_floor_family_room.className='ggskin ggskin_text';
		this._first_floor_family_room.ggType='text';
		this._first_floor_family_room.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-65 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 35px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._first_floor_family_room.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 35px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._first_floor_family_room__text.setAttribute('style',hs);
		this._first_floor_family_room.ggTextDiv.innerHTML="First Floor Family Room";
		this._first_floor_family_room.appendChild(this._first_floor_family_room__text);
		this._button_25.appendChild(this._first_floor_family_room);
		this._rectangle_1.appendChild(this._button_25);
		this._button_13=document.createElement('div');
		this._button_13.ggId="Button 13";
		this._button_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_13.ggVisible=true;
		this._button_13.className='ggskin ggskin_button';
		this._button_13.ggType='button';
		this._button_13.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(160 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_13.setAttribute('style',hs);
		this._button_13__img=document.createElement('img');
		this._button_13__img.className='ggskin ggskin_button';
		this._button_13__img.setAttribute('src',basePath + 'Icons/button_13.png');
		this._button_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_13__img.className='ggskin ggskin_button';
		this._button_13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_13__img);
		this._button_13.appendChild(this._button_13__img);
		this._button_13.onmouseover=function () {
			me._button_13__img.src=basePath + 'Icons/button_13__o.png';
		}
		this._button_13.onmouseout=function () {
			me._button_13__img.src=basePath + 'Icons/button_13.png';
			me.elementMouseDown['button_13']=false;
		}
		this._button_13.onmousedown=function () {
			me.elementMouseDown['button_13']=true;
		}
		this._button_13.onmouseup=function () {
			me.elementMouseDown['button_13']=false;
		}
		this._button_13.ontouchend=function () {
			me.elementMouseDown['button_13']=false;
		}
		this._office=document.createElement('div');
		this._office__text=document.createElement('div');
		this._office.className='ggskin ggskin_textdiv';
		this._office.ggTextDiv=this._office__text;
		this._office.ggId="Office";
		this._office.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._office.ggVisible=true;
		this._office.className='ggskin ggskin_text';
		this._office.ggType='text';
		this._office.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-64 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._office.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._office__text.setAttribute('style',hs);
		this._office.ggTextDiv.innerHTML="Office";
		this._office.appendChild(this._office__text);
		this._button_13.appendChild(this._office);
		this._rectangle_1.appendChild(this._button_13);
		this._button_23=document.createElement('div');
		this._button_23.ggId="Button 23";
		this._button_23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_23.ggVisible=true;
		this._button_23.className='ggskin ggskin_button';
		this._button_23.ggType='button';
		this._button_23.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_23.setAttribute('style',hs);
		this._button_23__img=document.createElement('img');
		this._button_23__img.className='ggskin ggskin_button';
		this._button_23__img.setAttribute('src',basePath + 'Icons/button_23.png');
		this._button_23__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_23__img.className='ggskin ggskin_button';
		this._button_23__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_23__img);
		this._button_23.appendChild(this._button_23__img);
		this._button_23.onmouseover=function () {
			me._button_23__img.src=basePath + 'Icons/button_23__o.png';
		}
		this._button_23.onmouseout=function () {
			me._button_23__img.src=basePath + 'Icons/button_23.png';
			me.elementMouseDown['button_23']=false;
		}
		this._button_23.onmousedown=function () {
			me.elementMouseDown['button_23']=true;
		}
		this._button_23.onmouseup=function () {
			me.elementMouseDown['button_23']=false;
		}
		this._button_23.ontouchend=function () {
			me.elementMouseDown['button_23']=false;
		}
		this._second_floor_family_room=document.createElement('div');
		this._second_floor_family_room__text=document.createElement('div');
		this._second_floor_family_room.className='ggskin ggskin_textdiv';
		this._second_floor_family_room.ggTextDiv=this._second_floor_family_room__text;
		this._second_floor_family_room.ggId="Second Floor Family Room";
		this._second_floor_family_room.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._second_floor_family_room.ggVisible=true;
		this._second_floor_family_room.className='ggskin ggskin_text';
		this._second_floor_family_room.ggType='text';
		this._second_floor_family_room.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-65 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 35px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._second_floor_family_room.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 35px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._second_floor_family_room__text.setAttribute('style',hs);
		this._second_floor_family_room.ggTextDiv.innerHTML="Second Floor Family Room";
		this._second_floor_family_room.appendChild(this._second_floor_family_room__text);
		this._button_23.appendChild(this._second_floor_family_room);
		this._rectangle_1.appendChild(this._button_23);
		this._button_24=document.createElement('div');
		this._button_24.ggId="Button 24";
		this._button_24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_24.ggVisible=true;
		this._button_24.className='ggskin ggskin_button';
		this._button_24.ggType='button';
		this._button_24.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(20 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-129 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  -129px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_24.setAttribute('style',hs);
		this._button_24__img=document.createElement('img');
		this._button_24__img.className='ggskin ggskin_button';
		this._button_24__img.setAttribute('src',basePath + 'Icons/button_24.png');
		this._button_24__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_24__img.className='ggskin ggskin_button';
		this._button_24__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_24__img);
		this._button_24.appendChild(this._button_24__img);
		this._button_24.onmouseover=function () {
			me._button_24__img.src=basePath + 'Icons/button_24__o.png';
		}
		this._button_24.onmouseout=function () {
			me._button_24__img.src=basePath + 'Icons/button_24.png';
			me.elementMouseDown['button_24']=false;
		}
		this._button_24.onmousedown=function () {
			me.elementMouseDown['button_24']=true;
		}
		this._button_24.onmouseup=function () {
			me.elementMouseDown['button_24']=false;
		}
		this._button_24.ontouchend=function () {
			me.elementMouseDown['button_24']=false;
		}
		this._second_floor_tv_room=document.createElement('div');
		this._second_floor_tv_room__text=document.createElement('div');
		this._second_floor_tv_room.className='ggskin ggskin_textdiv';
		this._second_floor_tv_room.ggTextDiv=this._second_floor_tv_room__text;
		this._second_floor_tv_room.ggId="Second Floor TV Room";
		this._second_floor_tv_room.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._second_floor_tv_room.ggVisible=true;
		this._second_floor_tv_room.className='ggskin ggskin_text';
		this._second_floor_tv_room.ggType='text';
		this._second_floor_tv_room.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-65 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  -47px;';
		hs+='width: 128px;';
		hs+='height: 35px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._second_floor_tv_room.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 35px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._second_floor_tv_room__text.setAttribute('style',hs);
		this._second_floor_tv_room.ggTextDiv.innerHTML="Second Floor TV Room";
		this._second_floor_tv_room.appendChild(this._second_floor_tv_room__text);
		this._button_24.appendChild(this._second_floor_tv_room);
		this._rectangle_1.appendChild(this._button_24);
		this._button_28=document.createElement('div');
		this._button_28.ggId="Button 28";
		this._button_28.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_28.ggVisible=true;
		this._button_28.className='ggskin ggskin_button';
		this._button_28.ggType='button';
		hs ='position:absolute;';
		hs+='left: 2030px;';
		hs+='top:  -10px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_28.setAttribute('style',hs);
		this._button_28__img=document.createElement('img');
		this._button_28__img.className='ggskin ggskin_button';
		this._button_28__img.setAttribute('src',basePath + 'Icons/button_28.png');
		this._button_28__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_28__img.className='ggskin ggskin_button';
		this._button_28__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_28__img);
		this._button_28.appendChild(this._button_28__img);
		this._button_28.onmouseover=function () {
			me._button_28__img.src=basePath + 'Icons/button_28__o.png';
		}
		this._button_28.onmouseout=function () {
			me._button_28__img.src=basePath + 'Icons/button_28.png';
			me.elementMouseDown['button_28']=false;
		}
		this._button_28.onmousedown=function () {
			me.elementMouseDown['button_28']=true;
		}
		this._button_28.onmouseup=function () {
			me.elementMouseDown['button_28']=false;
		}
		this._button_28.ontouchend=function () {
			me.elementMouseDown['button_28']=false;
		}
		this._south_east=document.createElement('div');
		this._south_east__text=document.createElement('div');
		this._south_east.className='ggskin ggskin_textdiv';
		this._south_east.ggTextDiv=this._south_east__text;
		this._south_east.ggId="South East";
		this._south_east.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._south_east.ggVisible=true;
		this._south_east.className='ggskin ggskin_text';
		this._south_east.ggType='text';
		hs ='position:absolute;';
		hs+='left: 18px;';
		hs+='top:  108px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._south_east.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._south_east__text.setAttribute('style',hs);
		this._south_east.ggTextDiv.innerHTML="Gym";
		this._south_east.appendChild(this._south_east__text);
		this._button_28.appendChild(this._south_east);
		this._rectangle_1.appendChild(this._button_28);
		this._button_29=document.createElement('div');
		this._button_29.ggId="Button 29";
		this._button_29.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_29.ggVisible=true;
		this._button_29.className='ggskin ggskin_button';
		this._button_29.ggType='button';
		hs ='position:absolute;';
		hs+='left: 2170px;';
		hs+='top:  -10px;';
		hs+='width: 130px;';
		hs+='height: 137px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_29.setAttribute('style',hs);
		this._button_29__img=document.createElement('img');
		this._button_29__img.className='ggskin ggskin_button';
		this._button_29__img.setAttribute('src',basePath + 'Icons/button_29.png');
		this._button_29__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_29__img.className='ggskin ggskin_button';
		this._button_29__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_29__img);
		this._button_29.appendChild(this._button_29__img);
		this._button_29.onmouseover=function () {
			me._button_29__img.src=basePath + 'Icons/button_29__o.png';
		}
		this._button_29.onmouseout=function () {
			me._button_29__img.src=basePath + 'Icons/button_29.png';
			me.elementMouseDown['button_29']=false;
		}
		this._button_29.onmousedown=function () {
			me.elementMouseDown['button_29']=true;
		}
		this._button_29.onmouseup=function () {
			me.elementMouseDown['button_29']=false;
		}
		this._button_29.ontouchend=function () {
			me.elementMouseDown['button_29']=false;
		}
		this._bathroom=document.createElement('div');
		this._bathroom__text=document.createElement('div');
		this._bathroom.className='ggskin ggskin_textdiv';
		this._bathroom.ggTextDiv=this._bathroom__text;
		this._bathroom.ggId="Bathroom";
		this._bathroom.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bathroom.ggVisible=true;
		this._bathroom.className='ggskin ggskin_text';
		this._bathroom.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  108px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._bathroom.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._bathroom__text.setAttribute('style',hs);
		this._bathroom.ggTextDiv.innerHTML="Bathroom";
		this._bathroom.appendChild(this._bathroom__text);
		this._button_29.appendChild(this._bathroom);
		this._rectangle_1.appendChild(this._button_29);
		this._thumbnail.appendChild(this._rectangle_1);
		this.divSkin.appendChild(this._thumbnail);
		this._button_18=document.createElement('div');
		this._button_18.ggId="Button 18";
		this._button_18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_18.ggVisible=false;
		this._button_18.className='ggskin ggskin_button';
		this._button_18.ggType='button';
		this._button_18.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-290 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-190 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -290px;';
		hs+='top:  -190px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_18.setAttribute('style',hs);
		this._button_18__img=document.createElement('img');
		this._button_18__img.className='ggskin ggskin_button';
		this._button_18__img.setAttribute('src',basePath + 'Icons/button_18.png');
		this._button_18__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_18__img.className='ggskin ggskin_button';
		this._button_18__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_18__img);
		this._button_18.appendChild(this._button_18__img);
		this._button_18.onmouseover=function () {
			me._button_18__img.src=basePath + 'Icons/button_18__o.png';
		}
		this._button_18.onmouseout=function () {
			me._button_18__img.src=basePath + 'Icons/button_18.png';
			me.elementMouseDown['button_18']=false;
		}
		this._button_18.onmousedown=function () {
			me.elementMouseDown['button_18']=true;
		}
		this._button_18.onmouseup=function () {
			me.elementMouseDown['button_18']=false;
		}
		this._button_18.ontouchend=function () {
			me.elementMouseDown['button_18']=false;
		}
		this.divSkin.appendChild(this._button_18);
		this._button_19=document.createElement('div');
		this._button_19.ggId="Button 19";
		this._button_19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_19.ggVisible=false;
		this._button_19.className='ggskin ggskin_button';
		this._button_19.ggType='button';
		this._button_19.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(256 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-190 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 256px;';
		hs+='top:  -190px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_19.setAttribute('style',hs);
		this._button_19__img=document.createElement('img');
		this._button_19__img.className='ggskin ggskin_button';
		this._button_19__img.setAttribute('src',basePath + 'Icons/button_19.png');
		this._button_19__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_19__img.className='ggskin ggskin_button';
		this._button_19__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_19__img);
		this._button_19.appendChild(this._button_19__img);
		this._button_19.onmouseover=function () {
			me._button_19__img.src=basePath + 'Icons/button_19__o.png';
		}
		this._button_19.onmouseout=function () {
			me._button_19__img.src=basePath + 'Icons/button_19.png';
			me.elementMouseDown['button_19']=false;
		}
		this._button_19.onmousedown=function () {
			me.elementMouseDown['button_19']=true;
		}
		this._button_19.onmouseup=function () {
			me.elementMouseDown['button_19']=false;
		}
		this._button_19.ontouchend=function () {
			me.elementMouseDown['button_19']=false;
		}
		this.divSkin.appendChild(this._button_19);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['button_12']) {
			me.player.moveToDefaultView(1);
		}
		if (me.elementMouseDown['button_2']) {
			me.player.openNext("{node3}","");
		}
		if (me.elementMouseDown['button_4']) {
			me.player.openNext("{node4}","");
		}
		if (me.elementMouseDown['button_5']) {
			me.player.openNext("{node5}","");
		}
		if (me.elementMouseDown['button_6']) {
			me.player.openNext("{node13}","");
		}
		if (me.elementMouseDown['button_7']) {
			me.player.openNext("{node10}","");
		}
		if (me.elementMouseDown['button_10']) {
			me.player.openNext("{node8}","");
		}
		if (me.elementMouseDown['button_11']) {
			me.player.openNext("{node12}","");
		}
		if (me.elementMouseDown['button_14']) {
			me.player.openNext("{node7}","");
		}
		if (me.elementMouseDown['button_15']) {
			me.player.openNext("{node6}","");
		}
		if (me.elementMouseDown['button_16']) {
			me.player.openNext("{node9}","");
		}
		if (me.elementMouseDown['button_17']) {
			me.player.openNext("{node2}","");
		}
		if (me.elementMouseDown['button_25']) {
			me.player.openNext("{node16}","");
		}
		if (me.elementMouseDown['button_13']) {
			me.player.openNext("{node11}","");
		}
		if (me.elementMouseDown['button_23']) {
			me.player.openNext("{node14}","");
		}
		if (me.elementMouseDown['button_24']) {
			me.player.openNext("{node15}","");
		}
		if (me.elementMouseDown['button_28']) {
			me.player.openNext("{node17}","");
		}
		if (me.elementMouseDown['button_29']) {
			me.player.openNext("{node18}","");
		}
		if (me.elementMouseDown['button_18']) {
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.ggParameter.rx+=10;me._rectangle_1.ggParameter.ry+=0;
			if (me._rectangle_1.ggParameter.rx>0) me._rectangle_1.ggParameter.rx=0;
			me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
		}
		if (me.elementMouseDown['button_19']) {
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.ggParameter.rx+=-10;me._rectangle_1.ggParameter.ry+=0;
			if (me._rectangle_1.ggParameter.rx<-1860) me._rectangle_1.ggParameter.rx=-1860;
			me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='wiki3') {
			this.__div=document.createElement('div');
			this.__div.ggId="wiki3";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 432px;';
			hs+='top:  150px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_15.style[domTransition]='none';
				me._text_15.style.visibility='hidden';
				me._text_15.ggVisible=false;
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._text_15=document.createElement('div');
			this._text_15__text=document.createElement('div');
			this._text_15.className='ggskin ggskin_textdiv';
			this._text_15.ggTextDiv=this._text_15__text;
			this._text_15.ggId="Text 15";
			this._text_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_15.ggVisible=false;
			this._text_15.className='ggskin ggskin_text';
			this._text_15.ggType='text';
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  17px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.6;';
			hs+='visibility: hidden;';
			this._text_15.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 98px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_15__text.setAttribute('style',hs);
			this._text_15.ggTextDiv.innerHTML=me.hotspot.title;
			this._text_15.appendChild(this._text_15__text);
			this.__div.appendChild(this._text_15);
			this._button_22=document.createElement('div');
			this._button_22.ggId="Button 22";
			this._button_22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_22.ggVisible=true;
			this._button_22.className='ggskin ggskin_button';
			this._button_22.ggType='button';
			hs ='position:absolute;';
			hs+='left: -24px;';
			hs+='top:  -33px;';
			hs+='width: 48px;';
			hs+='height: 48px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.6;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_22.setAttribute('style',hs);
			this._button_22__img=document.createElement('img');
			this._button_22__img.className='ggskin ggskin_button';
			this._button_22__img.setAttribute('src',basePath + 'Icons/button_22.png');
			this._button_22__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_22__img.className='ggskin ggskin_button';
			this._button_22__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_22__img);
			this._button_22.appendChild(this._button_22__img);
			this._button_22.onmouseover=function () {
				me._button_22__img.src=basePath + 'Icons/button_22__o.png';
			}
			this._button_22.onmouseout=function () {
				me._button_22__img.src=basePath + 'Icons/button_22.png';
			}
			this.__div.appendChild(this._button_22);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._text_15.style[domTransition]='none';
					me._text_15.style.visibility='inherit';
					me._text_15.ggVisible=true;
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='wiki') {
			this.__div=document.createElement('div');
			this.__div.ggId="wiki";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 226px;';
			hs+='top:  144px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_13.style[domTransition]='none';
				me._text_13.style.visibility='hidden';
				me._text_13.ggVisible=false;
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._text_13=document.createElement('div');
			this._text_13__text=document.createElement('div');
			this._text_13.className='ggskin ggskin_textdiv';
			this._text_13.ggTextDiv=this._text_13__text;
			this._text_13.ggId="Text 13";
			this._text_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_13.ggVisible=false;
			this._text_13.className='ggskin ggskin_text';
			this._text_13.ggType='text';
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  14px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.6;';
			hs+='visibility: hidden;';
			this._text_13.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 98px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_13__text.setAttribute('style',hs);
			this._text_13.ggTextDiv.innerHTML=me.hotspot.title;
			this._text_13.appendChild(this._text_13__text);
			this.__div.appendChild(this._text_13);
			this._button_20=document.createElement('div');
			this._button_20.ggId="Button 20";
			this._button_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_20.ggVisible=true;
			this._button_20.className='ggskin ggskin_button';
			this._button_20.ggType='button';
			hs ='position:absolute;';
			hs+='left: -24px;';
			hs+='top:  -27px;';
			hs+='width: 48px;';
			hs+='height: 48px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.6;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_20.setAttribute('style',hs);
			this._button_20__img=document.createElement('img');
			this._button_20__img.className='ggskin ggskin_button';
			this._button_20__img.setAttribute('src',basePath + 'Icons/button_20.png');
			this._button_20__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_20__img.className='ggskin ggskin_button';
			this._button_20__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_20__img);
			this._button_20.appendChild(this._button_20__img);
			this._button_20.onmouseover=function () {
				me._button_20__img.src=basePath + 'Icons/button_20__o.png';
			}
			this._button_20.onmouseout=function () {
				me._button_20__img.src=basePath + 'Icons/button_20.png';
			}
			this.__div.appendChild(this._button_20);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._text_13.style[domTransition]='none';
					me._text_13.style.visibility='inherit';
					me._text_13.ggVisible=true;
				}
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="wiki2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 330px;';
			hs+='top:  149px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_14.style[domTransition]='none';
				me._text_14.style.visibility='hidden';
				me._text_14.ggVisible=false;
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._text_14=document.createElement('div');
			this._text_14__text=document.createElement('div');
			this._text_14.className='ggskin ggskin_textdiv';
			this._text_14.ggTextDiv=this._text_14__text;
			this._text_14.ggId="Text 14";
			this._text_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_14.ggVisible=false;
			this._text_14.className='ggskin ggskin_text';
			this._text_14.ggType='text';
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  17px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.6;';
			hs+='visibility: hidden;';
			this._text_14.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 98px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_14__text.setAttribute('style',hs);
			this._text_14.ggTextDiv.innerHTML=me.hotspot.title;
			this._text_14.appendChild(this._text_14__text);
			this.__div.appendChild(this._text_14);
			this._button_21=document.createElement('div');
			this._button_21.ggId="Button 21";
			this._button_21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_21.ggVisible=true;
			this._button_21.className='ggskin ggskin_button';
			this._button_21.ggType='button';
			hs ='position:absolute;';
			hs+='left: -24px;';
			hs+='top:  -33px;';
			hs+='width: 48px;';
			hs+='height: 48px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.6;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_21.setAttribute('style',hs);
			this._button_21__img=document.createElement('img');
			this._button_21__img.className='ggskin ggskin_button';
			this._button_21__img.setAttribute('src',basePath + 'Icons/button_21.png');
			this._button_21__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_21__img.className='ggskin ggskin_button';
			this._button_21__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_21__img);
			this._button_21.appendChild(this._button_21__img);
			this._button_21.onmouseover=function () {
				me._button_21__img.src=basePath + 'Icons/button_21__o.png';
			}
			this._button_21.onmouseout=function () {
				me._button_21__img.src=basePath + 'Icons/button_21.png';
			}
			this.__div.appendChild(this._button_21);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._text_14.style[domTransition]='none';
					me._text_14.style.visibility='inherit';
					me._text_14.ggVisible=true;
				}
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};