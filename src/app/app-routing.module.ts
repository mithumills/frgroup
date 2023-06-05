import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlternateLandingComponent } from './pages/cyber-security-agency-demo/cyber-security-agency-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,

  }, {
    path: 'new',
    component: AlternateLandingComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
