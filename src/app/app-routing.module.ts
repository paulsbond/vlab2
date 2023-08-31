import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcoholComponent } from './pages/alcohol/alcohol.component';
import { CaffeineComponent } from './pages/caffeine/caffeine.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alcohol', component: AlcoholComponent },
  { path: 'caffeine', component: CaffeineComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
