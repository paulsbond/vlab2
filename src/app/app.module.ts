import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AlcoholComponent } from './alcohol/alcohol.component';
import { AppComponent } from './app.component';
import { DilutionComponent } from './dilution/dilution.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AlcoholComponent,
    AppComponent,
    DilutionComponent,
    HomeComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
