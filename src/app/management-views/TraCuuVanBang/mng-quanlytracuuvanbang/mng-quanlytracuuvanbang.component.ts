import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ASCGridConfigData } from 'src/app/components/asc-grid/asc-grid.component';
import { TraCuuVanBangService } from 'src/app/services/Management/TraCuuVanBang/tracuuvanbang.service';
import { MngPopupImportVanBangComponent } from './mng-popup-importvanbang/mng-popup-importvanbang.component';
import { ConfirmComponent } from 'src/app/popups/confirm/confirm.component';
export class Demo {
  mahocsinh: string;
}
@Component({
  selector: 'app-mng-quanlytracuuvanbang',
  templateUrl: './mng-quanlytracuuvanbang.component.html',
  styleUrls: ['./mng-quanlytracuuvanbang.component.sass']
})
export class MngQuanLyTraCuuVanBangComponent implements OnInit {
  searchAdvanced = true;
  gridData = [];
  long = new Demo();
  configData: ASCGridConfigData = {
    colHeadNames: ['STT', 'Họ tên', 'Ngày sinh', 'Giới tính', 'Nơi sinh', 'Dân tộc', 'Hội đồng thi', 'Học sinh trường', 'Số cấp bằng', 'Khóa thi', 'Số hiệu bằng', 'Quyết định'],
    colFieldNames: ['hoTen', 'ngaySinh', 'gioiTinh', 'noiSinh', 'danToc', 'hoiDongThi', 'hocSinhTruong', 'soCapBang', 'khoaThi', 'soHieuBang', 'quyetDinh'],
    colFieldTypes: ['string', 'date', 'gender', 'string', 'string', 'string', 'string', 'string', 'date', 'string', 'string'],
    buttons: [
      {
        color: 'warn',
        tooltip: 'Xóa',
        icon: 'clear',
        functionName: 'delete'
      }
    ]
  }
  constructor(
    public dialog: MatDialog,
    private service: TraCuuVanBangService
  ) { }

  ngOnInit() {
  }

  pageEvent(pageE: any) {
    // this.filter.PageIndex = pageE.pageIndex + 1;
    // this.filter.PageSize = pageE.pageSize;
    // this.loadGrid();
  }
  buttonClick(eventInfo: any) {
    switch (eventInfo.functionName) {
      case 'delete':
        this.delete(eventInfo.item)
        break;
    }
  }
  delete(item: any) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '750px',
      data: {

        height: '500px',
        title: 'Xóa văn bằng',
        message: 'Bạn có chắc muốn xóa <span style="color:red">văn bằng này?</span>'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.delete(item);
    });
  }
  loadGrid() {
    this.gridData = this.service.fetchGridData();
  }
  exportExcel() {
    // var downloadURL = window.URL.createObjectURL({size: 12});
    var link = document.createElement('a');
    link.href = 'fakeurl';
    link.download = 'VanBang_ChungChi.xlsx';
    link.click();
  }
  importVanBang() {
    const dialogRef = this.dialog.open(MngPopupImportVanBangComponent, {
      width: '750px',
      data: {
        height: '500px'
      }
    });
    // dialogRef.afterClosed().subscribe(() => {

    // });
  }
}
