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
            this._zone.run(() => this._value = value);
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
        this.value = (!value) ? '' : value;
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
                template: "<div>\n<textarea #simplemde></textarea>\n</div>\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdTextEditorComponent),
                        multi: true,
                    }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L3RleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsidGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFdBQVcsQ0FBQzs7QUFFdkMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7OztJQUc3QixZQUFZLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDOztNQUV4RCxJQUFJLEdBQVEsR0FBRyxFQUFFO0lBQ3JCLGVBQWU7QUFDakIsQ0FBQzs7QUFZRCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBU2hDLFlBQW9CLFdBQXVCLEVBQ3ZCLEtBQWEsRUFDYixhQUEyQixFQUNULFNBQWM7UUFIaEMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQ1QsY0FBUyxHQUFULFNBQVMsQ0FBSztRQVY1QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzVCLFlBQU8sR0FBUSxFQUFFLENBQUM7O1FBUTNCLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNqQyxjQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFB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Qjs7SUFQWCw0Q0FBK0I7O0lBQy9CLHNDQUFxQjs7SUFDckIsOENBQW1DOztJQUNuQywwQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE5nWm9uZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCAqIGFzIFNpbXBsZU1ERSBmcm9tICdzaW1wbGVtZGUnO1xuLy8gZ2V0IGFjY2VzcyB0byB0aGUgbWFya2VkIGNsYXNzIHVuZGVyIHNpbXBsZW1kZVxuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5kZWNsYXJlIGNvbnN0IHJlcXVpcmU6IGFueTtcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xubGV0IFNpbXBsZU1ERUNzcyA9IHJlcXVpcmUoJ3NpbXBsZW1kZS9kaXN0L3NpbXBsZW1kZS5taW4uY3NzJyk7XG5cbmNvbnN0IG5vb3A6IGFueSA9ICgpID0+IHtcbiAgLy8gZW1wdHkgbWV0aG9kXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC10ZXh0LWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuc2NzcycgXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkVGV4dEVkaXRvckNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRleHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zaW1wbGVNREU6IGFueTtcbiAgcHJpdmF0ZSBfZnJvbUVkaXRvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3NpbXBsZW1kZScpIHRleHRhcmVhOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICAgICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7fVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4gbm9vcDtcblxuICAvKipcbiAgICogdmFsdWU/OiBzdHJpbmdcbiAgICogVmFsdWUgaW4gdGhlIEVkaXRvciBhZnRlciBhc3luYyBnZXRFZGl0b3JDb250ZW50IHdhcyBjYWxsZWRcbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKVxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX3NpbXBsZU1ERSkge1xuICAgICAgaWYgKCF0aGlzLl9mcm9tRWRpdG9yKSB7XG4gICAgICAgIHRoaXMuX3NpbXBsZU1ERS52YWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLl9mcm9tRWRpdG9yID0gZmFsc2U7XG4gICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLl92YWx1ZSA9IHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIGdldCBzaW1wbGVNREUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlTURFO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gKCF2YWx1ZSkgPyAnJyA6IHZhbHVlO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICBsZXQgc3R5bGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gPHN0cmluZz50aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoU3RyaW5nKFNpbXBsZU1ERUNzcykpO1xuICAgICAgdGhpcy5fZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuZWxlbWVudCA9IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIElmIGNvbnRlbnQgZW50ZXJlZCBpcyBodG1sIHRoZW4gZG9uJ3QgZXZhbHVhdGUgaXQsIHByZXZlbnQgeHNzIHZ1bG5lcmFiaWxpdGllc1xuICAgIG1hcmtlZC5zZXRPcHRpb25zKHsgc2FuaXRpemU6IHRydWUgfSk7XG4gICAgdGhpcy5fc2ltcGxlTURFID0gbmV3IFNpbXBsZU1ERSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuX3NpbXBsZU1ERS52YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9zaW1wbGVNREUuY29kZW1pcnJvci5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5fZnJvbUVkaXRvciA9IHRydWU7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5fc2ltcGxlTURFLnZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogV3JhcHBlZCBmdW5jdGlvbiBwcm92aWRlZCBieSBTaW1wbGVNREUgKi9cblxuICBpc1ByZXZpZXdBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZU1ERS5pc1ByZXZpZXdBY3RpdmUoKTtcbiAgfVxuXG4gIGlzU2lkZUJ5U2lkZUFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlTURFLmlzU2lkZUJ5U2lkZUFjdGl2ZSgpO1xuICB9XG5cbiAgaXNGdWxsc2NyZWVuQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGVNREUuaXNGdWxsc2NyZWVuQWN0aXZlKCk7XG4gIH1cblxuICBjbGVhckF1dG9zYXZlZFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5jbGVhckF1dG9zYXZlZFZhbHVlKCk7XG4gIH1cblxuICB0b1RleHRBcmVhKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b1RleHRBcmVhKCk7XG4gIH1cblxuICB0b2dnbGVCb2xkKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVCb2xkKCk7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUl0YWxpYygpO1xuICB9XG5cbiAgdG9nZ2xlU3RyaWtldGhyb3VnaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlU3RyaWtldGhyb3VnaCgpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZ1NtYWxsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmdTbWFsbGVyKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nQmlnZ2VyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nQmlnZ2VyKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nMSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlSGVhZGluZzEoKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmcyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nMigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZzMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmczKCk7XG4gIH1cblxuICB0b2dnbGVDb2RlQmxvY2soKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUNvZGVCbG9jaygpO1xuICB9XG5cbiAgdG9nZ2xlQmxvY2txdW90ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlQmxvY2txdW90ZSgpO1xuICB9XG5cbiAgdG9nZ2xlVW5vcmRlcmVkTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlVW5vcmRlcmVkTGlzdCgpO1xuICB9XG5cbiAgdG9nZ2xlT3JkZXJlZExpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZU9yZGVyZWRMaXN0KCk7XG4gIH1cblxuICBjbGVhbkJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5jbGVhbkJsb2NrKCk7XG4gIH1cblxuICBkcmF3TGluaygpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0xpbmsoKTtcbiAgfVxuXG4gIGRyYXdJbWFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0ltYWdlKCk7XG4gIH1cblxuICBkcmF3VGFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLmRyYXdUYWJsZSgpO1xuICB9XG5cbiAgZHJhd0hvcml6b250YWxSdWxlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5kcmF3SG9yaXpvbnRhbFJ1bGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVByZXZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVByZXZpZXcoKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVCeVNpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVNpZGVCeVNpZGUoKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUZ1bGxTY3JlZW4oKTtcbiAgfVxufVxuIl19