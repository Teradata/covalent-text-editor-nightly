import { AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class TdTextEditorComponent implements AfterViewInit, ControlValueAccessor {
    private _zone;
    private _value;
    private _easyMDE;
    private _fromEditor;
    textarea: ElementRef;
    options: any;
    constructor(_zone: NgZone);
    propagateChange: (_: any) => void;
    onTouched: () => any;
    /**
     * value?: string
     * Value in the Editor after async getEditorContent was called
     */
    value: string;
    readonly easyMDE: any;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngAfterViewInit(): void;
    isPreviewActive(): boolean;
    isSideBySideActive(): boolean;
    isFullscreenActive(): boolean;
    clearAutosavedValue(): void;
    toTextArea(): void;
    toggleBold(): void;
    toggleItalic(): void;
    toggleStrikethrough(): void;
    toggleHeadingSmaller(): void;
    toggleHeadingBigger(): void;
    toggleHeading1(): void;
    toggleHeading2(): void;
    toggleHeading3(): void;
    toggleCodeBlock(): void;
    toggleBlockquote(): void;
    toggleUnorderedList(): void;
    toggleOrderedList(): void;
    cleanBlock(): void;
    drawLink(): void;
    drawImage(): void;
    drawTable(): void;
    drawHorizontalRule(): void;
    togglePreview(): void;
    toggleSideBySide(): void;
    toggleFullScreen(): void;
}
