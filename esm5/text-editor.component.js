/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, forwardRef, NgZone } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as SimpleMDE from 'simplemde';
// get access to the marked class under simplemde
import * as marked from 'marked';
/** @type {?} */
var noop = (/**
 * @return {?}
 */
function () {
    // empty method
});
var ɵ0 = noop;
var TdTextEditorComponent = /** @class */ (function () {
    function TdTextEditorComponent(_zone) {
        this._zone = _zone;
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
                    styles: ["@charset \"UTF-8\";:host ::ng-deep .CodeMirror{color:#000}:host ::ng-deep .CodeMirror-lines{padding:4px 0}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-scrollbar-filler{background-color:#fff}:host ::ng-deep .CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}:host ::ng-deep .CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}:host ::ng-deep .CodeMirror-guttermarker{color:#000}:host ::ng-deep .CodeMirror-guttermarker-subtle{color:#999}:host ::ng-deep .CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}:host ::ng-deep .CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}:host ::ng-deep .cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}:host ::ng-deep .cm-fat-cursor div.CodeMirror-cursors{z-index:1}:host ::ng-deep .cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:1.06s steps(1) infinite blink;animation:1.06s steps(1) infinite blink;background-color:#7e7}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}:host ::ng-deep .cm-tab{display:inline-block;text-decoration:inherit}:host ::ng-deep .CodeMirror-ruler{border-left:1px solid #ccc;position:absolute}:host ::ng-deep .cm-s-default .cm-header{color:#00f}:host ::ng-deep .cm-s-default .cm-quote{color:#090}:host ::ng-deep .cm-negative{color:#d44}:host ::ng-deep .cm-positive{color:#292}:host ::ng-deep .cm-header,:host ::ng-deep .cm-strong{font-weight:700}:host ::ng-deep .cm-em{font-style:italic}:host ::ng-deep .cm-link{text-decoration:underline}:host ::ng-deep .cm-strikethrough{text-decoration:line-through}:host ::ng-deep .cm-s-default .cm-keyword{color:#708}:host ::ng-deep .cm-s-default .cm-atom{color:#219}:host ::ng-deep .cm-s-default .cm-number{color:#164}:host ::ng-deep .cm-s-default .cm-def{color:#00f}:host ::ng-deep .cm-s-default .cm-variable-2{color:#05a}:host ::ng-deep .cm-s-default .cm-variable-3{color:#085}:host ::ng-deep .cm-s-default .cm-comment{color:#a50}:host ::ng-deep .cm-s-default .cm-string{color:#a11}:host ::ng-deep .cm-s-default .cm-string-2{color:#f50}:host ::ng-deep .cm-s-default .cm-meta,:host ::ng-deep .cm-s-default .cm-qualifier{color:#555}:host ::ng-deep .cm-s-default .cm-builtin{color:#30a}:host ::ng-deep .cm-s-default .cm-bracket{color:#997}:host ::ng-deep .cm-s-default .cm-tag{color:#170}:host ::ng-deep .cm-s-default .cm-attribute{color:#00c}:host ::ng-deep .cm-s-default .cm-hr{color:#999}:host ::ng-deep .cm-s-default .cm-link{color:#00c}:host ::ng-deep .cm-invalidchar,:host ::ng-deep .cm-s-default .cm-error{color:red}:host ::ng-deep .CodeMirror-composing{border-bottom:2px solid}:host ::ng-deep div.CodeMirror span.CodeMirror-matchingbracket{color:#0f0}:host ::ng-deep div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#f22}:host ::ng-deep .CodeMirror-matchingtag{background:rgba(255,150,0,.3)}:host ::ng-deep .CodeMirror-activeline-background{background:#e8f2ff}:host ::ng-deep .CodeMirror{position:relative;overflow:hidden;background:#fff}:host ::ng-deep .CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:0;position:relative}:host ::ng-deep .CodeMirror-sizer{position:relative;border-right:30px solid transparent}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-hscrollbar,:host ::ng-deep .CodeMirror-scrollbar-filler,:host ::ng-deep .CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}:host ::ng-deep .CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}:host ::ng-deep .CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}:host ::ng-deep .CodeMirror-scrollbar-filler{right:0;bottom:0}:host ::ng-deep .CodeMirror-gutter-filler{left:0;bottom:0}:host ::ng-deep .CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}:host ::ng-deep .CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}:host ::ng-deep .CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}:host ::ng-deep .CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}:host ::ng-deep .CodeMirror-lines{cursor:text;min-height:1px}:host ::ng-deep .CodeMirror pre{padding:0 4px;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:none;font-variant-ligatures:none}:host ::ng-deep .CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}:host ::ng-deep .CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}:host ::ng-deep .CodeMirror-linewidget{position:relative;z-index:2;overflow:auto}:host ::ng-deep .CodeMirror-code{outline:0}:host ::ng-deep .CodeMirror-gutter,:host ::ng-deep .CodeMirror-gutters,:host ::ng-deep .CodeMirror-linenumber,:host ::ng-deep .CodeMirror-scroll,:host ::ng-deep .CodeMirror-sizer{box-sizing:content-box}:host ::ng-deep .CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}:host ::ng-deep .CodeMirror-cursor{position:absolute}:host ::ng-deep .CodeMirror-measure pre{position:static}:host ::ng-deep div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}:host ::ng-deep .CodeMirror-focused div.CodeMirror-cursors,:host ::ng-deep div.CodeMirror-dragcursors{visibility:visible}:host ::ng-deep .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .CodeMirror-focused .CodeMirror-selected,:host ::ng-deep .CodeMirror-line::-moz-selection,:host ::ng-deep .CodeMirror-line>span::-moz-selection,:host ::ng-deep .CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}:host ::ng-deep .CodeMirror-focused .CodeMirror-selected,:host ::ng-deep .CodeMirror-line::selection,:host ::ng-deep .CodeMirror-line>span::selection,:host ::ng-deep .CodeMirror-line>span>span::selection{background:#d7d4f0}:host ::ng-deep .CodeMirror-crosshair{cursor:crosshair}:host ::ng-deep .CodeMirror-line::-moz-selection,:host ::ng-deep .CodeMirror-line>span::-moz-selection,:host ::ng-deep .CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}:host ::ng-deep .cm-searching{background:rgba(255,255,0,.4)}:host ::ng-deep .cm-force-border{padding-right:.1px}@media print{:host ::ng-deep .CodeMirror div.CodeMirror-cursors{visibility:hidden}}:host ::ng-deep .cm-tab-wrap-hack:after{content:''}:host ::ng-deep span.CodeMirror-selectedtext{background:0 0}:host ::ng-deep .CodeMirror{height:auto;min-height:300px;border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:1}:host ::ng-deep .CodeMirror-scroll{min-height:300px}:host ::ng-deep .CodeMirror-fullscreen{background:#fff;position:fixed!important;top:50px;left:0;right:0;bottom:0;height:auto;z-index:9}:host ::ng-deep .CodeMirror-sided{width:50%!important}:host ::ng-deep .editor-toolbar{position:relative;opacity:.6;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;padding:0 10px;border-top:1px solid #bbb;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px}:host ::ng-deep .editor-toolbar:after,:host ::ng-deep .editor-toolbar:before{display:block;content:' ';height:1px}:host ::ng-deep .editor-toolbar:before{margin-bottom:8px}:host ::ng-deep .editor-toolbar:after{margin-top:8px}:host ::ng-deep .editor-toolbar:hover,:host ::ng-deep .editor-wrapper input.title:focus,:host ::ng-deep .editor-wrapper input.title:hover{opacity:.8}:host ::ng-deep .editor-toolbar.fullscreen{width:100%;height:50px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}:host ::ng-deep .editor-toolbar.fullscreen::before{width:20px;height:50px;background:linear-gradient(to right,#fff 0,rgba(255,255,255,0) 100%);position:fixed;top:0;left:0;margin:0;padding:0}:host ::ng-deep .editor-toolbar.fullscreen::after{width:20px;height:50px;background:linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);position:fixed;top:0;right:0;margin:0;padding:0}:host ::ng-deep .editor-toolbar a{display:inline-block;text-align:center;text-decoration:none!important;color:#2c3e50!important;width:30px;height:30px;margin:0;border:1px solid transparent;border-radius:3px;cursor:pointer}:host ::ng-deep .editor-toolbar a.active,:host ::ng-deep .editor-toolbar a:hover{background:#fcfcfc;border-color:#95a5a6}:host ::ng-deep .editor-toolbar a:before{line-height:30px}:host ::ng-deep .editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}:host ::ng-deep .editor-toolbar a.fa-header-x:after{font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}:host ::ng-deep .editor-toolbar a.fa-header-1:after{content:\"1\"}:host ::ng-deep .editor-toolbar a.fa-header-2:after{content:\"2\"}:host ::ng-deep .editor-toolbar a.fa-header-3:after{content:\"3\"}:host ::ng-deep .editor-toolbar a.fa-header-bigger:after{content:\"\u25B2\"}:host ::ng-deep .editor-toolbar a.fa-header-smaller:after{content:\"\u25BC\"}:host ::ng-deep .editor-toolbar.disabled-for-preview a:not(.no-disable){pointer-events:none;background:#fff;border-color:transparent;text-shadow:inherit}@media only screen and (max-width:700px){:host ::ng-deep .editor-toolbar a.no-mobile{display:none}}:host ::ng-deep .editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}:host ::ng-deep .editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}:host ::ng-deep .editor-preview,:host ::ng-deep .editor-preview-side{padding:10px;background:#fafafa;overflow:auto;display:none;box-sizing:border-box}:host ::ng-deep .editor-statusbar .lines:before{content:'lines: '}:host ::ng-deep .editor-statusbar .words:before{content:'words: '}:host ::ng-deep .editor-statusbar .characters:before{content:'characters: '}:host ::ng-deep .editor-preview{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7}:host ::ng-deep .editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;border:1px solid #ddd}:host ::ng-deep .editor-preview-active,:host ::ng-deep .editor-preview-active-side{display:block}:host ::ng-deep .editor-preview-side>p,:host ::ng-deep .editor-preview>p{margin-top:0}:host ::ng-deep .editor-preview pre,:host ::ng-deep .editor-preview-side pre{background:#eee;margin-bottom:10px}:host ::ng-deep .editor-preview table td,:host ::ng-deep .editor-preview table th,:host ::ng-deep .editor-preview-side table td,:host ::ng-deep .editor-preview-side table th{border:1px solid #ddd;padding:5px}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-tag{color:#63a35c}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-attribute{color:#795da3}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-string{color:#183691}:host ::ng-deep .CodeMirror .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-header-1{font-size:200%;line-height:200%}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-header-2{font-size:160%;line-height:160%}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-header-3{font-size:125%;line-height:125%}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-header-4{font-size:110%;line-height:110%}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-link{color:#7f8c8d}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-url{color:#aab2b3}:host ::ng-deep .CodeMirror .CodeMirror-code .cm-strikethrough{text-decoration:line-through}:host ::ng-deep .CodeMirror .CodeMirror-placeholder{opacity:.5}:host ::ng-deep .CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}"]
                }] }
    ];
    /** @nocollapse */
    TdTextEditorComponent.ctorParameters = function () { return [
        { type: NgZone }
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
    TdTextEditorComponent.prototype._zone;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L3RleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsidGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEtBQUssU0FBUyxNQUFNLFdBQVcsQ0FBQzs7QUFFdkMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBRTNCLElBQUk7OztBQUFRO0lBQ2hCLGVBQWU7QUFDakIsQ0FBQyxDQUFBOztBQUVEO0lBb0JFLCtCQUFvQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQVB6QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzVCLFlBQU8sR0FBUSxFQUFFLENBQUM7O1FBSzNCLG9CQUFlOzs7O1FBQUcsVUFBQyxDQUFNLElBQU0sQ0FBQyxFQUFDO1FBQ2pDLGNBQVM7OztRQUFHLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO0lBSmEsQ0FBQztJQVVyQyxzQkFDSSx3Q0FBSzs7OztRQVlUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7UUFuQkQ7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDVSxLQUFhO1lBRHZCLGlCQVdDO1lBVEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FB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QWxCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxnREFBZ0I7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsZ0RBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckMsQ0FBQzs7Z0JBakxGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwrREFBMkM7b0JBRTNDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsRUFBQzs0QkFDcEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7O2lCQUNGOzs7O2dCQXJCNEUsTUFBTTs7OzJCQTJCaEYsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBQ3ZDLEtBQUs7d0JBWUwsS0FBSyxTQUFDLE9BQU87O0lBb0poQiw0QkFBQztDQUFBLEFBbExELElBa0xDO1NBdEtZLHFCQUFxQjs7Ozs7O0lBQ2hDLHVDQUE0Qjs7Ozs7SUFDNUIsMkNBQXdCOzs7OztJQUN4Qiw0Q0FBcUM7O0lBRXJDLHlDQUErRDs7SUFDL0Qsd0NBQTJCOztJQUszQixnREFBaUM7O0lBQ2pDLDBDQUF1Qjs7Ozs7SUFKWCxzQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgU2ltcGxlTURFIGZyb20gJ3NpbXBsZW1kZSc7XG4vLyBnZXQgYWNjZXNzIHRvIHRoZSBtYXJrZWQgY2xhc3MgdW5kZXIgc2ltcGxlbWRlXG5pbXBvcnQgKiBhcyBtYXJrZWQgZnJvbSAnbWFya2VkJztcblxuY29uc3Qgbm9vcDogYW55ID0gKCkgPT4ge1xuICAvLyBlbXB0eSBtZXRob2Rcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXRleHQtZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFRleHRFZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRUZXh0RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3NpbXBsZU1ERTogYW55O1xuICBwcml2YXRlIF9mcm9tRWRpdG9yOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnc2ltcGxlbWRlJywgeyBzdGF0aWM6IHRydWUgfSkgdGV4dGFyZWE6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IG5vb3A7XG5cbiAgLyoqXG4gICAqIHZhbHVlPzogc3RyaW5nXG4gICAqIFZhbHVlIGluIHRoZSBFZGl0b3IgYWZ0ZXIgYXN5bmMgZ2V0RWRpdG9yQ29udGVudCB3YXMgY2FsbGVkXG4gICAqL1xuICBASW5wdXQoJ3ZhbHVlJylcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9zaW1wbGVNREUpIHtcbiAgICAgIGlmICghdGhpcy5fZnJvbUVkaXRvcikge1xuICAgICAgICB0aGlzLl9zaW1wbGVNREUudmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5fZnJvbUVkaXRvciA9IGZhbHNlO1xuICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4gKHRoaXMuX3ZhbHVlID0gdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBnZXQgc2ltcGxlTURFKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZU1ERTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9ICF2YWx1ZSA/ICcnIDogdmFsdWU7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMuZWxlbWVudCA9IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIElmIGNvbnRlbnQgZW50ZXJlZCBpcyBodG1sIHRoZW4gZG9uJ3QgZXZhbHVhdGUgaXQsIHByZXZlbnQgeHNzIHZ1bG5lcmFiaWxpdGllc1xuICAgIG1hcmtlZC5zZXRPcHRpb25zKHsgc2FuaXRpemU6IHRydWUgfSk7XG4gICAgdGhpcy5fc2ltcGxlTURFID0gbmV3IFNpbXBsZU1ERSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuX3NpbXBsZU1ERS52YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9zaW1wbGVNREUuY29kZW1pcnJvci5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5fZnJvbUVkaXRvciA9IHRydWU7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5fc2ltcGxlTURFLnZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogV3JhcHBlZCBmdW5jdGlvbiBwcm92aWRlZCBieSBTaW1wbGVNREUgKi9cblxuICBpc1ByZXZpZXdBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZU1ERS5pc1ByZXZpZXdBY3RpdmUoKTtcbiAgfVxuXG4gIGlzU2lkZUJ5U2lkZUFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlTURFLmlzU2lkZUJ5U2lkZUFjdGl2ZSgpO1xuICB9XG5cbiAgaXNGdWxsc2NyZWVuQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGVNREUuaXNGdWxsc2NyZWVuQWN0aXZlKCk7XG4gIH1cblxuICBjbGVhckF1dG9zYXZlZFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5jbGVhckF1dG9zYXZlZFZhbHVlKCk7XG4gIH1cblxuICB0b1RleHRBcmVhKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b1RleHRBcmVhKCk7XG4gIH1cblxuICB0b2dnbGVCb2xkKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVCb2xkKCk7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUl0YWxpYygpO1xuICB9XG5cbiAgdG9nZ2xlU3RyaWtldGhyb3VnaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlU3RyaWtldGhyb3VnaCgpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZ1NtYWxsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmdTbWFsbGVyKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nQmlnZ2VyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nQmlnZ2VyKCk7XG4gIH1cblxuICB0b2dnbGVIZWFkaW5nMSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlSGVhZGluZzEoKTtcbiAgfVxuXG4gIHRvZ2dsZUhlYWRpbmcyKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS50b2dnbGVIZWFkaW5nMigpO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGluZzMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUhlYWRpbmczKCk7XG4gIH1cblxuICB0b2dnbGVDb2RlQmxvY2soKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUNvZGVCbG9jaygpO1xuICB9XG5cbiAgdG9nZ2xlQmxvY2txdW90ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlQmxvY2txdW90ZSgpO1xuICB9XG5cbiAgdG9nZ2xlVW5vcmRlcmVkTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUudG9nZ2xlVW5vcmRlcmVkTGlzdCgpO1xuICB9XG5cbiAgdG9nZ2xlT3JkZXJlZExpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZU9yZGVyZWRMaXN0KCk7XG4gIH1cblxuICBjbGVhbkJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5jbGVhbkJsb2NrKCk7XG4gIH1cblxuICBkcmF3TGluaygpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0xpbmsoKTtcbiAgfVxuXG4gIGRyYXdJbWFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaW1wbGVNREUuZHJhd0ltYWdlKCk7XG4gIH1cblxuICBkcmF3VGFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLmRyYXdUYWJsZSgpO1xuICB9XG5cbiAgZHJhd0hvcml6b250YWxSdWxlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NpbXBsZU1ERS5kcmF3SG9yaXpvbnRhbFJ1bGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVByZXZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVByZXZpZXcoKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVCeVNpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZVNpZGVCeVNpZGUoKTtcbiAgfVxuXG4gIHRvZ2dsZUZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fc2ltcGxlTURFLnRvZ2dsZUZ1bGxTY3JlZW4oKTtcbiAgfVxufVxuIl19