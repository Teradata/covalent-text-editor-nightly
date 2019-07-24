import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as SimpleMDE from 'simplemde';
import { setOptions } from 'marked';
import { Component, Input, ViewChild, ElementRef, forwardRef, NgZone, Inject, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable-next-line */
/** @type {?} */
let SimpleMDECss = require('simplemde/dist/simplemde.min.css');
/** @type {?} */
const noop = () => {
    // empty method
};
class TdTextEditorComponent {
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
        setOptions({ sanitize: true });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CovalentTextEditorModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CovalentTextEditorModule,
            providers: [],
        };
    }
}
CovalentTextEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TdTextEditorComponent,
                ],
                exports: [
                    TdTextEditorComponent,
                ],
                entryComponents: [],
                bootstrap: [TdTextEditorComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { TdTextEditorComponent, CovalentTextEditorModule };

//# sourceMappingURL=covalent-text-editor.js.map