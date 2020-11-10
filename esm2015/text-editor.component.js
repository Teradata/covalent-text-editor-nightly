/**
 * @fileoverview added by tsickle
 * Generated from: text-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, forwardRef, NgZone } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as EasyMDE from 'easymde';
// get access to the marked class under easymde
import * as marked from 'marked';
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
     * @param {?} _zone
     */
    constructor(_zone) {
        this._zone = _zone;
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
        if (this._easyMDE) {
            if (!this._fromEditor) {
                this._easyMDE.value(value);
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
    get easyMDE() {
        return this._easyMDE;
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
        this.options.element = this.textarea.nativeElement;
        // If content entered is html then don't evaluate it, prevent xss vulnerabilities
        marked.setOptions({ sanitize: true });
        this._easyMDE = new EasyMDE(this.options);
        this._easyMDE.value(this.value);
        this._easyMDE.codemirror.on('change', (/**
         * @return {?}
         */
        () => {
            this._fromEditor = true;
            this.writeValue(this._easyMDE.value());
        }));
    }
    /* Wrapped function provided by EasyMDE */
    /**
     * @return {?}
     */
    isPreviewActive() {
        return this._easyMDE.isPreviewActive();
    }
    /**
     * @return {?}
     */
    isSideBySideActive() {
        return this._easyMDE.isSideBySideActive();
    }
    /**
     * @return {?}
     */
    isFullscreenActive() {
        return this._easyMDE.isFullscreenActive();
    }
    /**
     * @return {?}
     */
    clearAutosavedValue() {
        this._easyMDE.clearAutosavedValue();
    }
    /**
     * @return {?}
     */
    toTextArea() {
        this._easyMDE.toTextArea();
    }
    /**
     * @return {?}
     */
    toggleBold() {
        this._easyMDE.toggleBold();
    }
    /**
     * @return {?}
     */
    toggleItalic() {
        this._easyMDE.toggleItalic();
    }
    /**
     * @return {?}
     */
    toggleStrikethrough() {
        this._easyMDE.toggleStrikethrough();
    }
    /**
     * @return {?}
     */
    toggleHeadingSmaller() {
        this._easyMDE.toggleHeadingSmaller();
    }
    /**
     * @return {?}
     */
    toggleHeadingBigger() {
        this._easyMDE.toggleHeadingBigger();
    }
    /**
     * @return {?}
     */
    toggleHeading1() {
        this._easyMDE.toggleHeading1();
    }
    /**
     * @return {?}
     */
    toggleHeading2() {
        this._easyMDE.toggleHeading2();
    }
    /**
     * @return {?}
     */
    toggleHeading3() {
        this._easyMDE.toggleHeading3();
    }
    /**
     * @return {?}
     */
    toggleCodeBlock() {
        this._easyMDE.toggleCodeBlock();
    }
    /**
     * @return {?}
     */
    toggleBlockquote() {
        this._easyMDE.toggleBlockquote();
    }
    /**
     * @return {?}
     */
    toggleUnorderedList() {
        this._easyMDE.toggleUnorderedList();
    }
    /**
     * @return {?}
     */
    toggleOrderedList() {
        this._easyMDE.toggleOrderedList();
    }
    /**
     * @return {?}
     */
    cleanBlock() {
        this._easyMDE.cleanBlock();
    }
    /**
     * @return {?}
     */
    drawLink() {
        this._easyMDE.drawLink();
    }
    /**
     * @return {?}
     */
    drawImage() {
        this._easyMDE.drawImage();
    }
    /**
     * @return {?}
     */
    drawTable() {
        this._easyMDE.drawTable();
    }
    /**
     * @return {?}
     */
    drawHorizontalRule() {
        this._easyMDE.drawHorizontalRule();
    }
    /**
     * @return {?}
     */
    togglePreview() {
        this._easyMDE.togglePreview();
    }
    /**
     * @return {?}
     */
    toggleSideBySide() {
        this._easyMDE.toggleSideBySide();
    }
    /**
     * @return {?}
     */
    toggleFullScreen() {
        this._easyMDE.toggleFullScreen();
    }
}
TdTextEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-text-editor',
                template: "<div>\n  <textarea #easymde></textarea>\n</div>\n",
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
                styles: ["@charset \"UTF-8\";:host ::ng-deep .CodeMirror{color:#000;direction:ltr;font-family:monospace;height:300px}:host ::ng-deep .CodeMirror-lines{padding:4px 0}:host ::ng-deep .CodeMirror pre.CodeMirror-line,:host ::ng-deep .CodeMirror pre.CodeMirror-line-like{padding:0 4px}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-scrollbar-filler{background-color:#fff}:host ::ng-deep .CodeMirror-gutters{background-color:#f7f7f7;border-right:1px solid #ddd;white-space:nowrap}:host ::ng-deep .CodeMirror-linenumber{color:#999;min-width:20px;padding:0 3px 0 5px;text-align:right;white-space:nowrap}:host ::ng-deep .CodeMirror-guttermarker{color:#000}:host ::ng-deep .CodeMirror-guttermarker-subtle{color:#999}:host ::ng-deep .CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}:host ::ng-deep .CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}:host ::ng-deep .cm-fat-cursor .CodeMirror-cursor{background:#7e7;border:0!important;width:auto}:host ::ng-deep .cm-fat-cursor div.CodeMirror-cursors{z-index:1}:host ::ng-deep .cm-fat-cursor-mark{background-color:rgba(20,255,20,.5)}:host ::ng-deep .cm-animate-fat-cursor,:host ::ng-deep .cm-fat-cursor-mark{-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}:host ::ng-deep .cm-animate-fat-cursor{background-color:#7e7;border:0;width:auto}@-webkit-keyframes blink{50%{background-color:rgba(0,0,0,0)}}@keyframes blink{50%{background-color:rgba(0,0,0,0)}}:host ::ng-deep .cm-tab{display:inline-block;text-decoration:inherit}:host ::ng-deep .CodeMirror-rulers{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:-50px}:host ::ng-deep .CodeMirror-ruler{border-left:1px solid #ccc;bottom:0;position:absolute;top:0}:host ::ng-deep .cm-s-default .cm-header{color:#00f}:host ::ng-deep .cm-s-default .cm-quote{color:#090}:host ::ng-deep .cm-negative{color:#d44}:host ::ng-deep .cm-positive{color:#292}:host ::ng-deep .cm-header,:host ::ng-deep .cm-strong{font-weight:700}:host ::ng-deep .cm-em{font-style:italic}:host ::ng-deep .cm-link{text-decoration:underline}:host ::ng-deep .cm-strikethrough{text-decoration:line-through}:host ::ng-deep .cm-s-default .cm-keyword{color:#708}:host ::ng-deep .cm-s-default .cm-atom{color:#219}:host ::ng-deep .cm-s-default .cm-number{color:#164}:host ::ng-deep .cm-s-default .cm-def{color:#00f}:host ::ng-deep .cm-s-default .cm-variable-2{color:#05a}:host ::ng-deep .cm-s-default .cm-type,:host ::ng-deep .cm-s-default .cm-variable-3{color:#085}:host ::ng-deep .cm-s-default .cm-comment{color:#a50}:host ::ng-deep .cm-s-default .cm-string{color:#a11}:host ::ng-deep .cm-s-default .cm-string-2{color:#f50}:host ::ng-deep .cm-s-default .cm-meta,:host ::ng-deep .cm-s-default .cm-qualifier{color:#555}:host ::ng-deep .cm-s-default .cm-builtin{color:#30a}:host ::ng-deep .cm-s-default .cm-bracket{color:#997}:host ::ng-deep .cm-s-default .cm-tag{color:#170}:host ::ng-deep .cm-s-default .cm-attribute{color:#00c}:host ::ng-deep .cm-s-default .cm-hr{color:#999}:host ::ng-deep .cm-s-default .cm-link{color:#00c}:host ::ng-deep .cm-invalidchar,:host ::ng-deep .cm-s-default .cm-error{color:red}:host ::ng-deep .CodeMirror-composing{border-bottom:2px solid}:host ::ng-deep div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}:host ::ng-deep div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}:host ::ng-deep .CodeMirror-matchingtag{background:rgba(255,150,0,.3)}:host ::ng-deep .CodeMirror-activeline-background{background:#e8f2ff}:host ::ng-deep .CodeMirror{background:#fff;overflow:hidden;position:relative}:host ::ng-deep .CodeMirror-scroll{height:100%;margin-bottom:-30px;margin-right:-30px;outline:0;overflow:scroll!important;padding-bottom:30px;position:relative}:host ::ng-deep .CodeMirror-sizer{border-right:30px solid rgba(0,0,0,0);position:relative}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-hscrollbar,:host ::ng-deep .CodeMirror-scrollbar-filler,:host ::ng-deep .CodeMirror-vscrollbar{display:none;position:absolute;z-index:6}:host ::ng-deep .CodeMirror-vscrollbar{overflow-x:hidden;overflow-y:scroll;right:0;top:0}:host ::ng-deep .CodeMirror-hscrollbar{bottom:0;left:0;overflow-x:scroll;overflow-y:hidden}:host ::ng-deep .CodeMirror-scrollbar-filler{bottom:0;right:0}:host ::ng-deep .CodeMirror-gutter-filler{bottom:0;left:0}:host ::ng-deep .CodeMirror-gutters{left:0;min-height:100%;position:absolute;top:0;z-index:3}:host ::ng-deep .CodeMirror-gutter{display:inline-block;height:100%;margin-bottom:-30px;vertical-align:top;white-space:normal}:host ::ng-deep .CodeMirror-gutter-wrapper{background:0 0!important;border:none!important;position:absolute;z-index:4}:host ::ng-deep .CodeMirror-gutter-background{bottom:0;position:absolute;top:0;z-index:4}:host ::ng-deep .CodeMirror-gutter-elt{cursor:default;position:absolute;z-index:4}:host ::ng-deep .CodeMirror-gutter-wrapper ::selection{background-color:rgba(0,0,0,0)}:host ::ng-deep .CodeMirror-gutter-wrapper ::-moz-selection{background-color:rgba(0,0,0,0)}:host ::ng-deep .CodeMirror-lines{cursor:text;min-height:1px}:host ::ng-deep .CodeMirror pre.CodeMirror-line,:host ::ng-deep .CodeMirror pre.CodeMirror-line-like{-webkit-tap-highlight-color:transparent;background:0 0;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-variant-ligatures:contextual;line-height:inherit;margin:0;overflow:visible;position:relative;white-space:pre;word-wrap:normal;z-index:2}:host ::ng-deep .CodeMirror-wrap pre.CodeMirror-line,:host ::ng-deep .CodeMirror-wrap pre.CodeMirror-line-like{white-space:pre-wrap;word-break:normal;word-wrap:break-word}:host ::ng-deep .CodeMirror-linebackground{bottom:0;left:0;position:absolute;right:0;top:0;z-index:0}:host ::ng-deep .CodeMirror-linewidget{padding:.1px;position:relative;z-index:2}:host ::ng-deep .CodeMirror-rtl pre{direction:rtl}:host ::ng-deep .CodeMirror-code{outline:0}:host ::ng-deep .CodeMirror-gutter,:host ::ng-deep .CodeMirror-gutters,:host ::ng-deep .CodeMirror-linenumber,:host ::ng-deep .CodeMirror-scroll,:host ::ng-deep .CodeMirror-sizer{box-sizing:content-box}:host ::ng-deep .CodeMirror-measure{height:0;overflow:hidden;position:absolute;visibility:hidden;width:100%}:host ::ng-deep .CodeMirror-cursor{pointer-events:none;position:absolute}:host ::ng-deep .CodeMirror-measure pre{position:static}:host ::ng-deep div.CodeMirror-cursors{position:relative;visibility:hidden;z-index:3}:host ::ng-deep .CodeMirror-focused div.CodeMirror-cursors,:host ::ng-deep div.CodeMirror-dragcursors{visibility:visible}:host ::ng-deep .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}:host ::ng-deep .CodeMirror-crosshair{cursor:crosshair}:host ::ng-deep .CodeMirror-line::selection,:host ::ng-deep .CodeMirror-line>span::selection,:host ::ng-deep .CodeMirror-line>span>span::selection{background:#d7d4f0}:host ::ng-deep .CodeMirror-line::-moz-selection,:host ::ng-deep .CodeMirror-line>span::-moz-selection,:host ::ng-deep .CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}:host ::ng-deep .cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}:host ::ng-deep .cm-force-border{padding-right:.1px}@media print{:host ::ng-deep .CodeMirror div.CodeMirror-cursors{visibility:hidden}}:host ::ng-deep .cm-tab-wrap-hack:after{content:\"\"}:host ::ng-deep span.CodeMirror-selectedtext{background:0 0}:host ::ng-deep .CodeMirror{border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-sizing:border-box;font:inherit;height:auto;padding:10px;word-wrap:break-word;z-index:1}:host ::ng-deep .CodeMirror-scroll{cursor:text}:host ::ng-deep .CodeMirror-fullscreen{background:#fff;border-bottom-right-radius:0!important;border-right:none!important;bottom:0;height:auto;left:0;position:fixed!important;right:0;top:50px;z-index:9}:host ::ng-deep .CodeMirror-sided{width:50%!important}:host ::ng-deep .CodeMirror-placeholder{opacity:.5}:host ::ng-deep .CodeMirror-focused .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .editor-toolbar{-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px;padding:0 10px;position:relative;user-select:none}:host ::ng-deep .editor-toolbar:after,:host ::ng-deep .editor-toolbar:before{content:\" \";display:block;height:1px}:host ::ng-deep .editor-toolbar:before{margin-bottom:8px}:host ::ng-deep .editor-toolbar:after{margin-top:8px}:host ::ng-deep .editor-toolbar.fullscreen{background:#fff;border:0;box-sizing:border-box;height:50px;left:0;opacity:1;overflow-x:auto;overflow-y:hidden;padding-bottom:10px;padding-top:10px;position:fixed;top:0;white-space:nowrap;width:100%;z-index:9}:host ::ng-deep .editor-toolbar.fullscreen:before{background:linear-gradient(90deg,#fff 0,hsla(0,0%,100%,0));height:50px;left:0;margin:0;padding:0;position:fixed;top:0;width:20px}:host ::ng-deep .editor-toolbar.fullscreen:after{background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff);height:50px;margin:0;padding:0;position:fixed;right:0;top:0;width:20px}:host ::ng-deep .editor-toolbar button{background:0 0;border:1px solid rgba(0,0,0,0);border-radius:3px;cursor:pointer;display:inline-block;height:30px;margin:0;padding:0;text-align:center;text-decoration:none!important;width:30px}:host ::ng-deep .editor-toolbar button.active,:host ::ng-deep .editor-toolbar button:hover{background:#fcfcfc;border-color:#95a5a6}:host ::ng-deep .editor-toolbar i.separator{border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:rgba(0,0,0,0);display:inline-block;margin:0 6px;text-indent:-10px;width:0}:host ::ng-deep .editor-toolbar button:after{font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:65%;position:relative;top:2px;vertical-align:text-bottom}:host ::ng-deep .editor-toolbar button.heading-1:after{content:\"1\"}:host ::ng-deep .editor-toolbar button.heading-2:after{content:\"2\"}:host ::ng-deep .editor-toolbar button.heading-3:after{content:\"3\"}:host ::ng-deep .editor-toolbar button.heading-bigger:after{content:\"\u25B2\"}:host ::ng-deep .editor-toolbar button.heading-smaller:after{content:\"\u25BC\"}:host ::ng-deep .editor-toolbar.disabled-for-preview button:not(.no-disable){opacity:.6;pointer-events:none}@media only screen and (max-width:700px){:host ::ng-deep .editor-toolbar i.no-mobile{display:none}}:host ::ng-deep .editor-statusbar{color:#959694;font-size:12px;padding:8px 10px;text-align:right}:host ::ng-deep .editor-statusbar span{display:inline-block;margin-left:1em;min-width:4em}:host ::ng-deep .editor-statusbar .lines:before{content:\"lines: \"}:host ::ng-deep .editor-statusbar .words:before{content:\"words: \"}:host ::ng-deep .editor-statusbar .characters:before{content:\"characters: \"}:host ::ng-deep .editor-preview-full{box-sizing:border-box;display:none;height:100%;left:0;overflow:auto;position:absolute;top:0;width:100%;z-index:7}:host ::ng-deep .editor-preview-side{border:1px solid #ddd;bottom:0;box-sizing:border-box;display:none;overflow:auto;position:fixed;right:0;top:50px;width:50%;word-wrap:break-word;z-index:9}:host ::ng-deep .editor-preview-active,:host ::ng-deep .editor-preview-active-side{display:block}:host ::ng-deep .editor-preview{background:#fafafa;padding:10px}:host ::ng-deep .editor-preview>p{margin-top:0}:host ::ng-deep .editor-preview pre{background:#eee;margin-bottom:10px}:host ::ng-deep .editor-preview table td,:host ::ng-deep .editor-preview table th{border:1px solid #ddd;padding:5px}:host ::ng-deep .cm-s-easymde .cm-tag{color:#63a35c}:host ::ng-deep .cm-s-easymde .cm-attribute{color:#795da3}:host ::ng-deep .cm-s-easymde .cm-string{color:#183691}:host ::ng-deep .cm-s-easymde .cm-header-1{font-size:200%;line-height:200%}:host ::ng-deep .cm-s-easymde .cm-header-2{font-size:160%;line-height:160%}:host ::ng-deep .cm-s-easymde .cm-header-3{font-size:125%;line-height:125%}:host ::ng-deep .cm-s-easymde .cm-header-4{font-size:110%;line-height:110%}:host ::ng-deep .cm-s-easymde .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}:host ::ng-deep .cm-s-easymde .cm-link{color:#7f8c8d}:host ::ng-deep .cm-s-easymde .cm-url{color:#aab2b3}:host ::ng-deep .cm-s-easymde .cm-quote{color:#7f8c8d;font-style:italic}:host ::ng-deep .CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}"]
            }] }
];
/** @nocollapse */
TdTextEditorComponent.ctorParameters = () => [
    { type: NgZone }
];
TdTextEditorComponent.propDecorators = {
    textarea: [{ type: ViewChild, args: ['easymde', { static: true },] }],
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
    TdTextEditorComponent.prototype._easyMDE;
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
    TdTextEditorComponent.prototype._zone;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL3RleHQtZWRpdG9yL3RleHQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sS0FBSyxPQUFPLE1BQU0sU0FBUyxDQUFDOztBQUVuQyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFFM0IsSUFBSTs7O0FBQVEsR0FBRyxFQUFFO0lBQ3JCLGVBQWU7QUFDakIsQ0FBQyxDQUFBOztBQWNELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFRaEMsWUFBb0IsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFQekIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc1QixZQUFPLEdBQVEsRUFBRSxDQUFDOztRQUszQixvQkFBZTs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFDakMsY0FBUzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFDO0lBSmEsQ0FBQzs7Ozs7OztJQVVyQyxJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsZUFB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QUFDO0lBQ25DLENBQUM7OztZQWpMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNkRBQTJDO2dCQUUzQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBQzt3QkFDcEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7WUFyQjRFLE1BQU07Ozt1QkEyQmhGLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3NCQUNyQyxLQUFLO29CQVlMLEtBQUssU0FBQyxPQUFPOzs7Ozs7O0lBakJkLHVDQUE0Qjs7Ozs7SUFDNUIseUNBQXNCOzs7OztJQUN0Qiw0Q0FBcUM7O0lBRXJDLHlDQUE2RDs7SUFDN0Qsd0NBQTJCOztJQUszQixnREFBaUM7O0lBQ2pDLDBDQUF1Qjs7Ozs7SUFKWCxzQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgRWFzeU1ERSBmcm9tICdlYXN5bWRlJztcbi8vIGdldCBhY2Nlc3MgdG8gdGhlIG1hcmtlZCBjbGFzcyB1bmRlciBlYXN5bWRlXG5pbXBvcnQgKiBhcyBtYXJrZWQgZnJvbSAnbWFya2VkJztcblxuY29uc3Qgbm9vcDogYW55ID0gKCkgPT4ge1xuICAvLyBlbXB0eSBtZXRob2Rcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXRleHQtZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFRleHRFZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRUZXh0RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2Vhc3lNREU6IGFueTtcbiAgcHJpdmF0ZSBfZnJvbUVkaXRvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2Vhc3ltZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZXh0YXJlYTogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9uZTogTmdab25lKSB7fVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4gbm9vcDtcblxuICAvKipcbiAgICogdmFsdWU/OiBzdHJpbmdcbiAgICogVmFsdWUgaW4gdGhlIEVkaXRvciBhZnRlciBhc3luYyBnZXRFZGl0b3JDb250ZW50IHdhcyBjYWxsZWRcbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKVxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2Vhc3lNREUpIHtcbiAgICAgIGlmICghdGhpcy5fZnJvbUVkaXRvcikge1xuICAgICAgICB0aGlzLl9lYXN5TURFLnZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuX2Zyb21FZGl0b3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+ICh0aGlzLl92YWx1ZSA9IHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgZ2V0IGVhc3lNREUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWFzeU1ERTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9ICF2YWx1ZSA/ICcnIDogdmFsdWU7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMuZWxlbWVudCA9IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIElmIGNvbnRlbnQgZW50ZXJlZCBpcyBodG1sIHRoZW4gZG9uJ3QgZXZhbHVhdGUgaXQsIHByZXZlbnQgeHNzIHZ1bG5lcmFiaWxpdGllc1xuICAgIG1hcmtlZC5zZXRPcHRpb25zKHsgc2FuaXRpemU6IHRydWUgfSk7XG4gICAgdGhpcy5fZWFzeU1ERSA9IG5ldyBFYXN5TURFKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5fZWFzeU1ERS52YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9lYXN5TURFLmNvZGVtaXJyb3Iub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2Zyb21FZGl0b3IgPSB0cnVlO1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuX2Vhc3lNREUudmFsdWUoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiBXcmFwcGVkIGZ1bmN0aW9uIHByb3ZpZGVkIGJ5IEVhc3lNREUgKi9cblxuICBpc1ByZXZpZXdBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Vhc3lNREUuaXNQcmV2aWV3QWN0aXZlKCk7XG4gIH1cblxuICBpc1NpZGVCeVNpZGVBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Vhc3lNREUuaXNTaWRlQnlTaWRlQWN0aXZlKCk7XG4gIH1cblxuICBpc0Z1bGxzY3JlZW5BY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Vhc3lNREUuaXNGdWxsc2NyZWVuQWN0aXZlKCk7XG4gIH1cblxuICBjbGVhckF1dG9zYXZlZFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUuY2xlYXJBdXRvc2F2ZWRWYWx1ZSgpO1xuICB9XG5cbiAgdG9UZXh0QXJlYSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLnRvVGV4dEFyZWEoKTtcbiAgfVxuXG4gIHRvZ2dsZUJvbGQoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVCb2xkKCk7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVJdGFsaWMoKTtcbiAgfVxuXG4gIHRvZ2dsZVN0cmlrZXRocm91Z2goKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVTdHJpa2V0aHJvdWdoKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nU21hbGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLnRvZ2dsZUhlYWRpbmdTbWFsbGVyKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nQmlnZ2VyKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlSGVhZGluZ0JpZ2dlcigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZzEoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVIZWFkaW5nMSgpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZzIoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVIZWFkaW5nMigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZzMoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVIZWFkaW5nMygpO1xuICB9XG5cbiAgdG9nZ2xlQ29kZUJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlQ29kZUJsb2NrKCk7XG4gIH1cblxuICB0b2dnbGVCbG9ja3F1b3RlKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlQmxvY2txdW90ZSgpO1xuICB9XG5cbiAgdG9nZ2xlVW5vcmRlcmVkTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLnRvZ2dsZVVub3JkZXJlZExpc3QoKTtcbiAgfVxuXG4gIHRvZ2dsZU9yZGVyZWRMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlT3JkZXJlZExpc3QoKTtcbiAgfVxuXG4gIGNsZWFuQmxvY2soKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS5jbGVhbkJsb2NrKCk7XG4gIH1cblxuICBkcmF3TGluaygpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLmRyYXdMaW5rKCk7XG4gIH1cblxuICBkcmF3SW1hZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS5kcmF3SW1hZ2UoKTtcbiAgfVxuXG4gIGRyYXdUYWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLmRyYXdUYWJsZSgpO1xuICB9XG5cbiAgZHJhd0hvcml6b250YWxSdWxlKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUuZHJhd0hvcml6b250YWxSdWxlKCk7XG4gIH1cblxuICB0b2dnbGVQcmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlUHJldmlldygpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZUJ5U2lkZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLnRvZ2dsZVNpZGVCeVNpZGUoKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVGdWxsU2NyZWVuKCk7XG4gIH1cbn1cbiJdfQ==