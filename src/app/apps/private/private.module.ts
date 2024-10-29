import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, PrivateRoutingModule, DragDropModule],
})
export class PrivateModule {}
