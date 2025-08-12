var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

import{c as v,g as F}from"./_commonjsHelpers-042e6b4d.js";function M(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var L=M,B=typeof v=="object"&&v&&v.Object===Object&&v,D=B,U=D,H=typeof self=="object"&&self&&self.Object===Object&&self,X=U||H||Function("return this")(),N=X,q=N,z=function(){return q.Date.now()},J=z,K=/\s/;function Q(e){for(var t=e.length;t--&&K.test(e.charAt(t)););return t}var V=Q,Y=V,Z=/^\s+/;function ee(e){return e&&e.slice(0,Y(e)+1).replace(Z,"")}var te=ee,re=N,ne=re.Symbol,w=ne,_=w,R=Object.prototype,ie=R.hasOwnProperty,ae=R.toString,l=_?_.toStringTag:void 0;function oe(e){var t=ie.call(e,l),i=e[l];try{e[l]=void 0;var a=!0}catch{}var c=ae.call(e);return a&&(t?e[l]=i:delete e[l]),c}var ce=oe,fe=Object.prototype,se=fe.toString;function ue(e){return se.call(e)}var be=ue,h=w,de=ce,me=be,le="[object Null]",ge="[object Undefined]",I=h?h.toStringTag:void 0;function ve(e){return e==null?e===void 0?ge:le:I&&I in Object(e)?de(e):me(e)}var Te=ve;function ye(e){return e!=null&&typeof e=="object"}var je=ye,Se=Te,$e=je,Oe="[object Symbol]";function pe(e){return typeof e=="symbol"||$e(e)&&Se(e)==Oe}var xe=pe,_e=te,E=L,he=xe,k=0/0,Ie=/^[-+]0x[0-9a-f]+$/i,Ee=/^0b[01]+$/i,ke=/^0o[0-7]+$/i,Ge=parseInt;function Le(e){if(typeof e=="number")return e;if(he(e))return k;if(E(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=E(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=_e(e);var i=Ee.test(e);return i||ke.test(e)?Ge(e.slice(2),i?2:8):Ie.test(e)?k:+e}var Ne=Le,we=L,S=J,G=Ne,Re="Expected a function",We=Math.max,Ce=Math.min;function Pe(e,t,i){var a,c,u,s,n,f,b=0,$=!1,d=!1,T=!0;if(typeof e!="function")throw new TypeError(Re);t=G(t)||0,we(i)&&($=!!i.leading,d="maxWait"in i,u=d?We(G(i.maxWait)||0,t):u,T="trailing"in i?!!i.trailing:T);function y(r){var o=a,m=c;return a=c=void 0,b=r,s=e.apply(m,o),s}function W(r){return b=r,n=setTimeout(g,t),$?y(r):s}function C(r){var o=r-f,m=r-b,x=t-o;return d?Ce(x,u-m):x}function O(r){var o=r-f,m=r-b;return f===void 0||o>=t||o<0||d&&m>=u}function g(){var r=S();if(O(r))return p(r);n=setTimeout(g,C(r))}function p(r){return n=void 0,T&&a?y(r):(a=c=void 0,s)}function P(){n!==void 0&&clearTimeout(n),b=0,a=f=c=n=void 0}function A(){return n===void 0?s:p(S())}function j(){var r=S(),o=O(r);if(a=arguments,c=this,f=r,o){if(n===void 0)return W(f);if(d)return clearTimeout(n),n=setTimeout(g,t),y(f)}return n===void 0&&(n=setTimeout(g,t)),s}return j.cancel=P,j.flush=A,j}var Ae=Pe;const Me=F(Ae);export{Me as a,Ae as d,L as i};
//# sourceMappingURL=debounce-1cf2551d.js.map


}
/*
     FILE ARCHIVED ON 02:12:24 Sep 20, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:38:21 Aug 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.495
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 211.575
  LoadShardBlock: 170.485 (3)
  PetaboxLoader3.datanode: 198.276 (5)
  load_resource: 499.779 (2)
  PetaboxLoader3.resolve: 411.048 (2)
*/