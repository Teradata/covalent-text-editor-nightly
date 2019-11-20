/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                styles: ["@charset \"UTF-8\";:host ::ng-deep .CodeMirror{font-family:monospace;color:#000;direction:ltr}:host ::ng-deep .CodeMirror-lines{padding:4px 0}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-scrollbar-filler{background-color:#fff}:host ::ng-deep .CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}:host ::ng-deep .CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}:host ::ng-deep .CodeMirror-guttermarker{color:#000}:host ::ng-deep .CodeMirror-guttermarker-subtle{color:#999}:host ::ng-deep .CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}:host ::ng-deep .CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}:host ::ng-deep .cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}:host ::ng-deep .cm-fat-cursor div.CodeMirror-cursors{z-index:1}:host ::ng-deep .cm-fat-cursor-mark{background-color:rgba(20,255,20,.5);-webkit-animation:1.06s steps(1) infinite blink;animation:1.06s steps(1) infinite blink}:host ::ng-deep .cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:1.06s steps(1) infinite blink;animation:1.06s steps(1) infinite blink;background-color:#7e7}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}:host ::ng-deep .cm-tab{display:inline-block;text-decoration:inherit}:host ::ng-deep .CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}:host ::ng-deep .CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}:host ::ng-deep .cm-s-default .cm-header{color:#00f}:host ::ng-deep .cm-s-default .cm-quote{color:#090}:host ::ng-deep .cm-negative{color:#d44}:host ::ng-deep .cm-positive{color:#292}:host ::ng-deep .cm-header,:host ::ng-deep .cm-strong{font-weight:700}:host ::ng-deep .cm-em{font-style:italic}:host ::ng-deep .cm-link{text-decoration:underline}:host ::ng-deep .cm-strikethrough{text-decoration:line-through}:host ::ng-deep .cm-s-default .cm-keyword{color:#708}:host ::ng-deep .cm-s-default .cm-atom{color:#219}:host ::ng-deep .cm-s-default .cm-number{color:#164}:host ::ng-deep .cm-s-default .cm-def{color:#00f}:host ::ng-deep .cm-s-default .cm-variable-2{color:#05a}:host ::ng-deep .cm-s-default .cm-type,:host ::ng-deep .cm-s-default .cm-variable-3{color:#085}:host ::ng-deep .cm-s-default .cm-comment{color:#a50}:host ::ng-deep .cm-s-default .cm-string{color:#a11}:host ::ng-deep .cm-s-default .cm-string-2{color:#f50}:host ::ng-deep .cm-s-default .cm-meta{color:#555}:host ::ng-deep .cm-s-default .cm-qualifier{color:#555}:host ::ng-deep .cm-s-default .cm-builtin{color:#30a}:host ::ng-deep .cm-s-default .cm-bracket{color:#997}:host ::ng-deep .cm-s-default .cm-tag{color:#170}:host ::ng-deep .cm-s-default .cm-attribute{color:#00c}:host ::ng-deep .cm-s-default .cm-hr{color:#999}:host ::ng-deep .cm-s-default .cm-link{color:#00c}:host ::ng-deep .cm-s-default .cm-error{color:red}:host ::ng-deep .cm-invalidchar{color:red}:host ::ng-deep .CodeMirror-composing{border-bottom:2px solid}:host ::ng-deep div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}:host ::ng-deep div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}:host ::ng-deep .CodeMirror-matchingtag{background:rgba(255,150,0,.3)}:host ::ng-deep .CodeMirror-activeline-background{background:#e8f2ff}:host ::ng-deep .CodeMirror{position:relative;overflow:hidden;background:#fff}:host ::ng-deep .CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:0;position:relative}:host ::ng-deep .CodeMirror-sizer{position:relative;border-right:30px solid transparent}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-hscrollbar,:host ::ng-deep .CodeMirror-scrollbar-filler,:host ::ng-deep .CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}:host ::ng-deep .CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}:host ::ng-deep .CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}:host ::ng-deep .CodeMirror-scrollbar-filler{right:0;bottom:0}:host ::ng-deep .CodeMirror-gutter-filler{left:0;bottom:0}:host ::ng-deep .CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}:host ::ng-deep .CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}:host ::ng-deep .CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important}:host ::ng-deep .CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}:host ::ng-deep .CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}:host ::ng-deep .CodeMirror-gutter-wrapper ::selection{background-color:transparent}:host ::ng-deep .CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}:host ::ng-deep .CodeMirror-lines{cursor:text;min-height:1px}:host ::ng-deep .CodeMirror pre.CodeMirror-line,:host ::ng-deep .CodeMirror pre.CodeMirror-line-like{padding:0 4px;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;font-variant-ligatures:contextual}:host ::ng-deep .CodeMirror-wrap pre.CodeMirror-line,:host ::ng-deep .CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}:host ::ng-deep .CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}:host ::ng-deep .CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}:host ::ng-deep .CodeMirror-rtl pre{direction:rtl}:host ::ng-deep .CodeMirror-code{outline:0}:host ::ng-deep .CodeMirror-gutter,:host ::ng-deep .CodeMirror-gutters,:host ::ng-deep .CodeMirror-linenumber,:host ::ng-deep .CodeMirror-scroll,:host ::ng-deep .CodeMirror-sizer{box-sizing:content-box}:host ::ng-deep .CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}:host ::ng-deep .CodeMirror-cursor{position:absolute;pointer-events:none}:host ::ng-deep .CodeMirror-measure pre{position:static}:host ::ng-deep div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}:host ::ng-deep div.CodeMirror-dragcursors{visibility:visible}:host ::ng-deep .CodeMirror-focused div.CodeMirror-cursors{visibility:visible}:host ::ng-deep .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .CodeMirror-crosshair{cursor:crosshair}:host ::ng-deep .CodeMirror-line::selection,:host ::ng-deep .CodeMirror-line>span::selection,:host ::ng-deep .CodeMirror-line>span>span::selection{background:#d7d4f0}:host ::ng-deep .CodeMirror-line::-moz-selection,:host ::ng-deep .CodeMirror-line>span::-moz-selection,:host ::ng-deep .CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}:host ::ng-deep .cm-searching{background-color:rgba(255,255,0,.4)}:host ::ng-deep .cm-force-border{padding-right:.1px}@media print{:host ::ng-deep .CodeMirror div.CodeMirror-cursors{visibility:hidden}}:host ::ng-deep .cm-tab-wrap-hack:after{content:''}:host ::ng-deep span.CodeMirror-selectedtext{background:0 0}:host ::ng-deep .CodeMirror{box-sizing:border-box;height:auto;border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:1;word-wrap:break-word}:host ::ng-deep .CodeMirror-scroll{cursor:text}:host ::ng-deep .CodeMirror-fullscreen{background:#fff;position:fixed!important;top:50px;left:0;right:0;bottom:0;height:auto;z-index:9;border-right:none!important;border-bottom-right-radius:0!important}:host ::ng-deep .CodeMirror-sided{width:50%!important}:host ::ng-deep .CodeMirror-placeholder{opacity:.5}:host ::ng-deep .CodeMirror-focused .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .editor-toolbar{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;padding:0 10px;border-top:1px solid #bbb;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px}:host ::ng-deep .editor-toolbar:after,:host ::ng-deep .editor-toolbar:before{display:block;content:' ';height:1px}:host ::ng-deep .editor-toolbar:before{margin-bottom:8px}:host ::ng-deep .editor-toolbar:after{margin-top:8px}:host ::ng-deep .editor-toolbar.fullscreen{width:100%;height:50px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}:host ::ng-deep .editor-toolbar.fullscreen::before{width:20px;height:50px;background:-webkit-gradient(linear,left top,right top,color-stop(0,#fff),to(rgba(255,255,255,0)));background:linear-gradient(to right,#fff 0,rgba(255,255,255,0) 100%);position:fixed;top:0;left:0;margin:0;padding:0}:host ::ng-deep .editor-toolbar.fullscreen::after{width:20px;height:50px;background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),to(white));background:linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);position:fixed;top:0;right:0;margin:0;padding:0}:host ::ng-deep .editor-toolbar button{background:0 0;display:inline-block;text-align:center;text-decoration:none!important;width:30px;height:30px;margin:0;padding:0;border:1px solid transparent;border-radius:3px;cursor:pointer}:host ::ng-deep .editor-toolbar button.active,:host ::ng-deep .editor-toolbar button:hover{background:#fcfcfc;border-color:#95a5a6}:host ::ng-deep .editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}:host ::ng-deep .editor-toolbar button:after{font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}:host ::ng-deep .editor-toolbar button.heading-1:after{content:\"1\"}:host ::ng-deep .editor-toolbar button.heading-2:after{content:\"2\"}:host ::ng-deep .editor-toolbar button.heading-3:after{content:\"3\"}:host ::ng-deep .editor-toolbar button.heading-bigger:after{content:\"\u25B2\"}:host ::ng-deep .editor-toolbar button.heading-smaller:after{content:\"\u25BC\"}:host ::ng-deep .editor-toolbar.disabled-for-preview button:not(.no-disable){opacity:.6;pointer-events:none}@media only screen and (max-width:700px){:host ::ng-deep .editor-toolbar i.no-mobile{display:none}}:host ::ng-deep .editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}:host ::ng-deep .editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}:host ::ng-deep .editor-statusbar .lines:before{content:'lines: '}:host ::ng-deep .editor-statusbar .words:before{content:'words: '}:host ::ng-deep .editor-statusbar .characters:before{content:'characters: '}:host ::ng-deep .editor-preview-full{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7;overflow:auto;display:none;box-sizing:border-box}:host ::ng-deep .editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;overflow:auto;display:none;box-sizing:border-box;border:1px solid #ddd;word-wrap:break-word}:host ::ng-deep .editor-preview-active-side{display:block}:host ::ng-deep .editor-preview-active{display:block}:host ::ng-deep .editor-preview{padding:10px;background:#fafafa}:host ::ng-deep .editor-preview>p{margin-top:0}:host ::ng-deep .editor-preview pre{background:#eee;margin-bottom:10px}:host ::ng-deep .editor-preview table td,:host ::ng-deep .editor-preview table th{border:1px solid #ddd;padding:5px}:host ::ng-deep .cm-s-easymde .cm-tag{color:#63a35c}:host ::ng-deep .cm-s-easymde .cm-attribute{color:#795da3}:host ::ng-deep .cm-s-easymde .cm-string{color:#183691}:host ::ng-deep .cm-s-easymde .cm-header-1{font-size:200%;line-height:200%}:host ::ng-deep .cm-s-easymde .cm-header-2{font-size:160%;line-height:160%}:host ::ng-deep .cm-s-easymde .cm-header-3{font-size:125%;line-height:125%}:host ::ng-deep .cm-s-easymde .cm-header-4{font-size:110%;line-height:110%}:host ::ng-deep .cm-s-easymde .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}:host ::ng-deep .cm-s-easymde .cm-link{color:#7f8c8d}:host ::ng-deep .cm-s-easymde .cm-url{color:#aab2b3}:host ::ng-deep .cm-s-easymde .cm-quote{color:#7f8c8d;font-style:italic}:host ::ng-deep .CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L3RleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsidGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQzs7QUFFbkMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BRTNCLElBQUk7OztBQUFRLEdBQUcsRUFBRTtJQUNyQixlQUFlO0FBQ2pCLENBQUMsQ0FBQTs7QUFjRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBUWhDLFlBQW9CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBUHpCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFFcEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHNUIsWUFBTyxHQUFRLEVBQUUsQ0FBQzs7UUFLM0Isb0JBQWU7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBQ2pDLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztJQUphLENBQUM7Ozs7Ozs7SUFVckMsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJ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QUFDOzs7WUFqTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDZEQUEyQztnQkFFM0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUM7d0JBQ3BELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7O1lBckI0RSxNQUFNOzs7dUJBMkJoRixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtzQkFDckMsS0FBSztvQkFZTCxLQUFLLFNBQUMsT0FBTzs7Ozs7OztJQWpCZCx1Q0FBNEI7Ozs7O0lBQzVCLHlDQUFzQjs7Ozs7SUFDdEIsNENBQXFDOztJQUVyQyx5Q0FBNkQ7O0lBQzdELHdDQUEyQjs7SUFLM0IsZ0RBQWlDOztJQUNqQywwQ0FBdUI7Ozs7O0lBSlgsc0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIEVhc3lNREUgZnJvbSAnZWFzeW1kZSc7XG4vLyBnZXQgYWNjZXNzIHRvIHRoZSBtYXJrZWQgY2xhc3MgdW5kZXIgZWFzeW1kZVxuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5cbmNvbnN0IG5vb3A6IGFueSA9ICgpID0+IHtcbiAgLy8gZW1wdHkgbWV0aG9kXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC10ZXh0LWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRUZXh0RWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkVGV4dEVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9lYXN5TURFOiBhbnk7XG4gIHByaXZhdGUgX2Zyb21FZGl0b3I6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdlYXN5bWRlJywgeyBzdGF0aWM6IHRydWUgfSkgdGV4dGFyZWE6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IG5vb3A7XG5cbiAgLyoqXG4gICAqIHZhbHVlPzogc3RyaW5nXG4gICAqIFZhbHVlIGluIHRoZSBFZGl0b3IgYWZ0ZXIgYXN5bmMgZ2V0RWRpdG9yQ29udGVudCB3YXMgY2FsbGVkXG4gICAqL1xuICBASW5wdXQoJ3ZhbHVlJylcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9lYXN5TURFKSB7XG4gICAgICBpZiAoIXRoaXMuX2Zyb21FZGl0b3IpIHtcbiAgICAgICAgdGhpcy5fZWFzeU1ERS52YWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLl9mcm9tRWRpdG9yID0gZmFsc2U7XG4gICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiAodGhpcy5fdmFsdWUgPSB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIGdldCBlYXN5TURFKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vhc3lNREU7XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSAhdmFsdWUgPyAnJyA6IHZhbHVlO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zLmVsZW1lbnQgPSB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBJZiBjb250ZW50IGVudGVyZWQgaXMgaHRtbCB0aGVuIGRvbid0IGV2YWx1YXRlIGl0LCBwcmV2ZW50IHhzcyB2dWxuZXJhYmlsaXRpZXNcbiAgICBtYXJrZWQuc2V0T3B0aW9ucyh7IHNhbml0aXplOiB0cnVlIH0pO1xuICAgIHRoaXMuX2Vhc3lNREUgPSBuZXcgRWFzeU1ERSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuX2Vhc3lNREUudmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5fZWFzeU1ERS5jb2RlbWlycm9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9mcm9tRWRpdG9yID0gdHJ1ZTtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLl9lYXN5TURFLnZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogV3JhcHBlZCBmdW5jdGlvbiBwcm92aWRlZCBieSBFYXN5TURFICovXG5cbiAgaXNQcmV2aWV3QWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lYXN5TURFLmlzUHJldmlld0FjdGl2ZSgpO1xuICB9XG5cbiAgaXNTaWRlQnlTaWRlQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lYXN5TURFLmlzU2lkZUJ5U2lkZUFjdGl2ZSgpO1xuICB9XG5cbiAgaXNGdWxsc2NyZWVuQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lYXN5TURFLmlzRnVsbHNjcmVlbkFjdGl2ZSgpO1xuICB9XG5cbiAgY2xlYXJBdXRvc2F2ZWRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLmNsZWFyQXV0b3NhdmVkVmFsdWUoKTtcbiAgfVxuXG4gIHRvVGV4dEFyZWEoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b1RleHRBcmVhKCk7XG4gIH1cblxuICB0b2dnbGVCb2xkKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlQm9sZCgpO1xuICB9XG5cbiAgdG9nZ2xlSXRhbGljKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlSXRhbGljKCk7XG4gIH1cblxuICB0b2dnbGVTdHJpa2V0aHJvdWdoKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlU3RyaWtldGhyb3VnaCgpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZ1NtYWxsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVIZWFkaW5nU21hbGxlcigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZ0JpZ2dlcigpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLnRvZ2dsZUhlYWRpbmdCaWdnZXIoKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmcxKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlSGVhZGluZzEoKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmcyKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlSGVhZGluZzIoKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmczKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlSGVhZGluZzMoKTtcbiAgfVxuXG4gIHRvZ2dsZUNvZGVCbG9jaygpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLnRvZ2dsZUNvZGVCbG9jaygpO1xuICB9XG5cbiAgdG9nZ2xlQmxvY2txdW90ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLnRvZ2dsZUJsb2NrcXVvdGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVVub3JkZXJlZExpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVVbm9yZGVyZWRMaXN0KCk7XG4gIH1cblxuICB0b2dnbGVPcmRlcmVkTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLnRvZ2dsZU9yZGVyZWRMaXN0KCk7XG4gIH1cblxuICBjbGVhbkJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUuY2xlYW5CbG9jaygpO1xuICB9XG5cbiAgZHJhd0xpbmsoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS5kcmF3TGluaygpO1xuICB9XG5cbiAgZHJhd0ltYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUuZHJhd0ltYWdlKCk7XG4gIH1cblxuICBkcmF3VGFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS5kcmF3VGFibGUoKTtcbiAgfVxuXG4gIGRyYXdIb3Jpem9udGFsUnVsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLmRyYXdIb3Jpem9udGFsUnVsZSgpO1xuICB9XG5cbiAgdG9nZ2xlUHJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLl9lYXN5TURFLnRvZ2dsZVByZXZpZXcoKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVCeVNpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZWFzeU1ERS50b2dnbGVTaWRlQnlTaWRlKCk7XG4gIH1cblxuICB0b2dnbGVGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuX2Vhc3lNREUudG9nZ2xlRnVsbFNjcmVlbigpO1xuICB9XG59XG4iXX0=