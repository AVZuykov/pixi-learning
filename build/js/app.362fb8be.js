!function(){"use strict";var e,t={9622:function(e,t,n){var r=n(8979),i=r.W20,o=r.jyi,u=r.Thl,s=r.vB5,a=r.uFK,c=r.KgH,f=r.aNw;function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=new u({width:window.innerWidth,height:window.innerHeight,backgroundAlpha:0,resolution:1}),document.body.appendChild(this.renderer.view),this.renderer.view.style.position="absolute",this.renderer.view.style.display="block",this.resizeTo=window,this.ticker=new s,this.stage=new i,this.ticker.add(this.render.bind(this),a.LOW),this.ticker.start()}var t,n;return t=e,(n=[{key:"screen",get:function(){return this.renderer.screen}},{key:"render",value:function(){this.renderer.render(this.stage)}},{key:"destroy",value:function(e){this.stage.removeChild(e)}}])&&l(t.prototype,n),e}());function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}p.loader=new f,p.loader.add("src/res/megaman-atlas.json"),p.loader.load((function(){p.stage.emit("loaded")})),n(9601);var h=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p.stage.on("loaded",(function(){t.createModels()}))}var t,n;return t=e,(n=[{key:"createModels",value:function(){var e=p.loader.resources["src/res/megaman-atlas.json"].textures;Object.assign(this,{stay:[{texture:e["stay_1.png"]},{texture:e["stay_2.png"]}],stayAndFire:[{texture:e["stay-and-fire_1.png"]}],run:[{texture:e["run_1.png"]},{texture:e["run_2.png"]},{texture:e["run_1.png"]},{texture:e["run_3.png"]}],runAndFire:[{texture:e["run-and-fire_1.png"]},{texture:e["run-and-fire_2.png"]},{texture:e["run-and-fire_1.png"]},{texture:e["run-and-fire_3.png"]}],fireball:[{texture:e["fireball_1.png"]}],enemy:[{texture:e["enemy.png"]}]})}}])&&y(t.prototype,n),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function w(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}p.visual=new h,n(8304),n(489),n(1539),n(2419),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948),n(1249),n(4747),n(5218);var S=p.visual,x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(s,e);var t,n,r,i,u=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(i){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function s(e,t,n,r,i){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(a=u.call(this)).speed=10,a.x=e,a.y=t,a.vx=r,a.vy=i,a.direction=n,a.fireball=new o(S.fireball[0].texture),a.addChild(a.fireball),p.ticker.add((function(e){(a.x>p.screen.width||a.x<0)&&p.destroy(m(a)),a.update(e)})),a}return t=s,(n=[{key:"update",value:function(){this.x+=this.speed*this.direction+this.vx,this.y+=this.vy}}])&&v(t.prototype,n),s}(i);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function k(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var A=p.visual,R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(s,e);var t,n,r,i,u=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(i){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function s(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(r=u.call(this)).speed=10,r.x=e,r.y=t,r.direction=n,r.fireball=new o(A.fireball[0].texture),r.fireball.anchor.set(0,.5),r.fireball.scale.set(n,n),r.fireball.x=-15*n,r.addChild(r.fireball),p.ticker.add((function(){r.update()})),r}return t=s,(n=[{key:"update",value:function(){this.height<500?(this.x+=1.1*this.direction,this.scale.x+=.08,this.scale.y+=.08):this.fireball.width+=12}}])&&_(t.prototype,n),s}(i);function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];P(this,e),this.values=t,this.isDown=!1,this.isUp=!0,this.cancel=!1,this.once=r,this.press=void 0,this.release=void 0,this.downListener=this.downHandler.bind(this),this.upListener=this.upHandler.bind(this),t.forEach((function(){window.addEventListener("keydown",n.downListener,!1),window.addEventListener("keyup",n.upListener,!1)}))}var t,n;return t=e,(n=[{key:"downHandler",value:function(e){this.values.some((function(t){return t===e.key}))&&(this.isUp&&this.press&&this.press(),this.isDisable=!1,this.isDown=!0,this.isUp=!1,e.preventDefault())}},{key:"upHandler",value:function(e){this.values.some((function(t){return t===e.key}))&&(this.isDown&&this.release&&this.release(),this.isDown=!1,this.isUp=!0,e.preventDefault())}},{key:"disable",value:function(){this.isDown&&this.release&&(this.release(),this.isDown=!1,this.isUp=!0)}},{key:"unsubscribe",value:function(){window.removeEventListener("keydown",this.downListener),window.removeEventListener("keyup",this.upListener)}}])&&D(t.prototype,n),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function B(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var I=p.visual,H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(s,e);var t,n,r,i,u=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(i){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=u.call(this)).vx=0,e.vy=0,e.speed=5,e.firespeed=300,e.animationSpeed=.12,e.lastFrame=0,e.charge=void 0,e.direction=1,e.stayedSprite=new c([{texture:I.stay[0].texture,time:2e3},{texture:I.stay[1].texture,time:150}]),e.stayedSprite.play(),e.stayAndFireSprite=new o(I.stayAndFire[0].texture),e.stayAndFireSprite.visible=!1,e.runningSprite=new c(I.run.map((function(e){return e.texture}))),e.runningSprite.visible=!1,e.runAndFireSprite=new c(I.runAndFire.map((function(e){return e.texture}))),e.runAndFireSprite.visible=!1,e.runningSprite.animationSpeed=e.animationSpeed,e.runAndFireSprite.animationSpeed=e.animationSpeed,e.centered([e.runAndFireSprite,e.runningSprite,e.stayAndFireSprite,e.stayedSprite]),e.addChild(e.stayedSprite),e.addChild(e.stayAndFireSprite),e.addChild(e.runningSprite),e.addChild(e.runAndFireSprite),p.ticker.add((function(t){e.update(t)}));var t=new E(["Ф","A","ф","a","ArrowLeft"]),n=new E(["Ц","W","ц","w","ArrowUp"]),r=new E(["В","D","в","d","ArrowRight"]),i=new E(["Ы","S","ы","s","ArrowDown"]),a=new E([" "]),f=new E(["Shift"],!0),l=[t,n,r,i,a];return a.press=function(){e.fire(),e.fireInterval=setInterval((function(){return e.fire()}),e.firespeed),0===e.vx&&0===e.vy?e.stayAndFire():e.runAndFire()},a.release=function(){clearInterval(e.fireInterval),0!==e.vx||0!==e.vy?e.run():e.stay()},f.press=function(){l.forEach((function(e){e.disable()})),clearInterval(e.fireInterval),e.stayAndFire(),e.charge=e.crhargeFire()},f.release=function(){e.cancelCharge(e.charge),e.stay()},t.press=function(){e.vx+=-e.speed,e.direction=-1,e.isRun(a.isDown)},t.release=function(){e.vx+=e.speed,e.isRun(a.isDown)},n.press=function(){e.vy+=-e.speed,e.isRun(a.isDown)},n.release=function(){e.vy+=e.speed,e.isRun(a.isDown)},r.press=function(){e.vx+=e.speed,e.direction=1,e.isRun(a.isDown)},r.release=function(){e.vx+=-e.speed,e.isRun(a.isDown)},i.press=function(){e.vy+=e.speed,e.isRun(a.isDown)},i.release=function(){e.vy+=-e.speed,e.isRun(a.isDown)},e}return t=s,(n=[{key:"isRun",value:function(e){0!==this.vy||0!==this.vx?(0!==this.vx&&(this.scale.x=this.direction),e?this.runAndFire():this.run()):e?this.stayAndFire():this.stay(),this.cancelCharge(this.charge)}},{key:"centered",value:function(e){e.forEach((function(e){e.anchor.set(.5,.5)}))}},{key:"fire",value:function(){this.cancelCharge(this.charge),p.stage.addChild(new x(this.x+88*this.direction,this.y,this.direction,this.vx,this.vy))}},{key:"crhargeFire",value:function(){var e=new R(this.x+88*this.direction,this.y,this.direction);return p.stage.addChild(e),e}},{key:"cancelCharge",value:function(e){p.stage.removeChild(e)}},{key:"runAndFire",value:function(){this.stayedSprite.visible=!1,this.runAndFireSprite.visible=!0,this.stayAndFireSprite.visible=!1,this.runningSprite.visible=!1,this.runAndFireSprite.gotoAndPlay(0),this.lastFrame=this.runAndFireSprite.currentFrame,this.runningSprite.stop()}},{key:"stayAndFire",value:function(){this.stayedSprite.visible=!1,this.stayAndFireSprite.visible=!0,this.runAndFireSprite.visible=!1,this.runningSprite.visible=!1,this.runAndFireSprite.gotoAndPlay(this.lastFrame),this.lastFrame=0,this.runningSprite.stop()}},{key:"run",value:function(){this.stayedSprite.visible=!1,this.runAndFireSprite.visible=!1,this.runningSprite.visible=!0,this.stayAndFireSprite.visible=!1,this.runningSprite.gotoAndPlay(this.lastFrame),this.lastFrame=this.runAndFireSprite.currentFrame,this.runAndFireSprite.stop()}},{key:"stay",value:function(){this.stayedSprite.visible=!0,this.runningSprite.visible=!1,this.stayAndFireSprite.visible=!1,this.runAndFireSprite.visible=!1,this.runningSprite.stop(),this.lastFrame=0,this.runAndFireSprite.stop()}},{key:"update",value:function(){this.x+=this.vx,this.y+=this.vy}}])&&T(t.prototype,n),s}(i);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},K(e,t)}function q(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var N=p.visual,G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(s,e);var t,n,r,i,u=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(i){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=u.call(this)).aim=e,t.enemy=new o(N.enemy[0].texture),t.speed=1,t.enemy.anchor.set(.5,.5),t.xDirection=e.x-t.x>0?1:-1,t.yDirection=e.y-t.x>0?1:-1,t.enemyScale=1.5*Math.random()+.5,t.enemy.scale.set(t.enemyScale),t.addChild(t.enemy),setInterval((function(){Math.sqrt(Math.pow(t.aim.x-t.x,2)+Math.pow(t.aim.y-t.y,2))<100?t.speed=0:t.speed=.5}),1e3),p.ticker.add((function(e){t.update(e)})),t}return t=s,(n=[{key:"setDirection",value:function(){var e=this.aim.x-this.x,t=this.aim.y-this.y;this.xDirection=e>10||e<-10?e>0?1:-1:0,this.enemy.scale.set(-this.xDirection*this.enemyScale||this.enemyScale,this.enemyScale),this.yDirection=0!==t?t>0?1:-1:0}},{key:"update",value:function(){this.x+=this.speed*this.xDirection,this.y+=this.speed*this.yDirection,this.setDirection()}}])&&W(t.prototype,n),s}(i);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function X(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Y(e)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(u,e);var t,n,r,i,o=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(r);if(i){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),e=o.call(this),p.stage.on("loaded",(function(){e.createWorld(),p.stage.addChild(Y(e))})),e}return t=u,(n=[{key:"createWorld",value:function(){var e=this,t=new H;t.x=p.screen.width/2,t.y=p.screen.height/2;var n=0;setTimeout((function(){setInterval((function(){if(n<10){n++;var r=new G(t);r.x=p.screen.width*Math.random(),r.y=p.screen.height*Math.random(),e.addChild(r)}}),800)}),8e3),this.addChild(t)}}])&&Q(t.prototype,n),u}(i);p.world=new $}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=t,e=[],r.O=function(t,n,i,o){if(!n){var u=1/0;for(f=0;f<e.length;f++){n=e[f][0],i=e[f][1],o=e[f][2];for(var s=!0,a=0;a<n.length;a++)(!1&o||u>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(s=!1,o<u&&(u=o));if(s){e.splice(f--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,i,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,u=n[0],s=n[1],a=n[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(a)var f=a(r)}for(t&&t(n);c<u.length;c++)o=u[c],r.o(e,o)&&e[o]&&e[o][0](),e[u[c]]=0;return r.O(f)},n=self.webpackChunkwebpack_starter=self.webpackChunkwebpack_starter||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=r.O(void 0,[370],(function(){return r(9622)}));i=r.O(i)}();
//# sourceMappingURL=app.362fb8be.js.map