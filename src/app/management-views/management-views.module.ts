import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from '../popups/confirm/confirm.component';
import { InfoDialogComponent } from '../popups/confirm/InfoDialog/info-dialog/info-dialog.component';
import { SharedModule } from '../shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementViewsRoutingModule } from './management-views-routing.module';
import { MngMonThiComponent } from './monthi-demo/mng-monthi.component';
import { MngImportKetQuaThiComponent } from './TraCuuDiemThi/mng-importketquathi/mng-importketquathi.component';
import { MngQuanLyTraCuuVanBangComponent } from './TraCuuVanBang/mng-quanlytracuuvanbang/mng-quanlytracuuvanbang.component';
import { MngPopupImportKetQuaThiComponent } from './TraCuuDiemThi/mng-importketquathi/mng-popup-importketquathi/mng-popup-importketquathi.component';
import { MngPopupImportVanBangComponent } from './TraCuuVanBang/mng-quanlytracuuvanbang/mng-popup-importvanbang/mng-popup-importvanbang.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ConfirmComponent,
    InfoDialogComponent,
    MngMonThiComponent,
    MngImportKetQuaThiComponent,
    MngQuanLyTraCuuVanBangComponent,
    //Popup
    MngPopupImportKetQuaThiComponent,
    MngPopupImportVanBangComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    ManagementViewsRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatNativeDateModule

  ],
  providers: [
    NgbActiveModal,
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' },
  ],
  entryComponents: [
    ConfirmComponent,
    MngPopupImportKetQuaThiComponent,
    MngPopupImportVanBangComponent
  ]
})
export class ManagementViewsModule { }
