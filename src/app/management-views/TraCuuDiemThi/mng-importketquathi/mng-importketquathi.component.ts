import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ASCGridConfigData } from 'src/app/components/asc-grid/asc-grid.component';
import { ConfirmComponent } from 'src/app/popups/confirm/confirm.component';
import { MngPopupImportKetQuaThiComponent } from './mng-popup-importketquathi/mng-popup-importketquathi.component';
import { TraCuuDiemThiService } from 'src/app/services/Management/TraCuuDiemThi/tracuudiemthi.service';
export class Demo{
  mahocsinh: string;
}
@Component({
  selector: 'app-mng-importketquathi',
  templateUrl: './mng-importketquathi.component.html',
  styleUrls: ['./mng-importketquathi.component.sass']
})
export class MngImportKetQuaThiComponent implements OnInit {
  searchAdvanced = true;
  gridData = [];
  long = new Demo();
  configData: ASCGridConfigData = {
    colHeadNames: ['STT', 'Họ tên', 'SBD', 'Điểm thi', 'Ngày sinh', 'Giới tính', 'CMND', 'Cụm thi'],
    colFieldNames: ['hoTen', 'soBaoDanh', 'diemThi', 'ngaySinh', 'gioiTinh', 'cmnd', 'cumThi'],
    colFieldTypes: ['string', 'string', 'string', 'date', 'gender', 'string', 'string']
  }
  constructor(
    public dialog: MatDialog,
    private service: TraCuuDiemThiService
  ) {

  }
  ngOnInit() {
  }

  pageEvent(pageE: any) {
    // this.filter.PageIndex = pageE.pageIndex + 1;
    // this.filter.PageSize = pageE.pageSize;
    // this.loadGrid();
  }
  importKetQuaThi() {
    const dialogRef = this.dialog.open(MngPopupImportKetQuaThiComponent, {
      width: '750px',
      data: {
        height: '500px'
      }
    });
    // dialogRef.afterClosed().subscribe(() => {
      
    // });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '750px', // chiều rộng của dialog
      data: {
        height: '500px', // chiều cao của dialog
        title: 'Vip',
        message: 'Hihihi',
      }
    });
    dialogRef.afterClosed().subscribe(() => this.loadGrid());
  }
  loadGrid() {
    this.gridData = this.service.fetchGridData();
  }
  exportExcel(){
    // var downloadURL = window.URL.createObjectURL({size: 12});
    var link = document.createElement('a');
    link.href = 'fakeurl';
    link.download = 'KetQuaThi.xlsx';
    link.click();
  }
}
