import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCetproComponent } from './components/Cetpro/list-cetpro/list-cetpro.component';

import { CetproPageComponent } from './pages/cetpro-page/cetpro-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormCetproComponent } from './components/Cetpro/form-cetpro/form-cetpro.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListCetproComponent,
    CetproPageComponent,
    FormCetproComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
