/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, forwardRef, NgZone, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import * as SimpleMDE from 'simplemde';
// get access to the marked class under simplemde
import * as marked from 'marked';
/* tslint:disable-next-line */
/** @type {?} */
let SimpleMDECss = require('simplemde/dist/simplemde.min.css');
/** @type {?} */
const noop = () => {
    // empty method
};
const ɵ0 = noop;
export class TdTextEditorComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _zone
     * @param {?} _domSanitizer
     * @param {?} _document
     */
    constructor(_elementRef, _zone, _domSanitizer, _document) {
        this._elementRef = _elementRef;
        this._zone = _zone;
        this._domSanitizer = _domSanitizer;
        this._document = _document;
        this._value = '';
        this._fromEditor = false;
        this.options = {};
        /* tslint:disable-next-line */
        this.propagateChange = (_) => { };
        this.onTouched = () => noop;
    }
    /**
     * value?: string
     * Value in the Editor after async getEditorContent was called
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        if (this._simpleMDE) {
            if (!this._fromEditor) {
                this._simpleMDE.value(value);
            }
            this.propagateChange(this._value);
            this._fromEditor = false;
            this._zone.run(() => (this._value = value));
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    get simpleMDE() {
        return this._simpleMDE;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = !value ? '' : value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this._document) {
            /** @type {?} */
            let styleElement = this._document.createElement('style');
            styleElement.innerHTML = (/** @type {?} */ (this._domSanitizer.bypassSecurityTrustHtml(String(SimpleMDECss))));
            this._document.head.appendChild(styleElement);
        }
        this.options.element = this.textarea.nativeElement;
        // If content entered is html then don't evaluate it, prevent xss vulnerabilities
        marked.setOptions({ sanitize: true });
        this._simpleMDE = new SimpleMDE(this.options);
        this._simpleMDE.value(this.value);
        this._simpleMDE.codemirror.on('change', () => {
            this._fromEditor = true;
            this.writeValue(this._simpleMDE.value());
        });
    }
    /* Wrapped function provided by SimpleMDE */
    /**
     * @return {?}
     */
    isPreviewActive() {
        return this._simpleMDE.isPreviewActive();
    }
    /**
     * @return {?}
     */
    isSideBySideActive() {
        return this._simpleMDE.isSideBySideActive();
    }
    /**
     * @return {?}
     */
    isFullscreenActive() {
        return this._simpleMDE.isFullscreenActive();
    }
    /**
     * @return {?}
     */
    clearAutosavedValue() {
        this._simpleMDE.clearAutosavedValue();
    }
    /**
     * @return {?}
     */
    toTextArea() {
        this._simpleMDE.toTextArea();
    }
    /**
     * @return {?}
     */
    toggleBold() {
        this._simpleMDE.toggleBold();
    }
    /**
     * @return {?}
     */
    toggleItalic() {
        this._simpleMDE.toggleItalic();
    }
    /**
     * @return {?}
     */
    toggleStrikethrough() {
        this._simpleMDE.toggleStrikethrough();
    }
    /**
     * @return {?}
     */
    toggleHeadingSmaller() {
        this._simpleMDE.toggleHeadingSmaller();
    }
    /**
     * @return {?}
     */
    toggleHeadingBigger() {
        this._simpleMDE.toggleHeadingBigger();
    }
    /**
     * @return {?}
     */
    toggleHeading1() {
        this._simpleMDE.toggleHeading1();
    }
    /**
     * @return {?}
     */
    toggleHeading2() {
        this._simpleMDE.toggleHeading2();
    }
    /**
     * @return {?}
     */
    toggleHeading3() {
        this._simpleMDE.toggleHeading3();
    }
    /**
     * @return {?}
     */
    toggleCodeBlock() {
        this._simpleMDE.toggleCodeBlock();
    }
    /**
     * @return {?}
     */
    toggleBlockquote() {
        this._simpleMDE.toggleBlockquote();
    }
    /**
     * @return {?}
     */
    toggleUnorderedList() {
        this._simpleMDE.toggleUnorderedList();
    }
    /**
     * @return {?}
     */
    toggleOrderedList() {
        this._simpleMDE.toggleOrderedList();
    }
    /**
     * @return {?}
     */
    cleanBlock() {
        this._simpleMDE.cleanBlock();
    }
    /**
     * @return {?}
     */
    drawLink() {
        this._simpleMDE.drawLink();
    }
    /**
     * @return {?}
     */
    drawImage() {
        this._simpleMDE.drawImage();
    }
    /**
     * @return {?}
     */
    drawTable() {
        this._simpleMDE.drawTable();
    }
    /**
     * @return {?}
     */
    drawHorizontalRule() {
        this._simpleMDE.drawHorizontalRule();
    }
    /**
     * @return {?}
     */
    togglePreview() {
        this._simpleMDE.togglePreview();
    }
    /**
     * @return {?}
     */
    toggleSideBySide() {
        this._simpleMDE.toggleSideBySide();
    }
    /**
     * @return {?}
     */
    toggleFullScreen() {
        this._simpleMDE.toggleFullScreen();
    }
}
TdTextEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-text-editor',
                template: "<div>\n  <textarea #simplemde></textarea>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdTextEditorComponent),
                        multi: true,
                    },
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
TdTextEditorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
TdTextEditorComponent.propDecorators = {
    textarea: [{ type: ViewChild, args: ['simplemde',] }],
    options: [{ type: Input }],
    value: [{ type: Input, args: ['value',] }]
};
if (false) {
    /** @type {?} */
    TdTextEditorComponent.prototype._value;
    /** @type {?} */
    TdTextEditorComponent.prototype._simpleMDE;
    /** @type {?} */
    TdTextEditorComponent.prototype._fromEditor;
    /** @type {?} */
    TdTextEditorComponent.prototype.textarea;
    /** @type {?} */
    TdTextEditorComponent.prototype.options;
    /** @type {?} */
    TdTextEditorComponent.prototype.propagateChange;
    /** @type {?} */
    TdTextEditorComponent.prototype.onTouched;
    /** @type {?} */
    TdTextEditorComponent.prototype._elementRef;
    /** @type {?} */
    TdTextEditorComponent.prototype._zone;
    /** @type {?} */
    TdTextEditorComponent.prototype._domSanitizer;
    /** @type {?} */
    TdTextEditorComponent.prototype._document;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L3RleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsidGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFdBQVcsQ0FBQzs7QUFFdkMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7OztJQUc3QixZQUFZLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDOztNQUV4RCxJQUFJLEdBQVEsR0FBRyxFQUFFO0lBQ3JCLGVBQWU7QUFDakIsQ0FBQzs7QUFjRCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBUWhDLFlBQ1UsV0FBdUIsRUFDdkIsS0FBYSxFQUNiLGFBQTJCLEVBQ1QsU0FBYztRQUhoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDVCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBWGxDLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFFcEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHNUIsWUFBTyxHQUFRLEVBQUUsQ0FBQzs7UUFVM0Isb0JBQWUsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJ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QXVCOztJQVJyQiw0Q0FBK0I7O0lBQy9CLHNDQUFxQjs7SUFDckIsOENBQW1DOztJQUNuQywwQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE5nWm9uZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCAqIGFzIFNpbXBsZU1ERSBmcm9tICdzaW1wbGVtZGUnO1xuLy8gZ2V0IGFjY2VzcyB0byB0aGUgbWFya2VkIGNsYXNzIHVuZGVyIHNpbXBsZW1kZVxuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5kZWNsYXJlIGNvbnN0IHJlcXVpcmU6IGFueTtcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xubGV0IFNpbXBsZU1ERUNzcyA9IHJlcXVpcmUoJ3NpbXBsZW1kZS9kaXN0L3NpbXBsZW1kZS5taW4uY3NzJyk7XG5cbmNvbnN0IG5vb3A6IGFueSA9ICgpID0+IHtcbiAgLy8gZW1wdHkgbWV0aG9kXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC10ZXh0LWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRUZXh0RWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkVGV4dEVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zaW1wbGVNREU6IGFueTtcbiAgcHJpdmF0ZSBfZnJvbUVkaXRvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3NpbXBsZW1kZScpIHRleHRhcmVhOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9kb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICApIHt9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiBub29wO1xuXG4gIC8qKlxuICAgKiB2YWx1ZT86IHN0cmluZ1xuICAgKiBWYWx1ZSBpbiB0aGUgRWRpdG9yIGFmdGVyIGFzeW5jIGdldEVkaXRvckNvbnRlbnQgd2FzIGNhbGxlZFxuICAgKi9cbiAgQElucHV0KCd2YWx1ZScpXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fc2ltcGxlTURFKSB7XG4gICAgICBpZiAoIXRoaXMuX2Zyb21FZGl0b3IpIHtcbiAgICAgICAgdGhpcy5fc2ltcGxlTURFLnZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuX2Zyb21FZGl0b3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+ICh0aGlzLl92YWx1ZSA9IHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgZ2V0IHNpbXBsZU1ERSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGVNREU7XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSAhdmFsdWUgPyAnJyA6IHZhbHVlO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICBsZXQgc3R5bGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gPHN0cmluZz50aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoU3RyaW5nKFNpbXBsZU1ERUNzcykpO1xuICAgICAgdGhpcy5fZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuZWxlbWVudCA9IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIElmIGNvbnRlbnQgZW50ZXJlZCBpcyBodG1sIHRoZW4gZG9uJ3QgZXZhbHVhdGUgaXQsIHByZXZlbnQgeHNzIHZ1bG5lcmFiaWxpdGllc1xuICAgIG1hcmtlZC5zZXRPcHRpb25zKHsgc2FuaXRpemU6IHRydWUgfSk7XG4gICAgdGhpcy5fc2ltcGxlTURFID0gbmV3IFNpbXBsZU1ERSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuX3NpbXBsZU1ERS52YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9zaW1wbGVNREUuY29kZW1pcnJvci5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5fZnJvbUVkaXRvciA9IHRydWU7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5fc2ltcGxlTURFLnZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogV3JhcHBlZCBmdW5jdGlvbiBwcm92aWRlZCBieSBTaW1wbGVNREUgKi9cblxuICBpc1ByZXZpZXdBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZU1ERS5pc1ByZXZpZXdBY3RpdmUoKTtcbiAgfVxuXG4gIGlzU2lkZUJ5U2lkZUFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlTURFLmlzU2lkZUJ5U2lkZUFjdGl2ZSgpO1xuICB9XG5cbiAgaXNGdWxsc2NyZWVuQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGVNREUuaXNGdWxsc2NyZWVuQWN0aXZlKCk7XG4gIH1cblxuICBjbGVhckF1dG9zYXZlZFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5jbGVhckF1dG9zYXZlZFZhbHVlKCk7XG4gIH1cblxuICB0b1RleHRBcmVhKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b1RleHRBcmVhKCk7XG4gIH1cblxuICB0b2dnbGVCb2xkKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVCb2xkKCk7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUl0YWxpYygpO1xuICB9XG5cbiAgdG9nZ2xlU3RyaWtldGhyb3VnaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlU3RyaWtldGhyb3VnaCgpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZ1NtYWxsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmdTbWFsbGVyKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nQmlnZ2VyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nQmlnZ2VyKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nMSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlSGVhZGluZzEoKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmcyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nMigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZzMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmczKCk7XG4gIH1cblxuICB0b2dnbGVDb2RlQmxvY2soKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUNvZGVCbG9jaygpO1xuICB9XG5cbiAgdG9nZ2xlQmxvY2txdW90ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlQmxvY2txdW90ZSgpO1xuICB9XG5cbiAgdG9nZ2xlVW5vcmRlcmVkTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlVW5vcmRlcmVkTGlzdCgpO1xuICB9XG5cbiAgdG9nZ2xlT3JkZXJlZExpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZU9yZGVyZWRMaXN0KCk7XG4gIH1cblxuICBjbGVhbkJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5jbGVhbkJsb2NrKCk7XG4gIH1cblxuICBkcmF3TGluaygpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0xpbmsoKTtcbiAgfVxuXG4gIGRyYXdJbWFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0ltYWdlKCk7XG4gIH1cblxuICBkcmF3VGFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLmRyYXdUYWJsZSgpO1xuICB9XG5cbiAgZHJhd0hvcml6b250YWxSdWxlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5kcmF3SG9yaXpvbnRhbFJ1bGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVByZXZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVByZXZpZXcoKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVCeVNpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVNpZGVCeVNpZGUoKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUZ1bGxTY3JlZW4oKTtcbiAgfVxufVxuIl19