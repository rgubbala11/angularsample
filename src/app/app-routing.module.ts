import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ReactiveformsdemoComponent } from './forms/reactiveformsdemo/reactiveformsdemo.component';
import { TemplateformsdemoComponent } from './forms/templateformsdemo/templateformsdemo.component';
import { StructuralDirectiveComponent } from './directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { PurepipedemoComponent } from './pipes-demo/purepipedemo/purepipedemo.component';
import { ImpurepipedemoComponent } from './pipes-demo/impurepipedemo/impurepipedemo.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent,
    children: [
      { path: 'structural', component: StructuralDirectiveComponent },
      { path: 'attribute', component: AttributeDirectiveComponent },
    ]
  },
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      { path: 'reactive', component: ReactiveformsdemoComponent },
      { path: 'template', component: TemplateformsdemoComponent },
    ]
  },
  {
    path: 'components',
    component: MyComponentComponent
  }
  ,
  {
    path: 'pipes',
    component: PipesDemoComponent,
    children: [
      { path: 'pure', component: PurepipedemoComponent },
      { path: 'impure', component: ImpurepipedemoComponent },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
