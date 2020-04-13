import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UdhyogRegistrationComponent } from './udhyog/udhyog-registration/udhyog-registration.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'udhyog-registration', component: UdhyogRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
