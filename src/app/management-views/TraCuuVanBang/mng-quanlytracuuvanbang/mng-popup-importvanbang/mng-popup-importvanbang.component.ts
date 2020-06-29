import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilsService } from 'src/app/services/core/utils.service';
import { ImportKetQuaThi } from 'src/app/models/Management/TraCuuDiemThi/importketquathi.model';

@Component({
  selector: 'app-mng-popup-importvanbang',
  templateUrl: './mng-popup-importvanbang.component.html',
  styleUrls: ['./mng-popup-importvanbang.component.sass']
})
export class MngPopupImportVanBangComponent {
  tenFile = '';
  constructor(
    public dialogRef: MatDialogRef<MngPopupImportVanBangComponent>,
    public utils: UtilsService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close(): void {
    this.dialogRef.close();
  }
  taiVe() {
    if(this.tenFile != ''){
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
    if(this.tenFile != ''){
      this.utils.showNotification('top','right','Import thành công', 2);
      this.close();
    } else {
      this.utils.showNotification('top','right','Không bỏ trống trường bắt buộc!', 3);
    }
  }

  finishUpload(file: FileList) {
    this.tenFile = file[0].name;
  }
  deleteFile(){
    this.tenFile = '';
  }
  suffixFileClick(){
    if(this.tenFile == '') this.utils.chooseFile();
    else this.tenFile = '';
  }
}
