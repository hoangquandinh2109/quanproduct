import { NgModule } from '@angular/core';
import { OptionsScrollDirective } from './directives/options-scroll.directive';
import { GenderPipe } from './pipe/gender.pipe';

@NgModule({
  declarations: [OptionsScrollDirective, GenderPipe],
  exports: [OptionsScrollDirective, GenderPipe]
})
export class SharedModule { }