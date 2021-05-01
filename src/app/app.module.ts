import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PersonsComponent } from './persons/persons.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LocalizationDirective } from './directives/localization.directive';
import { UdhyogRegistrationComponent } from './udhyog/udhyog-registration/udhyog-registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS, JsonpInterceptor } from '@angular/common/http';
import { PersonModalComponent } from './persons/person-modal/person-modal.component';
import { CompanyTypesComponent } from './company-types/company-types.component';
import { CompanyTypesModalComponent } from './company-types/company-types-modal/company-types-modal.component';
import { HeaderComponent } from './header/header.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { UdhyogSearchComponent } from './udhyog/udhyog-search/udhyog-search.component';
import { NepaliDateFormaterPipe } from './pipes/nepali-date-formater.pipe';
import { DatePipe } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { CertificateComponent } from './udhyog/certificate/certificate.component';
import { UdhyogLandingPageComponent } from './udhyog/udhyog-landing-page/udhyog-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    HomepageComponent,
    LocalizationDirective,
    UdhyogRegistrationComponent,
    PersonModalComponent,
    CompanyTypesComponent,
    CompanyTypesModalComponent,
    HeaderComponent,
    UdhyogSearchComponent,
    NepaliDateFormaterPipe,
    CertificateComponent,
    UdhyogLandingPageComponent
  ],
  entryComponents: [
    PersonModalComponent,
    CompanyTypesModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatSnackBarModule,
    HttpClientJsonpModule
  ],
  providers: [ DatePipe,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check-indeterminate'},
    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
