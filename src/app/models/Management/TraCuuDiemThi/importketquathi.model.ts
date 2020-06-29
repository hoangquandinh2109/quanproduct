export class ImportKetQuaThi{
    namHoc: number;
    tenFile: string;
    ketQuaImport: string;
    constructor(){
        this.namHoc = new Date().getFullYear();
        this.tenFile = '';
        this.ketQuaImport = '';
    }
}