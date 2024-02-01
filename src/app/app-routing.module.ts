import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcoholComponent } from './pages/alcohol/alcohol.component';
import { CaffeineComponent } from './pages/caffeine/caffeine.component';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { SaltComponent } from './pages/salt/salt.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UvvisComponent } from './pages/uvvis/uvvis.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alcohol', component: AlcoholComponent },
  { path: 'caffeine', component: CaffeineComponent },
  { path: 'cv', component: CvComponent },
  { path: 'salt', component: SaltComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'uvvis', component: UvvisComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
