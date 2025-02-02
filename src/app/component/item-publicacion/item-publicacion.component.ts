import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

interface Media {
  type: 'image' | 'video';
  url: string;
}

interface Post {
  userProfilePic: string;
  username: string;
  verified: boolean;
  location?: string;
  music?: string;
  media: Media[];
  likes: number;
  description: string;
  comments: string[];
  date: string;
}

@Component({
  selector: 'app-item-publicacion',
  templateUrl: './item-publicacion.component.html',
  styleUrls: ['./item-publicacion.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ItemPublicacionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  posts: Post[] = [
    {
      userProfilePic:
        'https://th.bing.com/th/id/OIP.MFfkJoJjTRJ1VGCfxrEXBAAAAA?rs=1&pid=ImgDetMain',
      username: 'Midudev',
      verified: true,
      location: 'Ciudad de México',
      media: [{ type: 'image', url: 'https://midu.dev/og.jpg' }],
      likes: 120,
      description: 'Esta es una descripción del post.',
      comments: ['¡Genial!', 'Muy bonito', 'Increíble'],
      date: '2025-02-01',
    },
    {
      userProfilePic: 'assets/profile2.jpg',
      username: 'usuario2',
      verified: false,
      music: 'Canción: Despacito 🎵',
      media: [{ type: 'video', url: 'assets/post-video1.mp4' }],
      likes: 200,
      description: 'Este es un video increíble.',
      comments: ['Muy divertido', 'Me encanta', 'Sigue así'],
      date: '2025-02-01',
    },
  ];
}
