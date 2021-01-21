import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
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
import { TodoComponent } from './todo/todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { BackComponent } from './components/back/back.component';
import { FrontComponent } from './components/front/front.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './pages/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { SliderComponent } from './components/slider/slider.component';
import { NF404Component } from './pages/nf404/nf404.component';
import { AuthIterceptorProvider } from './interceptors/auth-interceptor';

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
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailPersonneComponent,
    AddPersonneComponent,
    BackComponent,
    FrontComponent,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    SliderComponent,
    NF404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    AppRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [AuthIterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
