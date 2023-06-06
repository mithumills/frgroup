import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlternateLandingComponent } from './pages/cyber-security-agency-demo/cyber-security-agency-demo.component';
import { CsaCtaComponent } from './pages/cyber-security-agency-demo/csa-cta/csa-cta.component';
import { CsaAboutComponent } from './pages/cyber-security-agency-demo/csa-about/csa-about.component';
import { CsaFeaturesComponent } from './pages/cyber-security-agency-demo/csa-features/csa-features.component';
import { CsaFeedbackComponent } from './pages/cyber-security-agency-demo/csa-feedback/csa-feedback.component';
import { CsaFunfactsComponent } from './pages/cyber-security-agency-demo/csa-funfacts/csa-funfacts.component';
import { CsaPartnerComponent } from './pages/cyber-security-agency-demo/csa-partner/csa-partner.component';
import { CsaServicesComponent } from './pages/cyber-security-agency-demo/csa-services/csa-services.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CountUpDirective } from './directives/count-up.directive';
import { PartnerComponent } from './common/partner/partner.component';
import { SaBannerComponent } from './pages/cyber-security-agency-demo/sa-banner/sa-banner.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AlternateLandingComponent,
    CsaCtaComponent,
    CsaAboutComponent,
    CsaFeaturesComponent,
    CsaFeedbackComponent,
    CsaFunfactsComponent,
    CsaPartnerComponent,
    CsaServicesComponent,
    NavbarComponent,
    FooterComponent,
    CountUpDirective,
    PartnerComponent,
    SaBannerComponent,
    NotFoundComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
