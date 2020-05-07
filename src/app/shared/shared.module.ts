import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    TranslateModule
      .forChild /* {
      loader: {provide: TranslateLoader, useClass: CustomLoader},
      compiler: {provide: TranslateCompiler, useClass: CustomCompiler},
      parser: {provide: TranslateParser, useClass: CustomParser},
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: CustomHandler},
      isolate: true
  } */
      (),
  ],
  exports: [FooterComponent, NavbarComponent],
})
export class SharedModule {}
