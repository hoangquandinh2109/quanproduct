import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilsService } from 'src/app/services/core/utils.service';
import { ImportKetQuaThi } from 'src/app/models/Management/TraCuuDiemThi/importketquathi.model';

@Component({
  selector: 'app-mng-popup-importketquathi',
  templateUrl: './mng-popup-importketquathi.component.html',
  styleUrls: ['./mng-popup-importketquathi.component.sass']
})
export class MngPopupImportKetQuaThiComponent {
  importKetQuaThiModel = new ImportKetQuaThi();
  constructor(
    public dialogRef: MatDialogRef<MngPopupImportKetQuaThiComponent>,
    public utils: UtilsService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close(): void {
    this.dialogRef.close();
  }
  taiVe() {
    if(this.importKetQuaThiModel.namHoc && this.importKetQuaThiModel.tenFile != ''){
      // var downloadURL = window.URL.createObjectURL({size: 12});
      var link = document.createElement('a');
      link.href = 'fakeurl';
      link.download = 'Ketquathi.exe';
      link.click();
    }else {
      this.utils.showNotification('top','right','Không bỏ trống trường bắt buộc!', 3);
    }
  }
  import() {
    if(this.importKetQuaThiModel.namHoc && this.importKetQuaThiModel.tenFile != ''){
      //fake kết quả import
      var fakeNO = Math.floor((Math.random() * 2));
  
      this.importKetQuaThiModel.ketQuaImport = fakeNO == 0 ? 'Import thành công' : 'Import thất bại!\nDòng 2'+fakeNO+' trong file không hợp lệ!';
    } else {
      this.utils.showNotification('top','right','Không bỏ trống trường bắt buộc!', 3);
    }
  }

  finishUpload(file: FileList) {
    this.importKetQuaThiModel.tenFile = file[0].name;
  }
}
