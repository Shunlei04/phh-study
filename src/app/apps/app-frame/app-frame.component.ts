import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-app-frame',
  templateUrl: './app-frame.component.html',
  styleUrl: './app-frame.component.scss',
  host: {
    class: 'app-host',
  },
})
export class AppFrameComponent {
  // @HostBinding('class.app-host') value: number = 1;
}
