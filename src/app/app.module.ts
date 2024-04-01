import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HightlightDirective } from './hightlight.directive';
import { BoldDirective } from './bold.directive';
import { UnderlineDirective } from './underline.directive';
import { ItalicDirective } from './italic.directive';

@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    BoldDirective,
    UnderlineDirective,
    ItalicDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
