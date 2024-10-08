import { HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {
  @HostBinding('class.app-host') value: number = 1;
}
