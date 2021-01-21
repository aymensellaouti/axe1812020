import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackComponent } from './components/back/back.component';
import { ColorComponent } from './components/color/color.component';
import { FrontComponent } from './components/front/front.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { ModalComponent } from './directives/modal/modal.component';
import { TestNgStyleComponent } from './directives/test-ng-style/test-ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NF404Component } from './pages/nf404/nf404.component';
import { TodoComponent } from './todo/todo/todo.component';

// /todo

const routes: Routes = [
  { path: '', component: WordComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      {
        path: 'add',
        component: AddPersonneComponent,
        canActivate: [AuthGuard],
      },
      { path: ':id', component: DetailPersonneComponent },
    ],
  },
  { path: 'todo', component: TodoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'color/:defaultColor', component: ColorComponent },
  {
    path: 'front',
    component: FrontComponent,
    children: [{ path: 'modal', component: ModalComponent }],
  },
  {
    path: 'back',
    component: BackComponent,
    children: [{ path: 'ngstyle', component: TestNgStyleComponent }],
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
