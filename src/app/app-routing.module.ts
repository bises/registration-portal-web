import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UdhyogRegistrationComponent } from './udhyog/udhyog-registration/udhyog-registration.component';
import { UdhyogSearchComponent } from './udhyog/udhyog-search/udhyog-search.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'udhyog-registration', component: UdhyogRegistrationComponent },
  { path: 'udhyog-search', component: UdhyogSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
