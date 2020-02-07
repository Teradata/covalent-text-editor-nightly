import { Component, forwardRef, NgZone, ViewChild, Input, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as EasyMDE from 'easymde';
import { setOptions } from 'marked';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            if (this._easyMDE) {
                if (!this._fromEditor) {
                    this._easyMDE.value(value);
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
    Object.defineProperty(TdTextEditorComponent.prototype, "easyMDE", {
        get: /**
         * @return {?}
         */
        function () {
            return this._easyMDE;
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
        setOptions({ sanitize: true });
        this._easyMDE = new EasyMDE(this.options);
        this._easyMDE.value(this.value);
        this._easyMDE.codemirror.on('change', (/**
         * @return {?}
         */
        function () {
            _this._fromEditor = true;
            _this.writeValue(_this._easyMDE.value());
        }));
    };
    /* Wrapped function provided by EasyMDE */
    /* Wrapped function provided by EasyMDE */
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.isPreviewActive = /* Wrapped function provided by EasyMDE */
    /**
     * @return {?}
     */
    function () {
        return this._easyMDE.isPreviewActive();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.isSideBySideActive = /**
     * @return {?}
     */
    function () {
        return this._easyMDE.isSideBySideActive();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.isFullscreenActive = /**
     * @return {?}
     */
    function () {
        return this._easyMDE.isFullscreenActive();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.clearAutosavedValue = /**
     * @return {?}
     */
    function () {
        this._easyMDE.clearAutosavedValue();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toTextArea = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toTextArea();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleBold = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleBold();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleItalic = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleItalic();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleStrikethrough = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleStrikethrough();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeadingSmaller = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleHeadingSmaller();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeadingBigger = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleHeadingBigger();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeading1 = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleHeading1();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeading2 = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleHeading2();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleHeading3 = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleHeading3();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleCodeBlock = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleCodeBlock();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleBlockquote = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleBlockquote();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleUnorderedList = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleUnorderedList();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleOrderedList = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleOrderedList();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.cleanBlock = /**
     * @return {?}
     */
    function () {
        this._easyMDE.cleanBlock();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.drawLink = /**
     * @return {?}
     */
    function () {
        this._easyMDE.drawLink();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.drawImage = /**
     * @return {?}
     */
    function () {
        this._easyMDE.drawImage();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.drawTable = /**
     * @return {?}
     */
    function () {
        this._easyMDE.drawTable();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.drawHorizontalRule = /**
     * @return {?}
     */
    function () {
        this._easyMDE.drawHorizontalRule();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.togglePreview = /**
     * @return {?}
     */
    function () {
        this._easyMDE.togglePreview();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleSideBySide = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleSideBySide();
    };
    /**
     * @return {?}
     */
    TdTextEditorComponent.prototype.toggleFullScreen = /**
     * @return {?}
     */
    function () {
        this._easyMDE.toggleFullScreen();
    };
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
                            function () { return TdTextEditorComponent; })),
                            multi: true,
                        },
                    ],
                    styles: ["@charset \"UTF-8\";:host ::ng-deep .CodeMirror{font-family:monospace;color:#000;direction:ltr}:host ::ng-deep .CodeMirror-lines{padding:4px 0}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-scrollbar-filler{background-color:#fff}:host ::ng-deep .CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}:host ::ng-deep .CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}:host ::ng-deep .CodeMirror-guttermarker{color:#000}:host ::ng-deep .CodeMirror-guttermarker-subtle{color:#999}:host ::ng-deep .CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}:host ::ng-deep .CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}:host ::ng-deep .cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}:host ::ng-deep .cm-fat-cursor div.CodeMirror-cursors{z-index:1}:host ::ng-deep .cm-fat-cursor-mark{background-color:rgba(20,255,20,.5);-webkit-animation:1.06s steps(1) infinite blink;animation:1.06s steps(1) infinite blink}:host ::ng-deep .cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:1.06s steps(1) infinite blink;animation:1.06s steps(1) infinite blink;background-color:#7e7}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}:host ::ng-deep .cm-tab{display:inline-block;text-decoration:inherit}:host ::ng-deep .CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}:host ::ng-deep .CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}:host ::ng-deep .cm-s-default .cm-header{color:#00f}:host ::ng-deep .cm-s-default .cm-quote{color:#090}:host ::ng-deep .cm-negative{color:#d44}:host ::ng-deep .cm-positive{color:#292}:host ::ng-deep .cm-header,:host ::ng-deep .cm-strong{font-weight:700}:host ::ng-deep .cm-em{font-style:italic}:host ::ng-deep .cm-link{text-decoration:underline}:host ::ng-deep .cm-strikethrough{text-decoration:line-through}:host ::ng-deep .cm-s-default .cm-keyword{color:#708}:host ::ng-deep .cm-s-default .cm-atom{color:#219}:host ::ng-deep .cm-s-default .cm-number{color:#164}:host ::ng-deep .cm-s-default .cm-def{color:#00f}:host ::ng-deep .cm-s-default .cm-variable-2{color:#05a}:host ::ng-deep .cm-s-default .cm-type,:host ::ng-deep .cm-s-default .cm-variable-3{color:#085}:host ::ng-deep .cm-s-default .cm-comment{color:#a50}:host ::ng-deep .cm-s-default .cm-string{color:#a11}:host ::ng-deep .cm-s-default .cm-string-2{color:#f50}:host ::ng-deep .cm-s-default .cm-meta{color:#555}:host ::ng-deep .cm-s-default .cm-qualifier{color:#555}:host ::ng-deep .cm-s-default .cm-builtin{color:#30a}:host ::ng-deep .cm-s-default .cm-bracket{color:#997}:host ::ng-deep .cm-s-default .cm-tag{color:#170}:host ::ng-deep .cm-s-default .cm-attribute{color:#00c}:host ::ng-deep .cm-s-default .cm-hr{color:#999}:host ::ng-deep .cm-s-default .cm-link{color:#00c}:host ::ng-deep .cm-s-default .cm-error{color:red}:host ::ng-deep .cm-invalidchar{color:red}:host ::ng-deep .CodeMirror-composing{border-bottom:2px solid}:host ::ng-deep div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}:host ::ng-deep div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}:host ::ng-deep .CodeMirror-matchingtag{background:rgba(255,150,0,.3)}:host ::ng-deep .CodeMirror-activeline-background{background:#e8f2ff}:host ::ng-deep .CodeMirror{position:relative;overflow:hidden;background:#fff}:host ::ng-deep .CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:0;position:relative}:host ::ng-deep .CodeMirror-sizer{position:relative;border-right:30px solid transparent}:host ::ng-deep .CodeMirror-gutter-filler,:host ::ng-deep .CodeMirror-hscrollbar,:host ::ng-deep .CodeMirror-scrollbar-filler,:host ::ng-deep .CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}:host ::ng-deep .CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}:host ::ng-deep .CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}:host ::ng-deep .CodeMirror-scrollbar-filler{right:0;bottom:0}:host ::ng-deep .CodeMirror-gutter-filler{left:0;bottom:0}:host ::ng-deep .CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}:host ::ng-deep .CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}:host ::ng-deep .CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important}:host ::ng-deep .CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}:host ::ng-deep .CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}:host ::ng-deep .CodeMirror-gutter-wrapper ::selection{background-color:transparent}:host ::ng-deep .CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}:host ::ng-deep .CodeMirror-lines{cursor:text;min-height:1px}:host ::ng-deep .CodeMirror pre.CodeMirror-line,:host ::ng-deep .CodeMirror pre.CodeMirror-line-like{padding:0 4px;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;font-variant-ligatures:contextual}:host ::ng-deep .CodeMirror-wrap pre.CodeMirror-line,:host ::ng-deep .CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}:host ::ng-deep .CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}:host ::ng-deep .CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}:host ::ng-deep .CodeMirror-rtl pre{direction:rtl}:host ::ng-deep .CodeMirror-code{outline:0}:host ::ng-deep .CodeMirror-gutter,:host ::ng-deep .CodeMirror-gutters,:host ::ng-deep .CodeMirror-linenumber,:host ::ng-deep .CodeMirror-scroll,:host ::ng-deep .CodeMirror-sizer{box-sizing:content-box}:host ::ng-deep .CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}:host ::ng-deep .CodeMirror-cursor{position:absolute;pointer-events:none}:host ::ng-deep .CodeMirror-measure pre{position:static}:host ::ng-deep div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}:host ::ng-deep div.CodeMirror-dragcursors{visibility:visible}:host ::ng-deep .CodeMirror-focused div.CodeMirror-cursors{visibility:visible}:host ::ng-deep .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .CodeMirror-crosshair{cursor:crosshair}:host ::ng-deep .CodeMirror-line::selection,:host ::ng-deep .CodeMirror-line>span::selection,:host ::ng-deep .CodeMirror-line>span>span::selection{background:#d7d4f0}:host ::ng-deep .CodeMirror-line::-moz-selection,:host ::ng-deep .CodeMirror-line>span::-moz-selection,:host ::ng-deep .CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}:host ::ng-deep .cm-searching{background-color:rgba(255,255,0,.4)}:host ::ng-deep .cm-force-border{padding-right:.1px}@media print{:host ::ng-deep .CodeMirror div.CodeMirror-cursors{visibility:hidden}}:host ::ng-deep .cm-tab-wrap-hack:after{content:''}:host ::ng-deep span.CodeMirror-selectedtext{background:0 0}:host ::ng-deep .CodeMirror{box-sizing:border-box;height:auto;border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:1;word-wrap:break-word}:host ::ng-deep .CodeMirror-scroll{cursor:text}:host ::ng-deep .CodeMirror-fullscreen{background:#fff;position:fixed!important;top:50px;left:0;right:0;bottom:0;height:auto;z-index:9;border-right:none!important;border-bottom-right-radius:0!important}:host ::ng-deep .CodeMirror-sided{width:50%!important}:host ::ng-deep .CodeMirror-placeholder{opacity:.5}:host ::ng-deep .CodeMirror-focused .CodeMirror-selected{background:#d9d9d9}:host ::ng-deep .editor-toolbar{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;padding:0 10px;border-top:1px solid #bbb;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px}:host ::ng-deep .editor-toolbar:after,:host ::ng-deep .editor-toolbar:before{display:block;content:' ';height:1px}:host ::ng-deep .editor-toolbar:before{margin-bottom:8px}:host ::ng-deep .editor-toolbar:after{margin-top:8px}:host ::ng-deep .editor-toolbar.fullscreen{width:100%;height:50px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}:host ::ng-deep .editor-toolbar.fullscreen::before{width:20px;height:50px;background:-webkit-gradient(linear,left top,right top,color-stop(0,#fff),to(rgba(255,255,255,0)));background:linear-gradient(to right,#fff 0,rgba(255,255,255,0) 100%);position:fixed;top:0;left:0;margin:0;padding:0}:host ::ng-deep .editor-toolbar.fullscreen::after{width:20px;height:50px;background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),to(white));background:linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);position:fixed;top:0;right:0;margin:0;padding:0}:host ::ng-deep .editor-toolbar button{background:0 0;display:inline-block;text-align:center;text-decoration:none!important;width:30px;height:30px;margin:0;padding:0;border:1px solid transparent;border-radius:3px;cursor:pointer}:host ::ng-deep .editor-toolbar button.active,:host ::ng-deep .editor-toolbar button:hover{background:#fcfcfc;border-color:#95a5a6}:host ::ng-deep .editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}:host ::ng-deep .editor-toolbar button:after{font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}:host ::ng-deep .editor-toolbar button.heading-1:after{content:\"1\"}:host ::ng-deep .editor-toolbar button.heading-2:after{content:\"2\"}:host ::ng-deep .editor-toolbar button.heading-3:after{content:\"3\"}:host ::ng-deep .editor-toolbar button.heading-bigger:after{content:\"\u25B2\"}:host ::ng-deep .editor-toolbar button.heading-smaller:after{content:\"\u25BC\"}:host ::ng-deep .editor-toolbar.disabled-for-preview button:not(.no-disable){opacity:.6;pointer-events:none}@media only screen and (max-width:700px){:host ::ng-deep .editor-toolbar i.no-mobile{display:none}}:host ::ng-deep .editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}:host ::ng-deep .editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}:host ::ng-deep .editor-statusbar .lines:before{content:'lines: '}:host ::ng-deep .editor-statusbar .words:before{content:'words: '}:host ::ng-deep .editor-statusbar .characters:before{content:'characters: '}:host ::ng-deep .editor-preview-full{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7;overflow:auto;display:none;box-sizing:border-box}:host ::ng-deep .editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;overflow:auto;display:none;box-sizing:border-box;border:1px solid #ddd;word-wrap:break-word}:host ::ng-deep .editor-preview-active-side{display:block}:host ::ng-deep .editor-preview-active{display:block}:host ::ng-deep .editor-preview{padding:10px;background:#fafafa}:host ::ng-deep .editor-preview>p{margin-top:0}:host ::ng-deep .editor-preview pre{background:#eee;margin-bottom:10px}:host ::ng-deep .editor-preview table td,:host ::ng-deep .editor-preview table th{border:1px solid #ddd;padding:5px}:host ::ng-deep .cm-s-easymde .cm-tag{color:#63a35c}:host ::ng-deep .cm-s-easymde .cm-attribute{color:#795da3}:host ::ng-deep .cm-s-easymde .cm-string{color:#183691}:host ::ng-deep .cm-s-easymde .cm-header-1{font-size:200%;line-height:200%}:host ::ng-deep .cm-s-easymde .cm-header-2{font-size:160%;line-height:160%}:host ::ng-deep .cm-s-easymde .cm-header-3{font-size:125%;line-height:125%}:host ::ng-deep .cm-s-easymde .cm-header-4{font-size:110%;line-height:110%}:host ::ng-deep .cm-s-easymde .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}:host ::ng-deep .cm-s-easymde .cm-link{color:#7f8c8d}:host ::ng-deep .cm-s-easymde .cm-url{color:#aab2b3}:host ::ng-deep .cm-s-easymde .cm-quote{color:#7f8c8d;font-style:italic}:host ::ng-deep .CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}"]
                }] }
    ];
    /** @nocollapse */
    TdTextEditorComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    TdTextEditorComponent.propDecorators = {
        textarea: [{ type: ViewChild, args: ['easymde', { static: true },] }],
        options: [{ type: Input }],
        value: [{ type: Input, args: ['value',] }]
    };
    return TdTextEditorComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CovalentTextEditorModule = /** @class */ (function () {
    function CovalentTextEditorModule() {
    }
    CovalentTextEditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TdTextEditorComponent],
                    exports: [TdTextEditorComponent],
                    bootstrap: [TdTextEditorComponent],
                },] }
    ];
    return CovalentTextEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentTextEditorModule, TdTextEditorComponent };
//# sourceMappingURL=covalent-text-editor.js.map
