import { HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFrameRoutingModule } from './app-frame-routing.module';
import { AppFrameComponent } from './app-frame.component';

@NgModule({
  declarations: [AppFrameComponent],
  imports: [CommonModule, AppFrameRoutingModule],
})
export class AppFrameModule {
  @HostBinding('class.app-host') value: number = 1;
}
