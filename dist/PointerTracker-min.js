var PointerTracker=function(){"use strict";class t{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:e(t)&&(this.id=t.pointerId)}getCoalesced(){return"getCoalescedEvents"in this.nativePointer?this.nativePointer.getCoalescedEvents().map(e=>new t(e)):[this]}}const e=t=>self.PointerEvent&&t instanceof PointerEvent,n=()=>{};return class{constructor(i,s){this._element=i,this.startPointers=[],this.currentPointers=[],this._pointerStart=n=>{if(0===n.button&&this._triggerPointerStart(new t(n),n))if(e(n)){(n.target&&"setPointerCapture"in n.target?n.target:this._element).setPointerCapture(n.pointerId),this._element.addEventListener("pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)}else window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)},this._touchStart=e=>{for(const n of Array.from(e.changedTouches))this._triggerPointerStart(new t(n),e)},this._move=e=>{const n=this.currentPointers.slice(),i="changedTouches"in e?Array.from(e.changedTouches).map(e=>new t(e)):[new t(e)],s=[];for(const t of i){const e=this.currentPointers.findIndex(e=>e.id===t.id);-1!==e&&(s.push(t),this.currentPointers[e]=t)}0!==s.length&&this._moveCallback(n,s,e)},this._triggerPointerEnd=(t,e)=>{const n=this.currentPointers.findIndex(e=>e.id===t.id);if(-1===n)return!1;this.currentPointers.splice(n,1),this.startPointers.splice(n,1);const i="touchcancel"===e.type||"pointercancel"===e.type;return this._endCallback(t,e,i),!0},this._pointerEnd=n=>{if(this._triggerPointerEnd(new t(n),n))if(e(n)){if(this.currentPointers.length)return;this._element.removeEventListener("pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=e=>{for(const n of Array.from(e.changedTouches))this._triggerPointerEnd(new t(n),e)};const{start:r=(()=>!0),move:o=n,end:h=n}=s;this._startCallback=r,this._moveCallback=o,this._endCallback=h,self.PointerEvent?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.addEventListener("pointerdown",this._pointerStart),this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd),this._element.addEventListener("pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd),window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return!!this._startCallback(t,e)&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}}}();
