import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TraCuuDiemThiService {
    constructor(private http: HttpClient) { }
    data = [
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
    ];
    fetchGridData() {
        return this.data;
    }
}