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

import{i as L,d as T,b as D,c as N,S as O,_ as r,e as g,w as q,a as R,L as z,l as y,u as w,o as _}from"./chunk.WLV3FVBR-54d5a69f.js";import{i as H,n as m,x,e as P}from"./class-map-f44a9b2f.js";var W=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},k=new WeakMap;function S(e){let t=k.get(e);return t||(t=window.getComputedStyle(e,null),k.set(e,t)),t}function $(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=S(e);return t.visibility!=="hidden"&&t.display!=="none"}function K(e){const t=S(e),{overflowY:i,overflowX:o}=t;return i==="scroll"||o==="scroll"?!0:i!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&i==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function M(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!$(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:K(e)}function I(e,t){var i;return((i=e.getRootNode({composed:!0}))==null?void 0:i.host)!==t}function A(e){const t=new WeakMap,i=[];function o(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||t.has(s))return;t.set(s,!0),!i.includes(s)&&M(s)&&i.push(s),s instanceof HTMLSlotElement&&I(s,e)&&s.assignedElements({flatten:!0}).forEach(a=>{o(a)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&o(s.shadowRoot)}for(const a of s.children)o(a)}return o(e),i.sort((s,a)=>{const d=Number(s.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-d})}function*b(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*L(b(e.shadowRoot.activeElement))))}function U(){return[...b()].pop()}var c=[],B=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=U();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=A(this.element);let a=s.findIndex(l=>l===o);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){a+d>=s.length?a=0:a+d<0?a=s.length-1:a+=d,this.previousFocus=this.currentFocus;const l=s[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;t.preventDefault(),this.currentFocus=l,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const v=[...b()];if(v.includes(this.currentFocus)||!v.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){c.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){c=c.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return c[c.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=A(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],o=this.tabDirection==="forward"?t:i;typeof(o==null?void 0:o.focus)=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},V=H`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,F=new Map,X=new WeakMap;function Y(e){return e??{keyframes:[],options:{duration:0}}}function C(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function f(e,t){F.set(e,Y(t))}function h(e,t,i){const o=X.get(e);if(o!=null&&o[t])return C(o[t],i.dir);const s=F.get(t);return s?C(s,i.dir):{keyframes:[],options:{duration:0}}}function E(e,t){return new Promise(i=>{function o(s){s.target===e&&(e.removeEventListener(t,o),i())}e.addEventListener(t,o)})}function u(e,t,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,T(D({},i),{duration:j()?0:i.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})})}function Q(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function j(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function p(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{t.cancel(),requestAnimationFrame(i)})))}var n=class extends R{constructor(){super(...arguments),this.hasSlotController=new W(this,"footer"),this.localize=new z(this),this.modal=new B(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),y(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),w(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=h(this,"dialog.denyClose",{dir:this.localize.dir()});u(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),y(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([p(this.dialog),p(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=h(this,"dialog.show",{dir:this.localize.dir()}),i=h(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([u(this.panel,t.keyframes,t.options),u(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([p(this.dialog),p(this.overlay)]);const e=h(this,"dialog.hide",{dir:this.localize.dir()}),t=h(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([u(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),u(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,w(this);const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,E(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,E(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${P({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_(this.noHeader?this.label:void 0)}
          aria-labelledby=${_(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":x`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};n.styles=[N,V];n.dependencies={"sl-icon-button":O};r([g(".dialog")],n.prototype,"dialog",2);r([g(".dialog__panel")],n.prototype,"panel",2);r([g(".dialog__overlay")],n.prototype,"overlay",2);r([m({type:Boolean,reflect:!0})],n.prototype,"open",2);r([m({reflect:!0})],n.prototype,"label",2);r([m({attribute:"no-header",type:Boolean,reflect:!0})],n.prototype,"noHeader",2);r([q("open",{waitUntilFirstUpdate:!0})],n.prototype,"handleOpenChange",1);f("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});f("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});f("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});f("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});f("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});n.define("sl-dialog");document.addEventListener("click",e=>{e.target.closest("[data-sl-dialog-show]")&&document.querySelector(`sl-dialog#${e.target.dataset.slDialogShow}`).show(),e.target.closest("[data-sl-dialog-hide]")&&e.target.closest("sl-dialog").hide()});export{W as H,p as a,u as b,h as g,Q as p,f as s,E as w};
//# sourceMappingURL=sl-dialog-show-912eba60.js.map


}
/*
     FILE ARCHIVED ON 02:12:24 Sep 20, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:38:03 Aug 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.919
  exclusion.robots: 0.032
  exclusion.robots.policy: 0.013
  esindex: 0.015
  cdx.remote: 1423.36
  LoadShardBlock: 160.889 (3)
  PetaboxLoader3.resolve: 439.692 (4)
  PetaboxLoader3.datanode: 90.272 (5)
  load_resource: 411.436 (2)
*/