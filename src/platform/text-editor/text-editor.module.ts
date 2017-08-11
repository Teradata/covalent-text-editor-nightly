import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdTextEditorComponent } from './text-editor.component';
import { EscapeHtmlPipe } from './escape-html.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdTextEditorComponent,
    EscapeHtmlPipe,
  ],
  exports: [
    TdTextEditorComponent,
  ],
  entryComponents: [ ],
  bootstrap: [ TdTextEditorComponent ],
})
export class CovalentTextEditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentTextEditorModule,
      providers: [ ],
    };
  }
}
