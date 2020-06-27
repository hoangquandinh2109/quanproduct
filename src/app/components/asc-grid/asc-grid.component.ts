import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class ASCGridConfigData{
    colHeadNames: any[]
    colFieldNames: any[]
    colFieldTypes: any[]
}
@Component({
    selector: 'asc-grid',
    templateUrl: './asc-grid.component.html'
})
export class ASCGridComponent implements OnInit {
    @Input() data: any[];
    @Input() config: ASCGridConfigData;
    @Input() length: number;
    @Input() pageIndex: number;
    @Input() pageSize: number;
    @Output() pageChange = new EventEmitter<any>();
    
    ngOnInit(): void {

    }
    pageEvent(event: any){
        this.pageChange.emit(event);
    }
}