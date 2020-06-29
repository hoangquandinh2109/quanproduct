import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ASCGridConfigData, ASCGridButton } from 'src/app/components/asc-grid/asc-grid.component';
import { ConfirmComponent } from '../../popups/confirm/confirm.component';
@Component({
  selector: 'app-mng-monthi',
  templateUrl: './mng-monthi.component.html',
  styleUrls: ['./mng-monthi.component.sass']
})
export class MngMonThiComponent implements OnInit {
  searchAdvanced = true;
  gridData = [];
  configData: ASCGridConfigData = {
    colHeadNames: ['STT', 'Kỳ thi', 'Môn thi', 'Hệ Số', 'Ngày', 'Giới tính'],
    colFieldNames: ['tenKyThi', 'tenMonThi', 'heSo', 'ngay', 'gioiTinh'],
    colFieldTypes: ['string','string','number','date', 'gender'],
    buttons: [
      {
        color: 'primary',
        tooltip: 'Sửa',
        icon: 'create',
        functionName: 'edit'
      },
      {
        color: 'warn',
        tooltip: 'Xóa',
        icon: 'clear',
        functionName: 'delete'
      }
    ]
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
  buttonClick(eventInfo: any){
    switch(eventInfo.functionName){
      case 'edit':
        this.edit(eventInfo.item)
        break;
      case 'delete':
        this.delete(eventInfo.item)
        break;
    }
  }
  edit(item: any){ 
    alert('edit' + item.id);
  }
  delete(item: any){ 
    alert('delete' + item.id);
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
        tenKyThi: 'Kỳ thi 1',
        tenMonThi: 'Môn thi 1',
        heSo: 1,
        ngay: '2020-09-21',
        gioiTinh: 1
      },
      {
        id: 2,
        tenKyThi: 'Kỳ thi 2',
        tenMonThi: 'Môn thi 2',
        heSo: 2,
        ngay: '2020-09-21',
        gioiTinh: 0
      },
      {
        id: 3,
        tenKyThi: 'Kỳ thi 3',
        tenMonThi: 'Môn thi 3',
        heSo: 1,
        ngay: '2020-09-21',
        gioiTinh: 1
      },
      {
        id: 4,
        tenKyThi: 'Kỳ thi 4',
        tenMonThi: 'Môn thi 4',
        heSo: 2,
        ngay: '2020-09-21',
        gioiTinh: 0
      },
      {
        id: 5,
        tenKyThi: 'Kỳ thi 5',
        tenMonThi: 'Môn thi 5',
        heSo: 1,
        ngay: '2020-09-21',
        gioiTinh: 1
      }
    ]
    // this.service.getMonThisList(this.filter).subscribe((resp: any) => {
    //   this.entrancelist = resp.results || []
    //   this.length = resp.rowCount;
    //   this.firstRowOnPage = resp.firstRowOnPage;
    // })
  }
}
