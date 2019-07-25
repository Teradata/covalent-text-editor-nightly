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
var SimpleMDECss = require('simplemde/dist/simplemde.min.css');
/** @type {?} */
var noop = function () {
    // empty method
};
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
        this.propagateChange = function (_) { };
        this.onTouched = function () { return noop; };
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
                this._zone.run(function () { return (_this._value = value); });
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
        this._simpleMDE.codemirror.on('change', function () {
            _this._fromEditor = true;
            _this.writeValue(_this._simpleMDE.value());
        });
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
                            useExisting: forwardRef(function () { return TdTextEditorComponent; }),
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
        textarea: [{ type: ViewChild, args: ['simplemde',] }],
        options: [{ type: Input }],
        value: [{ type: Input, args: ['value',] }]
    };
    return TdTextEditorComponent;
}());
export { TdTextEditorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L3RleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsidGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFdBQVcsQ0FBQzs7QUFFdkMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7OztJQUc3QixZQUFZLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDOztJQUV4RCxJQUFJLEdBQVE7SUFDaEIsZUFBZTtBQUNqQixDQUFDOztBQUVEO0lBb0JFLCtCQUNVLFdBQXVCLEVBQ3ZCLEtBQWEsRUFDYixhQUEyQixFQUNULFNBQWM7UUFIaEMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQ1QsY0FBUyxHQUFULFNBQVMsQ0FBSztRQVhsQyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzVCLFlBQU8sR0FBUSxFQUFFLENBQUM7O1FBVTNCLG9CQUFlLEdBQUcsVUFBQyxDQUFNLElBQU0sQ0FBQyxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztJQUpwQixDQUFDO0lBVUosc0JBQ0ksd0NBQUs7Ozs7UUFZVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO1FBbkJEOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1UsS0FBYTtZQUR2QixpQkFXQztZQVRDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQzthQUM3QztRQUNILENBQUM7OztPQUFBO0lBTUQsc0JBQUksNENBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7Ozs7SUFDSCwwQ0FBVTs7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFDRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUNELGlEQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNkLFlBQVksR0FBZ0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3JFLFlBQVksQ0FBQyxTQUFTLEdBQUcsbUJBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQSxDQUFDO1lBQ2xHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBRW5ELGlGQUFpRjtRQUNqRixNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQTRDOzs7OztJQUU1QywrQ0FBZTs7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxrREFBa0I7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxrREFBa0I7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxtREFBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsMENBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsMENBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsbURBQW1COzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELG9EQUFvQjs7O0lBQXBCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxtREFBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsOENBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsOENBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsOENBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsZ0RBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELG1EQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxpREFBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsMENBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsa0RBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELDZDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELGdEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxnREFBZ0I7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztnQkEzTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLCtEQUEyQztvQkFFM0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixDQUFDOzRCQUNwRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7Z0JBMUJvRCxVQUFVO2dCQUFjLE1BQU07Z0JBRTFFLFlBQVk7Z0RBcUNoQixNQUFNLFNBQUMsUUFBUTs7OzJCQVBqQixTQUFTLFNBQUMsV0FBVzswQkFDckIsS0FBSzt3QkFpQkwsS0FBSyxTQUFDLE9BQU87O0lBeUpoQiw0QkFBQztDQUFBLEFBNUxELElBNExDO1NBaExZLHFCQUFxQjs7O0lBQ2hDLHVDQUE0Qjs7SUFDNUIsMkNBQXdCOztJQUN4Qiw0Q0FBcUM7O0lBRXJDLHlDQUE2Qzs7SUFDN0Msd0NBQTJCOztJQVUzQixnREFBaUM7O0lBQ2pDLDBDQUF1Qjs7SUFSckIsNENBQStCOztJQUMvQixzQ0FBcUI7O0lBQ3JCLDhDQUFtQzs7SUFDbkMsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBOZ1pvbmUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBTaW1wbGVNREUgZnJvbSAnc2ltcGxlbWRlJztcbi8vIGdldCBhY2Nlc3MgdG8gdGhlIG1hcmtlZCBjbGFzcyB1bmRlciBzaW1wbGVtZGVcbmltcG9ydCAqIGFzIG1hcmtlZCBmcm9tICdtYXJrZWQnO1xuZGVjbGFyZSBjb25zdCByZXF1aXJlOiBhbnk7XG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmxldCBTaW1wbGVNREVDc3MgPSByZXF1aXJlKCdzaW1wbGVtZGUvZGlzdC9zaW1wbGVtZGUubWluLmNzcycpO1xuXG5jb25zdCBub29wOiBhbnkgPSAoKSA9PiB7XG4gIC8vIGVtcHR5IG1ldGhvZFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtdGV4dC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkVGV4dEVkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRleHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfc2ltcGxlTURFOiBhbnk7XG4gIHByaXZhdGUgX2Zyb21FZGl0b3I6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdzaW1wbGVtZGUnKSB0ZXh0YXJlYTogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgKSB7fVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4gbm9vcDtcblxuICAvKipcbiAgICogdmFsdWU/OiBzdHJpbmdcbiAgICogVmFsdWUgaW4gdGhlIEVkaXRvciBhZnRlciBhc3luYyBnZXRFZGl0b3JDb250ZW50IHdhcyBjYWxsZWRcbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKVxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX3NpbXBsZU1ERSkge1xuICAgICAgaWYgKCF0aGlzLl9mcm9tRWRpdG9yKSB7XG4gICAgICAgIHRoaXMuX3NpbXBsZU1ERS52YWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLl9mcm9tRWRpdG9yID0gZmFsc2U7XG4gICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiAodGhpcy5fdmFsdWUgPSB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIGdldCBzaW1wbGVNREUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlTURFO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gIXZhbHVlID8gJycgOiB2YWx1ZTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgbGV0IHN0eWxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IDxzdHJpbmc+dGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFN0cmluZyhTaW1wbGVNREVDc3MpKTtcbiAgICAgIHRoaXMuX2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLmVsZW1lbnQgPSB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBJZiBjb250ZW50IGVudGVyZWQgaXMgaHRtbCB0aGVuIGRvbid0IGV2YWx1YXRlIGl0LCBwcmV2ZW50IHhzcyB2dWxuZXJhYmlsaXRpZXNcbiAgICBtYXJrZWQuc2V0T3B0aW9ucyh7IHNhbml0aXplOiB0cnVlIH0pO1xuICAgIHRoaXMuX3NpbXBsZU1ERSA9IG5ldyBTaW1wbGVNREUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLl9zaW1wbGVNREUudmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5fc2ltcGxlTURFLmNvZGVtaXJyb3Iub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2Zyb21FZGl0b3IgPSB0cnVlO1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuX3NpbXBsZU1ERS52YWx1ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIFdyYXBwZWQgZnVuY3Rpb24gcHJvdmlkZWQgYnkgU2ltcGxlTURFICovXG5cbiAgaXNQcmV2aWV3QWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGVNREUuaXNQcmV2aWV3QWN0aXZlKCk7XG4gIH1cblxuICBpc1NpZGVCeVNpZGVBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZU1ERS5pc1NpZGVCeVNpZGVBY3RpdmUoKTtcbiAgfVxuXG4gIGlzRnVsbHNjcmVlbkFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlTURFLmlzRnVsbHNjcmVlbkFjdGl2ZSgpO1xuICB9XG5cbiAgY2xlYXJBdXRvc2F2ZWRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuY2xlYXJBdXRvc2F2ZWRWYWx1ZSgpO1xuICB9XG5cbiAgdG9UZXh0QXJlYSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9UZXh0QXJlYSgpO1xuICB9XG5cbiAgdG9nZ2xlQm9sZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlQm9sZCgpO1xuICB9XG5cbiAgdG9nZ2xlSXRhbGljKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVJdGFsaWMoKTtcbiAgfVxuXG4gIHRvZ2dsZVN0cmlrZXRocm91Z2goKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVN0cmlrZXRocm91Z2goKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmdTbWFsbGVyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nU21hbGxlcigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZ0JpZ2dlcigpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlSGVhZGluZ0JpZ2dlcigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZzEoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmcxKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nMigpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlSGVhZGluZzIoKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmczKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nMygpO1xuICB9XG5cbiAgdG9nZ2xlQ29kZUJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVDb2RlQmxvY2soKTtcbiAgfVxuXG4gIHRvZ2dsZUJsb2NrcXVvdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUJsb2NrcXVvdGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVVub3JkZXJlZExpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVVub3JkZXJlZExpc3QoKTtcbiAgfVxuXG4gIHRvZ2dsZU9yZGVyZWRMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVPcmRlcmVkTGlzdCgpO1xuICB9XG5cbiAgY2xlYW5CbG9jaygpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuY2xlYW5CbG9jaygpO1xuICB9XG5cbiAgZHJhd0xpbmsoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLmRyYXdMaW5rKCk7XG4gIH1cblxuICBkcmF3SW1hZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLmRyYXdJbWFnZSgpO1xuICB9XG5cbiAgZHJhd1RhYmxlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5kcmF3VGFibGUoKTtcbiAgfVxuXG4gIGRyYXdIb3Jpem9udGFsUnVsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0hvcml6b250YWxSdWxlKCk7XG4gIH1cblxuICB0b2dnbGVQcmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVQcmV2aWV3KCk7XG4gIH1cblxuICB0b2dnbGVTaWRlQnlTaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVTaWRlQnlTaWRlKCk7XG4gIH1cblxuICB0b2dnbGVGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVGdWxsU2NyZWVuKCk7XG4gIH1cbn1cbiJdfQ==