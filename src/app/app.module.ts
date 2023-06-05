import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlternateLandingComponent } from './pages/cyber-security-agency-demo/cyber-security-agency-demo.component';
import { CsaContactComponent } from './pages/cyber-security-agency-demo/csa-contact/csa-contact.component';
import { CsaCtaComponent } from './pages/cyber-security-agency-demo/csa-cta/csa-cta.component';
import { CsaAboutComponent } from './pages/cyber-security-agency-demo/csa-about/csa-about.component';
import { CsaBannerComponent } from './pages/cyber-security-agency-demo/csa-banner/csa-banner.component';
import { CsaFeaturesComponent } from './pages/cyber-security-agency-demo/csa-features/csa-features.component';
import { CsaFeedbackComponent } from './pages/cyber-security-agency-demo/csa-feedback/csa-feedback.component';
import { CsaFunfactsComponent } from './pages/cyber-security-agency-demo/csa-funfacts/csa-funfacts.component';
import { CsaTechnologyCompanyComponent } from './pages/cyber-security-agency-demo/csa-technology-company/csa-technology-company.component';
import { CsaPartnerComponent } from './pages/cyber-security-agency-demo/csa-partner/csa-partner.component';
import { CsaServicesComponent } from './pages/cyber-security-agency-demo/csa-services/csa-services.component';
import { CsaWhyChooseUsComponent } from './pages/cyber-security-agency-demo/csa-why-choose-us/csa-why-choose-us.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CountUpDirective } from './directives/count-up.directive';
import { PartnerComponent } from './common/partner/partner.component';
import { SaBannerComponent } from './pages/cyber-security-agency-demo/sa-banner/sa-banner.component';
import { MarketingAgencyDemoComponent } from './pages/marketing-agency-demo/marketing-agency-demo.component';
import { MaProjectsComponent } from './pages/marketing-agency-demo/ma-projects/ma-projects.component';
import { MaServicesComponent } from './pages/marketing-agency-demo/ma-services/ma-services.component';
import { MaFeedbackComponent } from './pages/marketing-agency-demo/ma-feedback/ma-feedback.component';
import { MaFunfactsComponent } from './pages/marketing-agency-demo/ma-funfacts/ma-funfacts.component';
import { MaCtaComponent } from './pages/marketing-agency-demo/ma-cta/ma-cta.component';
import { MaBlogComponent } from './pages/marketing-agency-demo/ma-blog/ma-blog.component';
import { MaBannerComponent } from './pages/marketing-agency-demo/ma-banner/ma-banner.component';
import { MaAboutComponent } from './pages/marketing-agency-demo/ma-about/ma-about.component';
import { MaContactComponent } from './pages/marketing-agency-demo/ma-contact/ma-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AlternateLandingComponent,
    CsaContactComponent,
    CsaCtaComponent,
    CsaContactComponent,
    CsaAboutComponent,
    CsaBannerComponent,
    CsaFeaturesComponent,
    CsaFeedbackComponent,
    CsaFunfactsComponent,
    CsaTechnologyCompanyComponent,
    CsaPartnerComponent,
    CsaServicesComponent,
    CsaWhyChooseUsComponent,
    NavbarComponent,
    FooterComponent,
    CountUpDirective,
    PartnerComponent,
    SaBannerComponent,
    MarketingAgencyDemoComponent,
    MaProjectsComponent, MaServicesComponent, MaFeedbackComponent, MaFunfactsComponent,
    MaCtaComponent, MaCtaComponent,
    MaBlogComponent,
    MaBannerComponent,
    MaAboutComponent, MaContactComponent

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
