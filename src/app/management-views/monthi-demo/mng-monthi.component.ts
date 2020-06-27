import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../popups/confirm/confirm.component';
import { startWith, debounceTime, tap, switchMap, finalize, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-mng-monthi',
  templateUrl: './mng-monthi.component.html',
  styleUrls: ['./mng-monthi.component.sass']
})
export class MngMonThiComponent implements OnInit {
  searchAdvanced = true;
  gridData = [1,2,3,4,5];
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
    // this.service.getMonThisList(this.filter).subscribe((resp: any) => {
    //   this.entrancelist = resp.results || []
    //   this.length = resp.rowCount;
    //   this.firstRowOnPage = resp.firstRowOnPage;
    // })
  }
}
