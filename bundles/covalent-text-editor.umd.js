(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('simplemde'), require('marked'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/text-editor', ['exports', '@angular/core', '@angular/forms', 'simplemde', 'marked', '@angular/common'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent['text-editor'] = {}), global.ng.core, global.ng.forms, global.SimpleMDE, global.marked, global.ng.common));
}(this, function (exports, core, forms, SimpleMDE, marked, common) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'td-text-editor',
                        template: "<div>\n  <textarea #simplemde></textarea>\n</div>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
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
            { type: core.NgZone }
        ]; };
        TdTextEditorComponent.propDecorators = {
            textarea: [{ type: core.ViewChild, args: ['simplemde', { static: true },] }],
            options: [{ type: core.Input }],
            value: [{ type: core.Input, args: ['value',] }]
        };
        return TdTextEditorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentTextEditorModule = /** @class */ (function () {
        function CovalentTextEditorModule() {
        }
        /**
         * @return {?}
         */
        CovalentTextEditorModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: CovalentTextEditorModule,
                providers: [],
            };
        };
        CovalentTextEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TdTextEditorComponent],
                        exports: [TdTextEditorComponent],
                        entryComponents: [],
                        bootstrap: [TdTextEditorComponent],
                    },] }
        ];
        return CovalentTextEditorModule;
    }());

    exports.CovalentTextEditorModule = CovalentTextEditorModule;
    exports.TdTextEditorComponent = TdTextEditorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-text-editor.umd.js.map
