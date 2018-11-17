import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

//Utils
import { SweetalertsService } from './_utils/sweetalerts.service';
import { NeksoService } from './_utils/nekso.service';

//pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailComponent } from './pages/detail/detail.component';

//components
import { MenuComponent } from './components/menu/menu.component';
import { HeaderCustomComponent } from './components/header-custom/header-custom.component';

//Module
import { PublicModule } from './pages/dashboard/public.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DetailComponent,
    MenuComponent,
    HeaderCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule
  ],
  providers: [
    SweetalertsService,
    NeksoService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
