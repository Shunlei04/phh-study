import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { AfterViewInit, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrl: './chart-component.component.scss',
  host: {
    class: 'app-host',
  },
  standalone: true,
  imports: [
    CdkDrag,
    CdkDragPlaceholder,
    CdkDropList,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
})
export class ChartComponentComponent implements AfterViewInit {
  chipList: string[] = ['apple', 'mango', 'orange'];
  chipsGridItemList: string[] = [];

  chipOptionListFormControl = new FormControl();

  chipGridFormControl = new FormControl();

  // username form control
  loginFormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z]{4,}$/),
    ]),
    password: new FormControl('', Validators.required),
  });

  constructor() {
    this.chipOptionListFormControl.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.chipOptionListFormControl.setValue([
        this.chipList[0],
        this.chipList[1],
      ]);
    }, 3000);
  }

  removeChip(fruit: string) {
    this.chipList = this.chipList.filter((c) => c != fruit);
  }

  removeGridChip(item: string) {
    this.chipsGridItemList = this.chipsGridItemList.filter((c) => c != item);
  }

  addChipGridItem(event: MatChipInputEvent) {
    this.chipsGridItemList.push(event.value);
    event.chipInput.clear();
  }
}
