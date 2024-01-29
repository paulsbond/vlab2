import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { GoogleChartsModule } from "angular-google-charts";
import { NgsContenteditableModule } from "@ng-stack/contenteditable";

import { AlcoholComponent } from './pages/alcohol/alcohol.component';
import { AppComponent } from './app.component';
import { CaffeineComponent } from './pages/caffeine/caffeine.component';
import { DilutionComponent } from './components/dilution/dilution.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SaltComponent } from './pages/salt/salt.component';
import { UvvisComponent } from './pages/uvvis/uvvis.component';
import { UvvisFixedComponent } from './components/uvvis-fixed/uvvis-fixed.component';

@NgModule({
  declarations: [
    AlcoholComponent,
    AppComponent,
    CaffeineComponent,
    DilutionComponent,
    HomeComponent,
    SettingsComponent,
    SaltComponent,
    UvvisComponent,
    UvvisFixedComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    GoogleChartsModule,
    NgsContenteditableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
