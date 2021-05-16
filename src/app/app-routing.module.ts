import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UdhyogRegistrationComponent } from './udhyog/udhyog-registration/udhyog-registration.component';
import { UdhyogSearchComponent } from './udhyog/udhyog-search/udhyog-search.component';
import { UdhyogLandingPageComponent } from './udhyog/udhyog-landing-page/udhyog-landing-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'udhyog-registration/:id', component: UdhyogRegistrationComponent },
  { path: 'udhyog-registration', component: UdhyogRegistrationComponent },
  { path: 'udhyog-search', component: UdhyogSearchComponent},
  { path: 'udhyog', component: UdhyogLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
