import { NgModule } from '@angular/core';
import { OptionsScrollDirective } from './directives/options-scroll.directive';
import { GenderPipe } from './pipe/gender.pipe';
import { ASCGridComponent } from './components/asc-grid/asc-grid.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    OptionsScrollDirective,
    GenderPipe,
    ASCGridComponent
  ],
  imports: [
    MatPaginatorModule,
    CommonModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [
    OptionsScrollDirective,
    GenderPipe,
    ASCGridComponent
  ]
})
export class SharedModule { }