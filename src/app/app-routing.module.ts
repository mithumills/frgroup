import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlternateLandingComponent } from './pages/cyber-security-agency-demo/cyber-security-agency-demo.component';
import { MarketingAgencyDemoComponent } from './pages/marketing-agency-demo/marketing-agency-demo.component';

const routes: Routes = [
  {
    path: 'xyz',
    component: LandingPageComponent,

  }, {
    path: 'dark',
    component: AlternateLandingComponent,
  }, {
    path: '',
    component: MarketingAgencyDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
