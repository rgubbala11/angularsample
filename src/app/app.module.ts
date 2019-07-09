import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveDemoDirective } from './directive-demo.directive';
import { MyComponentComponent } from './my-component/my-component.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveformsdemoComponent } from './forms/reactiveformsdemo/reactiveformsdemo.component';
import { TemplateformsdemoComponent } from './forms/templateformsdemo/templateformsdemo.component';
import { StructuralDirectiveComponent } from './directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';
import { FormsModule } from '@angular/forms';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { PurepipedemoComponent } from './pipes-demo/purepipedemo/purepipedemo.component';
import { ImpurepipedemoComponent } from './pipes-demo/impurepipedemo/impurepipedemo.component';
import { PurePipeDemo } from './pipes-demo/purepipedemo/purePipeDemo';
import { ImPurePipeDemo } from './pipes-demo/impurepipedemo/impurepipeDemo';
import { FirstDirective } from './directives/directiveDemo';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveDemoDirective,
    MyComponentComponent,
    HomeComponent,
    FormsComponent,
    DirectivesComponent,
    ReactiveformsdemoComponent,
    TemplateformsdemoComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    PipesDemoComponent,
    PurepipedemoComponent,
    ImpurepipedemoComponent,
    PurePipeDemo,
    ImPurePipeDemo,
    FirstDirective,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
