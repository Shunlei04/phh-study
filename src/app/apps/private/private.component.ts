import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
})
export class PrivateComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    // this.authService.checkUserInSever().then((u) => {
    //   if (u) {
    //     // keep
    //   } else {
    //     this.router.navigate(['signin'], { replaceUrl: true });
    //   }
    // });
  }

  movies = [
    {
      name: 'Choi Soobin',
      poster:
        'https://i.pinimg.com/736x/15/be/4b/15be4bb6a64da4e664a2eafc8a28f975.jpg',
    },
    {
      name: 'Choi Yeonjun',
      poster:
        'https://i.pinimg.com/736x/2f/8d/db/2f8ddbb0afcbe5345e7a4421eeb30c8b.jpg',
    },
    {
      name: 'Choi Beomgyu',
      poster:
        'https://i.pinimg.com/originals/ba/1f/27/ba1f2737000d5e410d4eadd6cfdbcf88.jpg',
    },
    {
      name: 'Kang Taehyun',
      poster:
        'https://i.pinimg.com/736x/27/52/42/2752423a7e2cd95ad80738dc2eeb4ece.jpg',
    },
    {
      name: 'Huening Kai',
      poster:
        'https://i.pinimg.com/originals/5a/9c/83/5a9c8388355d9e7634f340fcc8d45c65.jpg',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
