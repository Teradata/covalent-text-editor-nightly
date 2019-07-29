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
var SimpleMDECss = require('simplemde/dist/simplemde.min.css');
/** @type {?} */
var noop = (/**
 * @return {?}
 */
function () {
    // empty method
});
var ɵ0 = noop;
var TdTextEditorComponent = /** @class */ (function () {
    function TdTextEditorComponent(_elementRef, _zone, _domSanitizer, _document) {
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
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return noop; });
    }
    Object.defineProperty(TdTextEditorComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        /**
         * value?: string
         * Value in the Editor after async getEditorContent was called
         */
        set: /**
         * value?: string
         * Value in the Editor after async getEditorContent was called
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
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
                function () { return (_this._value = value); }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdTextEditorComponent.prototype, "simpleMDE", {
        get: /**
         * @return {?}
         */
        function () {
            return this._simpleMDE;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Implemented as part of ControlValueAccessor.
     */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    TdTextEditorComponent.prototype.writeValue = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = !value ? '' : value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TdTextEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TdTextEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._document) {
            /** @type {?} */
            var styleElement = this._document.createElement('style');
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
        function () {
            _this._fromEditor = true;
            _this.writeValue(_this._simpleMDE.value());
        }));
    };
    /* Wrapped function provided by SimpleMDE */
    /* Wrapped function provided by SimpleMDE */
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.isPreviewActive = /* Wrapped function provided by SimpleMDE */
    /**
     * @return {?}
     */
    function () {
        return this._simpleMDE.isPreviewActive();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.isSideBySideActive = /**
     * @return {?}
     */
    function () {
        return this._simpleMDE.isSideBySideActive();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.isFullscreenActive = /**
     * @return {?}
     */
    function () {
        return this._simpleMDE.isFullscreenActive();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.clearAutosavedValue = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.clearAutosavedValue();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toTextArea = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toTextArea();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleBold = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleBold();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleItalic = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleItalic();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleStrikethrough = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleStrikethrough();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeadingSmaller = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleHeadingSmaller();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeadingBigger = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleHeadingBigger();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeading1 = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleHeading1();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeading2 = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleHeading2();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeading3 = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleHeading3();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleCodeBlock = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleCodeBlock();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleBlockquote = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleBlockquote();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleUnorderedList = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleUnorderedList();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleOrderedList = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleOrderedList();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.cleanBlock = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.cleanBlock();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.drawLink = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.drawLink();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.drawImage = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.drawImage();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.drawTable = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.drawTable();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.drawHorizontalRule = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.drawHorizontalRule();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.togglePreview = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.togglePreview();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleSideBySide = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleSideBySide();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleFullScreen = /**
     * @return {?}
     */
    function () {
        this._simpleMDE.toggleFullScreen();
    };
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
                            function () { return TdTextEditorComponent; })),
                            multi: true,
                        },
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdTextEditorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DomSanitizer },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    TdTextEditorComponent.propDecorators = {
        textarea: [{ type: ViewChild, args: ['simplemde', { static: true },] }],
        options: [{ type: Input }],
        value: [{ type: Input, args: ['value',] }]
    };
    return TdTextEditorComponent;
}());
export { TdTextEditorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L3RleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsidGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFdBQVcsQ0FBQzs7QUFFdkMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7OztJQUc3QixZQUFZLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDOztJQUV4RCxJQUFJOzs7QUFBUTtJQUNoQixlQUFlO0FBQ2pCLENBQUMsQ0FBQTs7QUFFRDtJQW9CRSwrQkFDVSxXQUF1QixFQUN2QixLQUFhLEVBQ2IsYUFBMkIsRUFDVCxTQUFjO1FBSGhDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUNULGNBQVMsR0FBVCxTQUFTLENBQUs7UUFYbEMsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc1QixZQUFPLEdBQVEsRUFBRSxDQUFDOztRQVUzQixvQkFBZTs7OztRQUFHLFVBQUMsQ0FBTSxJQUFNLENBQUMsRUFBQztRQUNqQyxjQUFTOzs7UUFBRyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztJQUpwQixDQUFDO0lBVUosc0JB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LFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLEVBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOztpQkFDRjs7OztnQkExQm9ELFVBQVU7Z0JBQWMsTUFBTTtnQkFFMUUsWUFBWTtnREFxQ2hCLE1BQU0sU0FBQyxRQUFROzs7MkJBUGpCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzBCQUN2QyxLQUFLO3dCQWlCTCxLQUFLLFNBQUMsT0FBTzs7SUF5SmhCLDRCQUFDO0NBQUEsQUE1TEQsSUE0TEM7U0FoTFkscUJBQXFCOzs7Ozs7SUFDaEMsdUNBQTRCOzs7OztJQUM1QiwyQ0FBd0I7Ozs7O0lBQ3hCLDRDQUFxQzs7SUFFckMseUNBQStEOztJQUMvRCx3Q0FBMkI7O0lBVTNCLGdEQUFpQzs7SUFDakMsMENBQXVCOzs7OztJQVJyQiw0Q0FBK0I7Ozs7O0lBQy9CLHNDQUFxQjs7Ozs7SUFDckIsOENBQW1DOzs7OztJQUNuQywwQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE5nWm9uZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCAqIGFzIFNpbXBsZU1ERSBmcm9tICdzaW1wbGVtZGUnO1xuLy8gZ2V0IGFjY2VzcyB0byB0aGUgbWFya2VkIGNsYXNzIHVuZGVyIHNpbXBsZW1kZVxuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5kZWNsYXJlIGNvbnN0IHJlcXVpcmU6IGFueTtcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xubGV0IFNpbXBsZU1ERUNzcyA9IHJlcXVpcmUoJ3NpbXBsZW1kZS9kaXN0L3NpbXBsZW1kZS5taW4uY3NzJyk7XG5cbmNvbnN0IG5vb3A6IGFueSA9ICgpID0+IHtcbiAgLy8gZW1wdHkgbWV0aG9kXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC10ZXh0LWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRUZXh0RWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkVGV4dEVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zaW1wbGVNREU6IGFueTtcbiAgcHJpdmF0ZSBfZnJvbUVkaXRvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3NpbXBsZW1kZScsIHsgc3RhdGljOiB0cnVlIH0pIHRleHRhcmVhOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9kb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICApIHt9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiBub29wO1xuXG4gIC8qKlxuICAgKiB2YWx1ZT86IHN0cmluZ1xuICAgKiBWYWx1ZSBpbiB0aGUgRWRpdG9yIGFmdGVyIGFzeW5jIGdldEVkaXRvckNvbnRlbnQgd2FzIGNhbGxlZFxuICAgKi9cbiAgQElucHV0KCd2YWx1ZScpXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fc2ltcGxlTURFKSB7XG4gICAgICBpZiAoIXRoaXMuX2Zyb21FZGl0b3IpIHtcbiAgICAgICAgdGhpcy5fc2ltcGxlTURFLnZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuX2Zyb21FZGl0b3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+ICh0aGlzLl92YWx1ZSA9IHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgZ2V0IHNpbXBsZU1ERSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGVNREU7XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSAhdmFsdWUgPyAnJyA6IHZhbHVlO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICBsZXQgc3R5bGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gPHN0cmluZz50aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoU3RyaW5nKFNpbXBsZU1ERUNzcykpO1xuICAgICAgdGhpcy5fZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuZWxlbWVudCA9IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIElmIGNvbnRlbnQgZW50ZXJlZCBpcyBodG1sIHRoZW4gZG9uJ3QgZXZhbHVhdGUgaXQsIHByZXZlbnQgeHNzIHZ1bG5lcmFiaWxpdGllc1xuICAgIG1hcmtlZC5zZXRPcHRpb25zKHsgc2FuaXRpemU6IHRydWUgfSk7XG4gICAgdGhpcy5fc2ltcGxlTURFID0gbmV3IFNpbXBsZU1ERSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuX3NpbXBsZU1ERS52YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9zaW1wbGVNREUuY29kZW1pcnJvci5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5fZnJvbUVkaXRvciA9IHRydWU7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5fc2ltcGxlTURFLnZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogV3JhcHBlZCBmdW5jdGlvbiBwcm92aWRlZCBieSBTaW1wbGVNREUgKi9cblxuICBpc1ByZXZpZXdBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZU1ERS5pc1ByZXZpZXdBY3RpdmUoKTtcbiAgfVxuXG4gIGlzU2lkZUJ5U2lkZUFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlTURFLmlzU2lkZUJ5U2lkZUFjdGl2ZSgpO1xuICB9XG5cbiAgaXNGdWxsc2NyZWVuQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGVNREUuaXNGdWxsc2NyZWVuQWN0aXZlKCk7XG4gIH1cblxuICBjbGVhckF1dG9zYXZlZFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5jbGVhckF1dG9zYXZlZFZhbHVlKCk7XG4gIH1cblxuICB0b1RleHRBcmVhKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b1RleHRBcmVhKCk7XG4gIH1cblxuICB0b2dnbGVCb2xkKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVCb2xkKCk7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUl0YWxpYygpO1xuICB9XG5cbiAgdG9nZ2xlU3RyaWtldGhyb3VnaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlU3RyaWtldGhyb3VnaCgpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZ1NtYWxsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmdTbWFsbGVyKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nQmlnZ2VyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nQmlnZ2VyKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nMSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlSGVhZGluZzEoKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmcyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nMigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZzMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmczKCk7XG4gIH1cblxuICB0b2dnbGVDb2RlQmxvY2soKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUNvZGVCbG9jaygpO1xuICB9XG5cbiAgdG9nZ2xlQmxvY2txdW90ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlQmxvY2txdW90ZSgpO1xuICB9XG5cbiAgdG9nZ2xlVW5vcmRlcmVkTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlVW5vcmRlcmVkTGlzdCgpO1xuICB9XG5cbiAgdG9nZ2xlT3JkZXJlZExpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZU9yZGVyZWRMaXN0KCk7XG4gIH1cblxuICBjbGVhbkJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5jbGVhbkJsb2NrKCk7XG4gIH1cblxuICBkcmF3TGluaygpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0xpbmsoKTtcbiAgfVxuXG4gIGRyYXdJbWFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0ltYWdlKCk7XG4gIH1cblxuICBkcmF3VGFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLmRyYXdUYWJsZSgpO1xuICB9XG5cbiAgZHJhd0hvcml6b250YWxSdWxlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5kcmF3SG9yaXpvbnRhbFJ1bGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVByZXZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVByZXZpZXcoKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVCeVNpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVNpZGVCeVNpZGUoKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUZ1bGxTY3JlZW4oKTtcbiAgfVxufVxuIl19