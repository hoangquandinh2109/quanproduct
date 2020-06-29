import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TraCuuVanBangService {
    constructor(private http: HttpClient) { }
    data = [
        {
            id: 1,
            hoTen: 'Nguyễn Văn 5',
            ngaySinh: '2002-02-05',
            gioiTinh: 1,
            noiSinh: 'Nơi sinh 1',
            danToc: 'Kinh',
            hoiDongThi: 'Hội đồng thi 1',
            hocSinhTruong: 'Trường THPT Nguyễn Phong 1',
            soCapBang: 123156,
            khoaThi: '2020-06-01',
            soHieuBang: 216565,
            quyetDinh: ''
        },
        {
            id: 2,
            hoTen: 'Nguyễn Văn 2',
            ngaySinh: '2002-02-02',
            gioiTinh: 1,
            noiSinh: 'Nơi sinh 2',
            danToc: 'Kinh',
            hoiDongThi: 'Hội đồng thi 2',
            hocSinhTruong: 'Trường THPT Nguyễn Phong 2',
            soCapBang: 123156,
            khoaThi: '2020-06-02',
            soHieuBang: 216565,
            quyetDinh: ''
        },
        {
            id: 3,
            hoTen: 'Nguyễn Văn 3',
            ngaySinh: '2002-02-03',
            gioiTinh: 1,
            noiSinh: 'Nơi sinh 3',
            danToc: 'Kinh',
            hoiDongThi: 'Hội đồng thi 3',
            hocSinhTruong: 'Trường THPT Nguyễn Phong 3',
            soCapBang: 123156,
            khoaThi: '2020-06-03',
            soHieuBang: 216565,
            quyetDinh: ''
        },
        {
            id: 4,
            hoTen: 'Nguyễn Văn 4',
            ngaySinh: '2002-02-04',
            gioiTinh: 1,
            noiSinh: 'Nơi sinh 4',
            danToc: 'Kinh',
            hoiDongThi: 'Hội đồng thi 4',
            hocSinhTruong: 'Trường THPT Nguyễn Phong 4',
            soCapBang: 123156,
            khoaThi: '2020-06-04',
            soHieuBang: 216565,
            quyetDinh: ''
        },
        {
            id: 5,
            hoTen: 'Nguyễn Văn 1',
            ngaySinh: '2002-02-01',
            gioiTinh: 1,
            noiSinh: 'Nơi sinh 5',
            danToc: 'Kinh',
            hoiDongThi: 'Hội đồng thi 5',
            hocSinhTruong: 'Trường THPT Nguyễn Phong 5',
            soCapBang: 123156,
            khoaThi: '2020-06-05',
            soHieuBang: 216565,
            quyetDinh: ''
        }
    ];
    fetchGridData(){
        return this.data;
    }
    delete(id: number) {
        const itemIndex = this.data.findIndex(x => x.id == id);
        if (itemIndex != -1) {
            this.data.splice(itemIndex, 1);
        }
    }
}