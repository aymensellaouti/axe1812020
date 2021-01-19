import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardsComponent } from './components/rotating-cards/rotating-cards.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { TestNgStyleComponent } from './directives/test-ng-style/test-ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { ModalComponent } from './directives/modal/modal.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { UsdBtcPipe } from './pipe/usd-btc.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardsComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    TestNgStyleComponent,
    WordComponent,
    ModalComponent,
    HighlightDirective,
    RainbowDirective,
    UsdBtcPipe,
    DefaultImagePipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
