export enum EnumDoanDoi {
    Khong = 0,
    DoiVien = 1,
    DoanVien = 2,
    DangVien = 3
}

export class DoanDoi {
    constructor(public value: EnumDoanDoi, public text: string) {
    }
}

export var DoanDois: DoanDoi[] = [
    new DoanDoi(EnumDoanDoi.Khong, "Không"),
    new DoanDoi(EnumDoanDoi.DoiVien, "Đội Viên"),
    new DoanDoi(EnumDoanDoi.DoanVien, "Đoàn Viên"),
    new DoanDoi(EnumDoanDoi.DangVien, "Đảng Viên")
]