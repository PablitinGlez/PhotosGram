import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  heartOutline
} from 'ionicons/icons';
import { ItemHistoryComponent } from '../component/item-history/item-history.component';
import { ItemPublicacionComponent } from '../component/item-publicacion/item-publicacion.component';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    ExploreContainerComponent,
    ItemPublicacionComponent,
    ItemHistoryComponent
  ],
})
export class Tab1Page {
  constructor() {
    addIcons({
      'heart-outline': heartOutline,
    });
  }
}
