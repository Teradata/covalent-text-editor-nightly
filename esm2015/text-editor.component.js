/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const noop = (/**
 * @return {?}
 */
() => {
    // empty method
});
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
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => noop);
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
            this._zone.run((/**
             * @return {?}
             */
            () => (this._value = value)));
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
        this._simpleMDE.codemirror.on('change', (/**
         * @return {?}
         */
        () => {
            this._fromEditor = true;
            this.writeValue(this._simpleMDE.value());
        }));
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
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdTextEditorComponent)),
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
    textarea: [{ type: ViewChild, args: ['simplemde', { static: true },] }],
    options: [{ type: Input }],
    value: [{ type: Input, args: ['value',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._simpleMDE;
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._fromEditor;
    /** @type {?} */
    TdTextEditorComponent.prototype.textarea;
    /** @type {?} */
    TdTextEditorComponent.prototype.options;
    /** @type {?} */
    TdTextEditorComponent.prototype.propagateChange;
    /** @type {?} */
    TdTextEditorComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._zone;
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._domSanitizer;
    /**
     * @type {?}
     * @private
     */
    TdTextEditorComponent.prototype._document;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L3RleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsidGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFdBQVcsQ0FBQzs7QUFFdkMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7OztJQUc3QixZQUFZLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDOztNQUV4RCxJQUFJOzs7QUFBUSxHQUFHLEVBQUU7SUFDckIsZUFBZTtBQUNqQixDQUFDLENBQUE7O0FBY0QsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQVFoQyxZQUNVLFdBQXVCLEVBQ3ZCLEtBQWEsRUFDYixhQUEyQixFQUNULFNBQWM7UUFIaEMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQ1QsY0FBUyxHQUFULFNBQVMsQ0FBSztRQVhsQyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzVCLFlBQU8sR0FBUSxFQUFFLENBQUM7O1FBVTNCLG9CQUFlOzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsRUFBQztRQUNqQyxjQUFTOzs7UUFBRyxHQUFHLEVB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Q0FBcUM7O0lBRXJDLHlDQUErRDs7SUFDL0Qsd0NBQTJCOztJQVUzQixnREFBaUM7O0lBQ2pDLDBDQUF1Qjs7Ozs7SUFSckIsNENBQStCOzs7OztJQUMvQixzQ0FBcUI7Ozs7O0lBQ3JCLDhDQUFtQzs7Ozs7SUFDbkMsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBOZ1pvbmUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBTaW1wbGVNREUgZnJvbSAnc2ltcGxlbWRlJztcbi8vIGdldCBhY2Nlc3MgdG8gdGhlIG1hcmtlZCBjbGFzcyB1bmRlciBzaW1wbGVtZGVcbmltcG9ydCAqIGFzIG1hcmtlZCBmcm9tICdtYXJrZWQnO1xuZGVjbGFyZSBjb25zdCByZXF1aXJlOiBhbnk7XG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmxldCBTaW1wbGVNREVDc3MgPSByZXF1aXJlKCdzaW1wbGVtZGUvZGlzdC9zaW1wbGVtZGUubWluLmNzcycpO1xuXG5jb25zdCBub29wOiBhbnkgPSAoKSA9PiB7XG4gIC8vIGVtcHR5IG1ldGhvZFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtdGV4dC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkVGV4dEVkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRleHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfc2ltcGxlTURFOiBhbnk7XG4gIHByaXZhdGUgX2Zyb21FZGl0b3I6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdzaW1wbGVtZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZXh0YXJlYTogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgKSB7fVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4gbm9vcDtcblxuICAvKipcbiAgICogdmFsdWU/OiBzdHJpbmdcbiAgICogVmFsdWUgaW4gdGhlIEVkaXRvciBhZnRlciBhc3luYyBnZXRFZGl0b3JDb250ZW50IHdhcyBjYWxsZWRcbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKVxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX3NpbXBsZU1ERSkge1xuICAgICAgaWYgKCF0aGlzLl9mcm9tRWRpdG9yKSB7XG4gICAgICAgIHRoaXMuX3NpbXBsZU1ERS52YWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLl9mcm9tRWRpdG9yID0gZmFsc2U7XG4gICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiAodGhpcy5fdmFsdWUgPSB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIGdldCBzaW1wbGVNREUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlTURFO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gIXZhbHVlID8gJycgOiB2YWx1ZTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgbGV0IHN0eWxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IDxzdHJpbmc+dGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFN0cmluZyhTaW1wbGVNREVDc3MpKTtcbiAgICAgIHRoaXMuX2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLmVsZW1lbnQgPSB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBJZiBjb250ZW50IGVudGVyZWQgaXMgaHRtbCB0aGVuIGRvbid0IGV2YWx1YXRlIGl0LCBwcmV2ZW50IHhzcyB2dWxuZXJhYmlsaXRpZXNcbiAgICBtYXJrZWQuc2V0T3B0aW9ucyh7IHNhbml0aXplOiB0cnVlIH0pO1xuICAgIHRoaXMuX3NpbXBsZU1ERSA9IG5ldyBTaW1wbGVNREUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLl9zaW1wbGVNREUudmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5fc2ltcGxlTURFLmNvZGVtaXJyb3Iub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2Zyb21FZGl0b3IgPSB0cnVlO1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuX3NpbXBsZU1ERS52YWx1ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIFdyYXBwZWQgZnVuY3Rpb24gcHJvdmlkZWQgYnkgU2ltcGxlTURFICovXG5cbiAgaXNQcmV2aWV3QWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGVNREUuaXNQcmV2aWV3QWN0aXZlKCk7XG4gIH1cblxuICBpc1NpZGVCeVNpZGVBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZU1ERS5pc1NpZGVCeVNpZGVBY3RpdmUoKTtcbiAgfVxuXG4gIGlzRnVsbHNjcmVlbkFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlTURFLmlzRnVsbHNjcmVlbkFjdGl2ZSgpO1xuICB9XG5cbiAgY2xlYXJBdXRvc2F2ZWRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuY2xlYXJBdXRvc2F2ZWRWYWx1ZSgpO1xuICB9XG5cbiAgdG9UZXh0QXJlYSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9UZXh0QXJlYSgpO1xuICB9XG5cbiAgdG9nZ2xlQm9sZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlQm9sZCgpO1xuICB9XG5cbiAgdG9nZ2xlSXRhbGljKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVJdGFsaWMoKTtcbiAgfVxuXG4gIHRvZ2dsZVN0cmlrZXRocm91Z2goKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVN0cmlrZXRocm91Z2goKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmdTbWFsbGVyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nU21hbGxlcigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZ0JpZ2dlcigpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlSGVhZGluZ0JpZ2dlcigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZzEoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmcxKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nMigpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlSGVhZGluZzIoKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmczKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nMygpO1xuICB9XG5cbiAgdG9nZ2xlQ29kZUJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVDb2RlQmxvY2soKTtcbiAgfVxuXG4gIHRvZ2dsZUJsb2NrcXVvdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUJsb2NrcXVvdGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVVub3JkZXJlZExpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVVub3JkZXJlZExpc3QoKTtcbiAgfVxuXG4gIHRvZ2dsZU9yZGVyZWRMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVPcmRlcmVkTGlzdCgpO1xuICB9XG5cbiAgY2xlYW5CbG9jaygpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuY2xlYW5CbG9jaygpO1xuICB9XG5cbiAgZHJhd0xpbmsoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLmRyYXdMaW5rKCk7XG4gIH1cblxuICBkcmF3SW1hZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLmRyYXdJbWFnZSgpO1xuICB9XG5cbiAgZHJhd1RhYmxlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5kcmF3VGFibGUoKTtcbiAgfVxuXG4gIGRyYXdIb3Jpem9udGFsUnVsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0hvcml6b250YWxSdWxlKCk7XG4gIH1cblxuICB0b2dnbGVQcmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVQcmV2aWV3KCk7XG4gIH1cblxuICB0b2dnbGVTaWRlQnlTaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVTaWRlQnlTaWRlKCk7XG4gIH1cblxuICB0b2dnbGVGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVGdWxsU2NyZWVuKCk7XG4gIH1cbn1cbiJdfQ==