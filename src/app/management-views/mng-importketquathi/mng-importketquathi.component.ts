import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ASCGridConfigData } from 'src/app/components/asc-grid/asc-grid.component';
import { ConfirmComponent } from 'src/app/popups/confirm/confirm.component';
import { MngPopupImportKetQuaThiComponent } from './mng-popup-importketquathi/mng-popup-importketquathi.component';
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
    public dialog: MatDialog
  ) {

  }
  ngOnInit() {
  }

  pageEvent(pageE: any) {
    // this.filter.PageIndex = pageE.pageIndex + 1;
    // this.filter.PageSize = pageE.pageSize;
    // this.loadGrid();
  }
  buttonClick(eventInfo: any) {
    switch (eventInfo.functionName) {
      case 'edit':
        this.edit(eventInfo.item)
        break;
      case 'delete':
        this.delete(eventInfo.item)
        break;
    }
  }
  edit(item: any) {
    alert('edit' + item.id);
  }
  delete(item: any) {
    alert('delete' + item.id);
  }
  importKetQuaThi() {
    const dialogRef = this.dialog.open(MngPopupImportKetQuaThiComponent, {
      width: '750px',
      data: {
        height: '500px'
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
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
    this.gridData = [
      {
        id: 1,
        hoTen: 'Đinh Thôi Chan',
        soBaoDanh: 'SB0001',
        diemThi: 'Toán: 10, Văn: 2.5, Lịch Sử: 3.0, Địa lí: 5.0',
        ngaySinh: '2002-02-28',
        gioiTinh: 1,
        cmnd: '275155321',
        cumThi: 'HUI'
      },
      {
        id: 2,
        hoTen: 'Nguyễn Thị Lan Hương',
        soBaoDanh: 'SB0002',
        diemThi: 'Toán: 10, Văn: 2.5, Lịch Sử: 3.0, Địa lí: 5.0',
        ngaySinh: '2002-03-07',
        gioiTinh: 0,
        cmnd: '275155321',
        cumThi: 'Hutech'
      },
      {
        id: 3,
        hoTen: 'Phương Huỳnh Thanh Triều',
        soBaoDanh: 'SB0003',
        diemThi: 'Toán: 10, Văn: 2.5, Lịch Sử: 3.0, Địa lí: 5.0',
        ngaySinh: '2000-05-11',
        gioiTinh: 1,
        cmnd: '275155321',
        cumThi: 'HCMMUT'
      },
      {
        id: 4,
        hoTen: 'Nguyễn Thanh Trúc',
        soBaoDanh: 'SB0004',
        diemThi: 'Toán: 10, Văn: 2.5, Lịch Sử: 3.0, Địa lí: 5.0',
        ngaySinh: '2002-07-22',
        gioiTinh: 0,
        cmnd: '275155321',
        cumThi: 'FPT'
      },
      {
        id: 5,
        hoTen: 'Đỗ Nguyên Thanh Cường',
        soBaoDanh: 'SB0005',
        diemThi: 'Toán: 10, Văn: 2.5, Lịch Sử: 3.0, Địa lí: 5.0',
        ngaySinh: '2001-08-20',
        gioiTinh: 1,
        cmnd: '275155321',
        cumThi: 'RMIT'
      }
    ]
  }
  exportExcel(){
    // var downloadURL = window.URL.createObjectURL({size: 12});
    var link = document.createElement('a');
    link.href = 'fakeurl';
    link.download = 'KetQuaThi.xlsx';
    link.click();
  }
}
