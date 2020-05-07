import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild(/* {
      loader: {provide: TranslateLoader, useClass: CustomLoader},
      compiler: {provide: TranslateCompiler, useClass: CustomCompiler},
      parser: {provide: TranslateParser, useClass: CustomParser},
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: CustomHandler},
      isolate: true
  } */
      )
  ]
})
export class SharedModule { }
