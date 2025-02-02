import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.component.html',
  styleUrls: ['./item-history.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class ItemHistoryComponent implements OnInit {
  stories = [
    {
      username: 'Club Capibara',
      profilePic:
        'https://th.bing.com/th/id/OIP.27V_c3lWb82hkG_jLRZQpwHaF7?rs=1&pid=ImgDetMain',
    },
    {
      username: 'Capibarismo',
      profilePic:
        'https://th.bing.com/th/id/R.10ba270340470390f8012075a6d802f9?rik=fKLpxzKfqmnRaA&pid=ImgRaw&r=0',
    },
    {
      username: 'Pablitin13',
      profilePic:
        'https://th.bing.com/th/id/OIP.XU-pHzGB5J8_ZZ40fv6F1AHaHa?rs=1&pid=ImgDetMain',
    },
    {
      username: 'Juanito',
      profilePic:
        'https://i.pinimg.com/originals/a1/f2/89/a1f2897179c068c3d45cef4797209b92.jpg',
    },
    {
      username: 'Juanito2',
      profilePic:
        'https://i.pinimg.com/originals/f3/dd/de/f3dddef211b43a66b78ba60c3be8fad6.jpg',
    },
    { username: 'twd', profilePic: 'assets/stories/max.jpg' },
    { username: 'isabella_88', profilePic: 'assets/stories/isabella.jpg' },
    { username: 'twd', profilePic: 'assets/stories/tech.jpg' },
    { username: 'lucas_fit', profilePic: 'assets/stories/lucas.jpg' },
    { username: 'gamer_king', profilePic: 'assets/stories/gamer.jpg' },
  ];

  constructor() {}

  ngOnInit() {}
}
